"use server";

import { NextRequest, NextResponse } from "next/server";
// setup Rate Limit
const rateLimit = new Map<string, { count: number; time: number }>(); // Limit to 10 requests per minute
const LIMIT = 5;
const INTERVAL = 1000 * 60;

export async function POST(req: NextRequest) {

  // Rate Limit Checking
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const prev = rateLimit.get(ip) || { count: 0, time: now };
  if (prev && now - prev.time < INTERVAL) {
    if (prev.count >= LIMIT) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 }
      );
    }
    rateLimit.set(ip, { count: prev.count + 1, time: prev.time });
  } else {
    rateLimit.set(ip, { count: 1, time: now });
  }

  const { name, email, phone, message } = await req.json();

  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramBotToken || !chatId) {
    return NextResponse.json(
      { error: "Missing Telegram configuration" },
      { status: 500 }
    );
  }

  const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const messageText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

  try {
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return NextResponse.json({status: 200, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "Error sending message" },
      { status: 500 }
    );
  }
}

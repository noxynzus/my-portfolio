export default async function POST(request: Request) {
  const body = await request.json();

  return new Response("Hello, Next.js!", body);
}

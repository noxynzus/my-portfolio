"use client";
import RoundedLinearBtn from "@/app/components/buttons/rounded-linear-btn";
import { Field, Fieldset, Label, Legend, Textarea } from "@headlessui/react";
import React from "react";
import toast from "react-hot-toast";
import { motion, useInView } from "framer-motion";

interface ContactParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ValidationVal {
  valid: boolean;
  msg: string;
}

interface ValidationType {
  [name: string]: ValidationVal;
}

export default function ContactMe() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactTemp: ContactParams = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [contactParams, setContactParams] =
    React.useState<ContactParams>(contactTemp);

  const [validated, setValidated] = React.useState<ValidationType>({
    name: { valid: true, msg: "" },
    email: { valid: true, msg: "" },
    phone: { valid: true, msg: "" },
    message: { valid: true, msg: "" },
  });

  const [validatedState, setValidatedState] = React.useState<boolean>(false);

  const [sendState, setSendState] = React.useState<boolean>(false);

  const handlerTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactParams({ ...contactParams, [name]: value });
    const valid = validation({ name, value });
    setValidatedState(valid);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContactParams({ ...contactParams, [name]: value });

    const valid = validation({ name, value });
    setValidatedState(valid);
  };

  // Validation On Changes
  const validation = ({ name, value }: { name: string; value: string }) => {
    const validValue = { ...validated };
    let validState = true;

    if (name === "name") {
      const res = value.length > 0;
      if (!res) {
        validValue.name = { valid: res, msg: "Please enter a name." };
        validState = false;
      } else {
        validValue.name = { valid: value.length > 0, msg: "" };
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const res = emailRegex.test(value);

      if (!res) {
        validValue.email = {
          valid: res,
          msg: "Please valid email address.",
        };
        validState = false;
      } else {
        validValue.email = { valid: res, msg: "" };
      }
    }

    if (name === "phone") {
      const phoneRegex = /^\d{10}$/;
      const res = phoneRegex.test(value);

      if (!res) {
        validValue.phone = {
          valid: res,
          msg: "Phone number invalid.",
        };
        validState = res;
      } else {
        validValue.phone = { valid: res, msg: "" };
      }
    }

    if (name === "message") {
      const res = value.length > 0;
      validState = res;
      if (!res) {
        validValue.message = { valid: res, msg: "Please enter a message." };
      } else {
        validValue.message = { valid: res, msg: "" };
      }
    }

    setValidated(validValue);
    return validState;
  };

  const handleSubmitMessage = async () => {
    // e.preventDefault();

    console.log(contactParams);

    if (validatedState) {
      setSendState(true);
      const response = await fetch("/api/contact-to/telegram-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactParams),
      });

      if (response.ok) {
        setValidatedState(false);
        setContactParams(contactTemp);
        setSendState(false);
        toast.success("Message sent successfully! Thank you!", {
          duration: 2000,
        });
      } else {
        setValidatedState(false);
        setSendState(false);
        toast.error("Message failed to send. Please try again later.", {
          duration: 2000,
        });
      }
    } else {
      setValidatedState(false);
      setSendState(false);
    }
  };

  // const coming = true;
  return (
    <div className="relative isolate  flex flex-col items-center justify-center px-6 pt-14 lg:px-8">
      {/* <div
        className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#0070f3] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div> */}

      <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:justify-between p-4 lg:p-8 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full max-w-lg flex flex-col items-center justify-center space-y-4 pb-5 "
        >
          <div className="text-lg lg:text-2xl font-bold">Contact Me</div>

          <div className="text-2xl lg:text-5xl font-bold">{`Let's Talk! for`}</div>
          <div className="text-2xl lg:text-5xl font-bold ">{`Your Project!`}</div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full max-w-lg"
        >
          <Fieldset className="space-y-6 rounded-xl bg-black/50 p-6 sm:p-10 shadow-2xl shadow-blue-400">
            <Legend className="text-2xl font-semibold text-white">
              Contact Form
            </Legend>
            <div className="w-full border-t border-gray-300 opacity-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-center justify-between ">
              <Field>
                <Label className="text-sm/6 font-medium text-white">
                  Your Name
                </Label>
                <input
                  required
                  aria-label="Name"
                  id="name"
                  name="name"
                  placeholder="Ex. Jhone Doe"
                  type="text"
                  value={contactParams.name}
                  onChange={handleChange}
                  className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white"
                />
                {!validated.name.valid && (
                  <p className="text-red-500 text-sm absolute p-1">
                    {validated.name.msg}
                  </p>
                )}
              </Field>

              <Field>
                <Label className="text-sm/6 font-medium text-white">
                  Your Phone
                </Label>
                <input
                  required
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  maxLength={10}
                  type="text"
                  value={contactParams.phone}
                  onChange={handleChange}
                  className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white "
                />
                {!validated.phone.valid && (
                  <p className="text-red-500 text-sm absolute p-1">
                    {validated.phone.msg}
                  </p>
                )}
              </Field>
            </div>

            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Email Address
              </Label>
              <input
                id="email"
                name="email"
                placeholder="example@gmail.com"
                type="text"
                value={contactParams.email}
                onChange={handleChange}
                className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white"
              />
              {!validated.email.valid && (
                <p className="text-red-500 text-sm absolute p-1">
                  {validated.email.msg}
                </p>
              )}
            </Field>

            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={contactParams.message}
                onChange={(e) => handlerTextArea(e)}
                placeholder="Enter your message"
                className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white"
                rows={3}
              />
              {!validated.message.valid && (
                <p className="text-red-500 text-sm absolute p-1">
                  {validated.message.msg}
                </p>
              )}
            </Field>
            <div className="w-full border-t border-gray-300 opacity-10"></div>

            {/* Display Button When Validated */}
            <RoundedLinearBtn
              props={{ disabled: !validatedState }}
              style={`w-full ${
                !validatedState
                  ? "bg-gray-500 opacity-50 cursor-not-allowed"
                  : "opacity-100"
              }`}
              onClick={() => handleSubmitMessage()}
              text={`${sendState ? "Sending..." : "Send Message"} `}
            />
          </Fieldset>
        </motion.div>
      </div>

      {/* <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#0070f3] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div> */}
    </div>
  );
}

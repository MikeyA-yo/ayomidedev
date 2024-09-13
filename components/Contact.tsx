"use client";

import { useState } from "react";
import { clearFields } from "@/components/JS/helper";
import { MotionDiv } from "./Motion";
export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  async function sendMessage(data: {
    name: string;
    email: string;
    message: string;
  }) {
    if (
      data.name.length < 2 ||
      data.email.length < 4 ||
      data.message.length === 0
    ) {
      setError(true)
      return;
    }
    setLoad(true);
    const jsonData = JSON.stringify(data);
    const res = await fetch("/api", {
      method: "POST",
      body: jsonData,
    });
    setLoad(false);
    if (res.ok) {
      clearFields();
      setSuccess(true);
      setError(false);
      return;
    } else {
      setError(true);
    }
  }
  return (
    <>
      <div
        className="flex flex-col gap-2 items-center justify-center mt-4"
        id="contact"
      >
        <h3 className="text-2xl lg:text-3xl font-bold">Contact Me</h3>
        <div className="flex flex-col gap-4 items-center bg-[#2E073F] p-4 text-[#EBD3F8]">
          {success && (
            <Success />
          )}
          {error && <Error />}
          <div className="flex lg:flex-row md:flex-row flex-col gap-2">
            <div className="flex flex-col gap-2">
              Name:
              <input
                onChange={handleInput}
                name="name"
                id="name"
                className="p-2 text-[#AD49E1] rounded"
              />
            </div>
            <div className="flex flex-col gap-2">
              Email:
              <input
                onChange={handleInput}
                name="email"
                type="email"
                id="email"
                className="p-2 text-[#AD49E1] rounded"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            Message:
            <textarea
              onChange={handleMessage}
              name="message"
              placeholder="Type in your Message..."
              className="min-h-24 p-2 text-[#AD49E1] rounded"
              id="message"
            />
          </div>
          <div>
            <button
              disabled={load}
              onClick={() => {
                sendMessage(data);
              }}
              className="bg-[#7A1CAC] rounded p-2"
            >
              {!load && "Send Message"}
              {load && <Spinner className="size-6 animate-spin" />}
            </button>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Ayomide Oluwatola, C.H.O inc</p>
      </div>
    </>
  );
}
function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 2a2 2 0 113.999-.001A2 2 0 016 2zm4.243 1.757a2 2 0 113.999-.001 2 2 0 01-3.999.001zM13 8a1 1 0 112 0 1 1 0 01-2 0zm-1.757 4.243a1 1 0 112 0 1 1 0 01-2 0zM7 14a1 1 0 012 0 1 1 0 01-2 0zm-4.243-1.757a1 1 0 012 0 1 1 0 01-2 0zm-.5-8.486a1.5 1.5 0 013 0 1.5 1.5 0 01-3 0zM.875 8a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
      />
    </svg>
  );
}
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </>
  );
}
function Success() {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.5,translateY:"-100%" }}
      animate={{ opacity: 1, scale: 1, translateY:0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-2 bg-[#00712D] p-2 rounded">
        <p>Message Sent</p>
        <Check className="size-6 border border-[#AD49E1] rounded p-1 text-[#EBD3F8]" />
      </div>
    </MotionDiv>
  );
}
function Error(){
  return (
    <MotionDiv
    initial={{ opacity: 0, scale: 0.5,translateY:"100%" }}
    animate={{ opacity: 1, scale: 1, translateY:0 }}
    transition={{ duration: 0.6 }}
    >
      <div className="flex gap-2 bg-[#800000] p-2 rounded">
        <p> Incomplete fields or Network Error</p>
        <X className="size-6 border border-[#AD49E1] rounded p-1 text-[#EBD3F8]" />
      </div>
    </MotionDiv>
  )
}

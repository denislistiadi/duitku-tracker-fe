"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Component from "@/components";
import SendingImage from "@/assets/send-mail.svg";

export default function ForgotPassword() {
  const [sent, setSent] = useState(true);

  const onSendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {!sent ? (
        <div className="flex flex-col items-center justify-center h-full space-y-4 min-h-screen p-4">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <p className="text-gray-500">
            Don’t worry. Enter your email and we’ll send you a link to reset
            your password.
          </p>
          <form
            className="flex flex-col space-y-4 w-full"
            onSubmit={onSendEmail}
          >
            <Component.Input type="email" placeholder="Email" required />
            <Component.Button type="submit">Send Email</Component.Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full justify-center h-full space-y-4 min-h-screen p-4">
          <Image src={SendingImage} alt="Sending email" height={216} />
          <h1 className="text-2xl font-bold">Your email is on the way</h1>
          <p className="text-gray-500 text-center">
            Check your email test@test.com and follow the instructions to reset
            your password
          </p>
          <Link href="/auth/login" className="w-full mt-10">
            <Component.Button className="w-full" >Back to Login</Component.Button>
          </Link>
        </div>
      )}
    </>
  );
}

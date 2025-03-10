"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.webp";
import Component from "@/components";

export default function Login() {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 py-10 gap-8 min-h-screen`}
    >
      <h1 className={`text-xl font-bold`}>
        <Image src={Logo} width={100} height={100} alt="Logo" priority />
      </h1>
      <h2 className={`text-2xl font-bold mb-5`}>Welcome Back!</h2>

      <form className={`w-full`}>
        <div className={`flex flex-col gap-6`}>
          <Component.Input type="email" placeholder="Email Address" />
          <Component.Input type="password" placeholder="Password" />
          <Component.Button type="submit">Login</Component.Button>
          <Link
            href="/auth/forgot-password"
            className="text-center text-primary font-semibold"
          >
            Forgot Password?
          </Link>
          <p className="text-sm text-center text-secondary">
            Don’t have an account yet?{" "}
            <Link
              href="/auth/register"
              className="text-primary font-medium underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

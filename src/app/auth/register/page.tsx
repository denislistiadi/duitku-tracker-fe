import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.webp";
import Component from "@/components";

export default function Register() {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 py-10 gap-8 min-h-screen`}
    >
      <h1 className={`text-xl font-bold`}>
        <Image src={Logo} width={100} height={100} alt="Logo" />
      </h1>
      <h2 className={`text-2xl font-bold mb-5`}>Sign Up</h2>

      <form className={`w-full`}>
        <div className={`flex flex-col gap-6`}>
          <Component.Input type="text" placeholder="Full Name" />
          <Component.Input type="email" placeholder="Email Address" />
          <Component.Input type="password" placeholder="Password" />
          <Component.Input type="password" placeholder="Confirm Password" />

          <div className="flex items-center gap-2">
            <Component.Input type="checkbox" id="terms" className="h-6 w-6" />
            <label htmlFor="terms" className="text-sm">
              By signing up, you agree to the Terms of Service and Privacy
              Policy
            </label>
          </div>
          <Component.Button type="submit">Sign Up</Component.Button>
          <p className="text-sm text-center text-secondary">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary font-medium underline"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

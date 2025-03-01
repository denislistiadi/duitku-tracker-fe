"use client";

import Component from "@/components";

export default function ResetPasswordPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Implement your reset password logic here
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData.entries()) {
      console.info(key, value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 min-h-screen p-4">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <form className="flex flex-col space-y-4 w-full" onSubmit={onSubmit}>
        <Component.Input
          type="password"
          name="password"
          placeholder="New Password"
          required
        />
        <Component.Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <Component.Button type="submit">Continue</Component.Button>
      </form>
    </div>
  );
}

"use client";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signIn("okta", { callbackUrl: "/" });
    } catch {
      setLoading(false); // fallback in case there's an error
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="px-5 py-2 bg-brand-gray-dark text-brand-beige font-medium rounded-lg uppercase"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin text-brand-beige" /> : "Log in"}
    </button>
  );
};

export default LoginButton;

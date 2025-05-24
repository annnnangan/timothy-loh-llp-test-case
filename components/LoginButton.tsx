"use client";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signIn("okta", { callbackUrl: "/" });
    } catch {
      toast("Fail to Login.", {
        position: "top-right",
        type: "success",
        autoClose: 1000,
      });
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleLogin}
      className="px-5 py-2 bg-brand-gray-dark hover:bg-gray-600 text-brand-beige font-medium rounded-lg uppercase"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin text-brand-beige" /> : "Log in"}
    </Button>
  );
};

export default LoginButton;

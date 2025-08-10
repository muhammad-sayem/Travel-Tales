"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {
  const router = useRouter();
  const { status } = useSession(); 
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    signIn("google", { callbackUrl: "/" }); 
  };

  useEffect(() => {
    if (status === "authenticated") {
      toast.success("Successfully Logged in");
    }
  }, [status]);

  if (loading || status === "loading") {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
      >
        <FcGoogle size={25} />
        <p className="font-bold"> Sign in with Google </p>
      </button>
    </div>
  );
};

export default GoogleSignIn;

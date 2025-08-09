import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#59815B] text-center">Login to Your Account</h2>

        <LoginForm />

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">Or sign in with</p>
          <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <FcGoogle size={25} />
            <p className="font-bold"> Sign in with Google </p>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          New to the site?{" "}
          <Link href="/register" className="text-[#59815B] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
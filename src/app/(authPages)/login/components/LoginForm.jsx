"use client";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const userData = { email, password }

    try {
      const response = await signIn('credentials', { email, password, callbackUrl: '/', redirect: false });

      if (response.ok) {
        Swal.fire({
          title: "New User Added Successfully!!",
          icon: "success",
          draggable: true
        });
        router.push('/');
        form.reset();
      }

      else {
        Swal.fire({
          title: "Login Failed! Try Again",
          icon: "error",
          draggable: true
        });
      }
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#59815B]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#59815B]"
          />
        </div>

        <button
          type="submit"
          className="btn w-full bg-[#59815B] text-white py-2 rounded-md hover:bg-[#4a6c4c] transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
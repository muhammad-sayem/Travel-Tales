"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const image =  form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    const userData = {name, image, email, password};
    try{
      await registerUser(userData);
      toast.success("New user added successfully!!")
      router.push('/');
    }
    catch(error){
      console.log(error);
    }

  }

  return (
    <div>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#59815B]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            name="image"
            type="text"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#59815B]"
          />
        </div>

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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
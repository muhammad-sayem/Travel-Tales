"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddBlogForm = () => {
  const session = useSession();
  const { data: sessionData } = session;
  console.log(sessionData);
  const bloggerEmail = sessionData?.user?.email;
  const router = useRouter();

  const handleAddBlog = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const location = form.location.value;
    const travelImage = form.image.value;
    const travelDate = form.date.value;
    const description = form.description.value;
    const cost = form.cost.value;

    const blogData = {
      title,
      location,
      travelImage,
      travelDate,
      description,
      cost,
      bloggerEmail,
      status: "Pending",
      likes: 0
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });
      const data = await res.json();
      Swal.fire({
        title: "New Blog Added Successfully!!",
        icon: "success",
        draggable: true
      });
      router.push('/user-dashboard/my-posts');
      console.log(data);
    }
    catch (error) {
      console.log(error);
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
        draggable: true
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleAddBlog}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-4"
      >
        <h2 className="text-3xl font-bold text-[#59815B] mb-4 text-center">
          Add Travel Blog
        </h2>

        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold text-[#59815B]">
            Blog Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter Blog Title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-semibold text-[#59815B]">
            Location
          </label>
          <input
            name="location"
            type="text"
            placeholder="Enter Location"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-semibold text-[#59815B]">
            Image Link
          </label>
          <input
            name="image"
            type="text"
            placeholder="Enter Image URL"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-semibold text-[#59815B]">
            Travel Date
          </label>
          <input
            name="date"
            type="date"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold text-[#59815B]">
            Experience Description
          </label>
          <textarea
            name="description"
            placeholder="Write your travel experience..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
            required
          ></textarea>
        </div>

        {/* Cost */}
        <div>
          <label className="block mb-1 font-semibold text-[#59815B]">
            Travel Cost
          </label>
          <input
            name="cost"
            type="number"
            placeholder="Enter Travel Cost"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#59815B] hover:bg-[#3a573b] text-white font-semibold py-3 rounded-lg transition duration-200 hover:cursor-pointer"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogForm;

"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const EditBlogForm = ({ singleBlogData }) => {
  const router = useRouter();

  const handleEditBlog = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const location = form.location.value;
    const travelImage = form.image.value;
    const travelDate = form.date.value;
    const description = form.description.value;
    const cost = form.cost.value;

    const blogData = { title, location, travelImage, travelDate, description, cost };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/my-posts/${singleBlogData._id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(blogData),
        }
      );
      const data = await res.json();
      Swal.fire({
        title: "Edited Successfully!!",
        icon: "success",
        draggable: true,
      });
      router.push("/user-dashboard/my-posts");
      console.log(data);
    } catch (error) {
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
        draggable: true,
      });
      console.log("Editing Error", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8">
      <form
        onSubmit={handleEditBlog}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-3xl space-y-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#59815B] mb-4 text-center">
          Edit Blog
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-[#59815B]">Blog Title</label>
            <input
              name="title"
              type="text"
              placeholder="Enter Blog Title"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
              required
              defaultValue={singleBlogData?.title}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#59815B]">Location</label>
            <input
              name="location"
              type="text"
              placeholder="Enter Location"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
              required
              defaultValue={singleBlogData?.location}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#59815B]">Image Link</label>
            <input
              name="image"
              type="text"
              placeholder="Enter Image URL"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
              required
              defaultValue={singleBlogData?.travelImage}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#59815B]">Travel Date</label>
            <input
              name="date"
              type="date"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
              required
              defaultValue={singleBlogData?.travelDate}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#59815B]">Experience Description</label>
            <textarea
              name="description"
              placeholder="Write your travel experience..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
              required
              defaultValue={singleBlogData?.description}
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#59815B]">Travel Cost</label>
            <input
              name="cost"
              type="number"
              placeholder="Enter Travel Cost"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#59815B]"
              required
              defaultValue={singleBlogData?.cost}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#59815B] hover:bg-[#3a573b] text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default EditBlogForm;

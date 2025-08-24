export const dynamic = "force-dynamic";

import DeleteButton from "@/components/buttons/DeleteButton";
import EditButton from "@/components/buttons/EditButton";
import { headers } from "next/headers";

export const metadata = {
  title: "User Dashboard",
  description: "User Dashboard",
};

const getMyPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/my-posts`, {
    cache: "no-store",
    headers: {
      Cookie: headers().get("cookie") || "",
    },
  });
  const data = await res.json();
  return data;
};

const MyPosts = async () => {
  const myPosts = await getMyPosts();
  console.log("My Posts", myPosts);

  return (
    <div className="w-11/12 mx-auto py-8">
      <h3 className="text-3xl sm:text-4xl text-center text-[#59815B] font-black my-8">
        My Posts
      </h3>

      {myPosts.length > 0 ? (
        <div className="overflow-x-auto" data-aos="zoom-in"
          data-aos-duration="1500">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-[#59815B] text-white">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Travel Date</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {myPosts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-100">
                  <td className="px-2 py-2">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={post.travelImage} alt="Post Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2">{post.title}</td>
                  <td className="px-2 py-2">{post.location}</td>
                  <td className="px-2 py-2">{post.travelDate}</td>
                  <td className="px-2 py-2 flex gap-2 flex-wrap">
                    <EditButton postId={post._id} />
                    <DeleteButton postId={post._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="flex items-center justify-center min-h-[50vh] text-xl sm:text-2xl font-semibold text-[#59815B]">
          No posts found
        </p>
      )}
    </div>
  );
};

export default MyPosts;

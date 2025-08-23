export const dynamic = "force-dynamic";

import EditBlogForm from "@/app/(dashboards)/user-dashboard/edit-my-post/components/EditBlogForm";
import { headers } from "next/headers";

export const metadata = {
  title: "User Dashboard",
  description: "Edit My Post",
};

const EditMyPost = async ({ params }) => {
  const p = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/my-posts/${p.id}`, {
    cache: "no-store",
    headers: {
      Cookie: headers().get("cookie") || "",
    },
  });
  const singleBlogData = await res.json();
  console.log("Single Blog", singleBlogData);

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-3xl">
        <EditBlogForm singleBlogData={singleBlogData} />
      </div>
    </div>
  );
};

export default EditMyPost;

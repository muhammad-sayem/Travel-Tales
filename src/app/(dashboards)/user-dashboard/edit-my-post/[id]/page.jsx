import EditBlogForm from "@/app/(dashboards)/user-dashboard/edit-my-post/components/EditBlogForm";
import { headers } from "next/headers";

const EditMyPost = async ({ params }) => {
  const p = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/my-posts/${p.id}`, {
    cache: 'no-store',
    headers: {
      Cookie: headers().get("cookie") || "",
    },
  });
  const singleBlogData = await res.json();
  console.log("Single Blog", singleBlogData);

  return (
    <div className="flex justify-center my-12">

      <EditBlogForm singleBlogData={singleBlogData}/>
    </div>
  );
};

export default EditMyPost;
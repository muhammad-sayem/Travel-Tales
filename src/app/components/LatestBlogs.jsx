export const dynamic = "force-dynamic";

import Link from "next/link";
import BlogCard from "../blogs/components/BlogCard";
import { headers } from "next/headers";

const getlatestBlogs = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs/latest`, {
    cache: "no-store",
    
  });
  const data = await res.json();
  return data;
}

const LatestBlogs = async () => {
  const latestBlogs = await getlatestBlogs();
  console.log("All Blogs", latestBlogs);

  return (
    <div className="w-11/12 max-w-[1280px] mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12 gap-4">
        <div></div>
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl md:text-4xl text-[#59815B] font-black mb-4 md:mb-0">
            Latest Blogs
          </h3>
        </div>
        <div className="flex justify-center md:justify-end">
          <Link
            href='/blogs'
            className="btn text-white text-base sm:text-lg font-normal bg-[#59815B] px-6 py-3 sm:px-8 sm:py-4 transition-transform duration-500 hover:scale-105"
          >
            View All Blogs
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {
          latestBlogs.map(blog =>
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          )
        }
      </div>
    </div>
  );
};

export default LatestBlogs;

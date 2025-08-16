import Link from "next/link";
import BlogCard from "../blogs/components/BlogCard";

const getlatestBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs/latest`);
  const data = await res.json();
  return data;
}
const LatestBlogs = async () => {
  const latestBlogs = await getlatestBlogs();
  console.log("All Blogs", latestBlogs);

  return (
    <div className="w-10/12 mx-auto py-16">
      <div className="grid grid-cols-3">
        <div>

        </div>
        <div>
          <h3 className="text-4xl text-center text-[#59815B] font-black mb-8"> Latest Blogs </h3>
        </div>
        <div className="flex justify-end">
          <Link className="btn text-white text-lg font-normal bg-[#59815B] px-8 py-4 transition-transform duration-500 hover:scale-105" href='/blogs'> View All Blogs </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
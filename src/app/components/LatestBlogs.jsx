import BlogCard from "../blogs/components/BlogCard";

const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs`);
  const data = await res.json();
  return data;
}
const LatestBlogs = async () => {
  const allBlogs = await getAllBlogs();
  console.log("All Blogs", allBlogs);

  const latestBlogs = allBlogs.slice(0, 3);

  return (
    <div className="w-10/12 mx-auto py-16">
      <h3 className="text-4xl text-center text-[#59815B] font-black mb-8"> Latest Blogs </h3>

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
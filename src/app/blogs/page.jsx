import BlogCard from "./components/BlogCard";

const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs`);
  const data = await res.json();
  return data;
}

export const metadata = {
  title: "Blogs",
  description: "Showing all approved blogs",
};

const Blogs = async () => {
  const allBlogs = await getAllBlogs();
  // console.log("All Blogs", allBlogs);

  return (
    <div className="w-10/12 mx-auto py-32">
      {
        allBlogs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {allBlogs.map(blog => (
              <BlogCard
                key={blog._id}
                blog={blog}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-2xl md:text-3xl font-semibold text-[#59815B] text-center">
              No Blogs Found
            </p>
          </div>
        )
      }
    </div>
  );
};

export default Blogs;

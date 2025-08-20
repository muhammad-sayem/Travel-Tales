import BlogCard from "./components/BlogCard";

const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs`);
    const data = await res.json();
    return data;
  } 
  catch (error) {
    console.log(error);
    throw new Error("")
  }
}

export const metadata = {
  title: "Blogs",
  description: "Showing all approved blogs",
};

const Blogs = async () => {
  const allBlogs = await getAllBlogs();
  // console.log("All Blogs", allBlogs);

  // const allBlogs = [];

  return (

    <div className="w-10/12 mx-auto py-24">
      <h3 className="text-3xl sm:text-4xl md:text-4xl text-center text-[#59815B] font-black mb-8 pt-8">
        All Blogs
      </h3>
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

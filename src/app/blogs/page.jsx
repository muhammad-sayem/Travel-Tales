import BlogCard from "./components/BlogCard";

const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs`);
  const data = await res.json();
  return data;
}

const Blogs = async () => {
  const allBlogs = await getAllBlogs();
  // console.log("All Blogs", allBlogs);

  return (
    <div className="w-10/12 mx-auto my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          allBlogs?.map(blog =>
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

export default Blogs;
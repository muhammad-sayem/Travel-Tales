export const dynamic = 'force-dynamic';

import BlogCard from "./components/BlogCard";
import SearchBlog from "./components/SearchAndShowBlog";
import SortBlogs from "./components/SortBlogs";

const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs`, {
      cache: "no-store",

    });
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

  return (

    <div className="w-10/12 mx-auto py-24">
      <div className="pb-8">
        <SearchBlog allBlogs={allBlogs} />
      </div>

    </div>
  );
};

export default Blogs;

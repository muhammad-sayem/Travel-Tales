"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import BlogCard from "./BlogCard";
import SortBlogs from "./SortBlogs";

const SearchAndShowBlog = ({ allBlogs }) => {
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const [isAsc, setIsAsc] = useState(true);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value) {
      setFilteredBlogs(allBlogs);
    } else {
      const filtered = allBlogs.filter((blog) =>
        blog?.location?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  const handleSort = () => {
    const sorted = [...filteredBlogs].sort((a, b) =>
      isAsc
        ? new Date(a.travelDate) - new Date(b.travelDate)
        : new Date(b.travelDate) - new Date(a.travelDate)
    );

    setFilteredBlogs(sorted);
    setIsAsc(!isAsc);
  };

  return (
    <div className="w-full mx-auto my-6">

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">

        {/* Search Box */}
        <div className="relative w-full sm:w-1/2">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search blogs by country..."
            value={search}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#59815B] focus:border-transparent shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Sort Button */}
        <SortBlogs handleSort={handleSort} isAsc={isAsc} />
      </div>

      <h3 className="text-3xl sm:text-4xl md:text-4xl text-center text-[#59815B] font-black mb-8 pt-2">
        All Blogs
      </h3>

      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {
            filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          }
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[200px]">
          <p className="text-2xl md:text-3xl font-semibold text-[#59815B] text-center">
            No Blogs Found with: {search}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchAndShowBlog;

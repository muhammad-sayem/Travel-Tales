"use client";

const SortBlogs = ({ handleSort, isAsc }) => {
  return (
    <button
      onClick={handleSort}
      className="btn bg-[#59815B] text-white text-lg p-6 rounded-lg my-4"
    >
      Sort by Date {isAsc ? "↑" : "↓"}
    </button>
  );
};

export default SortBlogs;
const SingleBlogPage = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs/${id}`);
  const singleBlog = await res.json();

  const { title, travelImage, location, travelDate, description, cost } = singleBlog;

  return (
    <div className="w-2/3 mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-4xl font-bold text-[#59815B] mb-6">{title}</h1>

      <img
        src={travelImage}
        alt={title}
        className="w-full h-96 object-cover rounded-md mb-6"
      />

      <div className="flex justify-between mb-4 text-[#59815B] text-xl font-semibold">
        <p><span className="font-bold">Cost:</span> ${cost}</p>
        <p><span className="font-bold">Location:</span> {location}</p>
        <p><span className="font-bold">Date:</span> {new Date(travelDate).toLocaleDateString()}</p>
      </div>

      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {description}
      </div>
    </div>
  );
};

export default SingleBlogPage;


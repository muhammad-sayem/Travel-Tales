import Image from "next/image";
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ blog }) => {
  const { title, location, travelImage, travelDate } = blog;

  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className="shadow-lg p-4 bg-[#EDEAE1] h-[470px] transition-transform duration-300 hover:scale-105" data-aos="zoom-in"
        data-aos-duration="1500">
        <Image
          src={travelImage}
          width={300}
          height={300}
          alt="Blog Image"
          className="w-full h-72 mb-3 object-cover"
        />
        <div className="flex justify-between">
          <div className="flex items-center">
            <IoLocation size={20} color="#59815B" />
            <p className="font-bold text-lg text-[#59815B]"> {location} </p>
          </div>

          <div className="flex items-center gap-x-1">
            <MdDateRange size={20} color="#59815B" />
            <p className="font-bold text-lg text-[#59815B]"> {travelDate} </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold my-2"> {title} </h2>
      </div>
    </Link>
  );
};

export default BlogCard;
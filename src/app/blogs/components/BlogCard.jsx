import Image from "next/image";
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ blog }) => {
  const { title, location, travelImage, travelDate } = blog;

  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className="shadow-lg p-4 bg-[#EDEAE1] h-[395px] transition-transform duration-400 hover:scale-105">
        <div data-aos="zoom-in"
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
              <p className="font-bold text-md text-[#59815B]"> {location} </p>
            </div>

            <div className="flex items-center gap-x-1">
              <MdDateRange size={20} color="#59815B" />
              <p className="font-bold text-md text-[#59815B]"> {travelDate} </p>
            </div>
          </div>
          <h2 className="text-lg font-bold my-2 pl-1"> {title} </h2>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
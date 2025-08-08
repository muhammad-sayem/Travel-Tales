'use client';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/banner image.webp"
        alt="Banner Image"
        fill
        className="object-cover"  
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute flex flex-col justify-center items-center text-2xl w-full h-full">
        <h2 className="w-2/3 text-[#ECEBE1] text-center text-6xl font-bold mb-6"> Share Your Journey with the World </h2>
  
        <p className="w-1/2 text-[#ECEBE1] text-center text-md"> Every destination has a story worth telling. Share your travel experiences, inspire others, and let your memories live forever. </p>

        <button className="btn mt-6 text-[#59815B] bg-[#ECEBE1] text-lg font-bold p-6 hover:bg-[#59815B] hover:text-[#ECEBE1]"> Explore All Experiences </button>
      </div>
    </div>
  );
};

export default Banner;

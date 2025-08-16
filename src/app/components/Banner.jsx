'use client';
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <Image
        src="/banner image.webp"
        alt="Banner Image"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute flex flex-col justify-center items-center w-full h-full px-4 text-center overflow-hidden">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ECEBE1] mb-4 sm:mb-6 leading-tight max-w-[95%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%]">
          Share Your Journey with the World
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#ECEBE1] max-w-[95%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[50%] mx-auto">
          Every destination has a story worth telling. Share your travel experiences, inspire others, and let your memories live forever.
        </p>

        <Link
          href="/blogs"
          className="btn mt-6 px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold bg-[#ECEBE1] text-[#59815B] hover:bg-[#59815B] hover:text-[#ECEBE1]"
        >
          Explore All Experiences
        </Link>
      </div>
    </div>
  );
};

export default Banner;

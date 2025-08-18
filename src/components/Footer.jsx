import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#242625]">
      <div className="w-11/12 mx-auto text-white flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-8 py-12 md:py-16">
        
        <div className="md:w-3/5">
          <div className="flex items-center mb-4">
            <Image src='/assets/logo white.png' width={60} height={60} alt="logo" />
            <h3 className="text-3xl font-bold ml-2">TravelTales</h3>
          </div>
          <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
            TravelTales is more than just a travel blog platform — it’s a community for explorers, storytellers, and dreamers. Whether you’re venturing into the wild, strolling through vibrant cities, or relaxing on a quiet beach, your stories deserve to be heard. Here, you can share your travel experiences, breathtaking photographs, and valuable tips with a global audience. Discover hidden gems, learn from fellow travelers, and inspire others to embark on their own adventures. At TravelTales, every journey has a story — and every story has the power to take someone somewhere new.
          </p>
        </div>

        <div className="md:w-2/5 flex flex-col items-center md:items-end">
          <h3 className="text-3xl font-bold mb-4 text-center md:text-right">Stay Connected</h3>
          <div className="w-[230px] border-t-2 border-white mb-4"></div>
          <div className="flex gap-4 justify-center md:justify-end flex-wrap">

            <Link href='https://www.facebook.com/shahrulislam.sayem/' target="_blank"> <FaFacebookSquare size={40} /> </Link>

            <Link href="https://github.com/muhammad-sayem/" target="_blank"> <FaLinkedin size={40}/> </Link>

            <Link href="https://www.linkedin.com/in/md-shahrul-islam-sayem/" target="_blank"> <FaGithubSquare size={40} /> </Link>

            <Link href="https://www.instagram.com/_muhammad_sayem/" target="_blank"> <FaSquareInstagram size={40} /> </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare,  } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#242625]">
      <div className="w-10/12 mx-auto text-white flex gap-x-8 py-16">
        <div className="w-3/5">
          <div className="flex items-center mb-4">
            <Image src='/assets/logo white.png' width={60} height={60} alt="logo" />
            <h3 className="text-3xl font-bold"> TravelTales </h3>
          </div>
          <p>TravelTales is more than just a travel blog platform — it’s a community for explorers, storytellers, and dreamers. Whether you’re venturing into the wild, strolling through vibrant cities, or relaxing on a quiet beach, your stories deserve to be heard. Here, you can share your travel experiences, breathtaking photographs, and valuable tips with a global audience. Discover hidden gems, learn from fellow travelers, and inspire others to embark on their own adventures. At TravelTales, every journey has a story — and every story has the power to take someone somewhere new.</p>

        </div>


        <div className="w-2/5">
          <h3 className="text-3xl font-bold text-right mb-4"> Stay Connected </h3>
          <div className="w-[230px] border border-t-2 border-white mb-4 ml-auto">  </div>

          <div className="flex gap-x-4 justify-end">
            <FaFacebookSquare size={50} />
            <FaLinkedin size={50} />
            <FaGithubSquare size={50} />
            <FaSquareInstagram size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import { GiForest } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";     // Adventure
import { GiCampingTent } from "react-icons/gi";   // Campling
import { GiBirchTrees } from "react-icons/gi";    // Wildlife
import { FaRoad } from "react-icons/fa";  // road
import { IoCameraSharp } from "react-icons/io5";  // photography
import { IoBookOutline } from "react-icons/io5"; // educational

const TravelTypes = () => {
  return (
    <div className="bg-[#F0F0E6] mb-16">
      <div className="w-10/12 mx-auto py-8">
        <h3 className="text-4xl text-center text-[#59815B] font-black mb-8"> Find Your Trip Type </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-center">
            <GiForest size={100} className="text-[#bebdae] hover:text-[#59815B] transition-all duration-500 hover:scale-105 transform" />
            <p className="my-2 text-xl font-black uppercase"> Adventure </p>
          </div>

          <div className="flex flex-col items-center">
            <GiCampingTent size={100} className="text-[#bebdae] hover:text-[#59815B] transition-all duration-500 hover:scale-105 transform" />
            <p className="my-2 text-xl font-black uppercase"> Camping </p>
          </div>

          <div className="flex flex-col items-center">
            <GiBirchTrees size={100} className="text-[#bebdae] hover:text-[#59815B] transition-all duration-500 hover:scale-105 transform" />
            <p className="my-2 text-xl font-black uppercase"> Wildlife </p>
          </div>

          <div className="flex flex-col items-center">
            <FaRoad size={100} className="text-[#bebdae] hover:text-[#59815B] transition-all duration-500 hover:scale-105 transform" />
            <p className="my-2 text-xl font-black uppercase"> Road Trip </p>
          </div>

          <div className="flex flex-col items-center">
            <IoCameraSharp size={100} className="text-[#bebdae] hover:text-[#59815B] transition-all duration-500 hover:scale-105 transform" />
            <p className="my-2 text-xl font-black uppercase"> Photography </p>
          </div>

          <div className="flex flex-col items-center">
            <IoBookOutline size={100} className="text-[#bebdae] hover:text-[#59815B] transition-all duration-1000 hover:scale-105 transform" />
            <p className="my-2 text-xl font-black uppercase"> Educational </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTypes;
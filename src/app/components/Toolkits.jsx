import Image from "next/image";

const Toolkits = () => {
  return (
    // #eaeade
    <div className="bg-[#F0F0E6] pt-8 pb-16">
      <div className="w-10/12 mx-auto">
        <h3 className="text-4xl text-center text-[#59815B] font-black mb-8"> Traveler's Toolkit </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">

          <div>
            <Image src='/assets/kit 1.png' width={180} height={180} alt="Kit Image" className="w-full h-48 duration-500 hover:scale-105" />
            <p className="text-2xl font-bold text-center"> Shoes </p>
          </div>

          <div>
            <Image src='/assets/kit 2.png' width={180} height={180} alt="Kit Image" className="w-full h-48 duration-500 hover:scale-105" />
            <p className="text-2xl font-bold text-center"> Rain Coat </p>
          </div>

          <div>
            <Image src='/assets/kit 4.png' width={180} height={180} alt="Kit Image" className="w-full h-48 duration-500 hover:scale-105" />
            <p className="text-2xl font-bold text-center"> Camera </p>
          </div>

          <div>
            <Image src='/assets/kit 5.png' width={180} height={180} alt="Kit Image" className="w-full h-48 duration-500 hover:scale-105" />
            <p className="text-2xl font-bold text-center"> Power Bank </p>
          </div>

          <div>
            <Image src='/assets/kit 3.png' width={180} height={180} alt="Kit Image" className="w-full h-48 duration-500 hover:scale-105" />
            <p className="text-2xl font-bold text-center"> First Aid Box </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkits;
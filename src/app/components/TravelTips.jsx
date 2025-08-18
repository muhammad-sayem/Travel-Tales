import Image from "next/image";

const TravelTips = () => {
  return (
    <div className="w-11/12 max-w-[1280px] mx-auto py-16">
      <h3 className="text-3xl sm:text-4xl md:text-4xl text-center text-[#59815B] font-black mb-12">
        Essential Tips for Travelers
      </h3>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 mb-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
            Versatile Gear for Every Journey
          </h2>
          <p className="text-base sm:text-lg text-[#878793] leading-relaxed">
            Carry clothes that can work for multiple situations — for example, a lightweight jacket that’s also rainproof, and shoes comfortable enough for long walks yet stylish enough for a casual dinner. Choose neutral colors that can be easily mixed and matched, and fabrics that dry quickly so you can wash and reuse them during the trip. This not only saves space in your luggage but also reduces the stress of deciding what to wear each day, keeping you ready for any change in plans or weather conditions.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image 
            src='/assets/tips image 1.webp' 
            width={500} 
            height={400} 
            alt="Tips image 1" 
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image 
            src='/assets/tips image 2.webp' 
            width={500} 
            height={400} 
            alt="Tips image 2" 
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
            Health & Safety First Kit
          </h2>
          <p className="text-base sm:text-lg text-[#878793] leading-relaxed">
            When traveling, your health and safety should always be a top priority. Carry a well-stocked first aid kit that includes basics like bandages, antiseptic wipes, pain relievers, and any personal medications you might need. Don’t forget essentials such as insect repellent to protect against bites, sunscreen to guard against harmful UV rays, and a reusable water bottle with a built-in filter to ensure access to clean drinking water wherever you go. Being prepared for minor injuries or illnesses can save you from unnecessary discomfort and interruptions on your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;

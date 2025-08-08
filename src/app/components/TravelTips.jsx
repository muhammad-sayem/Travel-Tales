import Image from "next/image";

const TravelTips = () => {
  return (
    <div className="w-10/12 mx-auto pb-16">
      <h3 className="text-4xl text-center text-[#59815B] font-black mb-8"> Essential Tips for Travelers </h3>

      <div className="flex gap-x-16 items-center mb-16">
        <div className="w-1/2">
          <h2 className="text-4xl font-black uppercase mb-4"> Versatile Gear for Every Journey </h2>
          <p className="text-lg text-[#878793]"> Carry clothes that can work for multiple situations — for example, a lightweight jacket that’s also rainproof, and shoes comfortable enough for long walks yet stylish enough for a casual dinner. Choose neutral colors that can be easily mixed and matched, and fabrics that dry quickly so you can wash and reuse them during the trip. This not only saves space in your luggage but also reduces the stress of deciding what to wear each day, keeping you ready for any change in plans or weather conditions.
          </p>
        </div>

        <div className="w-1/2">
          <Image src='/assets/tips image 1.webp' width={400} height={400} alt="Tips image 1" className="w-full" />
        </div>
      </div>

      {/* -------------------------------- */}

      <div className="flex gap-x-16 items-center">

        <div className="w-1/2">
          <Image src='/assets/tips image 2.webp' width={400} height={400} alt="Tips image 1" className="w-full" />
        </div>

        <div className="w-1/2">
          <h2 className="text-4xl font-black uppercase mb-4"> Health & Safety First Kit </h2>
          <p className="text-lg text-[#878793]"> When traveling, your health and safety should always be a top priority. Carry a well-stocked first aid kit that includes basics like bandages, antiseptic wipes, pain relievers, and any personal medications you might need. Don’t forget essentials such as insect repellent to protect against bites, sunscreen to guard against harmful UV rays, and a reusable water bottle with a built-in filter to ensure access to clean drinking water wherever you go. Being prepared for minor injuries or illnesses can save you from unnecessary discomfort and interruptions on your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
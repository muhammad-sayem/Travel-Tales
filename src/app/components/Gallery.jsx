import Image from "next/image";

const Gallery = () => {
  return (
    <div className="mt-8">
      <div className="w-10/12 mx-auto pb-16">
        <h3 className="text-4xl text-center text-[#59815B] font-black mb-8 pt-8"> Gallery </h3>

        <div className="grid grid-cols-12 gap-2 mb-2">
          <div className="shadow-xl col-span-3">
            <Image src='/assets/gallery 1.webp' width={400} height={400} alt="Gallery Image" className="w-full h-[300px] object-cover" />
          </div>
          <div className="shadow-xl col-span-3">
            <Image src='/assets/gallery 2.webp' width={400} height={400} alt="Gallery Image" className="w-full h-[300px] object-cover" />
          </div>
          <div className="shadow-xl col-span-6">
            <Image src='/assets/gallery 3.webp' width={400} height={400} alt="Gallery Image" className="w-full h-[300px] object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="shadow-xl col-span-6">
            <Image src='/assets/gallery 4.webp' width={400} height={400} alt="Gallery Image" className="w-full h-[300px] object-cover" />
          </div>
          <div className="shadow-xl col-span-3">
            <Image src='/assets/gallery 5.webp' width={400} height={400} alt="Gallery Image" className="w-full h-[300px] object-cover" />
          </div>
          <div className="shadow-xl col-span-3">
            <Image src='/assets/gallery 6.webp' width={400} height={400} alt="Gallery Image" className="w-full h-[300px] object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
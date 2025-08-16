import Image from "next/image";

const Gallery = () => {
  return (
    <div className="mt-8">
      <div className="w-11/12 max-w-[1280px] mx-auto pb-16">
        <h3 className="text-3xl sm:text-4xl md:text-4xl text-center text-[#59815B] font-black mb-8 pt-8">
          Gallery
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mb-4">
          <div className="shadow-xl lg:col-span-3">
            <Image 
              src='/assets/gallery 1.webp' 
              width={400} 
              height={400} 
              alt="Gallery Image" 
              className="w-full h-60 sm:h-72 lg:h-72 object-cover transition-transform duration-500 hover:scale-95 rounded-md"
            />
          </div>
          <div className="shadow-xl lg:col-span-3">
            <Image 
              src='/assets/gallery 2.webp' 
              width={400} 
              height={400} 
              alt="Gallery Image" 
              className="w-full h-60 sm:h-72 lg:h-72 object-cover transition-transform duration-500 hover:scale-95 rounded-md"
            />
          </div>
          <div className="shadow-xl lg:col-span-6">
            <Image 
              src='/assets/gallery 3.webp' 
              width={400} 
              height={400} 
              alt="Gallery Image" 
              className="w-full h-60 sm:h-72 lg:h-72 object-cover transition-transform duration-500 hover:scale-95 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="shadow-xl lg:col-span-6">
            <Image 
              src='/assets/gallery 4.webp' 
              width={400} 
              height={400} 
              alt="Gallery Image" 
              className="w-full h-60 sm:h-72 lg:h-72 object-cover transition-transform duration-500 hover:scale-95 rounded-md"
            />
          </div>
          <div className="shadow-xl lg:col-span-3">
            <Image 
              src='/assets/gallery 5.webp' 
              width={400} 
              height={400} 
              alt="Gallery Image" 
              className="w-full h-60 sm:h-72 lg:h-72 object-cover transition-transform duration-500 hover:scale-95 rounded-md"
            />
          </div>
          <div className="shadow-xl lg:col-span-3">
            <Image 
              src='/assets/gallery 6.webp' 
              width={400} 
              height={400} 
              alt="Gallery Image" 
              className="w-full h-60 sm:h-72 lg:h-72 object-cover transition-transform duration-500 hover:scale-95 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

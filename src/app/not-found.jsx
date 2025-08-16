import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <Image
          src='/assets/not found page.jpg'
          width={700}
          height={700}
          alt="Not Found Page"
        />
        <div className="flex justify-center">
          <Link className="btn text-lg text-white bg-[#59815B] my-4 px-12 py-6" href='/'> Go Back Home </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
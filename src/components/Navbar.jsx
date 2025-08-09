import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navMenuLinks = <>
    <li className=""><Link href='/'> Home </Link></li>
    <li className=""><Link href='/blogs'> All Blogs </Link></li>
    <li className=""><Link href='/add-blog'> Add Blog </Link></li>
    <li className=""><a> About Us </a></li>
  </>

  return (
    <div className="">
      <div className="navbar bg-transparent w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              {navMenuLinks}
            </ul>
          </div>
          <Link href='/'>
            <div className="flex items-center">
              <Image src='/assets/logo.png' width={35} height={35} alt="Logo" className="" />
              <p className=" text-xl font-bold text-left -500"> TravelTales </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenuLinks}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="space-x-2">
            <Link
              href="/login"
              className="btn bg-[#59815B] text-[#ECEBE1] hover:text-[#59815B] hover:bg-[#ECEBE1] hover:border-2 border-[#59815B]">
              Login
            </Link>

            <Link
              href="/register"
              className="btn bg-[#59815B] text-[#ECEBE1] hover:text-[#59815B] hover:bg-[#ECEBE1] hover:border-2 border-[#59815B]">
              Register
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
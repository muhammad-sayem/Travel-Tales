"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { data: sessionData, status } = useSession();
  const role = sessionData?.user?.role;
  const pathName = usePathname();
  const router = useRouter();

  const handleAddBlogClick = () => {
    if (status === "authenticated") router.push("/add-blog");
    else if (status === "loading") return;
    else router.push("/login");
  };

  const navMenuLinks = (
    <>
      <li>
        <Link
          href="/"
          className="text-[#ECEBE1] hover:text-[#59815B]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/blogs"
          className="text-[#ECEBE1] hover:text-[#59815B]"
        >
          All Blogs
        </Link>
      </li>
      <li>
        <button
          onClick={handleAddBlogClick}
          className={`${
            status === "loading"
              ? "text-gray-400 cursor-not-allowed"
              : "text-[#ECEBE1] hover:text-[#59815B]"
          }`}
        >
          Add Blog
        </button>
      </li>
      <li>
        <Link
          href={
            role === "User"
              ? "/user-dashboard/my-profile"
              : "/admin-dashboard/my-profile"
          }
          className="text-[#ECEBE1] hover:text-[#59815B]"
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  if (!pathName.includes("dashboard")) {
    return (
      <div className="fixed top-0 left-0 w-full z-50 bg-black/50">
        <div className="navbar w-full md:w-11/12 mx-auto px-4 md:px-6 max-w-[100%]">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
              >
                {navMenuLinks}
              </ul>
            </div>

            <Link href="/">
              <div className="flex items-center">
                <Image src="/assets/logo white.png" width={35} height={35} alt="Logo" className="block" />
                <p className="ml-2 text-lg md:text-xl font-bold text-[#ECEBE1]">TravelTales</p>
              </div>
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 gap-x-4">
              {navMenuLinks}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            {status === "authenticated" ? (
              <div className="flex gap-x-2 md:gap-x-3 items-center">
                {sessionData?.user?.image && sessionData.user.image !== "nai" ? (
                  <Image
                    src={sessionData.user.image}
                    width={36}
                    height={36}
                    alt="User Image"
                    className="rounded-full h-9 w-9 md:h-10 md:w-10 border-2 border-[#EDEAE1]"
                  />
                ) : (
                  <div className="rounded-full h-9 w-9 md:h-10 md:w-10 border-2 border-[#EDEAE1] bg-gray-300" />
                )}
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="btn bg-[#59815B] text-[#ECEBE1] px-3 md:px-5 hover:bg-[#3a573b]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-x-2">
                <Link
                  href="/login"
                  className="btn bg-[#59815B] text-[#ECEBE1] px-3 md:px-5 hover:bg-[#3a573b]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn bg-[#59815B] text-[#ECEBE1] px-3 md:px-5 hover:bg-[#3a573b]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Navbar;

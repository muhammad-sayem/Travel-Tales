import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-[#59815B] text-[#ECEBE1] py-8 md:py-16 w-full md:w-64 flex-shrink-0">
        <div className="px-4 md:px-6">
          <ul className="space-y-4">
            <li className="text-lg md:text-xl font-bold text-center">
              <Link href={`${role === "User" ? '/user-dashboard/my-profile' : '/admin-dashboard/my-profile'}`}>
                My Profile
              </Link>
            </li>
            <li className="text-lg md:text-xl font-bold text-center">
              {role === "User" ? (
                <Link href='/user-dashboard/my-posts'>My Posts</Link>
              ) : (
                <Link href='/admin-dashboard/pending-posts'>Pending Posts</Link>
              )}
            </li>
          </ul>

          <div className="border border-[#ECEBE1] my-6 w-10/12 mx-auto"></div>

          <ul className="space-y-4">
            <li className="text-lg md:text-xl font-bold flex items-center justify-center gap-2">
              <IoHome /> <Link href='/'>Home</Link>
            </li>
            <li className="text-lg md:text-xl font-bold flex items-center justify-center gap-2">
              <FaBlogger /> <Link href='/blogs'>All Blogs</Link>
            </li>
            <li className="text-lg md:text-xl font-bold flex items-center justify-center gap-2">
              <IoAddCircleSharp /> <Link href='/add-blog'>Add Blog</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 p-4 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

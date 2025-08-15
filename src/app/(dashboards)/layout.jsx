import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  console.log("SERVER SESSION, ", session);
  const role = session?.user?.role;
  console.log("Role from server", role);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12 ">
        {/* Dashboard Sidebar */}
        <div className="col-span-3 bg-[#59815B] text-[#ECEBE1] py-16 min-h-screen ">
          <div>
            <ul className="space-y-4">
              <li className="text-xl font-bold text-center">
                <Link href={`${role === "User" ? '/user-dashboard/my-profile' : '/admin-dashboard/my-profile'}`}> My Profile </Link>
              </li>
              <li className="text-xl font-bold text-center">
                {
                  role === "User" ?
                    <Link href='/user-dashboard/my-posts'> My Posts </Link>
                    :
                    <Link href='/admin-dashboard/pending-posts'> Pending Posts </Link>
                }
              </li>
            </ul>
            <div className="w-8/10 mx-auto border border-[#ECEBE1] my-6"></div>

            <div>
              <ul className="space-y-4">
                <li className="text-xl font-bold text-center flex items-center justify-center gap-2">
                  <IoHome /> <Link href='/'>Home</Link>
                </li>
                <li className="text-xl font-bold text-center flex items-center justify-center gap-2">
                  <FaBlogger /> <Link href='/blogs'>All Blogs</Link>
                </li>
                <li className="text-xl font-bold text-center flex items-center justify-center gap-2">
                  <IoAddCircleSharp /> <Link href='/add-blog'>Add Blog</Link>
                </li>
              </ul>

            </div>
          </div>

        </div>

        {/* Dashboard Content */}
        <div className="col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
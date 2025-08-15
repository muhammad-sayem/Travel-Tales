import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const AdminMyProfile = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-200">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={session?.user?.image}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-[#59815B] object-cover shadow-md"
          />
        </div>

        {/* Name */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">{session?.user?.name}</h2>
        {/* Role */}
        <p className="text-sm text-gray-500">{session?.user?.role}</p>

        {/* Divider */}
        <div className="my-4 border-t border-[#59815B]"></div>

        {/* Email */}
        <div className="text-left space-y-3">
          <div>
            <p className="text-md text-[#59815B] font-bold">Email</p>
            <p className="text-lg">{session?.user?.email}</p>
          </div>

          <div>
            <p className="text-md text-[#59815B] font-bold">Role</p>
            <p className="text-xl">{session?.user?.role}</p>
          </div>
        </div>

        {/* Edit Button */}
        {/* <button className="mt-6 w-full bg-[#59815B] text-white py-2 px-4 rounded-lg hover:bg-[#476645] transition">
          Edit Profile
        </button> */}
      </div>
    </div>
  );
};

export default AdminMyProfile;

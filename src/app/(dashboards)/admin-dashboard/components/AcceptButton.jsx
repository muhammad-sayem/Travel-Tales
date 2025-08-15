"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const AcceptButton = ({ postId }) => {
  const router = useRouter();
  const handleAccept = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!"
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/pending-posts/${id}`, {
            method: "PATCH"
          });
          const data = await res.json();
          router.refresh();
          console.log(data);
          Swal.fire({
            title: "Approved!",
            text: "Post has been accepted!!",
            icon: "success"
          });
        }
      });
  }
  return (
    <div>
      <button onClick={() => handleAccept(postId)} className="btn bg-green-500 text-white"> Accept </button>
    </div>
  );
};

export default AcceptButton;
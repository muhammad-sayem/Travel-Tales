"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RejectButton = ({ postId }) => {
  const router = useRouter();

  const handleReject = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject it!"
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/pending-posts/${id}`, {
            method: "DELETE"
          });
          const data = await res.json();
          router.refresh();
          console.log(data);
          Swal.fire({
            title: "Deleted!",
            text: "Post has been deleted!!",
            icon: "success"
          });
        }
      });
  }

  return (
    <div>
      <button onClick={() => handleReject(postId)} className="btn bg-red-500 text-white"> Reject </button>
    </div>
  );
};

export default RejectButton;
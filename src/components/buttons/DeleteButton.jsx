"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


const DeleteButton = ({ postId }) => {
  const router = useRouter();

  const handleDeltePost = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/my-posts/${postId}`, {
          method: "DELETE",
        });
        const data = await res.json();
        console.log(data);
        router.refresh();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  };

  return (
    <div>
      <button onClick={() => handleDeltePost(postId)} className="btn bg-red-600 text-white"> Delete </button>
    </div>
  );
};

export default DeleteButton;
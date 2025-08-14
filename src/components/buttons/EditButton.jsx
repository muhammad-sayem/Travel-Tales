"use client";

import Link from "next/link";

const EditButton = ({postId}) => {
  return (
    <div>
      <Link href={`/user-dashboard/edit-my-post/${postId}`} className="btn bg-blue-400 text-white"> Edit </Link>
    </div>
  );
};

export default EditButton;
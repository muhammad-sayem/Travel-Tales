import DeleteButton from "@/components/buttons/DeleteButton";
import EditButton from "@/components/buttons/EditButton";
import { headers } from "next/headers";

const getMyPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/my-posts`, {
    cache: 'no-store',
    headers: {
      Cookie: headers().get("cookie") || "",
    }
  }
  );
  const data = await res.json();
  return data;
}

const MyPosts = async () => {
  const myPosts = await getMyPosts();
  console.log("My Posts", myPosts);
  return (
    <div>
      <h3 className="text-4xl text-center text-[#59815B] font-black my-8"> My Posts </h3>

      {
        myPosts.length > 0 ?
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Travel Date</th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  myPosts?.map(post => {
                    return (
                      <tr key={post._id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src={post.travelImage}
                                  alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>

                          </div>
                        </td>
                        <td>
                          {post.title}
                        </td>
                        <td>
                          <p>  {post.location}</p>
                        </td>

                        <td>
                          {post.travelDate}
                        </td>
                        <th className="flex gap-x-2">
                          <EditButton
                            key={post._id}
                            postId={post._id}
                          />
                          <DeleteButton />
                        </th>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div> :

          <p> No posts found </p>
      }
    </div>
  );
};

export default MyPosts;
import AcceptButton from "../components/AcceptButton";
import RejectButton from "../components/RejectButton";

const PendingPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/blogs/pending-posts`);
  const pendingPosts = await res.json();
  console.log("Pending Posts ---------> ", pendingPosts);
  return (
    <div>
      <h3 className="text-4xl text-center text-[#59815B] font-black my-8"> Pending Posts </h3>

      {
        pendingPosts.length > 0 ?
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
                  pendingPosts?.map(post => {
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
                          <AcceptButton
                            postId={post._id}
                          />
                          <RejectButton
                            postId={post._id}
                          />
                        </th>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div> :
          <p className="flex items-center justify-center min-h-[50vh] text-xl font-semibold text-gray-500">
            No posts found
          </p>


      }
    </div>
  );
};

export default PendingPosts;
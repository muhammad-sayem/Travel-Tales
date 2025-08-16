import AddBlogForm from "./components/AddBlogForm";

export const metadata = {
  title: "Add Blog",
  description: "Add New Blog",
};

const page = () => {
  return (
    <div className="w-11/12 mx-auto py-24">
      <AddBlogForm />
    </div>
  );
};

export default page;
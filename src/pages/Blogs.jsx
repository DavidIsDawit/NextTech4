import BlogList from "../ui/BlogList";
import useBlog from "../hooks/useBlog";

function Blogs() {
  const { posts } = useBlog();

  return (
    <div className="flex flex-col">
      <main className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <BlogList posts={posts} />
      </main>
    </div>
  );
}

export default Blogs;

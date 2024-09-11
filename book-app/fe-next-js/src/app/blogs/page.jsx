import BlogOverview from "@/components/BlogOverview"
import { getAllBlogs } from "@/services/blogServices"

const BlogPage = async () => {
  const blogs = await getAllBlogs();

  return (
    <div>

      <BlogOverview blogList={blogs} />
    </div>
  )
}

export default BlogPage

import BlogOverview from "@/components/BlogOverview"

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        <BlogOverview />
      </div>
    </div>
  )
}

export default BlogPage

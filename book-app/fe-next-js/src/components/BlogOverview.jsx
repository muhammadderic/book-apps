import { Label } from "@radix-ui/react-label"
import BlogOverviewCard from "./BlogOverviewCard"
import AddNewBlog from "./AddNewBlog"

const BlogOverview = ({ blogList }) => {
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <AddNewBlog />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {
          blogList && blogList.length > 0 ? (
            blogList.map((blog) => (
              <BlogOverviewCard
                key={blog._id}
                blogItem={blog}
              />
            ))
          ) : (
            <Label className="text-3xl font-extrabold">
              No Blog found! Please add one
            </Label>
          )
        }
      </div>
    </div>
  )
}

export default BlogOverview

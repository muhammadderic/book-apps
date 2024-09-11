'use client'

import { useRouter } from "next/navigation";
import EditBlog from "./EditBlog"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"
import { deleteBlogById } from "@/services/blogServices";

const BlogOverviewCard = ({ blogItem }) => {
  const router = useRouter();
  const handleDeleteBlogById = async (id) => {
    try {
      const result = await deleteBlogById(id);

      if (result?.success) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="p-5">
      <CardContent>
        <CardTitle className="mb-5">
          {blogItem?.title}
        </CardTitle>

        <CardDescription>
          {blogItem?.description}
        </CardDescription>

        <div className="mt-5 flex gap-5  items-center">
          <EditBlog blogItem={blogItem} />

          <Button onClick={() => handleDeleteBlogById(blogItem._id)} variant="outline">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BlogOverviewCard

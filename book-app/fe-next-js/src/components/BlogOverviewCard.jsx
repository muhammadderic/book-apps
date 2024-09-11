import EditBlog from "./EditBlog"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"

const BlogOverviewCard = ({ blogItem }) => {
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

          <Button onClick={console.log("clicked")} variant="outline">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BlogOverviewCard

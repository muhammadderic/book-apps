import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"

const BlogOverviewCard = () => {
  return (
    <Card className="p-5">
      <CardContent>
        <CardTitle className="mb-5">
          blog title
        </CardTitle>

        <CardDescription>
          blog description
        </CardDescription>

        <div className="mt-5 flex gap-5  items-center">
          <Button onClick={console.log("clicked")} variant="outline">
            Delete
          </Button>

          <Button onClick={console.log("clicked")} variant="outline">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BlogOverviewCard

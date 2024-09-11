'use client'

import { Close, Content, DialogDescription, Overlay, Portal, Root, Title, Trigger } from "@radix-ui/react-dialog"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

const initialBlogFormData = {
  title: "",
  description: "",
};

const AddNewBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  const handleTitleChange = (event) => {
    setBlogFormData({
      ...blogFormData,
      title: event.target.value,
    });
  };

  const handleDescriptionChange = (event) => {
    setBlogFormData({
      ...blogFormData,
      description: event.target.value,
    });
  };

  const handleSaveBlogData = async () => {
    try {
      setLoading(true);
      const result = await createBlog(blogFormData);

      if (result?.success) {
        setBlogFormData(initialBlogFormData);
        setLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  return (
    <Root>
      <Trigger asChild>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add New Blog
        </button>
      </Trigger>

      {/* Modal Content */}
      <Portal>
        <Overlay className="fixed inset-0 bg-black bg-opacity-30" />

        <Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg max-w-md">
          <Title className="text-xl font-semibold">
            Recipe Details
          </Title>
          <DialogDescription>
            Please provide the title and description for the blog.
          </DialogDescription>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="name"
                className="text-right"
              >
                Title
              </Label>

              <Input
                name="title"
                placeholder="Enter blog title"
                id="title"
                value={blogFormData.title}
                onChange={handleTitleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="username"
                className="text-right"
              >
                Description
              </Label>

              <Input
                name="description"
                id="description"
                value={blogFormData.description}
                onChange={handleDescriptionChange}
                className="col-span-3"
              />
            </div>
          </div>

          <Button
            onClick={handleSaveBlogData}
            variant={"default"}
            size={"default"}
          >
            {loading ? "Saving changes" : "Save changes"}
          </Button>

          <Close asChild>
            <button className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Close
            </button>
          </Close>
        </Content>
      </Portal>
    </Root>
  )
}

export default AddNewBlog

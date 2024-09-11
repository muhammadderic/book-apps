'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Close, Content, DialogDescription, Overlay, Portal, Root, Title, Trigger } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { updateBlogById } from "@/services/blogServices";

const EditBlog = ({ blogItem }) => {
  const [blogFormData, setBlogFormData] = useState({ title: blogItem?.title, description: blogItem?.description });

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
      await updateBlogById(blogItem._id, blogFormData);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Root>
      <Trigger asChild>
        <Button variant="outline">
          Edit
        </Button>
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
              <Label htmlFor="name" className="text-right">
                Title
              </Label>

              <Input
                name="title"
                placeholder="Enter blog title"
                value={blogFormData.title}
                onChange={handleTitleChange}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>

              <Input
                name="description"
                value={blogFormData.description}
                onChange={handleDescriptionChange}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>

          <Button
            onClick={handleSaveBlogData}
            variant={"default"}
            size={"default"}
          >
            Save changes
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

export default EditBlog

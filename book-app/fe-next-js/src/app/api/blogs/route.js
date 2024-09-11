import { NextResponse } from "next/server";
import connectToDB from "@/db/db";
import Blog from "@/models/blog";
import Joi from "joi";

// === GET ALL BLOGS ===
export async function GET() {
  try {
    await connectToDB();
    const blogResponse = await Blog.find();

    if (blogResponse) {
      return NextResponse.json({
        success: true,
        data: blogResponse,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again later",
      });
    }

  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}

// === CREATE A BLOG ===
const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDB();

    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;

    const { error } = AddNewBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedBlogItem = await Blog.create(extractBlogData);
    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong ! Please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}

// === UPDATE BLOG ===
export async function PUT(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogID = searchParams.get("id");

    if (!getCurrentBlogID) {
      return jsonResponse(false, "Blog ID is required");
    }

    const blogFormData = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(
      getCurrentBlogID,
      { title: blogFormData.title, description: blogFormData.description },
      { new: true, runValidators: true }
    );

    return updatedBlog
      ? jsonResponse(true, updatedBlog)
      : jsonResponse(false, "Something went wrong! Please try again");
  } catch (error) {
    console.log(error);
    return jsonResponse(false, "Something went wrong! Please try again");
  }
}

function jsonResponse(success, dataOrMessage) {
  return NextResponse.json(success ? { success, data: dataOrMessage } : { success, message: dataOrMessage });
}

// === DELETE BLOG ===
export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogID = searchParams.get("id");

    if (!getCurrentBlogID) {
      return NextResponse.json({
        success: false,
        message: "Blog ID is required",
      });
    }

    const deleteCurrentBlogByID = await Blog.findByIdAndDelete(
      getCurrentBlogID
    );

    if (deleteCurrentBlogByID) {
      return NextResponse.json({
        success: true,
        message: "Blog is deleted successfully",
      });
    }

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
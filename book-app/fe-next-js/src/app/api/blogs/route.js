import { NextResponse } from "next/server";
import connectToDB from "@/db/db";
import Blog from "@/models/blog";

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
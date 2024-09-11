const BLOG_API_URL = "http://localhost:3000/api/blogs";

// === FETCH ALL BLOGS ===
export const getAllBlogs = async () => {
  try {
    const response = await fetch(BLOG_API_URL, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete blog: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    return result.data;

  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    throw new Error("An error occurred while fetching blogs. Please try again.");
  }
}
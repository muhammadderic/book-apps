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

// === CREATE A BLOG ===
export const createBlog = async (blogData) => {
  try {
    const response = await fetch(BLOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create blog: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error creating blog:", error.message);
    throw new Error("An error occurred while creating blog. Please try again.");
  }
}

// === UPDATE A BLOG BY ID ===
export const updateBlogById = async (blogId, blogFormData) => {
  try {
    const response = await fetch(`/api/blogs?id=${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogFormData), // Pass the updated blog data
    });

    if (!response.ok) {
      throw new Error(`Failed to update blog: ${response.status} ${response.statusText}`);
    }

    return;
  } catch (error) {
    console.error("Error updating blog:", error.message);
    throw new Error("An error occurred while updating blog. Please try again.");
  }
}

// === DELETE A BLOG BY ID ===
export const deleteBlogById = async (blogId) => {
  try {
    const response = await fetch(`/api/blogs?id=${blogId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete blog: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    return result;

  } catch (error) {
    console.error("Error deleting blog:", error.message);
    throw new Error("An error occurred while deleting blog. Please try again.");
  }
}
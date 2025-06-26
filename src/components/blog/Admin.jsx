// src/components/Admin.jsx
import { useState } from "react";
import { blogPosts } from "./data/blogPosts";
import { authors } from "./data/authors";
import { categories } from "./data/constants";

const Admin = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "AI Technology",
    tags: "",
    image: "",
    authorId: 1,
    featured: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      date: editingPost
        ? editingPost.date
        : new Date().toISOString().split("T")[0],
      readTime: `${Math.ceil(formData.content.split(" ").length / 200)} min read`,
      likes: editingPost ? editingPost.likes : 0,
      views: editingPost ? editingPost.views : 0,
      comments: editingPost ? editingPost.comments : [],
    };

    if (editingPost) {
      setPosts(posts.map((post) => (post.id === editingPost.id ? newPost : post)));
    } else {
      setPosts([newPost, ...posts]);
    }

    setIsCreating(false);
    setEditingPost(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "AI Technology",
      tags: "",
      image: "",
      authorId: 1,
      featured: false,
    });
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      ...post,
      tags: post.tags.join(", "),
    });
    setIsCreating(true);
  };

  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.id !== postId));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
            >
              Create New Post
            </button>
          </div>

          {isCreating && (
            <div className="bg-gray-900 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {editingPost ? "Edit Post" : "Create New Post"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                    >
                      {categories.slice(1).map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Content (HTML)
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="10"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 resize-none font-mono text-sm"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Featured Post
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
                  >
                    {editingPost ? "Update Post" : "Create Post"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreating(false);
                      setEditingPost(null);
                      setFormData({
                        title: "",
                        excerpt: "",
                        content: "",
                        category: "AI Technology",
                        tags: "",
                        image: "",
                        authorId: 1,
                        featured: false,
                      });
                    }}
                    className="border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-orange-500 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold">All Posts ({posts.length})</h2>
            </div>
            <div className="divide-y divide-gray-800">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold">{post.title}</h3>
                        {post.featured && (
                          <span className="bg-red-600 px-2 py-1 rounded text-xs">
                            Featured
                          </span>
                        )}
                        <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{authors[post.authorId]?.name}</span>
                        <span>{post.date}</span>
                        <span>{post.views} views</span>
                        <span>{post.likes} likes</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(post)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
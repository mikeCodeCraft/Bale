// src/components/Admin.jsx
import { useState } from "react";
import { blogPosts } from "./data/blogPosts";
import { authors } from "./data/authors";
import { categories } from "./data/constants";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(blogPosts);
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
    navigate(`/admin/edit/${post.id}`);
  };

  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.id !== postId));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="py-16 px-2 sm:px-4">
        <div className="container mx-auto max-w-full sm:max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4 sm:gap-0">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <button
              onClick={() => navigate('/admin/create')}
              className="bg-gradient-to-r from-red-600 to-orange-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all w-full sm:w-auto"
            >
              Create New Post
            </button>
          </div>

          <div>
            <div className="p-4 sm:p-6 ">
              <h2 className="text-xl sm:text-2xl font-bold">All Posts ({posts.length})</h2>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 sm:p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 hover:bg-gray-800 transition-colors w-full max-w-full sm:max-w-4xl mx-auto"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1 w-full">
                      <div className="flex flex-wrap items-center space-x-2 sm:space-x-3 mb-2">
                        <h3 className="text-base sm:text-lg font-bold">{post.title}</h3>
                        {post.featured && (
                          <span className="bg-red-600 px-2 py-1 rounded text-xs">
                            Featured
                          </span>
                        )}
                        <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3 text-sm sm:text-base">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                        <span>{authors[post.authorId]?.name}</span>
                        <span>{post.date}</span>
                        <span>{post.views} views</span>
                        <span>{post.likes} likes</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-0 sm:ml-4 w-full sm:w-auto">
                      <button
                        onClick={() => handleEdit(post)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs sm:text-sm transition-colors w-full sm:w-auto mb-2 sm:mb-0"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-xs sm:text-sm transition-colors w-full sm:w-auto"
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
// src/components/AdminCreate.jsx
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./data/constants";
import { authors } from "./data/authors";
import { Bold, Italic, Underline, List, ListOrdered, Quote, Link as LinkIcon } from 'lucide-react';

const AdminCreate = () => {
  const navigate = useNavigate();
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

  const contentEditorRef = useRef(null);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    // Update content in formData after formatting
    setFormData((prev) => ({ ...prev, content: contentEditorRef.current.innerHTML }));
  };

  const handleContentInput = () => {
    setFormData((prev) => ({ ...prev, content: contentEditorRef.current.innerHTML }));
  };

  // Handle image file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Example possible tags (customize as needed)
  const possibleTags = [
    "AI", "Technology", "React", "JavaScript", "Web", "Tutorial", "News", "Opinion", "Tips", "Productivity"
  ];
  const [tagInput, setTagInput] = useState("");
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);
  const selectedTags = formData.tags ? formData.tags.split(/,\s*/) : [];
  const filteredTags = possibleTags.filter(
    (tag) => tag.toLowerCase().includes(tagInput.toLowerCase()) && !selectedTags.includes(tag)
  );

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      const newTags = [...selectedTags, tag];
      setFormData((prev) => ({ ...prev, tags: newTags.join(", ") }));
    }
    setTagInput("");
  };

  const handleTagKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      addTag(tagInput.trim());
    }
  };

  const removeTag = (tag) => {
    const newTags = selectedTags.filter((t) => t !== tag);
    setFormData((prev) => ({ ...prev, tags: newTags.join(", ") }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the new post to your backend or state management
    // For now, just go back to admin dashboard
    navigate("/admin");
  };

  const handleTagInputFocus = () => {
    setTagDropdownOpen(true);
  };

  const handleTagInputBlur = () => {
    setTimeout(() => setTagDropdownOpen(false), 120); // Delay to allow click
  };

  const handleContentContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY });
  };

  const handleHideContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28" onClick={handleHideContextMenu}>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <button
            onClick={() => navigate("/admin")}
            className="text-orange-500 hover:text-orange-400 mb-8 inline-block"
          >
            ← Back to Admin
          </button>
          <div className="bg-gray-900 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
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
                  <label className="block text-sm font-medium mb-2">Category</label>
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
                <label className="block text-sm font-medium mb-2">Content</label>
                <div className="mb-2 flex space-x-2">
                  <button type="button" title="Bold" onClick={() => handleFormat('bold')} className="px-2 py-1 rounded hover:bg-gray-700"><b>B</b></button>
                  <button type="button" title="Italic" onClick={() => handleFormat('italic')} className="px-2 py-1 rounded hover:bg-gray-700"><i>I</i></button>
                  <button type="button" title="Underline" onClick={() => handleFormat('underline')} className="px-2 py-1 rounded hover:bg-gray-700"><u>U</u></button>
                  <button type="button" title="Bullet List" onClick={() => handleFormat('insertUnorderedList')} className="px-2 py-1 rounded hover:bg-gray-700">• List</button>
                  <button type="button" title="Numbered List" onClick={() => handleFormat('insertOrderedList')} className="px-2 py-1 rounded hover:bg-gray-700">1. List</button>
                  <button type="button" title="Blockquote" onClick={() => handleFormat('formatBlock', 'blockquote')} className="px-2 py-1 rounded hover:bg-gray-700">❝</button>
                  <button type="button" title="Link" onClick={() => {
                    const url = prompt('Enter the URL');
                    if (url) handleFormat('createLink', url);
                  }} className="px-2 py-1 rounded hover:bg-gray-700">🔗</button>
                </div>
                <div
                  ref={contentEditorRef}
                  contentEditable
                  className="w-full min-h-[180px] max-h-[400px] px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 resize-none font-sans text-base overflow-auto"
                  onInput={handleContentInput}
                  onContextMenu={handleContentContextMenu}
                  dangerouslySetInnerHTML={{ __html: formData.content }}
                  style={{ outline: 'none' }}
                />
                {contextMenu.visible && (
                  <div
                    className="fixed z-50 bg-gray-900 border border-gray-700 rounded-lg shadow-lg flex space-x-2 p-2"
                    style={{ top: contextMenu.y, left: contextMenu.x }}
                    onClick={e => e.stopPropagation()}
                  >
                    <button type="button" title="Bold" onClick={() => { handleFormat('bold'); handleHideContextMenu(); }} className="px-2 py-1 rounded hover:bg-gray-700"><b>B</b></button>
                    <button type="button" title="Italic" onClick={() => { handleFormat('italic'); handleHideContextMenu(); }} className="px-2 py-1 rounded hover:bg-gray-700"><i>I</i></button>
                    <button type="button" title="Underline" onClick={() => { handleFormat('underline'); handleHideContextMenu(); }} className="px-2 py-1 rounded hover:bg-gray-700"><u>U</u></button>
                    <button type="button" title="Bullet List" onClick={() => { handleFormat('insertUnorderedList'); handleHideContextMenu(); }} className="px-2 py-1 rounded hover:bg-gray-700">• List</button>
                    <button type="button" title="Numbered List" onClick={() => { handleFormat('insertOrderedList'); handleHideContextMenu(); }} className="px-2 py-1 rounded hover:bg-gray-700">1. List</button>
                    <button type="button" title="Blockquote" onClick={() => { handleFormat('formatBlock', 'blockquote'); handleHideContextMenu(); }} className="px-2 py-1 rounded hover:bg-gray-700">❝</button>
                    <button type="button" title="Link" onClick={() => { const url = prompt('Enter the URL'); if (url) handleFormat('createLink', url); handleHideContextMenu(); }} className="px-2 py-1 rounded hover:bg-gray-700">🔗</button>
                  </div>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedTags.map((tag) => (
                      <span key={tag} className="bg-orange-600 text-white px-2 py-1 rounded flex items-center">
                        {tag}
                        <button type="button" className="ml-1 text-xs" onClick={() => removeTag(tag)}>&times;</button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagKeyDown}
                    onFocus={handleTagInputFocus}
                    onBlur={handleTagInputBlur}
                    placeholder="Type to add tag..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                  {tagDropdownOpen && (tagInput.trim() ? filteredTags.length > 0 : possibleTags.length > 0) && (
                    <div className="absolute z-10 bg-gray-900 border border-gray-700 rounded-lg mt-1 w-full max-w-xs shadow-lg">
                      {(tagInput.trim() ? filteredTags : possibleTags.filter(tag => !selectedTags.includes(tag))).map((tag) => (
                        <div
                          key={tag}
                          className="px-4 py-2 cursor-pointer hover:bg-orange-600 hover:text-white"
                          onMouseDown={() => addTag(tag)}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Image Upload</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                  {formData.image && (
                    <img src={formData.image} alt="Preview" className="mt-2 max-h-40 rounded-lg border border-gray-700" />
                  )}
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
                  Create Post
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/admin")}
                  className="border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-orange-500 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreate;

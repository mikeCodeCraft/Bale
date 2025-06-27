// src/components/blog/AdminEdit.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categories } from "./data/constants";
import { authors } from "./data/authors";
import { blogPosts } from "./data/blogPosts";
import { Bold, Italic, Underline, List, ListOrdered, Quote, Link as LinkIcon } from 'lucide-react';

const AdminEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const contentEditorRef = useRef(null);
  const [menu, setMenu] = useState({ visible: false, x: 0, y: 0 });

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === Number(id));
    if (!foundPost) {
      navigate("/admin", { replace: true });
    } else {
      setFormData({
        title: foundPost.title || "",
        excerpt: foundPost.excerpt || "",
        content: foundPost.content || "",
        category: foundPost.category || categories[1],
        tags: foundPost.tags ? foundPost.tags.join(", ") : "",
        image: foundPost.image || "",
        authorId: foundPost.authorId || 1,
        featured: foundPost.featured || false,
      });
      // Set initial content in editor
      setTimeout(() => {
        if (contentEditorRef.current) {
          contentEditorRef.current.innerHTML = foundPost.content || "";
        }
      }, 0);
    }
    // eslint-disable-next-line
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContentInput = () => {
    setFormData((prev) => ({ ...prev, content: contentEditorRef.current.innerHTML }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would update the post in your backend or state management
    // For now, just go back to admin dashboard
    navigate("/admin");
  };

  // Show custom format menu on right click
  const handleEditorContextMenu = (e) => {
    e.preventDefault();
    setMenu({ visible: true, x: e.clientX, y: e.clientY });
  };

  // Hide menu on click elsewhere
  useEffect(() => {
    const hideMenu = () => setMenu((m) => m.visible ? { ...m, visible: false } : m);
    if (menu.visible) {
      document.addEventListener('click', hideMenu);
    }
    return () => document.removeEventListener('click', hideMenu);
  }, [menu.visible]);

  const handleFormat = (command, value = null) => {
    if (contentEditorRef.current) {
      contentEditorRef.current.focus();
    }
    const selection = window.getSelection();
    if ((command === 'insertUnorderedList' || command === 'insertOrderedList') && selection && selection.isCollapsed) {
      // Insert a new line if not in a list, so bullet/number appears
      document.execCommand('insertHTML', false, '<br>');
    }
    if (command === 'formatBlock') {
      document.execCommand('formatBlock', false, value || 'blockquote');
    } else if (command === 'createLink') {
      const url = value || prompt('Enter URL');
      if (url) {
        if (selection && selection.isCollapsed) {
          document.execCommand('insertText', false, url);
          const range = document.createRange();
          const node = contentEditorRef.current.lastChild;
          if (node) {
            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
        document.execCommand('createLink', false, url);
      }
    } else {
      document.execCommand(command, false, value);
    }
    setFormData((prev) => ({ ...prev, content: contentEditorRef.current.innerHTML }));
    setMenu((m) => ({ ...m, visible: false }));
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
  const selectedTags = formData && formData.tags ? formData.tags.split(/,\s*/) : [];
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

  const handleTagInputFocus = () => {
    setTagDropdownOpen(true);
  };

  const handleTagInputBlur = () => {
    setTimeout(() => setTagDropdownOpen(false), 120);
  };

  if (!formData) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 px-4  pt-28">
        <div className="container mx-auto max-w-2xl">
          <button
            onClick={() => navigate("/admin")}
            className="text-orange-500 hover:text-orange-400 mb-8 inline-block"
          >
            ← Back to Admin
          </button>
          <div className="bg-gray-900 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
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
                <div className="flex items-center gap-2 mb-2">
                  <button type="button" title="Bold" className="p-1 rounded hover:bg-gray-800" onClick={() => document.execCommand('bold', false, null)}><Bold size={18} /></button>
                  <button type="button" title="Italic" className="p-1 rounded hover:bg-gray-800" onClick={() => document.execCommand('italic', false, null)}><Italic size={18} /></button>
                  <button type="button" title="Underline" className="p-1 rounded hover:bg-gray-800" onClick={() => document.execCommand('underline', false, null)}><Underline size={18} /></button>
                  <button type="button" title="Bulleted List" className="p-1 rounded hover:bg-gray-800" onClick={() => document.execCommand('insertUnorderedList', false, null)}><List size={18} /></button>
                  <button type="button" title="Numbered List" className="p-1 rounded hover:bg-gray-800" onClick={() => document.execCommand('insertOrderedList', false, null)}><ListOrdered size={18} /></button>
                  <button type="button" title="Blockquote" className="p-1 rounded hover:bg-gray-800" onClick={() => document.execCommand('formatBlock', false, 'blockquote')}><Quote size={18} /></button>
                  <button type="button" title="Insert Link" className="p-1 rounded hover:bg-gray-800" onClick={() => { const url = prompt('Enter URL'); if (url) document.execCommand('createLink', false, url); }}><LinkIcon size={18} /></button>
                </div>
                <div
                  ref={contentEditorRef}
                  contentEditable
                  suppressContentEditableWarning
                  className="w-full min-h-[180px] px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 resize-none text-base mb-2 relative"
                  style={{ whiteSpace: 'pre-wrap' }}
                  onInput={handleContentInput}
                  onContextMenu={handleEditorContextMenu}
                />
                {menu.visible && (
                  <div
                    style={{ position: 'fixed', top: menu.y, left: menu.x, zIndex: 50 }}
                    className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg flex p-2 space-x-2"
                  >
                    <button type="button" title="Bold" onClick={() => handleFormat('bold')} className="p-1 rounded hover:bg-gray-800"><Bold size={18} /></button>
                    <button type="button" title="Italic" onClick={() => handleFormat('italic')} className="p-1 rounded hover:bg-gray-800"><Italic size={18} /></button>
                    <button type="button" title="Underline" onClick={() => handleFormat('underline')} className="p-1 rounded hover:bg-gray-800"><Underline size={18} /></button>
                    <button type="button" title="Bulleted List" onClick={() => handleFormat('insertUnorderedList')} className="p-1 rounded hover:bg-gray-800"><List size={18} /></button>
                    <button type="button" title="Numbered List" onClick={() => handleFormat('insertOrderedList')} className="p-1 rounded hover:bg-gray-800"><ListOrdered size={18} /></button>
                    <button type="button" title="Blockquote" onClick={() => handleFormat('formatBlock', 'blockquote')} className="p-1 rounded hover:bg-gray-800"><Quote size={18} /></button>
                    <button type="button" title="Insert Link" onClick={() => handleFormat('createLink')} className="p-1 rounded hover:bg-gray-800"><LinkIcon size={18} /></button>
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
                  Update Post
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

export default AdminEdit;

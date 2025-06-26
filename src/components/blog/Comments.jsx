// src/components/Comments.jsx
import { useState } from "react";

const Comments = ({ postId, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && commentAuthor.trim()) {
      onAddComment(postId, {
        id: Date.now(),
        author: commentAuthor,
        content: newComment,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
      });
      setNewComment("");
      setCommentAuthor("");
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={commentAuthor}
          onChange={(e) => setCommentAuthor(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
        />
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="4"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400 resize-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {comment.author[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{comment.author}</h4>
                  <p className="text-sm text-gray-400">{comment.date}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                ♥ {comment.likes}
              </button>
            </div>
            <p className="text-gray-300 leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
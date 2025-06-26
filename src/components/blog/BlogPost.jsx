// src/components/BlogPost.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogPosts } from "./data/blogPosts";
import { authors } from "./data/authors";
import Comments from "./Comments";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
      setLikes(foundPost.likes);
      setComments(foundPost.comments);

      const related = blogPosts
        .filter((p) => p.id !== foundPost.id && p.category === foundPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);

  const handleAddComment = (postId, comment) => {
    setComments([...comments, comment]);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="text-orange-500 hover:text-orange-400"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const author = authors[post.authorId];

  return (
    <div className="min-h-screen bg-black text-white">
      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              to="/blog"
              className="text-orange-500 hover:text-orange-400 mb-4 inline-block"
            >
              ← Back to Blog
            </Link>

            <div className="mb-6">
              <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <Link
                    to={`/authors/${author.id}`}
                    className="font-semibold hover:text-orange-500 transition-colors"
                  >
                    {author.name}
                  </Link>
                  <p className="text-sm text-gray-400">{author.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
                <span>{post.views} views</span>
                <button
                  onClick={handleLike}
                  className="flex items-center space-x-2 hover:text-red-500 transition-colors"
                >
                  <span>♥</span>
                  <span>{likes}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="prose prose-invert prose-orange max-w-none mb-12">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-300 leading-relaxed"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl mb-12">
            <div className="flex items-start space-x-4">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                <p className="text-orange-500 text-sm mb-3">{author.role}</p>
                <p className="text-gray-400 mb-4">{author.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/${author.social.twitter}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://linkedin.com/in/${author.social.linkedin}`}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${author.social.email}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Comments
            postId={post.id}
            comments={comments}
            onAddComment={handleAddComment}
          />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <article className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-r from-orange-900/20 to-red-900/20 relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {relatedPost.excerpt.substring(0, 100)}...
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
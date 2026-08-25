'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Helper to strip HTML tags from card preview descriptions
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
}

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('https://teqnoor.com/api/blogs');
        const json = await res.json();
        
        const posts = json.data || json.blogs || json;
        if (Array.isArray(posts)) {
          setBlogs(posts);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] flex items-center justify-center p-6 font-sans">
        <div className="text-[#821fbf] font-bold text-lg animate-pulse">Loading insights...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] py-20 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto pt-8 sm:pt-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            TeqNoor <span className="bg-gradient-to-r from-[#821fbf] to-[#9333EA] bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our latest thoughts, guides, and digital marketing strategies.
          </p>
          <div className="w-24 h-1.5 mx-auto rounded-full bg-gray-900 shadow-sm mt-6"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            // Comprehensive check for image properties (string or nested objects)
            const rawImage = 
              blog.image || 
              blog.imageUrl || 
              blog.featuredImage || 
              blog.img || 
              blog.photo || 
              blog.coverImage ||
              blog.banner;

            let imageUrl = null;
            const imagePath = typeof rawImage === 'object' ? rawImage?.url || rawImage?.path : rawImage;

            if (imagePath && typeof imagePath === 'string') {
              if (imagePath.startsWith('http')) {
                imageUrl = imagePath;
              } else {
                const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
                imageUrl = `https://teqnoor.com/${cleanPath}`;
              }
            }

            const cleanSnippet = stripHtml(blog.description || blog.content);

            return (
              <div 
                key={blog._id || blog.slug}
                className="bg-white/90 backdrop-blur-xl rounded-[24px] border border-purple-100 shadow-[0_15px_35px_rgba(130,31,191,0.06)] hover:shadow-[0_20px_45px_rgba(130,31,191,0.12)] transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Card Image Container */}
                <div className="relative w-full h-52 bg-gradient-to-tr from-purple-100 to-purple-50 overflow-hidden flex items-center justify-center">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={blog.title || "Blog post banner"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <span className="text-[#821fbf] font-extrabold text-xs tracking-wider uppercase opacity-60">
                      TeqNoor Insights
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#821fbf] transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {cleanSnippet}
                  </p>

                  <div className="pt-4 border-t border-purple-50 mt-auto">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#821fbf] font-bold text-sm group-hover:translate-x-1 transition-transform"
                    >
                      READ MORE →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
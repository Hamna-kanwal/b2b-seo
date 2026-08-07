'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogCard = ({ title, excerpt, image, slug }) => (
  // Reverted to plain white background, matching the reference design.
  <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mt-12 border border-gray-100">
    <div className="relative h-56 w-full overflow-hidden">
      {/* Gradient overlay updated to match Teqnoor branding */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 to-transparent z-10" />
      <img 
        src={image || '/teqnoor-default.jpg'} // Replace with your default image
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
    </div>

    <div className="p-8 bg-white">
      <h4 className="text-[#821fbf] font-extrabold text-xl text-center uppercase mb-3 tracking-tight">
        {title}
      </h4>
      <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed line-clamp-3">
        {excerpt}
      </p>
      
      <div className="text-center">
        <Link 
          href={`/blogs/${slug}`} 
          // Changed text color to Teqnoor purple for consistency
          className="font-bold text-xs uppercase tracking-widest text-[#821fbf] hover:text-purple-800 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </div>
  </div>
);

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success) {
          setPosts(data.blogs);
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
      <div className="bg-white py-20 text-center text-gray-500 font-medium">
        Loading insights...
      </div>
    );
  }

  return (
    // Reverted section background to clean white
    <div className="bg-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Our Latest Insights</h2>
        {/* Accent color updated to Teqnoor purple */}
        <div className="w-20 h-1.5 bg-[#821fbf] mx-auto rounded-full"></div>
      </div>
      
      {posts.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No published blogs found.</p>
          <p className="text-sm">Create your first blog post from the admin dashboard!</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard 
              key={post._id || post.slug} 
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      )}
      {/* Optional: Add the WhatsApp button from your reference image here */}
    </div>
  );
};

export default BlogGrid;

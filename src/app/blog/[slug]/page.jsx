'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function FormattedTitle({ title }) {
  if (!title) return null;

  if (title.includes(':')) {
    const colonIndex = title.indexOf(':');
    const primaryPart = title.substring(0, colonIndex + 1);
    const secondaryPart = title.substring(colonIndex + 1).trim();

    return (
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.15] flex flex-col items-center gap-2 text-center break-words">
        <span className="bg-gradient-to-r from-[#821fbf] to-[#9333EA] bg-clip-text text-transparent">
          {primaryPart}
        </span>
        {secondaryPart && (
          <span className="text-gray-900">{secondaryPart}</span>
        )}
      </h1>
    );
  }

  return (
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.15] text-center break-words text-gray-900">
      {title}
    </h1>
  );
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogDetail() {
      if (!slug) return;
      try {
        const res = await fetch('https://teqnoor.com/api/blogs');
        const json = await res.json();
        
        const posts = json.data || json.blogs || json;
        
        if (Array.isArray(posts)) {
          const normalizedSlug = decodeURIComponent(String(slug)).trim().toLowerCase();
          const found = posts.find(
            (p) => String(p.slug).trim().toLowerCase() === normalizedSlug
          );
          setBlog(found || null);
        }
      } catch (err) {
        console.error('Error fetching blog detail:', err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] flex items-center justify-center p-6 font-sans">
        <div className="text-[#821fbf] font-bold text-lg animate-pulse">Loading article...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] flex items-center justify-center p-6 font-sans">
        <div className="bg-white/85 backdrop-blur-xl p-10 rounded-[28px] border border-purple-200/60 shadow-[0_20px_40px_rgba(130,31,191,0.08)] text-center max-w-md w-full transition-all">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#821fbf]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-[#821fbf] text-2xl font-extrabold mb-3 tracking-tight">Blog post not found</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">The article you are looking for might have been removed, renamed, or is temporarily unavailable.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#821fbf] text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:bg-purple-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            ← Return to All Insights
          </Link>
        </div>
      </div>
    );
  }

  // Resolve image source across multiple property variants
  const rawImage = blog.image || blog.imageUrl || blog.featuredImage || blog.img;
  const imageUrl = rawImage 
    ? (rawImage.startsWith('http') ? rawImage : `https://teqnoor.com/${rawImage.startsWith('/') ? '' : '/'}${rawImage}`) 
    : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] py-16 px-4 sm:px-6 font-sans selection:bg-purple-100 selection:text-[#821fbf]">
      <article className="max-w-6xl mx-auto w-full bg-white/90 backdrop-blur-2xl p-6 sm:p-12 md:p-16 rounded-[32px] border border-purple-100 shadow-[0_20px_50px_rgba(130,31,191,0.07)] transition-all overflow-hidden">
        <div className="w-full min-w-0">
          
          {/* Article Header */}
          <header className="mb-10 text-center max-w-3xl mx-auto">
            <FormattedTitle title={blog.title} />
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gray-900 shadow-sm"></div>
          </header>

          {/* Featured Image with Fallback */}
          {imageUrl && (
            <div className="relative w-full h-[280px] sm:h-[420px] md:h-[480px] mb-12 rounded-[24px] overflow-hidden shadow-2xl border border-purple-50 group bg-purple-50">
              <img
                src={imageUrl}
                alt={blog.title || "Blog banner"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.style.display = 'none'; // Hides container if image fails completely
                }}
              />
            </div>
          )}

          {/* Typography container */}
          <div
            className="blog-content text-gray-700 text-base sm:text-lg w-full min-w-0 leading-relaxed space-y-6 [&>p]:mb-6 [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-extrabold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>strong]:font-bold [&>strong]:text-gray-900 [&_a]:text-[#821fbf] [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:text-purple-900 [&>blockquote]:border-l-4 [&>blockquote]:border-[#821fbf] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6"
            style={{
              overflowWrap: 'break-word',
              wordBreak: 'normal',
              hyphens: 'none',
              maxWidth: '100%'
            }}
            dangerouslySetInnerHTML={{ __html: blog.description || blog.content }}
          />

          {/* Article Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-purple-100/80 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#821fbf] font-bold text-sm px-5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-200 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to All Insights
            </Link>
            
            <div className="text-xs text-gray-400 font-medium">
              Published on TeqNoor Insights
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
import mongoose from "mongoose";
import Link from "next/link";
import { dbConnect } from "@/lib/db";
import Blog from "@/models/b2bBlog";

function cleanBlogContent(html) {
  if (!html) return "";

  let cleaned = html;

  if (typeof window !== "undefined") {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    cleaned = txt.value;
  }

  return cleaned
    // Remove soft hyphens and invisible breaks
    .replace(/[\u00AD\u200B\u200C\u200D]/g, "")
    .replace(/&shy;/gi, "")
    // Strip newlines/tabs inside paragraph blocks and replace with single space
    .replace(/\s+/g, " ");
}

function FormattedTitle({ title }) {
  if (!title) return null;

  if (title.includes(":")) {
    const colonIndex = title.indexOf(":");
    const primaryPart = title.substring(0, colonIndex + 1);
    const secondaryPart = title.substring(colonIndex + 1).trim();

    return (
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.15] flex flex-col items-center gap-2 text-center break-words">
        <span className="text-gray-900">{primaryPart}</span>
        {secondaryPart && (
          <span className="bg-gradient-to-r from-[#7928CA] to-[#9333EA] bg-clip-text text-transparent">
            {secondaryPart}
          </span>
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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getBlogBySlug(slug) {
  await dbConnect();
  const normalizedSlug = decodeURIComponent(String(slug || "")).trim();
  if (!normalizedSlug) return null;

  const blog = await Blog.findOne({
    slug: {
      $regex: `^${escapeRegExp(normalizedSlug)}$`,
      $options: "i",
    },
  }).lean();

  return blog;
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] flex items-center justify-center p-6 font-sans">
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[28px] border border-purple-200/60 shadow-[0_20px_40px_rgba(121,40,202,0.08)] text-center max-w-md w-full transition-all">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#7928CA]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-[#7928CA] text-2xl font-extrabold mb-3 tracking-tight">Blog post not found</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">The article you are looking for might have been removed, renamed, or is temporarily unavailable.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#7928CA] text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:bg-[#6b22b4] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            ← Return to All Insights
          </Link>
        </div>
      </div>
    );
  }

  const cleanContent = cleanBlogContent(blog.description);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#f3f0fb] to-[#ede9fe] py-16 px-4 sm:px-6 font-sans selection:bg-purple-100 selection:text-[#7928CA]">
      <article className="max-w-6xl mx-auto w-full bg-white/90 backdrop-blur-2xl p-6 sm:p-12 md:p-16 rounded-[32px] border border-purple-100 shadow-[0_20px_50px_rgba(121,40,202,0.07)] transition-all overflow-hidden">
        <div className="w-full min-w-0">
          
          {/* Article Header */}
          <header className="mb-10 text-center max-w-3xl mx-auto">
            <FormattedTitle title={blog.title} />
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gray-900 shadow-sm"></div>
          </header>

          {/* Featured Image without overlay */}
          {blog.image && (
            <div className="relative w-full h-[280px] sm:h-[420px] md:h-[480px] mb-12 rounded-[24px] overflow-hidden shadow-2xl border border-purple-50 group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          )}

          {/* Typography container */}
          <div
            className="blog-content text-gray-700 text-base sm:text-lg w-full min-w-0 leading-relaxed space-y-6 [&>p]:mb-6 [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-extrabold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>strong]:font-bold [&>strong]:text-gray-900 [&>a]:text-[#7928CA] [&>a]:font-semibold [&>blockquote]:border-l-4 [&>blockquote]:border-[#7928CA] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6"
            style={{
              overflowWrap: 'break-word',
              wordBreak: 'normal',
              hyphens: 'none',
              maxWidth: '100%'
            }}
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />

          {/* Article Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-purple-100/80 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#7928CA] font-bold text-sm px-5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-200 group"
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
import mongoose from "mongoose";
import Link from "next/link";
import { dbConnect } from "@/lib/db";
import Blog from "@/models/b2bBlog";

function cleanBlogContent(html) {
  if (!html) return "";

  return html
    .replace(/[\u00AD\u200B\u200C\u200D]/g, "")
    .replace(/&shy;/gi, "")
    .replace(/\s+/g, " ");
}

function FormattedTitle({ title }) {
  if (!title) return null;

  if (title.includes(":")) {
    const colonIndex = title.indexOf(":");
    const orangePart = title.substring(0, colonIndex + 1);
    const bluePart = title.substring(colonIndex + 1).trim();

    return (
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 leading-tight flex flex-col items-center gap-2 text-center break-words">
        <span style={{ color: '#7928CA' }}>{orangePart}</span>
        {bluePart && <span style={{ color: '#9333EA' }}>{bluePart}</span>}
      </h1>
    );
  }

  return (
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-center break-words" style={{ color: '#7928CA' }}>
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
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f7fc 0%, #ede9fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '45px', borderRadius: '24px', border: '1px solid rgba(121, 40, 202, 0.2)', boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)', textAlign: 'center', maxWidth: '500px', width: '100%' }}>
          <h2 style={{ color: '#7928CA', fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>Blog post not found!</h2>
          <Link href="/blog" style={{ color: '#9333EA', fontWeight: '700', fontSize: '14px', textDecoration: 'underline' }}>
            ← Return to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  const cleanContent = cleanBlogContent(blog.description);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f7fc 0%, #ede9fe 100%)', padding: '40px 15px', fontFamily: 'sans-serif' }}>
      <article className="max-w-4xl mt-18 mx-auto w-full bg-white p-5 sm:p-10 rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(121, 40, 202, 0.2)', boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)' }}>
        <div className="w-full">
          <header className="mb-10 text-center">
            <FormattedTitle title={blog.title} />
            <div className="w-20 h-1.5 mx-auto rounded-full" style={{ background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)' }}></div>
          </header>

          {blog.image && (
            <div className="relative w-full h-[250px] sm:h-[400px] md:h-[450px] mb-12 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Yeh styling text ko screen se bahir jaane se roke gi */}
          <div
            className="blog-content text-gray-700 text-base md:text-lg w-full leading-relaxed"
            style={{
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              maxWidth: '100%'
            }}
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />

          <div className="mt-16 pt-8 border-t border-purple-100 flex justify-between items-center">
            <Link
              href="/blog"
              style={{ color: '#7928CA', fontWeight: '700' }}
              className="hover:underline flex items-center gap-1"
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
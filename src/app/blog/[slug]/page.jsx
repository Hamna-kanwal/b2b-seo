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
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight flex flex-col items-center gap-2 text-center">
        <span className="text-[#ea5408]">{orangePart}</span>
        {bluePart && <span className="text-[#027cc1]">{bluePart}</span>}
      </h1>
    );
  }

  return (
    <h1 className="text-3xl md:text-5xl font-extrabold text-[#027cc1] mb-6 leading-tight text-center">
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

  if (blog) return blog;

  if (mongoose.Types.ObjectId.isValid(normalizedSlug)) {
    return Blog.findById(normalizedSlug).lean();
  }

  return null;
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="py-20 text-center text-gray-500 font-medium">
        <h2 className="text-2xl font-bold mb-4">Blog post not found!</h2>
        <Link href="/blog" className="text-[#027cc1] underline">
          ← Return to All Blogs
        </Link>
      </div>
    );
  }

  const cleanContent = cleanBlogContent(blog.description);

  return (
    <article className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <header className="mb-10 text-center">
          <span className="text-black font-bold text-sm uppercase tracking-wider mb-2 block">
            {blog.tag || "Service Article"}
          </span>

          <FormattedTitle title={blog.title} />

          <div className="w-20 h-1.5 bg-[#027cc1] mx-auto rounded-full"></div>
        </header>

        {blog.image && (
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className="blog-content text-gray-700 text-base md:text-lg w-full"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link
            href="/blog"
            className="text-[#ea5408] font-bold hover:underline flex items-center"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </div>
    </article>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });

        if (!res.ok) {
          throw new Error("Unable to load blogs");
        }

        const data = await res.json();

        if (data.success) {
          setBlogs(data.blogs || []);
        } else {
          setError(data.message || "Unable to load blogs right now.");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Unable to load blogs right now.");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#ea5408]">
            Insights & Updates
          </p>
          <h1 className="text-4xl font-extrabold text-[#027cc1] sm:text-5xl">
            SEO articles for growing businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Browse practical guidance, service updates, and strategy ideas to support
            your next growth milestone.
          </p>
        </div>

        {loading && (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-500">
            Loading articles...
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-500">
            No articles published yet. Check back soon.
          </div>
        )}

        {!loading && !error && blogs.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog._id || blog.slug}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="h-48 w-full bg-gradient-to-br from-[#027cc1] to-[#ea5408]" />
                )}

                <div className="p-6">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ea5408]">
                    {blog.tag || "Service Article"}
                  </p>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900">{blog.title}</h2>
                  <p className="mb-5 text-sm leading-6 text-gray-600">
                    {blog.excerpt || "Read more about this topic and how it can support your business."}
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="font-semibold text-[#027cc1] transition hover:underline"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

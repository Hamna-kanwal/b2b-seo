import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true }, // For the main rich text content
    excerpt: { type: String, required: true },     // Short summary text
    image: { type: String, required: true },       // To store base64 string or URL
    tag: { type: String, default: null },
    pagetitle: { type: String, default: null },     // SEO Meta title
    pageDescription: { type: String, default: null },// SEO Meta description
    keywords: { type: String, default: null },     // SEO Keywords
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const BLOG_COLLECTION = process.env.BLOG_COLLECTION || 'b2b2_blogs';
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema, BLOG_COLLECTION);

export default Blog;
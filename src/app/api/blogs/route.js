import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/db.js';
import Blog from '../../../../models/b2bBlog.js';

// 1. GET ALL BLOGS
function validateAdminToken(request) {
  const token = request.headers.get('x-admin-token');
  return token === 'authenticated_true';
}

export async function GET() {
  try {
    const connection = await dbConnect();

    if (!connection) {
      return NextResponse.json(
        { success: false, message: 'Database is not configured' },
        { status: 503 }
      );
    }

    // Fetch all blogs from the database and sort by newest first
    const blogs = await Blog.find().sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    console.error("GET BLOGS ERROR:", error.message);
    return NextResponse.json(
      { success: false, message: "Internal server error" }, 
      { status: 500 }
    );
  }
}

// 2. CREATE A NEW BLOG
export async function POST(request) {
  try {
    if (!validateAdminToken(request)) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const connection = await dbConnect();

    if (!connection) {
      return NextResponse.json(
        { success: false, message: 'Database is not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    
    const { 
      title, slug, description, excerpt, image,
      pagetitle, pageDescription, keywords 
    } = body;

    // Field validations (Just like your friend's logic)
    if (!title) return NextResponse.json({ success: false, message: "Title is required" }, { status: 400 });
    if (!slug) return NextResponse.json({ success: false, message: "Slug URL is required" }, { status: 400 });
    if (!description) return NextResponse.json({ success: false, message: "Description content is required" }, { status: 400 });
    if (!excerpt) return NextResponse.json({ success: false, message: "Excerpt summary is required" }, { status: 400 });
    if (!image) return NextResponse.json({ success: false, message: "Image is required" }, { status: 400 });

    // Base64 format validation from your friend's project
    if (typeof image === 'string' && !image.startsWith("data:image/")) {
      return NextResponse.json({
        success: false,
        message: "Invalid image format. Must be a valid base64 string"
      }, { status: 400 });
    }

    const newBlog = await Blog.create({
      title,
      slug,
      description,
      excerpt,
      image,
      pagetitle: pagetitle || null,
      pageDescription: pageDescription || null,
      keywords: keywords || null
    });

    return NextResponse.json({ 
      success: true, 
      message: "Blog created successfully", 
      blog: newBlog 
    }, { status: 201 });

  } catch (error) {
    console.error("CREATE BLOG ERROR:", error.message);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" }, 
      { status: 500 }
    );
  }
}
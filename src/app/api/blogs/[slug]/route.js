import { dbConnect } from '../../../../../lib/db';
import Blog from '@/models/b2bBlog';

function validateAdminToken(request) {
  const token = request.headers.get('x-admin-token');
  return token === 'authenticated_true';
}

// GET SINGLE BLOG BY SLUG
export async function GET(req, { params }) {
  try {
    await dbConnect();
    // Await params for dynamic route segments in Next.js
    const { slug } = await params;

    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return Response.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      );
    }

    return Response.json({ success: true, blog }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, message: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// UPDATE BLOG
export async function PUT(req, { params }) {
  try {
    if (!validateAdminToken(req)) {
      return Response.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    // Await params here as well
    const { slug } = await params;
    const body = await req.json();

    // Replaced deprecated `new: true` with `returnDocument: 'after'`
    const updatedBlog = await Blog.findOneAndUpdate({ slug }, body, { returnDocument: 'after' });

    if (!updatedBlog) {
      return Response.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    return Response.json({ success: true, blog: updatedBlog });
  } catch (error) {
    return Response.json({ success: false, message: 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE BLOG
export async function DELETE(req, { params }) {
  try {
    if (!validateAdminToken(req)) {
      return Response.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    // Await params here as well
    const { slug } = await params;
    
    const deleted = await Blog.findOneAndDelete({ slug });

    if (!deleted) {
      return Response.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    return Response.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    return Response.json({ success: false, message: 'Failed to delete blog' }, { status: 500 });
  }
}
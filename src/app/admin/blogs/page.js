'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const createSlug = (value) =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function AdminBlogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  const [editingSlug, setEditingSlug] = useState(null);
  const [initialFormData, setInitialFormData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const emptyFormData = {
    title: '',
    slug: '',
    excerpt: '',
    description: '',
    image: '',
    pagetitle: '',
    pageDescription: '',
    keywords: '',
  };

  const [formData, setFormData] = useState(emptyFormData);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3500);
  };

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    } else {
      fetchBlogs();
    }
  }, [router]);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const res = await fetch('/api/blogs', {
        headers: { 'X-Admin-Token': token },
      });
      if (!res.ok) return;
      const data = await res.json();
      if (data.success) setBlogs(data.blogs);
    } catch (err) {
      console.error('Failed to fetch blogs', err);
    }
  };

  const handleBackToDashboard = (e) => {
    e.preventDefault();
    window.location.href = '/admin';
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      // Automatically generate slug if not currently editing an existing post
      slug: !editingSlug ? createSlug(title) : prev.slug,
    }));
  };

  const handleSlugChange = (e) => {
    const slug = e.target.value;
    setFormData((prev) => ({ ...prev, slug }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        showToast('File size too large! Upload an image under 2MB.', 'error');
        e.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = (blog) => {
    const dataToSet = {
      title: blog.title || '',
      slug: blog.slug || '',
      excerpt: blog.excerpt || '',
      description: blog.description || '',
      image: blog.image || '',
      pagetitle: blog.pagetitle || '',
      pageDescription: blog.pageDescription || '',
      keywords: blog.keywords || '',
    };
    setEditingSlug(blog.slug);
    setFormData(dataToSet);
    setInitialFormData(dataToSet);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingSlug(null);
    setInitialFormData(null);
    setFormData(emptyFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingSlug && initialFormData) {
      const isUnchanged = JSON.stringify(formData) === JSON.stringify(initialFormData);
      if (isUnchanged) {
        showToast('No changes were made to the blog post.', 'error');
        return;
      }
    }

    setLoading(true);

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        showToast('Authentication required. Please sign in again.', 'error');
        router.push('/admin/login');
        return;
      }

      const slug = createSlug(formData.slug);
      if (!slug) {
        showToast('Please provide a valid URL slug for the blog.', 'error');
        setLoading(false);
        return;
      }

      const payload = { ...formData, slug };
      const isEditing = Boolean(editingSlug);
      const url = isEditing ? `/api/blogs/${editingSlug}` : '/api/blogs';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Token': token,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        showToast(isEditing ? 'Blog updated successfully!' : 'Blog published successfully!', 'success');
        resetForm();
        fetchBlogs();
      } else {
        showToast(`Error: ${data.message || 'Failed to save blog'}`, 'error');
      }
    } catch (err) {
      showToast('Failed to save blog', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        showToast('Authentication required. Please sign in again.', 'error');
        router.push('/admin/login');
        return;
      }

      const res = await fetch(`/api/blogs/${slug}`, {
        method: 'DELETE',
        headers: { 'X-Admin-Token': token },
      });
      const data = await res.json();
      if (data.success) {
        showToast('Blog deleted successfully!', 'error');
        fetchBlogs();
        if (editingSlug === slug) resetForm();
      } else {
        showToast(`Error: ${data.message || 'Failed to delete blog'}`, 'error');
      }
    } catch (err) {
      showToast('Failed to delete blog', 'error');
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'clean'],
    ],
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    marginTop: '6px',
    backgroundColor: '#faf5ff',
    color: '#1f2937',
    border: '1px solid #e9d5ff',
    borderRadius: '14px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s ease'
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f7fc 0%, #ede9fe 100%)', padding: '50px 20px', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {toast.show && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          backgroundColor: toast.type === 'success' ? '#10b981' : '#ef4444',
          color: '#ffffff',
          padding: '14px 24px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          fontWeight: '700',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          {toast.message}
        </div>
      )}

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ 
            background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            fontSize: '28px', 
            fontWeight: '800', 
            margin: 0 
          }}>
            Admin Panel - Manage Blogs
          </h1>
          
          <button
            type="button"
            onClick={handleBackToDashboard}
            style={{
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)',
              color: '#ffffff',
              borderRadius: '12px',
              border: 'none',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              zIndex: 999,
              position: 'relative',
              boxShadow: '0 8px 20px rgba(121, 40, 202, 0.3)'
            }}
          >
            ← Back to Dashboard
          </button>
        </div>

        <hr style={{ marginBottom: '35px', marginTop: '20px', border: 'none', borderTop: '2px solid rgba(147, 51, 234, 0.2)' }} />

        <section style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '24px', marginBottom: '40px', color: '#1f2937', border: '1px solid rgba(121, 40, 202, 0.2)', boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <h2 style={{ color: '#1f2937', margin: 0, fontSize: '20px', fontWeight: '700' }}>
              {editingSlug ? 'Edit Blog Post' : 'Create a New Blog'}
            </h2>
            {editingSlug && (
              <button
                type="button"
                onClick={resetForm}
                style={{ background: '#ef4444', color: '#ffffff', border: 'none', padding: '8px 14px', borderRadius: '10px', cursor: 'pointer', fontSize: '13px', fontWeight: '700' }}
              >
                Cancel Editing
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block' }}>Blog Title:</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="e.g., B2B SEO Content Strategy: Target Keywords & Article Outlines"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block' }}>URL Slug:</label>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={handleSlugChange}
                  placeholder="e.g., b2b-seo-target"
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, slug: createSlug(prev.slug) }))}
                  style={{
                    padding: '14px 16px',
                    marginTop: '6px',
                    backgroundColor: '#ede9fe',
                    color: '#7928CA',
                    border: '1px solid #e9d5ff',
                    borderRadius: '14px',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                  title="Clean up slug format"
                >
                  Format Slug
                </button>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#6b7280' }}>
                Use lowercase letters, numbers, and hyphens only. Click "Format Slug" to sanitize.
              </p>
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block' }}>Short Excerpt:</label>
              <input
                type="text"
                required
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Short summary for preview cards"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block' }}>Cover Image (Max 2MB):</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginTop: '8px', display: 'block', color: '#4b5563', fontSize: '13px' }} />
              
              {formData.image && (
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <small style={{ color: '#10b981', fontWeight: '700' }}>Image loaded / Preview:</small>
                  <img
                    src={formData.image}
                    alt="Cover Preview"
                    style={{ maxHeight: '150px', maxWidth: '250px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #e9d5ff' }}
                  />
                </div>
              )}
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Main Content:</label>
              <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e9d5ff', overflow: 'hidden' }}>
                <ReactQuill
                  theme="snow"
                  modules={quillModules}
                  value={formData.description}
                  onChange={(content) => setFormData((prev) => ({ ...prev, description: content }))}
                  placeholder="Write blog body text here..."
                  style={{ height: '250px', marginBottom: '45px' }}
                />
              </div>
            </div>

            <h3 style={{ marginTop: '10px', color: '#1f2937', fontSize: '18px', fontWeight: '700' }}>SEO Options (Optional)</h3>
            <div>
              <input
                type="text"
                placeholder="SEO Meta Page Title"
                value={formData.pagetitle}
                onChange={(e) => setFormData({ ...formData, pagetitle: e.target.value })}
                style={{ ...inputStyle, marginBottom: '12px' }}
              />
              <input
                type="text"
                placeholder="SEO Meta Page Description"
                value={formData.pageDescription}
                onChange={(e) => setFormData({ ...formData, pageDescription: e.target.value })}
                style={{ ...inputStyle, marginBottom: '12px' }}
              />
              <input
                type="text"
                placeholder="SEO Keywords (comma separated)"
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ padding: '15px 24px', background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', color: '#ffffff', border: 'none', borderRadius: '14px', cursor: 'pointer', fontSize: '14px', fontWeight: '700', marginTop: '10px', boxShadow: '0 10px 25px rgba(121, 40, 202, 0.4)' }}
            >
              {loading ? (editingSlug ? 'Updating...' : 'Publishing...') : (editingSlug ? 'Update Blog Post' : 'Publish Blog')}
            </button>
          </form>
        </section>

       <section style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '24px', border: '1px solid rgba(121, 40, 202, 0.2)', boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)' }}>
  <h2 style={{ color: '#1f2937', marginTop: 0, fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Existing Blogs</h2>
  {blogs.length === 0 ? (
    <p style={{ color: '#6b7280', fontSize: '14px' }}>No blogs published yet.</p>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {currentBlogs.map((blog) => (
        <div 
          key={blog._id} 
          style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth <= 640 ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems: window.innerWidth <= 640 ? 'flex-start' : 'center', 
            gap: '15px',
            padding: '18px 20px', 
            backgroundColor: '#faf5ff', 
            border: '1px solid #e9d5ff', 
            borderRadius: '16px' 
          }}
        >
          <div style={{ wordBreak: 'break-word', width: window.innerWidth <= 640 ? '100%' : 'auto' }}>
            <strong style={{ color: '#1f2937', fontSize: '16px', fontWeight: '700', display: 'block' }}>{blog.title}</strong>
            <p style={{ margin: '6px 0 0', color: '#6b7280', fontSize: '13px' }}>Slug: /{blog.slug}</p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            width: window.innerWidth <= 640 ? '100%' : 'auto', 
            justifyContent: window.innerWidth <= 640 ? 'flex-end' : 'flex-start' 
          }}>
            <button
              onClick={() => handleEditClick(blog)}
              style={{ 
                background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
                color: '#fff', 
                border: 'none', 
                padding: '8px 18px', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                fontWeight: '700', 
                fontSize: '13px',
                boxShadow: '0 4px 12px rgba(121, 40, 202, 0.25)'
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(blog.slug)}
              style={{ 
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', 
                color: '#fff', 
                border: 'none', 
                padding: '8px 18px', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                fontWeight: '700', 
                fontSize: '13px',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)'
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

            {totalPages > 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #e9d5ff',
                      borderRadius: '10px',
                      backgroundColor: currentPage === 1 ? '#f9fafb' : '#ffffff',
                      color: currentPage === 1 ? '#9ca3af' : '#7928CA',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      fontWeight: '700',
                      fontSize: '13px'
                    }}
                  >
                    « First
                  </button>

                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #e9d5ff',
                      borderRadius: '10px',
                      backgroundColor: currentPage === 1 ? '#f9fafb' : '#ffffff',
                      color: currentPage === 1 ? '#9ca3af' : '#7928CA',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      fontWeight: '700',
                      fontSize: '13px',
                      marginRight: '4px'
                    }}
                  >
                    ‹ Prev
                  </button>

                  {(() => {
                    const pages = [];
                    const range = 1;

                    for (let i = 1; i <= totalPages; i++) {
                      if (
                        i === 1 ||
                        i === totalPages ||
                        (i >= currentPage - range && i <= currentPage + range)
                      ) {
                        pages.push(
                          <button
                            key={i}
                            type="button"
                            onClick={() => setCurrentPage(i)}
                            style={{
                              padding: '8px 14px',
                              border: '1px solid #e9d5ff',
                              borderRadius: '10px',
                              backgroundColor: currentPage === i ? '#7928CA' : '#ffffff',
                              color: currentPage === i ? '#ffffff' : '#7928CA',
                              cursor: 'pointer',
                              fontWeight: '700',
                              fontSize: '13px',
                              minWidth: '40px'
                            }}
                          >
                            {i}
                          </button>
                        );
                      } else if (
                        i === currentPage - range - 1 ||
                        i === currentPage + range + 1
                      ) {
                        pages.push(
                          <span
                            key={`ellipsis-${i}`}
                            style={{
                              color: '#7928CA',
                              padding: '0 8px',
                              fontWeight: '700',
                              userSelect: 'none'
                            }}
                          >
                            ...
                          </span>
                        );
                      }
                    }
                    return pages;
                  })()}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #e9d5ff',
                      borderRadius: '10px',
                      backgroundColor: currentPage === totalPages ? '#f9fafb' : '#ffffff',
                      color: currentPage === totalPages ? '#9ca3af' : '#7928CA',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      fontWeight: '700',
                      fontSize: '13px',
                      marginLeft: '4px'
                    }}
                  >
                    Next ›
                  </button>

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #e9d5ff',
                      borderRadius: '10px',
                      backgroundColor: currentPage === totalPages ? '#f9fafb' : '#ffffff',
                      color: currentPage === totalPages ? '#9ca3af' : '#7928CA',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      fontWeight: '700',
                      fontSize: '13px'
                    }}
                  >
                    Last »
                  </button>

                </div>

                <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
                  Showing {indexOfFirstBlog + 1} to {Math.min(indexOfLastBlog, blogs.length)} of {blogs.length} entries
                </span>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  </div>
);
}
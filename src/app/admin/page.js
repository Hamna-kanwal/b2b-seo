'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboardHub() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication on load
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    // 1. Clear all local and session storage
    localStorage.removeItem('admin_token');
    localStorage.clear();
    sessionStorage.clear();

    // 2. Force a hard browser navigation to the login page
    window.location.replace('/admin/login');
  };

  if (!authenticated) return null;

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f7fc 0%, #ede9fe 100%)', 
      padding: '50px 20px', 
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <div>
            <h1 style={{ 
              margin: 0, 
              background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              fontSize: '30px', 
              fontWeight: '800' 
            }}>
              Admin Dashboard
            </h1>
            <p style={{ margin: '6px 0 0', color: '#6b7280', fontSize: '14px', fontWeight: '500' }}>
              Welcome back! Choose an option below to manage your site.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            style={{ 
              padding: '12px 22px', 
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', 
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '12px', 
              cursor: 'pointer', 
              fontWeight: '700',
              fontSize: '13px',
              letterSpacing: '0.5px',
              boxShadow: '0 8px 20px rgba(239, 68, 68, 0.3)',
              position: 'relative',
              zIndex: 999,
              transition: 'opacity 0.2s ease'
            }}
          >
            Sign Out
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '2px solid rgba(147, 51, 234, 0.2)', marginBottom: '40px' }} />

        {/* Dashboard Navigation Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* Card 1: Blog Management */}
          <Link href="/admin/blogs" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '35px 30px', 
              borderRadius: '24px', 
              border: '1px solid rgba(121, 40, 202, 0.2)', 
              boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)', 
              transition: 'all 0.25s ease', 
              cursor: 'pointer' 
            }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '24px', 
                marginBottom: '20px',
                boxShadow: '0 8px 20px rgba(121, 40, 202, 0.3)'
              }}>
                📝
              </div>
              <h2 style={{ color: '#1f2937', margin: '0 0 10px', fontSize: '20px', fontWeight: '700' }}>Manage Blogs</h2>
              <p style={{ color: '#6b7280', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>Create, publish, and delete blog articles shown on your website.</p>
            </div>
          </Link>

          {/* Card 2: Customer Queries */}
          <Link href="/admin/queries" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '35px 30px', 
              borderRadius: '24px', 
              border: '1px solid rgba(121, 40, 202, 0.2)', 
              boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)', 
              transition: 'all 0.25s ease', 
              cursor: 'pointer' 
            }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '24px', 
                marginBottom: '20px',
                boxShadow: '0 8px 20px rgba(121, 40, 202, 0.3)'
              }}>
                📨
              </div>
              <h2 style={{ color: '#1f2937', margin: '0 0 10px', fontSize: '20px', fontWeight: '700' }}>Customer Queries</h2>
              <p style={{ color: '#6b7280', margin: 0, fontSize: '14px', lineHeight: '1.6' }}>View and manage incoming contact form submissions from website visitors.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
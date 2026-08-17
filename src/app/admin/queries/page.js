'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminQueries() {
  const router = useRouter();
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    } else {
      fetchQueries();
    }
  }, [router]);

  const fetchQueries = async () => {
    try {
      const res = await fetch('/api/queries');
      if (!res.ok) return;
      const data = await res.json();
      if (data.success) {
        setQueries(data.queries);
      }
    } catch (err) {
      console.error('Failed to fetch queries', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToDashboard = (e) => {
    e.preventDefault();
    window.location.href = '/admin';
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentQueries = queries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(queries.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f7fc 0%, #ede9fe 100%)', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ 
            background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            fontSize: '28px', 
            fontWeight: '800', 
            margin: 0 
          }}>
            Admin Panel - Customer Queries
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

        {loading ? (
          <p style={{ color: '#6b7280', textAlign: 'center', padding: '20px', fontSize: '14px', fontWeight: '500' }}>Loading queries...</p>
        ) : queries.length === 0 ? (
          <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '24px', border: '1px solid rgba(121, 40, 202, 0.2)', boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '15px', fontWeight: '500' }}>No customer queries received yet.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '24px', border: '1px solid rgba(121, 40, 202, 0.2)', boxShadow: '0 10px 30px rgba(121, 40, 202, 0.06)' }}>
            <div
              style={{
                borderRadius: '16px',
                border: '1px solid #e9d5ff',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', color: '#1f2937' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', color: '#ffffff', textAlign: 'left' }}>
                    <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '700', minWidth: '100px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date</th>
                    <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '700', minWidth: '130px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Name</th>
                    <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '700', minWidth: '180px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email / Phone</th>
                    <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '700', minWidth: '180px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Website</th>
                    <th style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '700', minWidth: '220px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {currentQueries.map((q, idx) => (
                    <tr key={q._id || idx} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#faf5ff', borderBottom: '1px solid #e9d5ff' }}>
                      <td style={{ padding: '14px 16px', fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap', fontWeight: '500' }}>
                        {q.createdAt ? new Date(q.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td style={{ padding: '14px 16px', color: '#1f2937', fontSize: '14px', wordBreak: 'break-word' }}>
                        <strong style={{ fontWeight: '700' }}>{q.name || `${q.firstName || ''} ${q.lastName || ''}`.trim() || 'N/A'}</strong>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#1f2937', fontSize: '13px', wordBreak: 'break-all' }}>
                        {q.email}<br />
                        <small style={{ color: '#7928CA', fontWeight: '700', fontSize: '12px' }}>{q.phone || 'No phone'}</small>
                      </td>
                      <td style={{ padding: '14px 16px', color: '#1f2937', fontSize: '13px', wordBreak: 'break-all' }}>
                        {q.website ? (
                          <a href={q.website} target="_blank" rel="noopener noreferrer" style={{ color: '#7928CA', textDecoration: 'underline' }}>
                            {q.website}
                          </a>
                        ) : (
                          <span style={{ color: '#9ca3af' }}>No website</span>
                        )}
                      </td>
                      <td style={{ padding: '14px 16px', color: '#4b5563', fontSize: '13px', lineHeight: '1.5', wordBreak: 'break-word' }}>
                        {q.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(1)}
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
                    onClick={() => handlePageChange(currentPage - 1)}
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
                            onClick={() => handlePageChange(i)}
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
                    onClick={() => handlePageChange(currentPage + 1)}
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
                    onClick={() => handlePageChange(totalPages)}
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
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, queries.length)} of {queries.length} entries
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
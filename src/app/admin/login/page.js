'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Demo Hardcoded Credentials (You can move this to .env later)
    const ADMIN_EMAIL = 'b2bseo@gmail.com';
    const ADMIN_PASS = 'admin1234';

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      // Set session token in localStorage
      localStorage.setItem('admin_token', 'authenticated_true');
      router.push('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f7fc 0%, #ede9fe 100%)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px', 
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        width: '100%', 
        maxWidth: '420px', 
        padding: '45px 35px', 
        borderRadius: '28px', 
        boxShadow: '0 20px 40px rgba(121, 40, 202, 0.08)', 
        textAlign: 'center',
        border: '1px solid rgba(147, 51, 234, 0.1)'
      }}>
        
        {/* Brand / Logo Header Icon */}
        <div style={{ 
          width: '64px', 
          height: '64px', 
          background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 20px', 
          color: '#ffffff', 
          fontSize: '28px',
          boxShadow: '0 8px 20px rgba(121, 40, 202, 0.3)'
        }}>
          🔒
        </div>

        <h2 style={{ margin: '0 0 6px', color: '#1a1a1a', fontSize: '26px', fontWeight: '800' }}>Admin Portal</h2>
        <p style={{ margin: '0 0 30px', color: '#7928CA', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '700' }}>
          Login
        </p>

        {error && (
          <div style={{ backgroundColor: '#fef2f2', color: '#ef4444', padding: '12px', borderRadius: '10px', fontSize: '13px', marginBottom: '20px', fontWeight: '500', border: '1px solid #fee2e2' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          <div>
            <label style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                backgroundColor: '#faf5ff', 
                border: '1px solid #e9d5ff', 
                borderRadius: '14px', 
                fontSize: '14px', 
                color: '#1f2937', 
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '11px', fontWeight: '700', color: '#6b7280', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                backgroundColor: '#faf5ff', 
                border: '1px solid #e9d5ff', 
                borderRadius: '14px', 
                fontSize: '14px', 
                color: '#1f2937', 
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
            />
          </div>

          <button
            type="submit"
            style={{ 
              width: '100%', 
              padding: '15px', 
              background: 'linear-gradient(135deg, #7928CA 0%, #9333EA 100%)', 
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '14px', 
              fontWeight: '700', 
              fontSize: '13px', 
              letterSpacing: '0.8px',
              cursor: 'pointer', 
              marginTop: '10px', 
              boxShadow: '0 10px 25px rgba(121, 40, 202, 0.4)',
              transition: 'opacity 0.2s ease'
            }}
          >
            SIGN IN TO DASHBOARD
          </button>
        </form>
      </div>
    </div>
  );
}
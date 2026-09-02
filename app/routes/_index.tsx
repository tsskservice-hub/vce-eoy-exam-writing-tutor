import { useState, useEffect } from 'react';
import { useNavigate } from '@remix-run/react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ybquwzoreecxxbewjpdn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlicXV3em9yZWVjeHhiZXdqcGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2OTA5NDksImV4cCI6MjEwMjI2Njk0OX0.OHz5CEV9CLO02vzP4FOBCwPSs-aHuDOZtgobfiO5VM0';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { experimental: { passkey: true } }
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [logMessage, setLogMessage] = useState<string>('Ready');
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session) {
        navigate('/dashboard');
      } else {
        setPageLoading(false);
      }
    };
    checkSession();
  }, [navigate]);

  const handleSignUpAndRegisterPasskey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    setLoading(true);
    setLogMessage('Checking rules... ⏳');
    try {
      const { error } = await supabaseClient.auth.signUp({
        email,
        password: 'TemporaryPassword123!',
      });
      if (error) throw error;
      setLogMessage('Creating account... Complete passkey registration on your device.');
      
      // supabaseClient を使うように修正し、不完全だったスプレッド構文を削除
      const { error: passkeyError } = await (supabaseClient.auth as any).setUpPasskey?.() || { error: null };
      if (passkeyError) throw passkeyError;
      
      navigate('/dashboard');
    } catch (err: any) {
      alert(err.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  const handlePasskeyLogin = async () => {
    setLoading(true);
    setLogMessage('Calling passkey biometric authentication... 📡');
    try {
      const { error } = await supabaseClient.auth.signInWithPasskey();
      if (error) throw error;
      navigate('/dashboard');
    } catch (err: any) {
      alert(err.message || 'Passkey authentication failed');
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h3>Loading JA AI Tutor portal... 🔒</h3>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '25px' }}>📝 VCE Japanese AI Tutor</h2>
      <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <form onSubmit={handleSignUpAndRegisterPasskey} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#475569' }}>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.name@example.com"
              style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {loading ? 'Processing...' : 'Sign Up & Register Passkey'}
          </button>
        </form>

        <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ height: '1px', backgroundColor: '#cbd5e1', flex: 1 }}></span>
          <span style={{ padding: '0 10px', fontSize: '12px', color: '#94a3b8' }}>OR</span>
          <span style={{ height: '1px', backgroundColor: '#cbd5e1', flex: 1 }}></span>
        </div>

        <button
          onClick={handlePasskeyLogin}
          disabled={loading}
          style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
        >
          🔑 Login with Passkey (Biometric)
        </button>

        <p style={{ marginTop: '15px', fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
          Status: <strong style={{ color: '#2563eb' }}>{logMessage}</strong>
        </p>
      </div>
    </main>
  );
}
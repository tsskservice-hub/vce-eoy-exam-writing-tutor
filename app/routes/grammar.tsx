import React, { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';
import { vceGrammarCategories } from '~/data/vceGrammarData';

export default function GrammarPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      const reopen = sessionStorage.getItem('reopenModalTitle');
      if (reopen) {
        // ダッシュボードに戻ったときにモーダルを自動復帰
        navigate('/dashboard');
        return;
      }
    }
    navigate('/dashboard');
  };

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#0f172a' }}>📚 VCE Japanese Grammar Master</h1>
          <p style={{ fontSize: '14px', color: '#64748b', marginTop: '5px' }}>
            A comprehensive reference list of grammar patterns used for writing and reports.
          </p>
        </div>
        <button
          onClick={handleBack}
          style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', color: '#334155', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          ← Return to Dashboard
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {vceGrammarCategories.map((category, catIdx) => (
          <div key={catIdx} style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '15px', borderLeft: '4px solid #3b82f6', paddingLeft: '10px' }}>
              {category.categoryTitle}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {category.items.map((item) => (
                <div id={item.id} key={item.id} style={{ padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a', marginBottom: '4px' }}>
                    {item.pattern}
                  </div>
                  <div style={{ fontSize: '14px', color: '#475569', marginBottom: '8px' }}>
                    <strong>Meaning:</strong> {item.meaning}
                  </div>
                  {item.example && (
                    <div style={{ fontSize: '13px', color: '#2563eb', backgroundColor: '#eff6ff', padding: '8px', borderRadius: '4px', borderLeft: '3px solid #3b82f6' }}>
                      <strong>Example:</strong> {item.example}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


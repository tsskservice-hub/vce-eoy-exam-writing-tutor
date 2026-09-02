import { useState } from 'react';
import { Link } from '@remix-run/react';
import faqsData from '~/data/faqs.json';

const faqsCategories = faqsData as any[];

export default function FaqPage() {
  const [openIds, setOpenIds] = useState<{ [key: string]: boolean }>({});

  const toggleFaq = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#0f172a' }}>💬 FAQs - VCE Japanese exam guidelines</h1>
        </div>
        <Link to="/dashboard" style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', color: '#334155', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
          ← Dashboard
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {faqsCategories.map((category, catIdx) => (
          <div key={catIdx} style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '15px', borderLeft: '4px solid #2563eb', paddingLeft: '10px' }}>
              {category.category}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {category.questions.map((item: any) => {
                const isOpen = !!openIds[item.id];
                return (
                  <div key={item.id} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <button
                      onClick={() => toggleFaq(item.id)}
                      style={{
                        width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '10px 0',
                        fontSize: '15px', fontWeight: '600', color: '#334155', cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                      }}
                    >
                      <span>Q. {item.question}</span>
                      <span style={{ fontSize: '18px', color: '#64748b' }}>{isOpen ? '▲' : '▼'}</span>
                    </button>
                    {isOpen && (
                      <p style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', fontSize: '14px', lineHeight: '1.6', color: '#475569', marginTop: '5px' }}>
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


import React from 'react';
import { Link } from '@remix-run/react';

type TextTypeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalKey: string;
  title: string;
  purpose: string;
  structure: string[];
  sample?: string;
  sampleImage?: string;
};

function renderGrammarText(text: string, modalKey: string) {
  const grammarLinks: { [key: string]: string } = {
    'べきです': '/grammar#beki-desu',
    '〜べきだ': '/grammar#beki-desu',
    'ので': '/grammar#kara-node',
    'から': '/grammar#kara-node',
    '一方で': '/grammar#ippou',
    'によると': '/grammar#particles',
    'によると〜そうです': '/grammar#sou-desu-hearsay',
  };

  let matchedKey = Object.keys(grammarLinks).find(key => text.includes(key));

  if (matchedKey) {
    const parts = text.split(matchedKey);
    return (
      <span>
        {parts[0]}
        <Link
          to={grammarLinks[matchedKey]}
          style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 600 }}
          onClick={(e) => {
            e.stopPropagation();
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('reopenModalTitle', modalKey);
            }
          }}
        >
          {matchedKey}
        </Link>
        {parts[1]}
      </span>
    );
  }

  return text;
}

export default function TextTypeModal({
  isOpen,
  onClose,
  modalKey,
  title,
  purpose,
  structure,
  sample,
  sampleImage,
}: TextTypeModalProps) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        backgroundColor: '#fff', padding: '30px', borderRadius: '12px',
        maxWidth: '600px', width: '90%', maxHeight: '90vh', overflowY: 'auto',
        position: 'relative', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '15px', right: '15px',
          fontSize: '28px', border: 'none', background: 'none', cursor: 'pointer', color: '#64748b'
        }}>×</button>
        <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px', color: '#1e293b' }}>{title}</h3>
        <p style={{ marginBottom: '20px', fontSize: '15px', lineHeight: '1.6', color: '#334155' }}>
          <strong>Purpose:</strong> {purpose}
        </p>
        <div style={{ marginBottom: '20px' }}>
          <strong style={{ fontSize: '15px', display: 'block', marginBottom: '10px', color: '#1e293b' }}>Structure & Requirements:</strong>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '14px', lineHeight: '1.6', color: '#475569' }}>
            {structure.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{renderGrammarText(item, modalKey)}</li>
            ))}
          </ul>
        </div>
        {sampleImage && (
          <div style={{ marginTop: '20px', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
            <strong style={{ fontSize: '15px', display: 'block', marginBottom: '8px', color: '#1e293b' }}>Sample PDF:</strong>
            <a href={sampleImage} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: '#2563eb', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px'
            }}>
              📄 View Sample PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

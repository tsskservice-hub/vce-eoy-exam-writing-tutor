import { useState, useEffect } from 'react';
import { useNavigate, Link } from '@remix-run/react';
import { createClient } from '@supabase/supabase-js';
import TextTypeModal from '~/components/TextTypeModal';
import questionsData from '~/data/questions.json';

const questions = questionsData as any[];

const SUPABASE_URL = 'https://ybquwzoreecxxbewjpdn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlicXV3em9yZWVjeHhiZXdqcGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2OTA5NDksImV4cCI6MjEwMjI2Njk0OX0.OHz5CEV9CLO02vzP4FOBCwPSs-aHuDOZtgobfiO5VM0';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { experimental: { passkey: true } }
});

const vceKanjiList = [
  '一', '二', '三', '四', '五', '私', '日', '曜', '語', '学', '字', '勉', '強', '友', '家', '族',
  '校', '父', '母', '兄', '弟', '姉', '妹', '大', '小', '新', '古', '高', '安', '好', '明', '早',
  '広', '長', '多', '少', '行', '来', '見', '聞', '書', '話', '言', '読', '書', '食', '飲', '買',
  '時', '分', '半', '年', '月', '曜', '日', '今', '先', '毎', '週', '間', '朝', '昼', '晩', '夜'
];

const vceGrammarList = [
  "なければなりませんでした", "なければなりません", "なくてはいけません", "たくなかったです",
  "いたいと思っています", "にいったことがあります", "ことが好きじゃないです", "ことができました",
  "ことができます", "ことがはじまります", "ほうがいいです", "てもいいですか", "ていただけませんか",
  "てくださいませんか", "いでください", "かもしれません", "たのしみにしています", "にきょうみがあります",
  "としてしられています", "でゆう名です", "のおかげで、", "のほかに、", "だけでなく", "べきです",
  "べきじゃないです", "べきでした", "ましょう", "てください", "すぎます", "という", "のために",
  "まえに", "あとで", "から、", "ので、", "たら、", "ば、", "でも", "ても、", "けれど", "のに",
  "ながら", "なので、"
];

const modalData: { [key: string]: any } = {
  Article: {
    title: "Article (記事・きじ)",
    purpose: "Articles are used to inform, persuade, or entertain readers through a structured publication format.",
    structure: [
      "Items to include: Title, Author's name (fictional)",
      "Content: Introduction, Body, Conclusion",
      "Sentence style: Plain style in general"
    ],
    sampleImage: "/article.pdf"
  },
  Email: {
    title: "Email (Eメール)",
    purpose: "Emails are used to convey a message, consultation, or advice to a specific recipient.",
    structure: [
      "Items to include: Name of recipient, Subject line, Main text, Sender",
      "Sentence style: Polite or plain style"
    ],
    sampleImage: "/email.pdf"
  },
  Essay: {
    title: "Essay (作文・さくぶん)",
    purpose: "Essays are used to present and logically argue your own thoughts or reflections.",
    structure: [
      "Items to include: Topic, Author's name (fictional)",
      "Sentence style: Polite style or, Plain style"
    ],
    sampleImage: "/essay.pdf"
  }
};

function HighlightChecker() {
  const [text, setText] = useState('私は日本へ行って、日本語の勉強をたくさんしなければなりません。');

  const getHighlightedText = () => {
    let processedText = text;
    const placeholders: { [key: string]: string } = {};
    let placeholderIndex = 0;

    processedText = processedText
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const uniqueMatchedGrammar = new Set<string>();
    const uniqueMatchedKanji = new Set<string>();

    const sortedGrammar = [...vceGrammarList].sort((a, b) => b.length - a.length);
    for (const pattern of sortedGrammar) {
      if (processedText.includes(pattern)) {
        uniqueMatchedGrammar.add(pattern);
        const regex = new RegExp(pattern, 'g');
        processedText = processedText.replace(regex, () => {
          const key = `___GRAMMAR_${placeholderIndex}___`;
          placeholders[key] = `<span style="background-color: #d1fae5; color: #065f46; padding: 2px 4px; border-radius: 4px; font-weight: bold; border-bottom: 2px solid #059669;">${pattern}</span>`;
          placeholderIndex++;
          return key;
        });
      }
    }

    for (const kanji of vceKanjiList) {
      if (processedText.includes(kanji)) {
        uniqueMatchedKanji.add(kanji);
        const regex = new RegExp(kanji, 'g');
        processedText = processedText.replace(regex, () => {
          const key = `___KANJI_${placeholderIndex}___`;
          placeholders[key] = `<span style="background-color: #fef08a; color: #854d0e; padding: 2px 4px; border-radius: 4px; font-weight: bold; border-bottom: 2px solid #ca8a04;">${kanji}</span>`;
          placeholderIndex++;
          return key;
        });
      }
    }

    let html = processedText;
    for (const [key, val] of Object.entries(placeholders)) {
      html = html.replace(new RegExp(key, 'g'), val);
    }
    html = html.replace(/\\n/g, '<br />');

    return { html, kanjiCount: uniqueMatchedKanji.size, grammarCount: uniqueMatchedGrammar.size };
  };

  const { html, kanjiCount, grammarCount } = getHighlightedText();

  return (
    <div style={{ marginBottom: '40px', padding: '24px', borderRadius: '12px', border: '2px dashed #cbd5e1', backgroundColor: '#f8fafc' }}>
      <h2 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '8px', marginTop: '0' }}>✨ VCE Kanji & Grammar Checker</h2>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
        Paste text here to highlight unique VCE Kanji (🟡 Yellow) and VCE Grammar (🟢 Green)!
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '120px', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', boxSizing: 'border-box' }}
      />
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1, padding: '12px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b' }}>UNIQUE VCE KANJI</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#854d0e' }}>{kanjiCount}</div>
        </div>
        <div style={{ flex: 1, padding: '12px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b' }}>UNIQUE VCE GRAMMAR</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#065f46' }}>{grammarCount}</div>
        </div>
      </div>
      <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '15px', lineHeight: '1.8' }}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTextType, setActiveTextType] = useState('all');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (!session) {
        navigate('/');
      } else {
        setUserEmail(session.user.email || '');
        setLoading(false);
      }
    };
    checkSession();

    if (typeof window !== 'undefined') {
      const reopen = sessionStorage.getItem('reopenModalTitle');
      if (reopen) {
        setActiveModal(reopen);
        sessionStorage.removeItem('reopenModalTitle');
      }
    }
  }, [navigate]);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    navigate('/');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied problem description!');
  };

  const filteredQuestions = questions.filter(q => {
    const matchesCategory = activeCategory === 'all' || q.category === activeCategory;
    const matchesTextType = activeTextType === 'all' || q.textType === activeTextType;
    return matchesCategory && matchesTextType;
  });

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h3>Loading dashboard secure portal... 🔒</h3>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#0f172a' }}>📝 VCE Japanese AI Tutor</h1>
          <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Logged in as: <strong>{userEmail}</strong></p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/faq" style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', color: '#334155', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>💬 FAQs</Link>
          <Link to="/grammar" style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>📚 Grammar Master</Link>
          <button onClick={handleLogout} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>Logout</button>
        </div>
      </div>

      <HighlightChecker />

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '15px' }}>🎯 Practice Questions</h3>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
          {['all', 'Informative', 'Evaluative', 'Persuasive', 'Personal', 'Imaginative'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px',
                backgroundColor: activeCategory === cat ? '#2563eb' : '#e2e8f0',
                color: activeCategory === cat ? '#fff' : '#334155'
              }}
            >
              {cat === 'all' ? 'All Categories' : cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
          {['all', 'Article', 'Email', 'Essay', 'Journal', 'Message', 'Letter', 'Report', 'Review', 'Speech', 'Story'].map(type => (
            <button
              key={type}
              onClick={() => setActiveTextType(type)}
              style={{
                padding: '6px 12px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px',
                backgroundColor: activeTextType === type ? '#0f172a' : '#f1f5f9',
                color: activeTextType === type ? '#fff' : '#475569'
              }}
            >
              {type === 'all' ? 'All Styles' : type}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {filteredQuestions.map(q => (
            <div key={q.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', padding: '4px 8px', backgroundColor: '#eff6ff', color: '#1e40af', borderRadius: '4px', fontWeight: 'bold' }}>{q.category}</span>
                  <button
                    onClick={() => {
                      if (modalData[q.textType]) {
                        setActiveModal(q.textType);
                      } else {
                        alert(`Guidelines for ${q.textType} are under development!`);
                      }
                    }}
                    style={{ fontSize: '11px', padding: '4px 8px', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '4px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
                  >
                    📖 {q.textType} (Style Guide)
                  </button>
                </div>
                <p style={{ fontSize: '15px', color: '#0f172a', fontWeight: '600', marginBottom: '8px', lineHeight: '1.5' }}>{q.japanese}</p>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{q.english}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => copyToClipboard(q.japanese_original || q.japanese)}
                  style={{ padding: '8px 12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
                >
                  📋 Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && modalData[activeModal] && (
        <TextTypeModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          modalKey={activeModal}
          title={modalData[activeModal].title}
          purpose={modalData[activeModal].purpose}
          structure={modalData[activeModal].structure}
          sampleImage={modalData[activeModal].sampleImage}
        />
      )}
    </main>
  );
}


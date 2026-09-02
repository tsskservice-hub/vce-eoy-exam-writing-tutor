import {
  Link
} from "/build/_shared/chunk-3NZJRAYR.js";
import {
  createHotContext
} from "/build/_shared/chunk-42XV3QJ7.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/faq.tsx
var import_react = __toESM(require_react(), 1);

// app/data/faqs.json
var faqs_default = [
  {
    category: "Name Guidelines",
    questions: [
      {
        id: "faq_001",
        question: "Can I use my own name in the exam?",
        answer: "It is recommended to use a fictional name."
      },
      {
        id: "faq_002",
        question: "When writing a name, should I leave a space between the surname and the last name?",
        answer: "Yes, you should leave a space, and it is a good idea to write a middle dot (\u30FB) in that space."
      },
      {
        id: "faq_003",
        question: "Can the name be a Japanese name?",
        answer: "Yes, you can use a Japanese name."
      },
      {
        id: "faq_004",
        question: "Is it okay to write only the surname or only the given name?",
        answer: "Yes, writing just one of them should be fine."
      }
    ]
  },
  {
    category: "Word Count and Length",
    questions: [
      {
        id: "faq_005",
        question: "What happens if I don't write 400 characters?",
        answer: "The examiners will still read it, but it will certainly result in a deduction. The exact amount of point deduction is not publicly disclosed."
      },
      {
        id: "faq_006",
        question: "What happens if I write 500 characters or more?",
        answer: "The examiners will read it, but writing more does not automatically lead to a higher score. Whether you write within the word limit or exceed it, superficial content will lead to deductions. What is desired is rich, substantive content within the word limit. To achieve this, you need to make full use of VCE grammar and kanji."
      }
    ]
  },
  {
    category: "Kanji Usage",
    questions: [
      {
        id: "faq_007",
        question: "Does using a lot of kanji increase my score?",
        answer: "First and foremost, it is crucial that the kanji you write are error-free. Even if you write many kanji, incorrect ones defeat the purpose. Writing all possible vocabulary using mandatory VCE kanji is an important mindset for aiming for a high score."
      },
      {
        id: "faq_008",
        question: "Does writing kanji outside of the mandatory VCE list increase the score?",
        answer: "It might make a slightly positive impression, but the most important thing in your response is the overall content. Kanji are merely components that build it. If there is no content, your score will not increase."
      }
    ]
  },
  {
    category: "Text Types and Styles",
    questions: [
      {
        id: "faq_009",
        question: "I am not good at plain forms. Can I use polite forms for all text types?",
        answer: "To conclude, there should be no problem using polite forms for all text types. While diaries and stories are often written in plain forms, there are Japanese people who use polite forms for them as well."
      },
      {
        id: "faq_010",
        question: "Which one is the easiest text type?",
        answer: "Articles, reports, and reviews are the ones you can practice and become quite good at writing. Since these frequently appear in school SACs, you might already be somewhat familiar with them. Moreover, it is no exaggeration to say these text types are almost identical, and they are easier to tackle because there are fewer structural formats to memorize."
      },
      {
        id: "faq_011",
        question: "Which one is the hardest text type?",
        answer: "Stories are likely the hardest because creativity is required. If you are an imaginative writer, you may try it, but stories generally require adjectives and adverbs to enrich the narrative, and mastering them is difficult even for native Japanese speakers."
      }
    ]
  }
];

// app/routes/faq.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\faq.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\faq.tsx"
  );
  import.meta.hot.lastModified = "1788349068224.3816";
}
var faqsCategories = faqs_default;
function FaqPage() {
  _s();
  const [openIds, setOpenIds] = (0, import_react.useState)({});
  const toggleFaq = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      borderBottom: "1px solid #e2e8f0",
      paddingBottom: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
        fontSize: "26px",
        fontWeight: "bold",
        color: "#0f172a"
      }, children: "\u{1F4AC} FAQs - VCE Japanese exam guidelines" }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", style: {
        padding: "8px 16px",
        backgroundColor: "#e2e8f0",
        color: "#334155",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "bold"
      }, children: "\u2190 Dashboard" }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    }, children: faqsCategories.map((category, catIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      backgroundColor: "#fff",
      padding: "24px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: "15px",
        borderLeft: "4px solid #2563eb",
        paddingLeft: "10px"
      }, children: category.category }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }, children: category.questions.map((item) => {
        const isOpen = !!openIds[item.id];
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderBottom: "1px solid #f1f5f9",
          paddingBottom: "12px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => toggleFaq(item.id), style: {
            width: "100%",
            textAlign: "left",
            background: "none",
            border: "none",
            padding: "10px 0",
            fontSize: "15px",
            fontWeight: "600",
            color: "#334155",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "Q. ",
              item.question
            ] }, void 0, true, {
              fileName: "app/routes/faq.tsx",
              lineNumber: 113,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: "18px",
              color: "#64748b"
            }, children: isOpen ? "\u25B2" : "\u25BC" }, void 0, false, {
              fileName: "app/routes/faq.tsx",
              lineNumber: 114,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/faq.tsx",
            lineNumber: 99,
            columnNumber: 21
          }, this),
          isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            padding: "10px",
            backgroundColor: "#f8fafc",
            borderRadius: "6px",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#475569",
            marginTop: "5px"
          }, children: item.answer }, void 0, false, {
            fileName: "app/routes/faq.tsx",
            lineNumber: 119,
            columnNumber: 32
          }, this)
        ] }, item.id, true, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 95,
          columnNumber: 20
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this)
    ] }, catIdx, true, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 72,
      columnNumber: 51
    }, this)) }, void 0, false, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(FaqPage, "pPGw0QzHmZwYiALHyfzJ9g28BQM=");
_c = FaqPage;
var _c;
$RefreshReg$(_c, "FaqPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FaqPage as default
};
//# sourceMappingURL=/build/routes/faq-N5ZHMD5X.js.map

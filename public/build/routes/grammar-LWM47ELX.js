import {
  useNavigate
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

// app/routes/grammar.tsx
var import_react = __toESM(require_react(), 1);

// app/data/vceGrammarData.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\vceGrammarData.ts"
  );
  import.meta.hot.lastModified = "1787835591418.5537";
}
var vceGrammarCategories = [
  {
    categoryTitle: "1. VERB FORMS & CONJUGATIONS",
    items: [
      { id: "plain-form", pattern: "Plain Form", meaning: "Dictionary Form / Ru-form / U-form / Irregular verbs" },
      { id: "negative-form", pattern: "Negative Form", meaning: "Nai-form (\u301C\u306A\u3044)" },
      { id: "past-form", pattern: "Past Form", meaning: "Ta-form (\u301C\u305F)" },
      { id: "past-negative-form", pattern: "Past Negative Form", meaning: "Nakatta-form (\u301C\u306A\u304B\u3063\u305F)" },
      { id: "polite-form", pattern: "Polite Form", meaning: "Masu / Masen / Mashita / Masendeshita" },
      { id: "te-form", pattern: "Te-form", meaning: "Conjunctive / Linking (~\u3066 / \u301C\u3067)" },
      { id: "tara-form", pattern: "Tara-form", meaning: "Conditional (~\u305F\u3089)" },
      { id: "volitional-form", pattern: "Volitional Form", meaning: "Let's / Shall we (V-ou/you)" },
      { id: "tentative-form", pattern: "Tentative / Presumptive Form", meaning: "Darou / Deshou (\u301C\u3060\u308D\u3046 / \u301C\u3067\u3057\u3087\u3046)" },
      { id: "conjunctive-parallel", pattern: "Conjunctive Form & Parallel", meaning: "~te, ~de, ~ku, ~ni" },
      { id: "stem-form", pattern: "Stem Form", meaning: "Renyoukei / Base for attachments" }
    ]
  },
  {
    categoryTitle: "2. DESIRES, OPINIONS, ABILITIES & PREFERENCES",
    items: [
      { id: "tai-desu", pattern: "verb stem + \u305F\u3044\u3067\u3059 / \u305F\u3044\u3068\u601D\u3063\u3066\u3044\u307E\u3059", meaning: "want to + verb", example: "\u65E5\u672C\u306B\u884C\u304D\u305F\u3044\u3067\u3059\u3002" },
      { id: "tsumori-desu", pattern: "verb dictionary form + \u3064\u3082\u308A\u3067\u3059", meaning: "intend to + verb", example: "\u6765\u5E74\u3001\u5927\u5B66\u306B\u884C\u304F\u3064\u3082\u308A\u3067\u3059\u3002" },
      { id: "hou-ga-ii", pattern: "verb \u307B\u3046\u304C\u3044\u3044\u3067\u3059 / \u306A\u3044\u65B9\u304C\u3044\u3044\u3067\u3059", meaning: "had better / had better not + verb", example: "\u3082\u3063\u3068\u91CE\u83DC\u3092\u98DF\u3079\u305F\u307B\u3046\u304C\u3044\u3044\u3067\u3059\u3002" },
      { id: "potential", pattern: "noun + \u304C\u3067\u304D\u307E\u3059 / verb dictionary form + \u3053\u3068\u304C\u3067\u304D\u307E\u3059", meaning: "can do / can + verb", example: "\u65E5\u672C\u8A9E\u3092\u8A71\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002" },
      { id: "jyouzu-heta", pattern: "noun / verb + \u304C\u4E0A\u624B\u3067\u3059 / \u4E0B\u624B\u3067\u3059", meaning: "be good at / bad at", example: "\u6599\u7406\u3092\u4F5C\u308B\u306E\u304C\u4E0A\u624B\u3067\u3059\u3002" },
      { id: "yasui-nikui", pattern: "verb stem + \u3084\u3059\u3044 / \u3065\u3089\u3044 / \u306B\u304F\u3044", meaning: "easy / hard to + verb", example: "\u3053\u306E\u30DA\u30F3\u306F\u66F8\u304D\u3084\u3059\u3044\u3067\u3059\u3002" },
      { id: "suki-kirai", pattern: "noun / verb + \u304C\u597D\u304D\u3067\u3059 / \u304D\u3089\u3044\u3067\u3059", meaning: "like / dislike", example: "\u30B5\u30C3\u30AB\u30FC\u3092\u898B\u308B\u306E\u304C\u597D\u304D\u3067\u3059\u3002" },
      { id: "hoshii", pattern: "noun + \u304C\u307B\u3057\u3044\u3067\u3059", meaning: "want + noun", example: "\u65B0\u3057\u3044\u30D1\u30BD\u30B3\u30F3\u304C\u307B\u3057\u3044\u3067\u3059\u3002" }
    ]
  },
  {
    categoryTitle: "3. TENSE, ASPECT & ACTION PHASES",
    items: [
      { id: "te-imasu", pattern: "verb \u3066 form + \u3044\u307E\u3059", meaning: "is, am, are + verbing / state", example: "\u4ECA\u3001\u672C\u3092\u8AAD\u3093\u3067\u3044\u307E\u3059\u3002" },
      { id: "hajimemashita", pattern: "verb stem form + \u306F\u3058\u3081\u307E\u3057\u305F / \u304A\u3048\u307E\u3057\u305F", meaning: "started to / finished + verbing", example: "\u96E8\u304C\u964D\u308A\u306F\u3058\u3081\u307E\u3057\u305F\u3002" },
      { id: "ni-kimasu", pattern: "verb stem form + \u306B\u6765\u307E\u3059 / \u884C\u304D\u307E\u3059", meaning: "come / go to + verb", example: "\u6620\u753B\u3092\u898B\u306B\u884C\u304D\u307E\u3059\u3002" },
      { id: "te-shimaimasu", pattern: "verb dictionary form + \u3066\u3057\u307E\u3044\u307E\u3059", meaning: "completion / regret", example: "\u5BBF\u984C\u3092\u5168\u90E8\u3084\u3063\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002" },
      { id: "tameshitemiru", pattern: "verb \u3066 form + \u307F\u307E\u3059 / \u8A66\u3057\u3066\u307F\u307E\u3059", meaning: "try to + verb", example: "\u3053\u306E\u6599\u7406\u3092\u98DF\u3079\u3066\u307F\u307E\u3059\u3002" },
      { id: "koto-ga-arimasu", pattern: "past positive form + \u3053\u3068\u304C\u3042\u308A\u307E\u3059", meaning: "have the experience of + verbed", example: "\u65E5\u672C\u306B\u884C\u3063\u305F\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002" }
    ]
  },
  {
    categoryTitle: "4. PERMISSION, PROHIBITION & OBLIGATION",
    items: [
      { id: "te-mo-ii-desu", pattern: "verb \u3066 form + \u3082\u3044\u3044\u3067\u3059 / \u3082\u3044\u3044\u3067\u3059\u304B", meaning: "be allowed to / May I...?", example: "\u3053\u3053\u306B\u5EA7\u3063\u3066\u3082\u3044\u3044\u3067\u3059\u304B\u3002" },
      { id: "te-wa-ikemasen", pattern: "verb \u3066 form + \u306F\u3044\u3051\u307E\u305B\u3093 / \u3066\u306F\u3060\u3081\u3067\u3059", meaning: "must not + verb", example: "\u3053\u3053\u3067\u5199\u771F\u3092\u64AE\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002" },
      { id: "nakereba-narimasen", pattern: "verb \u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093", meaning: "must / have to + verb", example: "\u5BBF\u984C\u3092\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002" },
      { id: "nakutemo-ii-desu", pattern: "verb \u306A\u304F\u3066\u3082\u3044\u3044\u3067\u3059", meaning: "do not have to + verb", example: "\u660E\u65E5\u3001\u65E9\u304F\u6765\u306A\u304F\u3066\u3082\u3044\u3044\u3067\u3059\u3002" },
      { id: "beki-desu", pattern: "verb beki desu / \u3079\u304D\u3058\u3083\u306A\u3044\u3067\u3059", meaning: "should / should not + verb", example: "\u3082\u3063\u3068\u65E5\u672C\u8A9E\u3092\u52C9\u5F37\u3059\u308B\u3079\u304D\u3067\u3059\u3002" }
    ]
  },
  {
    categoryTitle: "5. REQUESTS, INSTRUCTIONS & INVITATIONS",
    items: [
      { id: "mashou", pattern: "verb stem form + \u307E\u3057\u3087\u3046 / \u307E\u3057\u3087\u3046\u304B", meaning: "Let's / Shall we + verb", example: "\u4E00\u7DD2\u306B\u5E30\u308A\u307E\u3057\u3087\u3046\u3002" },
      { id: "masenka", pattern: "verb stem form + \u307E\u305B\u3093\u304B", meaning: "Why don't you + verb?", example: "\u30B3\u30FC\u30D2\u30FC\u3092\u98F2\u307F\u307E\u305B\u3093\u304B\u3002" },
      { id: "te-kudasai", pattern: "verb \u3066 form + \u304F\u3060\u3055\u3044 / \u306A\u3044\u3067\u304F\u3060\u3055\u3044", meaning: "Please / Please don't + verb", example: "\u3053\u3053\u306B\u540D\u524D\u3092\u66F8\u3044\u3066\u304F\u3060\u3055\u3044\u3002" },
      { id: "te-kudasaimasen-ka", pattern: "verb \u3066 form + \u304F\u3060\u3055\u3044\u307E\u305B\u3093\u304B / \u3044\u305F\u3060\u3051\u307E\u305B\u3093\u304B", meaning: "Would you be able to + verb?", example: "\u3053\u308C\u3092\u624B\u4F1D\u3063\u3066\u3044\u305F\u3060\u3051\u307E\u305B\u3093\u304B\u3002" },
      { id: "kata", pattern: "verb stem form + \u304B\u305F", meaning: "how to + verb + noun", example: "\u6F22\u5B57\u306E\u66F8\u304D\u304B\u305F\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044\u3002" }
    ]
  },
  {
    categoryTitle: "6. COMPARISON & DEGREE",
    items: [
      { id: "no-hou-ga", pattern: "noun + \u306E\u307B\u3046\u304C noun + \u3088\u308A adjective", meaning: "A is more adjective than B", example: "\u308A\u3093\u3054\u306E\u307B\u3046\u304C\u30D0\u30CA\u30CA\u3088\u308A\u5927\u304D\u3044\u3067\u3059\u3002" },
      { id: "hodo", pattern: "noun + \u306F noun + \u307B\u3069 adjective (\u5426\u5B9A)", meaning: "A is not as adjective as B", example: "\u4ECA\u65E5\u306F\u6628\u65E5\u307B\u3069\u5BD2\u304F\u306A\u3044\u3067\u3059\u3002" },
      { id: "ichiban", pattern: "noun + \u306F\u4E00\u756A adjective", meaning: "A is the most adjective", example: "\u3053\u308C\u304C\u4E00\u756A\u7F8E\u5473\u3057\u3044\u3067\u3059\u3002" },
      { id: "sugimasu", pattern: "stem + \u3059\u304E\u307E\u3059", meaning: "too much", example: "\u3053\u306E\u670D\u306F\u5C0F\u3055\u3059\u304E\u307E\u3059\u3002" }
    ]
  },
  {
    categoryTitle: "7. MODIFIERS, CLAUSES & NOUN LINKING",
    items: [
      { id: "relative-clause", pattern: "Relative Clause: plain form + noun", meaning: "relative clause (who / which / that)", example: "\u6628\u65E5\u98DF\u3079\u305F\u5BFF\u53F8\u306F\u7F8E\u5473\u3057\u304B\u3063\u305F\u3067\u3059\u3002" },
      { id: "to-iu", pattern: "noun + \u3068\u3044\u3046 + noun", meaning: "A called B", example: "\u300C\u3059\u305A\u3081\u300D\u3068\u3044\u3046\u6620\u753B\u3092\u898B\u307E\u3057\u305F\u3002" },
      { id: "tame-ni", pattern: "verb dictionary form + \u305F\u3081\u306B", meaning: "in order to + verb", example: "\u65E5\u672C\u8A9E\u3092\u52C9\u5F37\u3059\u308B\u305F\u3081\u306B\u3001\u65E5\u672C\u306B\u884C\u304D\u307E\u3059\u3002" },
      { id: "toki", pattern: "dictionary form / past + \u3068\u304D", meaning: "when...", example: "\u65E5\u672C\u306B\u884C\u3063\u305F\u3068\u304D\u3001\u5BFF\u53F8\u3092\u98DF\u3079\u307E\u3057\u305F\u3002" },
      { id: "nagara", pattern: "verb stem form + \u306A\u304C\u3089", meaning: "while + verbing", example: "\u97F3\u697D\u3092\u805E\u304D\u306A\u304C\u3089\u52C9\u5F37\u3057\u307E\u3059\u3002" },
      { id: "dake-de-naku", pattern: "noun + \u3060\u3051\u3067\u306A\u304F + noun + \u3082", meaning: "not only A but also B", example: "\u65E5\u672C\u8A9E\u3060\u3051\u3067\u306A\u304F\u3001\u82F1\u8A9E\u3082\u8A71\u305B\u307E\u3059\u3002" }
    ]
  },
  {
    categoryTitle: "8. COMPLEX SENTENCES, REASONS & HYPOTHESES",
    items: [
      { id: "kara-node", pattern: "sentence + \u304B\u3089 / \u306E\u3067 + sentence", meaning: "sentence A because sentence B", example: "\u96E8\u304C\u964D\u3063\u3066\u3044\u308B\u306E\u3067\u3001\u51FA\u304B\u3051\u307E\u305B\u3093\u3002" },
      { id: "okage-de", pattern: "noun + \u306E\u304A\u304B\u3052\u3067", meaning: "thanks to noun", example: "\u5148\u751F\u306E\u304A\u304B\u3052\u3067\u3001\u5408\u683C\u3067\u304D\u307E\u3057\u305F\u3002" },
      { id: "tara-conditional", pattern: "past positive form + \u3089 + sentence", meaning: "if sentence", example: "\u6642\u9593\u304C\u3042\u3063\u305F\u3089\u3001\u6620\u753B\u3092\u898B\u307E\u3059\u3002" },
      { id: "ga-noni-keredo", pattern: "sentence + \u304C / \u306E\u306B / \u3051\u308C\u3069 + sentence", meaning: "A, but B", example: "\u52C9\u5F37\u3057\u307E\u3057\u305F\u304C\u3001\u8A66\u9A13\u306F\u96E3\u3057\u304B\u3063\u305F\u3067\u3059\u3002" },
      { id: "sou-desu-hearsay", pattern: "plain form + \u305D\u3046\u3067\u3059 / \u3089\u3057\u3044\u3067\u3059", meaning: "They say that + sentence (hearsay)", example: "\u660E\u65E5\u306F\u96E8\u304C\u964D\u308B\u305D\u3046\u3067\u3059\u3002" },
      { id: "kamoshiremasen", pattern: "plain form + \u304B\u3082\u3057\u308C\u307E\u305B\u3093", meaning: "may / might + verb", example: "\u660E\u65E5\u306F\u96E8\u304C\u964D\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002" }
    ]
  },
  {
    categoryTitle: "9. PARTICLES, CONNECTORS & IDIOMS",
    items: [
      { id: "particles", pattern: "\u306F, \u304C, \u306E, \u306B, \u3078, \u3092, \u3067, \u3068, \u3084, \u304B, \u3082, \u3088\u308A, \u306A\u3069", meaning: "Basic particles (topic, subject, location, etc.)", example: "\u5B66\u6821\u3067\u53CB\u9054\u3068\u65E5\u672C\u8A9E\u3092\u52C9\u5F37\u3057\u307E\u3059\u3002" },
      { id: "tatouba", pattern: "\u305F\u3068\u3048\u3070\u3001 / \u3057\u304B\u3057\u3001 / \u307E\u305F\u3001 / \u305D\u3057\u3066\u3001", meaning: "Transition words (For example, However, Also, And)", example: "\u65E5\u672C\u306E\u98DF\u3079\u7269\u306F\u7F8E\u5473\u3057\u3044\u3067\u3059\u3002\u305F\u3068\u3048\u3070\u3001\u5BFF\u53F8\u3084\u30E9\u30FC\u30E1\u30F3\u304C\u3042\u308A\u307E\u3059\u3002" },
      { id: "ippou", pattern: "\u4E00\u65B9\u3001 (ni-yoru to)", meaning: "On the other hand / According to", example: "\u90FD\u5E02\u90E8\u306F\u4EBA\u53E3\u304C\u5897\u3048\u3066\u3044\u307E\u3059\u3002\u4E00\u65B9\u3001\u5730\u65B9\u306F\u6E1B\u3063\u3066\u3044\u307E\u3059\u3002" },
      { id: "ni-tsuite", pattern: "noun + \u306B\u3064\u3044\u3066", meaning: "about / regarding noun", example: "\u65E5\u672C\u306E\u74B0\u5883\u554F\u984C\u306B\u3064\u3044\u3066\u767A\u8868\u3057\u307E\u3059\u3002" }
    ]
  }
];

// app/routes/grammar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\grammar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\grammar.tsx"
  );
  import.meta.hot.lastModified = "1788349056431.563";
}
function GrammarPage() {
  _s();
  const navigate = useNavigate();
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, []);
  const handleBack = () => {
    if (typeof window !== "undefined") {
      const reopen = sessionStorage.getItem("reopenModalTitle");
      if (reopen) {
        navigate("/dashboard");
        return;
      }
    }
    navigate("/dashboard");
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
          fontSize: "26px",
          fontWeight: "bold",
          color: "#0f172a"
        }, children: "\u{1F4DA} VCE Japanese Grammar Master" }, void 0, false, {
          fileName: "app/routes/grammar.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          fontSize: "14px",
          color: "#64748b",
          marginTop: "5px"
        }, children: "A comprehensive reference list of grammar patterns used for writing and reports." }, void 0, false, {
          fileName: "app/routes/grammar.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/grammar.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleBack, style: {
        padding: "8px 16px",
        backgroundColor: "#e2e8f0",
        color: "#334155",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold"
      }, children: "\u2190 Return to Dashboard" }, void 0, false, {
        fileName: "app/routes/grammar.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/grammar.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    }, children: vceGrammarCategories.map((category, catIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
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
        borderLeft: "4px solid #3b82f6",
        paddingLeft: "10px"
      }, children: category.categoryTitle }, void 0, false, {
        fileName: "app/routes/grammar.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }, children: category.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: item.id, style: {
        padding: "15px",
        backgroundColor: "#f8fafc",
        borderRadius: "8px",
        border: "1px solid #f1f5f9"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#0f172a",
          marginBottom: "4px"
        }, children: item.pattern }, void 0, false, {
          fileName: "app/routes/grammar.tsx",
          lineNumber: 124,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "14px",
          color: "#475569",
          marginBottom: "8px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Meaning:" }, void 0, false, {
            fileName: "app/routes/grammar.tsx",
            lineNumber: 137,
            columnNumber: 21
          }, this),
          " ",
          item.meaning
        ] }, void 0, true, {
          fileName: "app/routes/grammar.tsx",
          lineNumber: 132,
          columnNumber: 19
        }, this),
        item.example && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          fontSize: "13px",
          color: "#2563eb",
          backgroundColor: "#eff6ff",
          padding: "8px",
          borderRadius: "4px",
          borderLeft: "3px solid #3b82f6"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Example:" }, void 0, false, {
            fileName: "app/routes/grammar.tsx",
            lineNumber: 147,
            columnNumber: 23
          }, this),
          " ",
          item.example
        ] }, void 0, true, {
          fileName: "app/routes/grammar.tsx",
          lineNumber: 139,
          columnNumber: 36
        }, this)
      ] }, item.id, true, {
        fileName: "app/routes/grammar.tsx",
        lineNumber: 118,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/grammar.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this)
    ] }, catIdx, true, {
      fileName: "app/routes/grammar.tsx",
      lineNumber: 97,
      columnNumber: 57
    }, this)) }, void 0, false, {
      fileName: "app/routes/grammar.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/grammar.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(GrammarPage, "0pNeyzXk/ByIxyERsdaIrG6js9s=", false, function() {
  return [useNavigate];
});
_c = GrammarPage;
var _c;
$RefreshReg$(_c, "GrammarPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GrammarPage as default
};
//# sourceMappingURL=/build/routes/grammar-LWM47ELX.js.map

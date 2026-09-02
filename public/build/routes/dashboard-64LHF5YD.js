import {
  createClient
} from "/build/_shared/chunk-JJUTWCRW.js";
import {
  Link,
  useNavigate
} from "/build/_shared/chunk-J775QB4S.js";
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

// app/routes/dashboard.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/TextTypeModal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TextTypeModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TextTypeModal.tsx"
  );
  import.meta.hot.lastModified = "1788348425019.3635";
}
function renderGrammarText(text, modalKey) {
  const grammarLinks = {
    "\u3079\u304D\u3067\u3059": "/grammar#beki-desu",
    "\u301C\u3079\u304D\u3060": "/grammar#beki-desu",
    "\u306E\u3067": "/grammar#kara-node",
    "\u304B\u3089": "/grammar#kara-node",
    "\u4E00\u65B9\u3067": "/grammar#ippou",
    "\u306B\u3088\u308B\u3068": "/grammar#particles",
    "\u306B\u3088\u308B\u3068\u301C\u305D\u3046\u3067\u3059": "/grammar#sou-desu-hearsay"
  };
  let matchedKey = Object.keys(grammarLinks).find((key) => text.includes(key));
  if (matchedKey) {
    const parts = text.split(matchedKey);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      parts[0],
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: grammarLinks[matchedKey], style: {
        color: "#2563eb",
        textDecoration: "underline",
        fontWeight: 600
      }, onClick: (e) => {
        e.stopPropagation();
        if (typeof window !== "undefined") {
          sessionStorage.setItem("reopenModalTitle", modalKey);
        }
      }, children: matchedKey }, void 0, false, {
        fileName: "app/components/TextTypeModal.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      parts[1]
    ] }, void 0, true, {
      fileName: "app/components/TextTypeModal.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
  return text;
}
function TextTypeModal({
  isOpen,
  onClose,
  modalKey,
  title,
  purpose,
  structure,
  sample,
  sampleImage
}) {
  if (!isOpen)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: onClose, style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1e3
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: (e) => e.stopPropagation(), style: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "90%",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, style: {
      position: "absolute",
      top: "15px",
      right: "15px",
      fontSize: "28px",
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "#64748b"
    }, children: "\xD7" }, void 0, false, {
      fileName: "app/components/TextTypeModal.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#1e293b"
    }, children: title }, void 0, false, {
      fileName: "app/components/TextTypeModal.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      marginBottom: "20px",
      fontSize: "15px",
      lineHeight: "1.6",
      color: "#334155"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Purpose:" }, void 0, false, {
        fileName: "app/components/TextTypeModal.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      " ",
      purpose
    ] }, void 0, true, {
      fileName: "app/components/TextTypeModal.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginBottom: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { style: {
        fontSize: "15px",
        display: "block",
        marginBottom: "10px",
        color: "#1e293b"
      }, children: "Structure & Requirements:" }, void 0, false, {
        fileName: "app/components/TextTypeModal.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: {
        paddingLeft: "20px",
        listStyleType: "disc",
        fontSize: "14px",
        lineHeight: "1.6",
        color: "#475569"
      }, children: structure.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: {
        marginBottom: "6px"
      }, children: renderGrammarText(item, modalKey) }, idx, false, {
        fileName: "app/components/TextTypeModal.tsx",
        lineNumber: 129,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/components/TextTypeModal.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/TextTypeModal.tsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    sampleImage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginTop: "20px",
      borderTop: "1px solid #e2e8f0",
      paddingTop: "15px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { style: {
        fontSize: "15px",
        display: "block",
        marginBottom: "8px",
        color: "#1e293b"
      }, children: "Sample PDF:" }, void 0, false, {
        fileName: "app/components/TextTypeModal.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: sampleImage, target: "_blank", rel: "noopener noreferrer", style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: "#2563eb",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "14px"
      }, children: "\u{1F4C4} View Sample PDF" }, void 0, false, {
        fileName: "app/components/TextTypeModal.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/TextTypeModal.tsx",
      lineNumber: 134,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TextTypeModal.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/TextTypeModal.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_c = TextTypeModal;
var _c;
$RefreshReg$(_c, "TextTypeModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/questions.json
var questions_default = [
  {
    id: 1,
    category: "Informative",
    textType: "Speech",
    english: "You are an exchange student at a sister school in Japan. Write a speech script in Japanese for the whole school assembly, explaining how Australian high school students participate in volunteer activities during their holidays and after school, and what they gain from these experiences.",
    japanese: "\u65E5\u672C\u306E\u59C9\u59B9\u6821\u306E<ruby>\u5168\u6821<rt>\u305C\u3093\u3053\u3046</rt></ruby><ruby>\u96C6\u4F1A<rt>\u3057\u3085\u3046\u304B\u3044</rt></ruby>\u3067\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u304C\u4F11\u307F\u306E\u65E5\u3084<ruby>\u653E\u8AB2\u5F8C<rt>\u307B\u3046\u304B\u3054</rt></ruby>\u306B\u3069\u306E\u3088\u3046\u306B\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u6D3B\u52D5\u306B<ruby>\u53C2\u52A0<rt>\u3055\u3093\u304B</rt></ruby>\u3057\u3066\u3044\u308B\u304B\u3001\u307E\u305F\u305D\u3053\u304B\u3089\u4F55\u3092\u5B66\u3076\u304B\u306B\u3064\u3044\u3066<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u306E<ruby>\u539F\u7A3F<rt>\u3052\u3093\u3053\u3046</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u59C9\u59B9\u6821\u306E\u5168\u6821\u96C6\u4F1A\u3067\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u304C\u4F11\u307F\u306E\u65E5\u3084\u653E\u8AB2\u5F8C\u306B\u3069\u306E\u3088\u3046\u306B\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u6D3B\u52D5\u306B\u53C2\u52A0\u3057\u3066\u3044\u308B\u304B\u3001\u307E\u305F\u305D\u3053\u304B\u3089\u4F55\u3092\u5B66\u3076\u304B\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u306E\u539F\u7A3F\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 2,
    category: "Informative",
    textType: "Article",
    english: "Write an article in Japanese for the online newsletter of your Japanese sister school, introducing the culture and art of Australia\u2019s Indigenous peoples and explaining why it is important for young people to learn about them.",
    japanese: "\u65E5\u672C\u306E\u59C9\u59B9\u6821\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u30CB\u30E5\u30FC\u30B9\u30EC\u30BF\u30FC\u306E\u305F\u3081\u306B\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u5148\u4F4F\u6C11<rt>\u305B\u3093\u3058\u3085\u3046\u307F\u3093</rt></ruby>\u65CF\u306E<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u3084\u30A2\u30FC\u30C8\u306B\u3064\u3044\u3066<ruby>\u7D39\u4ECB<rt>\u3057\u3087\u3046\u304B\u3044</rt></ruby>\u3057\u3001<ruby>\u82E5<rt>\u308F\u304B</rt></ruby>\u3044\u4EBA\u304C\u305D\u308C\u3089\u3092\u5B66\u3076\u3053\u3068\u304C\u306A\u305C<ruby>\u5927\u5207<rt>\u305F\u3044\u305B\u3064</rt></ruby>\u304B<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u59C9\u59B9\u6821\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u30CB\u30E5\u30FC\u30B9\u30EC\u30BF\u30FC\u306E\u305F\u3081\u306B\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u5148\u4F4F\u6C11\u65CF\u306E\u6587\u5316\u3084\u30A2\u30FC\u30C8\u306B\u3064\u3044\u3066\u7D39\u4ECB\u3057\u3001\u82E5\u3044\u4EBA\u304C\u305D\u308C\u3089\u3092\u5B66\u3076\u3053\u3068\u304C\u306A\u305C\u5927\u5207\u304B\u8AAC\u660E\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 3,
    category: "Informative",
    textType: "Email",
    english: "Write an email to a friend in Japan who is planning to come to Australia for a short-term study exchange, explaining what kind of clothes they should bring and what the local climate is like.",
    japanese: "\u65E5\u672C\u304B\u3089\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306B<ruby>\u77ED\u671F<rt>\u305F\u3093\u304D</rt></ruby><ruby>\u7559\u5B66<rt>\u308A\u3085\u3046\u304C\u304F</rt></ruby>\u3059\u308B<ruby>\u4E88\u5B9A<rt>\u3088\u3066\u3044</rt></ruby>\u306E\u53CB\u4EBA\u306B\u3001\u3069\u306E\u3088\u3046\u306A<ruby>\u670D<rt>\u3075\u304F</rt></ruby>\u3092\u6301\u3063\u3066\u304F\u308C\u3070\u3088\u3044\u304B\u3001\u307E\u305F<ruby>\u73FE\u5730<rt>\u3052\u3093\u3061</rt></ruby>\u306E<ruby>\u6C17\u5019<rt>\u304D\u3053\u3046</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u304B\u3089\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306B\u77ED\u671F\u7559\u5B66\u3059\u308B\u4E88\u5B9A\u306E\u53CB\u4EBA\u306B\u3001\u3069\u306E\u3088\u3046\u306A\u670D\u3092\u6301\u3063\u3066\u304F\u308C\u3070\u3088\u3044\u304B\u3001\u307E\u305F\u73FE\u5730\u306E\u6C17\u5019\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 4,
    category: "Informative",
    textType: "Speech",
    english: "Deliver a speech to your entire school about the privacy issues teenagers face when using social media and how to use it safely.",
    japanese: "\u9AD8\u6821\u751F\u304C\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2\u3092\u4F7F\u3046\u3068\u304D\u306B\u3076\u3064\u304B\u308B\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u306E<ruby>\u554F\u984C<rt>\u3082\u3093\u3060\u3044</rt></ruby>\u3068\u3001<ruby>\u5B89\u5168<rt>\u3042\u3093\u305C\u3093</rt></ruby>\u306B\u4F7F\u3046<ruby>\u65B9\u6CD5<rt>\u307B\u3046\u307B\u3046</rt></ruby>\u306B\u3064\u3044\u3066\u5B66\u6821\u306E\u307F\u3093\u306A\u306E\u524D\u3067\u8A71\u3059\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9AD8\u6821\u751F\u304C\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2\u3092\u4F7F\u3046\u3068\u304D\u306B\u3076\u3064\u304B\u308B\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u306E\u554F\u984C\u3068\u3001\u5B89\u5168\u306B\u4F7F\u3046\u65B9\u6CD5\u306B\u3064\u3044\u3066\u5B66\u6821\u306E\u307F\u3093\u306A\u306E\u524D\u3067\u8A71\u3059\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 5,
    category: "Informative",
    textType: "Report",
    english: "Write a report on how Japanese pop culture has influenced the lifestyles and interests of teenagers in Australia.",
    japanese: "\u65E5\u672C\u306E\u30DD\u30C3\u30D7\u30AB\u30EB\u30C1\u30E3\u30FC\u304C\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u82E5\u8005<rt>\u308F\u304B\u3082\u306E</rt></ruby>\u306E\u751F\u6D3B\u3084<ruby>\u8208\u5473<rt>\u304D\u3087\u3046\u307F</rt></ruby>\u306B\u3069\u306E\u3088\u3046\u306A<ruby>\u5F71\u97FF<rt>\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u3092<ruby>\u4E0E<rt>\u3042\u305F</rt></ruby>\u3048\u305F\u304B\u306B\u3064\u3044\u3066\u306E\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u30DD\u30C3\u30D7\u30AB\u30EB\u30C1\u30E3\u30FC\u304C\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u82E5\u8005\u306E\u751F\u6D3B\u3084\u8208\u5473\u306B\u3069\u306E\u3088\u3046\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u305F\u304B\u306B\u3064\u3044\u3066\u306E\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 6,
    category: "Informative",
    textType: "Email",
    english: "Write an email to a Japanese friend who is torn between university and a gap year after graduation, offering advice based on your own thoughts and experiences.",
    japanese: "<ruby>\u5352\u696D<rt>\u305D\u3064\u304E\u3087\u3046</rt></ruby>\u3057\u3066\u304B\u3089\u5927\u5B66\u306B\u884C\u304F\u304B\u30AE\u30E3\u30C3\u30D7\u30A4\u30E4\u30FC\u306B\u3059\u308B\u304B\u3067<ruby>\u8FF7<rt>\u307E\u3088</rt></ruby>\u3063\u3066\u3044\u308B\u65E5\u672C\u306E\u53CB\u4EBA\u306B\u3001\u81EA\u5206\u306E<ruby>\u7D4C\u9A13<rt>\u3051\u3044\u3051\u3093</rt></ruby>\u3084\u8003\u3048\u3092\u3082\u3068\u306B\u30A2\u30C9\u30D0\u30A4\u30B9\u3092\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5352\u696D\u3057\u3066\u304B\u3089\u5927\u5B66\u306B\u884C\u304F\u304B\u30AE\u30E3\u30C3\u30D7\u30A4\u30E4\u30FC\u306B\u3059\u308B\u304B\u3067\u8FF7\u3063\u3066\u3044\u308B\u65E5\u672C\u306E\u53CB\u4EBA\u306B\u3001\u81EA\u5206\u306E\u7D4C\u9A13\u3084\u8003\u3048\u3092\u3082\u3068\u306B\u30A2\u30C9\u30D0\u30A4\u30B9\u3092\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 7,
    category: "Informative",
    textType: "Email",
    english: "Write an email to a Japanese friend introducing the charms of a nature-rich national park in Australia and inviting them to go camping together during the next holiday.",
    japanese: "\u65E5\u672C\u306E\u53CB\u4EBA\u306B\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u81EA\u7136<rt>\u3057\u305C\u3093</rt></ruby>\u304C<ruby>\u8C4A<rt>\u3086\u305F</rt></ruby>\u304B\u306A\u56FD\u7ACB<ruby>\u516C\u5712<rt>\u3053\u3046\u3048\u3093</rt></ruby>\u306E<ruby>\u9B45\u529B<rt>\u307F\u308A\u3087\u304F</rt></ruby>\u3092<ruby>\u7D39\u4ECB<rt>\u3057\u3087\u3046\u304B\u3044</rt></ruby>\u3057\u3001\u6B21\u306E\u4F11\u307F\u306B<ruby>\u4E00\u7DD2<rt>\u3044\u3063\u3057\u3087</rt></ruby>\u306B\u30AD\u30E3\u30F3\u30D7\u306B\u884C\u304B\u306A\u3044\u304B\u3068<ruby>\u8A98<rt>\u3055\u305D</rt></ruby>\u3046\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u53CB\u4EBA\u306B\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u81EA\u7136\u304C\u8C4A\u304B\u306A\u56FD\u7ACB\u516C\u5712\u306E\u9B45\u529B\u3092\u7D39\u4ECB\u3057\u3001\u6B21\u306E\u4F11\u307F\u306B\u4E00\u7DD2\u306B\u30AD\u30E3\u30F3\u30D7\u306B\u884C\u304B\u306A\u3044\u304B\u3068\u8A98\u3046\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 8,
    category: "Informative",
    textType: "Email",
    english: "Write an email to your family in Japan describing the unique neighbors and atmosphere around your newly moved house.",
    japanese: "\u65B0\u3057\u304F<ruby>\u5F15\u3063\u8D8A<rt>\u3072\u3063\u3053</rt></ruby>\u3057\u305F\u5BB6\u306E\u307E\u308F\u308A\u306B\u3044\u308B<ruby>\u9762\u767D<rt>\u304A\u3082\u3057\u308D</rt></ruby>\u3044\u8FD1\u6240\u306E\u4EBA\u305F\u3061\u3084\u3001<ruby>\u8857<rt>\u307E\u3061</rt></ruby>\u306E<ruby>\u96F0\u56F2\u6C17<rt>\u3075\u3093\u3044\u304D</rt></ruby>\u306B\u3064\u3044\u3066\u65E5\u672C\u306E\u5BB6\u65CF\u306B<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65B0\u3057\u304F\u5F15\u3063\u8D8A\u3057\u305F\u5BB6\u306E\u307E\u308F\u308A\u306B\u3044\u308B\u9762\u767D\u3044\u8FD1\u6240\u306E\u4EBA\u305F\u3061\u3084\u3001\u8857\u306E\u96F0\u56F2\u6C17\u306B\u3064\u3044\u3066\u65E5\u672C\u306E\u5BB6\u65CF\u306B\u4F1D\u3048\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 9,
    category: "Informative",
    textType: "Speech",
    english: "Deliver a speech to the morning assembly explaining how Australian families practice energy and water saving methods at home.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u5BB6\u5EAD<rt>\u304B\u3066\u3044</rt></ruby>\u3067\u3001\u3069\u306E\u3088\u3046\u306B\u96FB\u6C17\u3084\u6C34\u3092<ruby>\u7BC0\u7D04<rt>\u305B\u3064\u3084\u304F</rt></ruby>\u3057\u3066\u3044\u308B\u304B<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B<ruby>\u671D\u793C<rt>\u3061\u3087\u3046\u308C\u3044</rt></ruby>\u306E\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u5BB6\u5EAD\u3067\u3001\u3069\u306E\u3088\u3046\u306B\u96FB\u6C17\u3084\u6C34\u3092\u7BC0\u7D04\u3057\u3066\u3044\u308B\u304B\u8AAC\u660E\u3059\u308B\u671D\u793C\u306E\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 10,
    category: "Informative",
    textType: "Speech",
    english: "Deliver a speech to your class comparing the typical daily schedule and annual events of high school students in Australia and Japan.",
    japanese: "\u65E5\u672C\u3068\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u306E\u6BCE\u65E5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3084\u5E74\u9593\u306E\u884C\u4E8B\u306E<ruby>\u9055<rt>\u3061\u304C</rt></ruby>\u3044\u306B\u3064\u3044\u3066<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u3068\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u306E\u6BCE\u65E5\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3084\u5E74\u9593\u306E\u884C\u4E8B\u306E\u9055\u3044\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 11,
    category: "Informative",
    textType: "Report",
    english: "Write a report summarizing the achievements of a local sports club and its contribution to the health and wellbeing of local residents.",
    japanese: "<ruby>\u5730\u5143<rt>\u3058\u3082\u3068</rt></ruby>\u306E\u30B9\u30DD\u30FC\u30C4\u30AF\u30E9\u30D6\u306E\u6D3B\u52D5\u3068\u3001<ruby>\u5730\u57DF<rt>\u3061\u3044\u304D</rt></ruby>\u306E\u4EBA\u305F\u3061\u306E<ruby>\u5065\u5EB7<rt>\u3051\u3093\u3053\u3046</rt></ruby>\u3084\u751F\u6D3B\u3078\u306E<ruby>\u8CA2\u732E<rt>\u3053\u3046\u3051\u3093</rt></ruby>\u306B\u3064\u3044\u3066\u307E\u3068\u3081\u305F\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5730\u5143\u306E\u30B9\u30DD\u30FC\u30C4\u30AF\u30E9\u30D6\u306E\u6D3B\u52D5\u3068\u3001\u5730\u57DF\u306E\u4EBA\u305F\u3061\u306E\u5065\u5EB7\u3084\u751F\u6D3B\u3078\u306E\u8CA2\u732E\u306B\u3064\u3044\u3066\u307E\u3068\u3081\u305F\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 12,
    category: "Informative",
    textType: "Article",
    english: "Write an informative article outlining the manners tourists should follow to protect Australia's beautiful natural environment.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u7F8E<rt>\u3046\u3064\u304F</rt></ruby>\u3057\u3044<ruby>\u81EA\u7136<rt>\u3057\u305C\u3093</rt></ruby>\u3092<ruby>\u5B88<rt>\u307E\u3082</rt></ruby>\u308B\u305F\u3081\u306B\u3001\u65C5\u884C<ruby>\u8005<rt>\u3057\u3083</rt></ruby>\u304C<ruby>\u5B88<rt>\u307E\u3082</rt></ruby>\u308B\u3079\u304D\u30DE\u30CA\u30FC\u306B\u3064\u3044\u3066\u307E\u3068\u3081\u305F<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u7F8E\u3057\u3044\u81EA\u7136\u3092\u5B88\u308B\u305F\u3081\u306B\u3001\u65C5\u884C\u8005\u304C\u5B88\u308B\u3079\u304D\u30DE\u30CA\u30FC\u306B\u3064\u3044\u3066\u307E\u3068\u3081\u305F\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 13,
    category: "Informative",
    textType: "Speech",
    english: "Deliver a speech introducing the value and community benefits of a newly opened community center in your town.",
    japanese: "\u81EA\u5206\u306E\u753A\u306B\u65B0\u3057\u304F\u3067\u304D\u305F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC\u306E\u4F7F\u3044\u9053\u3084\u3001<ruby>\u5730\u57DF<rt>\u3061\u3044\u304D</rt></ruby>\u306B\u3068\u3063\u3066\u306E\u3088\u3055\u306B\u3064\u3044\u3066<ruby>\u7D39\u4ECB<rt>\u3057\u3087\u3046\u304B\u3044</rt></ruby>\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u81EA\u5206\u306E\u753A\u306B\u65B0\u3057\u304F\u3067\u304D\u305F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC\u306E\u4F7F\u3044\u9053\u3084\u3001\u5730\u57DF\u306B\u3068\u3063\u3066\u306E\u3088\u3055\u306B\u3064\u3044\u3066\u7D39\u4ECB\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 14,
    category: "Informative",
    textType: "Speech",
    english: "Deliver a speech to Year 10 students encouraging them to continue studying Japanese up to Year 12 by highlighting its long-term benefits.",
    japanese: "10\u5E74\u751F\u306B<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u3066\u300112\u5E74\u751F\u307E\u3067\u65E5\u672C\u8A9E\u306E\u52C9\u5F37\u3092<ruby>\u7D9A<rt>\u3064\u3065</rt></ruby>\u3051\u308B\u3053\u3068\u306E<ruby>\u826F<rt>\u3088</rt></ruby>\u3055\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u3066\u3001\u304C\u3093\u3070\u308B\u3088\u3046\u306B\u3059\u3059\u3081\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "10\u5E74\u751F\u306B\u5411\u3051\u3066\u300112\u5E74\u751F\u307E\u3067\u65E5\u672C\u8A9E\u306E\u52C9\u5F37\u3092\u7D9A\u3051\u308B\u3053\u3068\u306E\u826F\u3055\u3092\u4F1D\u3048\u3066\u3001\u304C\u3093\u3070\u308B\u3088\u3046\u306B\u3059\u3059\u3081\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 15,
    category: "Informative",
    textType: "Report",
    english: "Write a report for your teacher explaining Japanese food customs and table manners you learned during your year-long stay in Japan.",
    japanese: "\u65E5\u672C\u306B\u4E00\u5E74\u9593\u3044\u305F\u3068\u304D\u306B\u5B66\u3093\u3060\u3001\u65E5\u672C\u306E\u98DF<ruby>\u7FD2\u6163<rt>\u3057\u3085\u3046\u304B\u3093</rt></ruby>\u3084\u98DF\u4E8B\u306E\u30DE\u30CA\u30FC\u306B\u3064\u3044\u3066\u304F\u308F\u3057\u304F<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306B\u4E00\u5E74\u9593\u3044\u305F\u3068\u304D\u306B\u5B66\u3093\u3060\u3001\u65E5\u672C\u306E\u98DF\u7FD2\u6163\u3084\u98DF\u4E8B\u306E\u30DE\u30CA\u30FC\u306B\u3064\u3044\u3066\u304F\u308F\u3057\u304F\u8AAC\u660E\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 16,
    category: "Informative",
    textType: "Article",
    english: "Write an article introducing public transport systems in Melbourne and giving useful tips for foreign visitors on how to use them easily.",
    japanese: "\u30E1\u30EB\u30DC\u30EB\u30F3\u306E<ruby>\u516C\u5171<rt>\u3053\u3046\u304D\u3087\u3046</rt></ruby><ruby>\u4EA4\u901A<rt>\u3053\u3046\u3064\u3046</rt></ruby><ruby>\u6A5F\u95A2<rt>\u304D\u304B\u3093</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u7D39\u4ECB<rt>\u3057\u3087\u3046\u304B\u3044</rt></ruby>\u3057\u3001\u5916\u56FD\u304B\u3089\u306E\u65C5\u884C<ruby>\u8005<rt>\u3057\u3083</rt></ruby>\u304C<ruby>\u7C21\u5358<rt>\u304B\u3093\u305F\u3093</rt></ruby>\u306B<ruby>\u5229\u7528<rt>\u308A\u3088\u3046</rt></ruby>\u3059\u308B\u305F\u3081\u306E<ruby>\u4FBF\u5229<rt>\u3079\u3093\u308A</rt></ruby>\u306A\u30B3\u30C4\u3092\u307E\u3068\u3081\u305F<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30E1\u30EB\u30DC\u30EB\u30F3\u306E\u516C\u5171\u4EA4\u901A\u6A5F\u95A2\u306B\u3064\u3044\u3066\u7D39\u4ECB\u3057\u3001\u5916\u56FD\u304B\u3089\u306E\u65C5\u884C\u8005\u304C\u7C21\u5358\u306B\u5229\u7528\u3059\u308B\u305F\u3081\u306E\u4FBF\u5229\u306A\u30B3\u30C4\u3092\u307E\u3068\u3081\u305F\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 17,
    category: "Informative",
    textType: "Report",
    english: "Write a report explaining how local councils in Australia manage waste recycling and what citizens are expected to do.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u5730\u57DF<rt>\u3061\u3044\u304D</rt></ruby>\u793E\u4F1A\u304C\u3069\u306E\u3088\u3046\u306B\u30B4\u30DF\u306E\u30EA\u30B5\u30A4\u30AF\u30EB\u3092<ruby>\u7BA1\u7406<rt>\u304B\u3093\u308A</rt></ruby>\u3057\u3066\u3044\u308B\u304B\u3001\u307E\u305F<ruby>\u5E02\u6C11<rt>\u3057\u307F\u3093</rt></ruby>\u306B\u4F55\u304C<ruby>\u6C42<rt>\u3082\u3068</rt></ruby>\u3081\u3089\u308C\u3066\u3044\u308B\u304B\u306B\u3064\u3044\u3066<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u5730\u57DF\u793E\u4F1A\u304C\u3069\u306E\u3088\u3046\u306B\u30B4\u30DF\u306E\u30EA\u30B5\u30A4\u30AF\u30EB\u3092\u7BA1\u7406\u3057\u3066\u3044\u308B\u304B\u3001\u307E\u305F\u5E02\u6C11\u306B\u4F55\u304C\u6C42\u3081\u3089\u308C\u3066\u3044\u308B\u304B\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 18,
    category: "Informative",
    textType: "Speech",
    english: "Deliver a speech introducing popular traditional Australian foods and modern cafe culture to Japanese exchange students.",
    japanese: "\u65E5\u672C\u306E<ruby>\u7559\u5B66\u751F<rt>\u308A\u3085\u3046\u304C\u304F\u305B\u3044</rt></ruby>\u306B<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u3066\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u4F1D\u7D71<rt>\u3067\u3093\u3068\u3046</rt></ruby><ruby>\u7684<rt>\u3066\u304D</rt></ruby>\u306A\u98DF\u3079\u7269\u3084<ruby>\u73FE\u4EE3<rt>\u3052\u3093\u3060\u3044</rt></ruby>\u306E\u30AB\u30D5\u30A7<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u7D39\u4ECB<rt>\u3057\u3087\u3046\u304B\u3044</rt></ruby>\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u7559\u5B66\u751F\u306B\u5411\u3051\u3066\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u4F1D\u7D71\u7684\u306A\u98DF\u3079\u7269\u3084\u73FE\u4EE3\u306E\u30AB\u30D5\u30A7\u6587\u5316\u306B\u3064\u3044\u3066\u7D39\u4ECB\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 19,
    category: "Informative",
    textType: "Article",
    english: "Write an article introducing unique Australian wildlife and the protection efforts being made in national parks.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u30E6\u30CB\u30FC\u30AF\u306A<ruby>\u91CE\u751F<rt>\u3084\u305B\u3044</rt></ruby>\u52D5\u7269\u3068\u3001\u56FD\u7ACB<ruby>\u516C\u5712<rt>\u3053\u3046\u3048\u3093</rt></ruby>\u3067\u884C\u308F\u308C\u3066\u3044\u308B<ruby>\u4FDD\u8B77<rt>\u307B\u3054</rt></ruby>\u306E<ruby>\u53D6\u308A\u7D44<rt>\u3068\u308A\u304F</rt></ruby>\u307F\u306B\u3064\u3044\u3066<ruby>\u7D39\u4ECB<rt>\u3057\u3087\u3046\u304B\u3044</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u30E6\u30CB\u30FC\u30AF\u306A\u91CE\u751F\u52D5\u7269\u3068\u3001\u56FD\u7ACB\u516C\u5712\u3067\u884C\u308F\u308C\u3066\u3044\u308B\u4FDD\u8B77\u306E\u53D6\u308A\u7D44\u307F\u306B\u3064\u3044\u3066\u7D39\u4ECB\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 20,
    category: "Informative",
    textType: "Report",
    english: "Write a report detailing the history and cultural significance of major annual festivals held in Melbourne.",
    japanese: "\u30E1\u30EB\u30DC\u30EB\u30F3\u3067<ruby>\u958B<rt>\u3072\u3089</rt></ruby>\u304B\u308C\u308B<ruby>\u4E3B<rt>\u304A\u3082</rt></ruby>\u306A\u5E74\u9593\u884C\u4E8B\u306E<ruby>\u6B74\u53F2<rt>\u308C\u304D\u3057</rt></ruby>\u3084<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby><ruby>\u7684<rt>\u3066\u304D</rt></ruby>\u306A<ruby>\u610F\u5473<rt>\u3044\u307F</rt></ruby>\u306B\u3064\u3044\u3066\u304F\u308F\u3057\u304F<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30E1\u30EB\u30DC\u30EB\u30F3\u3067\u958B\u304B\u308C\u308B\u4E3B\u306A\u5E74\u9593\u884C\u4E8B\u306E\u6B74\u53F2\u3084\u6587\u5316\u7684\u306A\u610F\u5473\u306B\u3064\u3044\u3066\u304F\u308F\u3057\u304F\u8AAC\u660E\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 21,
    category: "Informative",
    textType: "Email",
    english: "Write an email to a pen pal in Japan explaining the seasonal changes and weather patterns in Melbourne throughout the year.",
    japanese: "\u65E5\u672C\u306E\u30DA\u30F3\u30D5\u30EC\u30F3\u30C9\u306B\u3001\u4E00\u5E74\u3092<ruby>\u901A<rt>\u3068\u304A</rt></ruby>\u3057\u305F\u30E1\u30EB\u30DC\u30EB\u30F3\u306E<ruby>\u5B63\u7BC0<rt>\u304D\u305B\u3064</rt></ruby>\u306E<ruby>\u5909\u5316<rt>\u3078\u3093\u304B</rt></ruby>\u3084\u5929\u6C17\u306E<ruby>\u7279\u5FB4<rt>\u3068\u304F\u3061\u3087\u3046</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u30DA\u30F3\u30D5\u30EC\u30F3\u30C9\u306B\u3001\u4E00\u5E74\u3092\u901A\u3057\u305F\u30E1\u30EB\u30DC\u30EB\u30F3\u306E\u5B63\u7BC0\u306E\u5909\u5316\u3084\u5929\u6C17\u306E\u7279\u5FB4\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 22,
    category: "Informative",
    textType: "Speech",
    english: "Deliver a speech explaining the history and rules of Australian Rules Football (AFL) to students who have never seen it before.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u30F3\u30D5\u30C3\u30C8\u30DC\u30FC\u30EB\uFF08AFL\uFF09\u3092\u898B\u305F\u3053\u3068\u304C\u306A\u3044\u4EBA\u306B<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u3066\u3001\u305D\u306E<ruby>\u6B74\u53F2<rt>\u308C\u304D\u3057</rt></ruby>\u3084\u30EB\u30FC\u30EB\u306B\u3064\u3044\u3066<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u30F3\u30D5\u30C3\u30C8\u30DC\u30FC\u30EB\uFF08AFL\uFF09\u3092\u898B\u305F\u3053\u3068\u304C\u306A\u3044\u4EBA\u306B\u5411\u3051\u3066\u3001\u305D\u306E\u6B74\u53F2\u3084\u30EB\u30FC\u30EB\u306B\u3064\u3044\u3066\u8AAC\u660E\u3059\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 23,
    category: "Informative",
    textType: "Report",
    english: "Write a report on how part-time job culture works for high school students in Australia, including typical roles and working hours.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u306E\u30A2\u30EB\u30D0\u30A4\u30C8<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u306B\u3064\u3044\u3066\u3001<ruby>\u4E3B<rt>\u304A\u3082</rt></ruby>\u306A\u4ED5\u4E8B\u3084\u50CD\u304F\u6642\u9593\u3092<ruby>\u542B<rt>\u3075\u304F</rt></ruby>\u3081\u3066<ruby>\u8AAC\u660E<rt>\u305B\u3064\u3081\u3044</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u306E\u30A2\u30EB\u30D0\u30A4\u30C8\u6587\u5316\u306B\u3064\u3044\u3066\u3001\u4E3B\u306A\u4ED5\u4E8B\u3084\u50CD\u304F\u6642\u9593\u3092\u542B\u3081\u3066\u8AAC\u660E\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 24,
    category: "Evaluative",
    textType: "Report",
    english: "Write an evaluative report in Japanese addressed to the school librarian and your Japanese teacher, analyzing the advantages and disadvantages of high school students using 'e-books' for school assignments and reading.",
    japanese: "\u5B66\u6821\u306E<ruby>\u56F3\u66F8\u9928<rt>\u3068\u3057\u3087\u304B\u3093</rt></ruby>\u9577\u3068\u65E5\u672C\u8A9E\u306E\u5148\u751F\u306B<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u3066\u3001\u9AD8\u6821\u751F\u304C<ruby>\u8AB2\u984C<rt>\u304B\u3060\u3044</rt></ruby>\u3084\u8AAD\u66F8\u306E\u305F\u3081\u306B\u96FB\u5B50<ruby>\u66F8\u7C4D<rt>\u3057\u3087\u305B\u304D</rt></ruby>\u3092\u4F7F\u3046\u3053\u3068\u306E<ruby>\u826F<rt>\u3088</rt></ruby>\u3044\u70B9\u3068<ruby>\u60AA<rt>\u308F\u308B</rt></ruby>\u3044\u70B9\u3092<ruby>\u5206\u6790<rt>\u3076\u3093\u305B\u304D</rt></ruby>\u3057\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B66\u6821\u306E\u56F3\u66F8\u9928\u9577\u3068\u65E5\u672C\u8A9E\u306E\u5148\u751F\u306B\u5411\u3051\u3066\u3001\u9AD8\u6821\u751F\u304C\u8AB2\u984C\u3084\u8AAD\u66F8\u306E\u305F\u3081\u306B\u96FB\u5B50\u66F8\u7C4D\u3092\u4F7F\u3046\u3053\u3068\u306E\u826F\u3044\u70B9\u3068\u60AA\u3044\u70B9\u3092\u5206\u6790\u3057\u3066\u8A55\u4FA1\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 25,
    category: "Evaluative",
    textType: "Article",
    english: "Write an evaluative article in Japanese for a Japanese-language newspaper in Melbourne, assessing the pros and cons of the convenient services and products provided by convenience stores in Japan based on your experiences.",
    japanese: "\u30E1\u30EB\u30DC\u30EB\u30F3\u306E\u65E5\u672C\u8A9E\u306E\u65B0\u805E\u306E<ruby>\u8AAD\u8005<rt>\u3069\u304F\u3057\u3083</rt></ruby>\u306B<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u3066\u3001\u65E5\u672C\u306B\u3044\u305F\u3068\u304D\u306B<ruby>\u5229\u7528<rt>\u308A\u3088\u3046</rt></ruby>\u3057\u305F\u30B3\u30F3\u30D3\u30CB\u306E<ruby>\u4FBF\u5229<rt>\u3079\u3093\u308A</rt></ruby>\u306A\u30B5\u30FC\u30D3\u30B9\u3084<ruby>\u5546\u54C1<rt>\u3057\u3087\u3046\u3072\u3093</rt></ruby>\u306E\u9577\u6240\u3068<ruby>\u77ED\u6240<rt>\u305F\u3093\u3057\u3087</rt></ruby>\u3092\u3044\u308D\u3044\u308D\u306A<ruby>\u65B9\u5411<rt>\u307B\u3046\u3053\u3046</rt></ruby>\u304B\u3089<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30E1\u30EB\u30DC\u30EB\u30F3\u306E\u65E5\u672C\u8A9E\u306E\u65B0\u805E\u306E\u8AAD\u8005\u306B\u5411\u3051\u3066\u3001\u65E5\u672C\u306B\u3044\u305F\u3068\u304D\u306B\u5229\u7528\u3057\u305F\u30B3\u30F3\u30D3\u30CB\u306E\u4FBF\u5229\u306A\u30B5\u30FC\u30D3\u30B9\u3084\u5546\u54C1\u306E\u9577\u6240\u3068\u77ED\u6240\u3092\u3044\u308D\u3044\u308D\u306A\u65B9\u5411\u304B\u3089\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 26,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating the advantages and disadvantages of making school uniforms mandatory in Australian schools.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u5B66\u6821\u3067<ruby>\u5236\u670D<rt>\u305B\u3044\u3075\u304F</rt></ruby>\u3092\u7740\u308B\u3053\u3068\u304C<ruby>\u7FA9\u52D9<rt>\u304E\u3080</rt></ruby>\u306B\u306A\u3063\u3066\u3044\u308B\u3053\u3068\u306E\u3001\u30E1\u30EA\u30C3\u30C8\u3068\u30C7\u30E1\u30EA\u30C3\u30C8\u3092<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u5B66\u6821\u3067\u5236\u670D\u3092\u7740\u308B\u3053\u3068\u304C\u7FA9\u52D9\u306B\u306A\u3063\u3066\u3044\u308B\u3053\u3068\u306E\u3001\u30E1\u30EA\u30C3\u30C8\u3068\u30C7\u30E1\u30EA\u30C3\u30C8\u3092\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 27,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating the convenience of digital payments compared to the enduring value of using cash in a cashless society.",
    japanese: "\u30AD\u30E3\u30C3\u30B7\u30E5\u30EC\u30B9\u793E\u4F1A\u306E\u4E2D\u3067\u3001<ruby>\u73FE\u91D1<rt>\u3052\u3093\u304D\u3093</rt></ruby>\u3092\u4F7F\u3046\u3088\u3055\u3068\u30C7\u30B8\u30BF\u30EB<ruby>\u6255<rt>\u306F\u3089</rt></ruby>\u3044\u306E<ruby>\u4FBF\u5229<rt>\u3079\u3093\u308A</rt></ruby>\u3055\u3092\u304F\u3089\u3079\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AD\u30E3\u30C3\u30B7\u30E5\u30EC\u30B9\u793E\u4F1A\u306E\u4E2D\u3067\u3001\u73FE\u91D1\u3092\u4F7F\u3046\u3088\u3055\u3068\u30C7\u30B8\u30BF\u30EB\u6255\u3044\u306E\u4FBF\u5229\u3055\u3092\u304F\u3089\u3079\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 28,
    category: "Evaluative",
    textType: "Article",
    english: "Write a detailed review of a newly opened authentic Japanese restaurant in your local town, evaluating its food, service, and atmosphere.",
    japanese: "<ruby>\u5730\u5143<rt>\u3058\u3082\u3068</rt></ruby>\u306E\u753A\u306B\u65B0\u3057\u304F\u3067\u304D\u305F<ruby>\u672C\u683C<rt>\u307B\u3093\u304B\u304F</rt></ruby><ruby>\u7684<rt>\u3066\u304D</rt></ruby>\u306A\u65E5\u672C\u98DF\u30EC\u30B9\u30C8\u30E9\u30F3\u306B\u884C\u3063\u3066\u66F8\u3044\u305F\u3001<ruby>\u6599\u7406<rt>\u308A\u3087\u3046\u308A</rt></ruby>\u3084\u30B5\u30FC\u30D3\u30B9\u3001<ruby>\u96F0\u56F2\u6C17<rt>\u3075\u3093\u3044\u304D</rt></ruby>\u306B\u3064\u3044\u3066\u306E\u304F\u308F\u3057\u3044\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5730\u5143\u306E\u753A\u306B\u65B0\u3057\u304F\u3067\u304D\u305F\u672C\u683C\u7684\u306A\u65E5\u672C\u98DF\u30EC\u30B9\u30C8\u30E9\u30F3\u306B\u884C\u3063\u3066\u66F8\u3044\u305F\u3001\u6599\u7406\u3084\u30B5\u30FC\u30D3\u30B9\u3001\u96F0\u56F2\u6C17\u306B\u3064\u3044\u3066\u306E\u304F\u308F\u3057\u3044\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 29,
    category: "Evaluative",
    textType: "Article",
    english: "Write a comparative review of long-distance trains and domestic flights in Australia, evaluating their comfort, cost, and convenience for travelers.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u3067\u65C5\u884C\u3059\u308B\u3068\u304D\u306B\u4E57\u3063\u305F<ruby>\u9577\u8DDD\u96E2<rt>\u3061\u3087\u3046\u304D\u3087\u308A</rt></ruby><ruby>\u5217\u8ECA<rt>\u308C\u3063\u3057\u3083</rt></ruby>\u3068<ruby>\u56FD\u5185\u7DDA<rt>\u3053\u304F\u306A\u3044\u305B\u3093</rt></ruby>\u306E<ruby>\u98DB\u884C\u6A5F<rt>\u3072\u3053\u3046\u304D</rt></ruby>\u306B\u3064\u3044\u3066\u3001<ruby>\u5FEB\u9069<rt>\u304B\u3044\u3066\u304D</rt></ruby>\u3055\u3084<ruby>\u8CBB\u7528<rt>\u3072\u3088\u3046</rt></ruby>\u3001<ruby>\u4FBF\u5229<rt>\u3079\u3093\u308A</rt></ruby>\u3055\u3092\u304F\u3089\u3079\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u3067\u65C5\u884C\u3059\u308B\u3068\u304D\u306B\u4E57\u3063\u305F\u9577\u8DDD\u96E2\u5217\u8ECA\u3068\u56FD\u5185\u7DDA\u306E\u98DB\u884C\u6A5F\u306B\u3064\u3044\u3066\u3001\u5FEB\u9069\u3055\u3084\u8CBB\u7528\u3001\u4FBF\u5229\u3055\u3092\u304F\u3089\u3079\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 30,
    category: "Evaluative",
    textType: "Article",
    english: "Write a critical review evaluating the functionality and educational effectiveness of popular online learning platforms and language apps.",
    japanese: "\u4EBA\u6C17\u304C\u3042\u308B\u30AA\u30F3\u30E9\u30A4\u30F3\u306E\u5B66\u7FD2\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3084\u8A9E\u5B66\u30A2\u30D7\u30EA\u306E<ruby>\u6A5F\u80FD<rt>\u304D\u306E\u3046</rt></ruby>\u3084\u5B66\u7FD2\u3078\u306E<ruby>\u52B9\u679C<rt>\u3053\u3046\u304B</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u4EBA\u6C17\u304C\u3042\u308B\u30AA\u30F3\u30E9\u30A4\u30F3\u306E\u5B66\u7FD2\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3084\u8A9E\u5B66\u30A2\u30D7\u30EA\u306E\u6A5F\u80FD\u3084\u5B66\u7FD2\u3078\u306E\u52B9\u679C\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 31,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review of a newly opened eco-friendly cafe in your city, evaluating its environmental philosophy and the quality of its food and service.",
    japanese: "<ruby>\u5E02\u5185<rt>\u3057\u306A\u3044</rt></ruby>\u3067<ruby>\u8A71\u984C<rt>\u308F\u3060\u3044</rt></ruby>\u306B\u306A\u3063\u3066\u3044\u308B<ruby>\u74B0\u5883<rt>\u304B\u3093\u304D\u3087\u3046</rt></ruby>\u306B\u3084\u3055\u3057\u3044\u30AB\u30D5\u30A7\u306E\u8003\u3048\u65B9\u3084\u3001<ruby>\u6599\u7406<rt>\u308A\u3087\u3046\u308A</rt></ruby>\u3068\u30B5\u30FC\u30D3\u30B9\u306E<ruby>\u8CEA<rt>\u3057\u3064</rt></ruby>\u306E\u3088\u3055\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5E02\u5185\u3067\u8A71\u984C\u306B\u306A\u3063\u3066\u3044\u308B\u74B0\u5883\u306B\u3084\u3055\u3057\u3044\u30AB\u30D5\u30A7\u306E\u8003\u3048\u65B9\u3084\u3001\u6599\u7406\u3068\u30B5\u30FC\u30D3\u30B9\u306E\u8CEA\u306E\u3088\u3055\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 32,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review evaluating the convenience of self-checkout systems at Australian supermarkets and their impact on customer satisfaction.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u30B9\u30FC\u30D1\u30FC\u306B\u3042\u308B\u30BB\u30EB\u30D5\u30EC\u30B8\u306E\u4F7F\u3044\u3084\u3059\u3055\u3068\u3001<ruby>\u304A\u5BA2<rt>\u304A\u304D\u3083\u304F</rt></ruby>\u3055\u3093\u306E<ruby>\u6E80\u8DB3<rt>\u307E\u3093\u305E\u304F</rt></ruby><ruby>\u5EA6<rt>\u3069</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u30B9\u30FC\u30D1\u30FC\u306B\u3042\u308B\u30BB\u30EB\u30D5\u30EC\u30B8\u306E\u4F7F\u3044\u3084\u3059\u3055\u3068\u3001\u304A\u5BA2\u3055\u3093\u306E\u6E80\u8DB3\u5EA6\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 33,
    category: "Evaluative",
    textType: "Email",
    english: "Write an email exchanging opinions with a Japanese friend on whether a city full of theme parks or a city with vast nature is better for a graduation trip destination.",
    japanese: "<ruby>\u5352\u696D<rt>\u305D\u3064\u304E\u3087\u3046</rt></ruby>\u65C5\u884C\u306E\u884C\u304D\u5148\u3068\u3057\u3066\u3001\u30C6\u30FC\u30DE\u30D1\u30FC\u30AF\u304C\u591A\u3044\u90FD\u4F1A\u3068\u5E83\u3044<ruby>\u81EA\u7136<rt>\u3057\u305C\u3093</rt></ruby>\u304C\u3042\u308B\u753A\u306E\u3069\u3061\u3089\u304C\u3088\u3044\u304B\u3001\u65E5\u672C\u306E\u53CB\u4EBA\u3068<ruby>\u610F\u898B<rt>\u3044\u3051\u3093</rt></ruby>\u3092\u304B\u308F\u3059\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5352\u696D\u65C5\u884C\u306E\u884C\u304D\u5148\u3068\u3057\u3066\u3001\u30C6\u30FC\u30DE\u30D1\u30FC\u30AF\u304C\u591A\u3044\u90FD\u4F1A\u3068\u5E83\u3044\u81EA\u7136\u304C\u3042\u308B\u753A\u306E\u3069\u3061\u3089\u304C\u3088\u3044\u304B\u3001\u65E5\u672C\u306E\u53CB\u4EBA\u3068\u610F\u898B\u3092\u304B\u308F\u3059\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 34,
    category: "Evaluative",
    textType: "Report",
    english: "Write a report evaluating the advantages and disadvantages of online classes versus face-to-face classes from a student's perspective.",
    japanese: "\u30AA\u30F3\u30E9\u30A4\u30F3\u306E<ruby>\u6388\u696D<rt>\u3058\u3085\u304E\u3087\u3046</rt></ruby>\u3068<ruby>\u5BFE\u9762<rt>\u305F\u3044\u3081\u3093</rt></ruby>\u3067\u306E<ruby>\u6388\u696D<rt>\u3058\u3085\u304E\u3087\u3046</rt></ruby>\u306E\u305D\u308C\u305E\u308C\u306E<ruby>\u826F<rt>\u3088</rt></ruby>\u3044\u70B9\u3068<ruby>\u60AA<rt>\u308F\u308B</rt></ruby>\u3044\u70B9\u3092\u3001<ruby>\u751F\u5F92<rt>\u305B\u3044\u3068</rt></ruby>\u306E<ruby>\u76EE\u7DDA<rt>\u3081\u305B\u3093</rt></ruby>\u304B\u3089<ruby>\u5BA2\u89B3<rt>\u304D\u3083\u3063\u304B\u3093</rt></ruby><ruby>\u7684<rt>\u3066\u304D</rt></ruby>\u306B<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30F3\u30E9\u30A4\u30F3\u306E\u6388\u696D\u3068\u5BFE\u9762\u3067\u306E\u6388\u696D\u306E\u305D\u308C\u305E\u308C\u306E\u826F\u3044\u70B9\u3068\u60AA\u3044\u70B9\u3092\u3001\u751F\u5F92\u306E\u76EE\u7DDA\u304B\u3089\u5BA2\u89B3\u7684\u306B\u8A55\u4FA1\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 35,
    category: "Evaluative",
    textType: "Report",
    english: "Write an evaluative report on how the rapid spread of AI will impact future school education and human employment.",
    japanese: "AI\u304C<ruby>\u6025<rt>\u304D\u3085\u3046</rt></ruby>\u306B\u5E83\u304C\u308B\u3053\u3068\u304C\u3001\u3053\u308C\u304B\u3089\u306E\u5B66\u6821<ruby>\u6559\u80B2<rt>\u304D\u3087\u3046\u3044\u304F</rt></ruby>\u3084\u4EBA\u9593\u306E\u4ED5\u4E8B\u306B\u3069\u306E\u3088\u3046\u306A<ruby>\u5F71\u97FF<rt>\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u3092<ruby>\u4E0E<rt>\u3042\u305F</rt></ruby>\u3048\u308B\u304B\u306B\u3064\u3044\u3066\u306E<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "AI\u304C\u6025\u306B\u5E83\u304C\u308B\u3053\u3068\u304C\u3001\u3053\u308C\u304B\u3089\u306E\u5B66\u6821\u6559\u80B2\u3084\u4EBA\u9593\u306E\u4ED5\u4E8B\u306B\u3069\u306E\u3088\u3046\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u304B\u306B\u3064\u3044\u3066\u306E\u8A55\u4FA1\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 36,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article discussing the pros and cons of newly introduced school social media rules in terms of balancing student freedom and discipline.",
    japanese: "\u65B0\u3057\u304F\u3067\u304D\u305F\u5B66\u6821\u306E\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2\u306E\u30EB\u30FC\u30EB\u306B\u3064\u3044\u3066\u3001<ruby>\u751F\u5F92<rt>\u305B\u3044\u3068</rt></ruby>\u306E<ruby>\u81EA\u7531<rt>\u3058\u3086\u3046</rt></ruby>\u3068<ruby>\u898F\u5F8B<rt>\u304D\u308A\u3064</rt></ruby>\u306E\u30D0\u30E9\u30F3\u30B9\u3068\u3044\u3046\u70B9\u304B\u3089\u305D\u306E<ruby>\u662F\u975E<rt>\u305C\u3072</rt></ruby>\u3092<ruby>\u8AD6<rt>\u308D\u3093</rt></ruby>\u3058\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65B0\u3057\u304F\u3067\u304D\u305F\u5B66\u6821\u306E\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2\u306E\u30EB\u30FC\u30EB\u306B\u3064\u3044\u3066\u3001\u751F\u5F92\u306E\u81EA\u7531\u3068\u898F\u5F8B\u306E\u30D0\u30E9\u30F3\u30B9\u3068\u3044\u3046\u70B9\u304B\u3089\u305D\u306E\u662F\u975E\u3092\u8AD6\u3058\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 37,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating and comparing university education and vocational training/employment as career paths after high school graduation.",
    japanese: "\u9AD8\u6821\u3092<ruby>\u5352\u696D<rt>\u305D\u3064\u304E\u3087\u3046</rt></ruby>\u3057\u305F\u3042\u3068\u306E<ruby>\u9032\u8DEF<rt>\u3057\u3093\u308D</rt></ruby>\u3068\u3057\u3066\u3001\u5927\u5B66<ruby>\u9032\u5B66<rt>\u3057\u3093\u304C\u304F</rt></ruby>\u3068<ruby>\u5C02\u9580<rt>\u305B\u3093\u3082\u3093</rt></ruby>\u5B66\u6821\u3084<ruby>\u5C31\u8077<rt>\u3057\u3085\u3046\u3057\u3087\u304F</rt></ruby>\u3092\u304F\u3089\u3079\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9AD8\u6821\u3092\u5352\u696D\u3057\u305F\u3042\u3068\u306E\u9032\u8DEF\u3068\u3057\u3066\u3001\u5927\u5B66\u9032\u5B66\u3068\u5C02\u9580\u5B66\u6821\u3084\u5C31\u8077\u3092\u304F\u3089\u3079\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 38,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating the advantages and disadvantages of high school seniors driving their own cars to school.",
    japanese: "12\u5E74\u751F\u304C\u81EA\u5206\u3067\u8ECA\u3092<ruby>\u904B\u8EE2<rt>\u3046\u3093\u3066\u3093</rt></ruby>\u3057\u3066\u5B66\u6821\u306B<ruby>\u901A<rt>\u304B\u3088</rt></ruby>\u3046\u3053\u3068\u306B\u3064\u3044\u3066\u3001\u305D\u306E<ruby>\u826F<rt>\u3088</rt></ruby>\u3044\u70B9\u3068<ruby>\u60AA<rt>\u308F\u308B</rt></ruby>\u3044\u70B9\u3092<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3057\u3066\u81EA\u5206\u306E<ruby>\u610F\u898B<rt>\u3044\u3051\u3093</rt></ruby>\u3092\u307E\u3068\u3081\u305F<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "12\u5E74\u751F\u304C\u81EA\u5206\u3067\u8ECA\u3092\u904B\u8EE2\u3057\u3066\u5B66\u6821\u306B\u901A\u3046\u3053\u3068\u306B\u3064\u3044\u3066\u3001\u305D\u306E\u826F\u3044\u70B9\u3068\u60AA\u3044\u70B9\u3092\u8A55\u4FA1\u3057\u3066\u81EA\u5206\u306E\u610F\u898B\u3092\u307E\u3068\u3081\u305F\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 39,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review of a newly opened local sports gym, evaluating its exercise equipment, membership pricing, and support systems for high school students.",
    japanese: "\u5B66\u6821\u306E\u8FD1\u304F\u306B\u65B0\u3057\u304F\u3067\u304D\u305F\u30B9\u30DD\u30FC\u30C4\u30B8\u30E0\u306E<ruby>\u6A5F\u68B0<rt>\u304D\u304B\u3044</rt></ruby>\u3001<ruby>\u6599\u91D1<rt>\u308A\u3087\u3046\u304D\u3093</rt></ruby>\u30D7\u30E9\u30F3\u3001\u9AD8\u6821\u751F<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u306E\u30B5\u30DD\u30FC\u30C8\u306B\u3064\u3044\u3066\u304F\u308F\u3057\u304F<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B66\u6821\u306E\u8FD1\u304F\u306B\u65B0\u3057\u304F\u3067\u304D\u305F\u30B9\u30DD\u30FC\u30C4\u30B8\u30E0\u306E\u6A5F\u68B0\u3001\u6599\u91D1\u30D7\u30E9\u30F3\u3001\u9AD8\u6821\u751F\u5411\u3051\u306E\u30B5\u30DD\u30FC\u30C8\u306B\u3064\u3044\u3066\u304F\u308F\u3057\u304F\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 40,
    category: "Evaluative",
    textType: "Report",
    english: "Write a report analyzing the convenience and etiquette challenges of shared electric bicycles ('dockless e-bikes') becoming popular on city streets.",
    japanese: "<ruby>\u8857<rt>\u307E\u3061</rt></ruby>\u4E2D\u3067<ruby>\u5897<rt>\u3075</rt></ruby>\u3048\u3066\u3044\u308B\u96FB\u52D5\u30B7\u30A7\u30A2\u30B5\u30A4\u30AF\u30EB\u306E<ruby>\u4FBF\u5229<rt>\u3079\u3093\u308A</rt></ruby>\u3055\u3068\u3001\u30DE\u30CA\u30FC\u306B\u3064\u3044\u3066\u306E<ruby>\u554F\u984C<rt>\u3082\u3093\u3060\u3044</rt></ruby>\u70B9\u3092<ruby>\u5206\u6790<rt>\u3076\u3093\u305B\u304D</rt></ruby>\u3057\u305F<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u8857\u4E2D\u3067\u5897\u3048\u3066\u3044\u308B\u96FB\u52D5\u30B7\u30A7\u30A2\u30B5\u30A4\u30AF\u30EB\u306E\u4FBF\u5229\u3055\u3068\u3001\u30DE\u30CA\u30FC\u306B\u3064\u3044\u3066\u306E\u554F\u984C\u70B9\u3092\u5206\u6790\u3057\u305F\u8A55\u4FA1\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 41,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review of a special exhibition at your local art museum, evaluating the quality of the exhibits, clarity of explanations, and overall atmosphere.",
    japanese: "<ruby>\u5730\u5143<rt>\u3058\u3082\u3068</rt></ruby>\u306E<ruby>\u7F8E\u8853\u9928<rt>\u3073\u3058\u3085\u3064\u304B\u3093</rt></ruby>\u306E<ruby>\u7279\u5225<rt>\u3068\u304F\u3079\u3064</rt></ruby><ruby>\u5C55<rt>\u3066\u3093</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5730\u5143\u306E\u7F8E\u8853\u9928\u306E\u7279\u5225\u5C55\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 42,
    category: "Evaluative",
    textType: "Article",
    english: "Write a film review evaluating the messaging, direction, and educational impact of a recently trending environmental documentary.",
    japanese: "<ruby>\u6700\u8FD1<rt>\u3055\u3044\u304D\u3093</rt></ruby><ruby>\u5897<rt>\u3075</rt></ruby>\u3048\u3066\u3044\u308B<ruby>\u74B0\u5883<rt>\u304B\u3093\u304D\u3087\u3046</rt></ruby><ruby>\u4FDD\u8B77<rt>\u307B\u3054</rt></ruby>\u306B\u3064\u3044\u3066\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30BF\u30EA\u30FC<ruby>\u6620\u753B<rt>\u3048\u3044\u304C</rt></ruby>\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3084\u3001\u3064\u304F\u308A\u304B\u305F\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u6620\u753B<rt>\u3048\u3044\u304C</rt></ruby>\u306E\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u6700\u8FD1\u5897\u3048\u3066\u3044\u308B\u74B0\u5883\u4FDD\u8B77\u306B\u3064\u3044\u3066\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30BF\u30EA\u30FC\u6620\u753B\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3084\u3001\u3064\u304F\u308A\u304B\u305F\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u6620\u753B\u306E\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 43,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review evaluating the support quality and reliability of a homestay agency from the perspective of a student who used it during study abroad.",
    japanese: "<ruby>\u7559\u5B66<rt>\u308A\u3085\u3046\u304C\u304F</rt></ruby>\u306E\u3068\u304D\u306B<ruby>\u5229\u7528<rt>\u308A\u3088\u3046</rt></ruby>\u3057\u305F\u30DB\u30FC\u30E0\u30B9\u30C6\u30A4\u306E\u4F1A\u793E\u306E\u30B5\u30DD\u30FC\u30C8\u3084<ruby>\u4FE1\u983C<rt>\u3057\u3093\u3089\u3044</rt></ruby>\u3067\u304D\u308B\u304B\u3068\u3044\u3046\u3053\u3068\u306B\u3064\u3044\u3066\u3001<ruby>\u5B9F\u969B<rt>\u3058\u3063\u3055\u3044</rt></ruby>\u306B<ruby>\u5229\u7528<rt>\u308A\u3088\u3046</rt></ruby>\u3057\u305F\u5B66\u751F\u306E<ruby>\u76EE\u7DDA<rt>\u3081\u305B\u3093</rt></ruby>\u304B\u3089<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u7559\u5B66\u306E\u3068\u304D\u306B\u5229\u7528\u3057\u305F\u30DB\u30FC\u30E0\u30B9\u30C6\u30A4\u306E\u4F1A\u793E\u306E\u30B5\u30DD\u30FC\u30C8\u3084\u4FE1\u983C\u3067\u304D\u308B\u304B\u3068\u3044\u3046\u3053\u3068\u306B\u3064\u3044\u3066\u3001\u5B9F\u969B\u306B\u5229\u7528\u3057\u305F\u5B66\u751F\u306E\u76EE\u7DDA\u304B\u3089\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 44,
    category: "Evaluative",
    textType: "Report",
    english: "Write a report evaluating the accuracy and the degree of human-like communication shown by AI concierge robots newly introduced in a shopping mall.",
    japanese: "\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30E2\u30FC\u30EB\u306B\u65B0\u3057\u304F\u5165\u3063\u305FAI\u306E<ruby>\u6848\u5185<rt>\u3042\u3093\u306A\u3044</rt></ruby>\u30ED\u30DC\u30C3\u30C8\u306E<ruby>\u6B63\u78BA<rt>\u305B\u3044\u304B\u304F</rt></ruby>\u3055\u3068\u3001\u4EBA\u9593\u3068\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306E<ruby>\u5EA6\u5408<rt>\u3069\u3042</rt></ruby>\u3044\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30E2\u30FC\u30EB\u306B\u65B0\u3057\u304F\u5165\u3063\u305FAI\u306E\u6848\u5185\u30ED\u30DC\u30C3\u30C8\u306E\u6B63\u78BA\u3055\u3068\u3001\u4EBA\u9593\u3068\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5EA6\u5408\u3044\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 45,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating the updated facilities of a local public swimming pool and fitness center and how well they serve the local community.",
    japanese: "\u65B0\u3057\u304F\u306A\u3063\u305F<ruby>\u5730\u5143<rt>\u3058\u3082\u3068</rt></ruby>\u306E<ruby>\u5E02\u6C11<rt>\u3057\u307F\u3093</rt></ruby>\u30D7\u30FC\u30EB\u3084\u30D5\u30A3\u30C3\u30C8\u30CD\u30B9\u30BB\u30F3\u30BF\u30FC\u306E<ruby>\u8A2D\u5099<rt>\u305B\u3064\u3073</rt></ruby>\u3068\u3001<ruby>\u5730\u57DF<rt>\u3061\u3044\u304D</rt></ruby>\u306E\u4EBA\u305F\u3061\u3078\u306E<ruby>\u5F79\u7ACB<rt>\u3084\u304F\u3060</rt></ruby>\u3061\u65B9\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65B0\u3057\u304F\u306A\u3063\u305F\u5730\u5143\u306E\u5E02\u6C11\u30D7\u30FC\u30EB\u3084\u30D5\u30A3\u30C3\u30C8\u30CD\u30B9\u30BB\u30F3\u30BF\u30FC\u306E\u8A2D\u5099\u3068\u3001\u5730\u57DF\u306E\u4EBA\u305F\u3061\u3078\u306E\u5F79\u7ACB\u3061\u65B9\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 46,
    category: "Evaluative",
    textType: "Article",
    english: "Write a critical article on the growing spread of eco-friendly electric vehicles (EVs) and evaluate how convenient they are for everyday drivers.",
    japanese: "<ruby>\u8857<rt>\u307E\u3061</rt></ruby>\u3067\u898B\u304B\u3051\u308B\u3088\u3046\u306B\u306A\u3063\u305F<ruby>\u74B0\u5883<rt>\u304B\u3093\u304D\u3087\u3046</rt></ruby>\u306B\u3084\u3055\u3057\u3044\u96FB\u6C17\u81EA\u52D5\u8ECA\u306E\u5E83\u304C\u308A\u3068\u3001\u3075\u3060\u3093<ruby>\u904B\u8EE2<rt>\u3046\u3093\u3066\u3093</rt></ruby>\u3059\u308B\u4EBA\u306B\u3068\u3063\u3066\u306E<ruby>\u4FBF\u5229<rt>\u3079\u3093\u308A</rt></ruby>\u3055\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u8857\u3067\u898B\u304B\u3051\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u74B0\u5883\u306B\u3084\u3055\u3057\u3044\u96FB\u6C17\u81EA\u52D5\u8ECA\u306E\u5E83\u304C\u308A\u3068\u3001\u3075\u3060\u3093\u904B\u8EE2\u3059\u308B\u4EBA\u306B\u3068\u3063\u3066\u306E\u4FBF\u5229\u3055\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 47,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review evaluating the entertainment value and educational benefits of trending Japanese learning or cultural podcast programs from a listener's perspective.",
    japanese: "<ruby>\u6700\u8FD1<rt>\u3055\u3044\u304D\u3093</rt></ruby><ruby>\u8A71\u984C<rt>\u308F\u3060\u3044</rt></ruby>\u306E\u65E5\u672C\u8A9E\u5B66\u7FD2\u3084<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u3092<ruby>\u7D39\u4ECB<rt>\u3057\u3087\u3046\u304B\u3044</rt></ruby>\u3059\u308B\u30DD\u30C3\u30C9\u30AD\u30E3\u30B9\u30C8<ruby>\u756A\u7D44<rt>\u3070\u3093\u3050\u307F</rt></ruby>\u306E<ruby>\u9762\u767D<rt>\u304A\u3082\u3057\u308D</rt></ruby>\u3055\u3068\u5B66\u3076<ruby>\u4FA1\u5024<rt>\u304B\u3061</rt></ruby>\u306B\u3064\u3044\u3066\u3001\u805E\u304F\u4EBA\u306E<ruby>\u76EE\u7DDA<rt>\u3081\u305B\u3093</rt></ruby>\u304B\u3089\u30EC\u30D3\u30E5\u30FC\u3057\u306A\u3055\u3044\u3002",
    japanese_original: "\u6700\u8FD1\u8A71\u984C\u306E\u65E5\u672C\u8A9E\u5B66\u7FD2\u3084\u6587\u5316\u3092\u7D39\u4ECB\u3059\u308B\u30DD\u30C3\u30C9\u30AD\u30E3\u30B9\u30C8\u756A\u7D44\u306E\u9762\u767D\u3055\u3068\u5B66\u3076\u4FA1\u5024\u306B\u3064\u3044\u3066\u3001\u805E\u304F\u4EBA\u306E\u76EE\u7DDA\u304B\u3089\u30EC\u30D3\u30E5\u30FC\u3057\u306A\u3055\u3044\u3002"
  },
  {
    id: 48,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review evaluating the quality, service, and atmosphere of a newly opened Japanese restaurant called 'Haruya' based on your actual dining experience.",
    japanese: "<ruby>\u5730\u5143<rt>\u3058\u3082\u3068</rt></ruby>\u306B\u65B0\u3057\u304F\u3067\u304D\u305F\u65E5\u672C\u98DF\u30EC\u30B9\u30C8\u30E9\u30F3\u300C\u306F\u308B\u5C4B\u300D\u306B\u884C\u3063\u305F<ruby>\u7D4C\u9A13<rt>\u3051\u3044\u3051\u3093</rt></ruby>\u3092\u3082\u3068\u306B\u3001<ruby>\u6599\u7406<rt>\u308A\u3087\u3046\u308A</rt></ruby>\u306E<ruby>\u5473<rt>\u3042\u3058</rt></ruby>\u3084\u30B5\u30FC\u30D3\u30B9\u306E<ruby>\u826F<rt>\u3088</rt></ruby>\u3044\u70B9\u3068<ruby>\u76F4<rt>\u306A\u304A</rt></ruby>\u3057\u305F\u307B\u3046\u304C\u3088\u3044\u70B9\u3092\u304F\u308F\u3057\u304F<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5730\u5143\u306B\u65B0\u3057\u304F\u3067\u304D\u305F\u65E5\u672C\u98DF\u30EC\u30B9\u30C8\u30E9\u30F3\u300C\u306F\u308B\u5C4B\u300D\u306B\u884C\u3063\u305F\u7D4C\u9A13\u3092\u3082\u3068\u306B\u3001\u6599\u7406\u306E\u5473\u3084\u30B5\u30FC\u30D3\u30B9\u306E\u826F\u3044\u70B9\u3068\u76F4\u3057\u305F\u307B\u3046\u304C\u3088\u3044\u70B9\u3092\u304F\u308F\u3057\u304F\u8A55\u4FA1\u3059\u308B\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 49,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating the advantages and disadvantages of obtaining a driver's license as a high school student in Australia.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u304C<ruby>\u904B\u8EE2<rt>\u3046\u3093\u3066\u3093</rt></ruby><ruby>\u514D\u8A31<rt>\u3081\u3093\u304D\u3087</rt></ruby>\u3092<ruby>\u53D6<rt>\u3068</rt></ruby>\u308B\u3053\u3068\u306E\u9577\u6240\u3068<ruby>\u77ED\u6240<rt>\u305F\u3093\u3057\u3087</rt></ruby>\u3092<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3057\u3001\u793E\u4F1A\u3078\u306E<ruby>\u5F71\u97FF<rt>\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u3092\u8003\u3048\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u9AD8\u6821\u751F\u304C\u904B\u8EE2\u514D\u8A31\u3092\u53D6\u308B\u3053\u3068\u306E\u9577\u6240\u3068\u77ED\u6240\u3092\u8A55\u4FA1\u3057\u3001\u793E\u4F1A\u3078\u306E\u5F71\u97FF\u3092\u8003\u3048\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 50,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating the pros and cons of teenagers using smartphones and the internet in their daily lives and study habits.",
    japanese: "\u30B9\u30DE\u30DB\u3084\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u304C\u4ECA\u306E\u9AD8\u6821\u751F\u306E\u3075\u3060\u3093\u306E\u751F\u6D3B\u3084\u52C9\u5F37\u306B\u3069\u306E\u3088\u3046\u306A<ruby>\u5F71\u97FF<rt>\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u3092\u3042\u305F\u3048\u3066\u3044\u308B\u304B\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30B9\u30DE\u30DB\u3084\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u304C\u4ECA\u306E\u9AD8\u6821\u751F\u306E\u3075\u3060\u3093\u306E\u751F\u6D3B\u3084\u52C9\u5F37\u306B\u3069\u306E\u3088\u3046\u306A\u5F71\u97FF\u3092\u3042\u305F\u3048\u3066\u3044\u308B\u304B\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 51,
    category: "Evaluative",
    textType: "Article",
    english: "Write a review evaluating the pros and cons of online shopping based on its booming popularity among consumers in Melbourne.",
    japanese: "\u30CD\u30C3\u30C8<ruby>\u901A\u8CA9<rt>\u3064\u3046\u306F\u3093</rt></ruby>\u304C\u5E83\u304C\u3063\u3066\u3044\u308B\u3053\u3068\u304C\u793E\u4F1A\u306B<ruby>\u4E0E<rt>\u3042\u305F</rt></ruby>\u3048\u308B<ruby>\u5F71\u97FF<rt>\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u306B\u3064\u3044\u3066\u3001\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u306E<ruby>\u826F<rt>\u3088</rt></ruby>\u3044\u70B9\u3068<ruby>\u60AA<rt>\u308F\u308B</rt></ruby>\u3044\u70B9\u3092\u3044\u308D\u3044\u308D\u306A<ruby>\u89D2\u5EA6<rt>\u304B\u304F\u3069</rt></ruby>\u304B\u3089<ruby>\u5206\u6790<rt>\u3076\u3093\u305B\u304D</rt></ruby>\u3057\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30CD\u30C3\u30C8\u901A\u8CA9\u304C\u5E83\u304C\u3063\u3066\u3044\u308B\u3053\u3068\u304C\u793E\u4F1A\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u306B\u3064\u3044\u3066\u3001\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u306E\u826F\u3044\u70B9\u3068\u60AA\u3044\u70B9\u3092\u3044\u308D\u3044\u308D\u306A\u89D2\u5EA6\u304B\u3089\u5206\u6790\u3057\u3066\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 52,
    category: "Evaluative",
    textType: "Report",
    english: "Write a report evaluating the service quality, comfort, and pros and cons of taking the inaugural flight of a new Japanese airline from Melbourne to Tokyo.",
    japanese: "\u65B0\u3057\u3044\u65E5\u672C\u306E<ruby>\u822A\u7A7A<rt>\u3053\u3046\u304F\u3046</rt></ruby>\u4F1A\u793E\u306E<ruby>\u6700\u521D<rt>\u3055\u3044\u3057\u3087</rt></ruby>\u306E<ruby>\u4FBF<rt>\u3073\u3093</rt></ruby>\u3067\u30E1\u30EB\u30DC\u30EB\u30F3\u304B\u3089\u6771\u4EAC\u3078<ruby>\u98DB<rt>\u3068</rt></ruby>\u3093\u3060\u3068\u304D\u306E\u3001\u30B5\u30FC\u30D3\u30B9\u306E\u3088\u3055\u3084<ruby>\u5FEB\u9069<rt>\u304B\u3044\u3066\u304D</rt></ruby>\u3055\u3001<ruby>\u826F<rt>\u3088</rt></ruby>\u3044\u70B9\u3068<ruby>\u60AA<rt>\u308F\u308B</rt></ruby>\u3044\u70B9\u3092<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65B0\u3057\u3044\u65E5\u672C\u306E\u822A\u7A7A\u4F1A\u793E\u306E\u6700\u521D\u306E\u4FBF\u3067\u30E1\u30EB\u30DC\u30EB\u30F3\u304B\u3089\u6771\u4EAC\u3078\u98DB\u3093\u3060\u3068\u304D\u306E\u3001\u30B5\u30FC\u30D3\u30B9\u306E\u3088\u3055\u3084\u5FEB\u9069\u3055\u3001\u826F\u3044\u70B9\u3068\u60AA\u3044\u70B9\u3092\u8A55\u4FA1\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 53,
    category: "Evaluative",
    textType: "Article",
    english: "Write an evaluative article discussing whether high-tech machines like computers and home appliances have truly made human life happier.",
    japanese: "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3084\u5BB6\u96FB\u306A\u3069\u306E\u30CF\u30A4\u30C6\u30AF\u306A<ruby>\u6A5F\u68B0<rt>\u304D\u304B\u3044</rt></ruby>\u306F<ruby>\u672C\u5F53<rt>\u307B\u3093\u3068\u3046</rt></ruby>\u306B\u4EBA\u9593\u306E\u751F\u6D3B\u3092<ruby>\u5E78<rt>\u3057\u3042\u308F</rt></ruby>\u305B\u306B\u3057\u305F\u304B\u3068\u3044\u3046\u30C6\u30FC\u30DE\u306B\u3064\u3044\u3066\u3001\u30E1\u30EA\u30C3\u30C8\u3068\u30C7\u30E1\u30EA\u30C3\u30C8\u304B\u3089<ruby>\u51B7\u9759<rt>\u308C\u3044\u305B\u3044</rt></ruby>\u306B<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3084\u5BB6\u96FB\u306A\u3069\u306E\u30CF\u30A4\u30C6\u30AF\u306A\u6A5F\u68B0\u306F\u672C\u5F53\u306B\u4EBA\u9593\u306E\u751F\u6D3B\u3092\u5E78\u305B\u306B\u3057\u305F\u304B\u3068\u3044\u3046\u30C6\u30FC\u30DE\u306B\u3064\u3044\u3066\u3001\u30E1\u30EA\u30C3\u30C8\u3068\u30C7\u30E1\u30EA\u30C3\u30C8\u304B\u3089\u51B7\u9759\u306B\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 54,
    category: "Evaluative",
    textType: "Article",
    english: "Write an article evaluating the impact of part-time jobs on high school students' academic performance and time management skills.",
    japanese: "\u30A2\u30EB\u30D0\u30A4\u30C8\u304C\u9AD8\u6821\u751F\u306E\u52C9\u5F37\u3084\u6642\u9593\u306E<ruby>\u7BA1\u7406<rt>\u304B\u3093\u308A</rt></ruby>\u306B\u3069\u306E\u3088\u3046\u306A<ruby>\u5F71\u97FF<rt>\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u3092\u3042\u305F\u3048\u3066\u3044\u308B\u304B\u306B\u3064\u3044\u3066\u3001<ruby>\u826F<rt>\u3088</rt></ruby>\u3044<ruby>\u9762<rt>\u3081\u3093</rt></ruby>\u3068<ruby>\u60AA<rt>\u308F\u308B</rt></ruby>\u3044<ruby>\u9762<rt>\u3081\u3093</rt></ruby>\u3092<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30A2\u30EB\u30D0\u30A4\u30C8\u304C\u9AD8\u6821\u751F\u306E\u52C9\u5F37\u3084\u6642\u9593\u306E\u7BA1\u7406\u306B\u3069\u306E\u3088\u3046\u306A\u5F71\u97FF\u3092\u3042\u305F\u3048\u3066\u3044\u308B\u304B\u306B\u3064\u3044\u3066\u3001\u826F\u3044\u9762\u3068\u60AA\u3044\u9762\u3092\u8A55\u4FA1\u3059\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 55,
    category: "Evaluative",
    textType: "Report",
    english: "Write a report evaluating the pros and cons of introducing a four-day school week for senior high school students.",
    japanese: "\u9AD8\u6821\u306E<ruby>\u4E0A\u7D1A\u751F<rt>\u3058\u3087\u3046\u304D\u3085\u3046\u305B\u3044</rt></ruby>\u3092<ruby>\u5BFE\u8C61<rt>\u305F\u3044\u3057\u3087\u3046</rt></ruby>\u306B\u90314\u65E5<ruby>\u767B\u6821<rt>\u3068\u3046\u3053\u3046</rt></ruby>\u306E<ruby>\u5236\u5EA6<rt>\u305B\u3044\u3069</rt></ruby>\u3092<ruby>\u5C0E\u5165<rt>\u3069\u3046\u306B\u3085\u3046</rt></ruby>\u3059\u308B\u3053\u3068\u306E\u30E1\u30EA\u30C3\u30C8\u3068\u30C7\u30E1\u30EA\u30C3\u30C8\u306B\u3064\u3044\u3066<ruby>\u8A55\u4FA1<rt>\u3072\u3087\u3046\u304B</rt></ruby>\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9AD8\u6821\u306E\u4E0A\u7D1A\u751F\u3092\u5BFE\u8C61\u306B\u90314\u65E5\u767B\u6821\u306E\u5236\u5EA6\u3092\u5C0E\u5165\u3059\u308B\u3053\u3068\u306E\u30E1\u30EA\u30C3\u30C8\u3068\u30C7\u30E1\u30EA\u30C3\u30C8\u306B\u3064\u3044\u3066\u8A55\u4FA1\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 56,
    category: "Persuasive",
    textType: "Speech",
    english: "Write a persuasive speech script in Japanese addressed to the school council members and the principal, arguing why the school should completely eliminate single-use plastics and urging everyone to adopt eco-friendly habits like bringing reusable bags and bottles.",
    japanese: "\u5B66\u6821\u306E<ruby>\u4EE3\u8868<rt>\u3060\u3044\u3072\u3087\u3046</rt></ruby>\u3084\u6821\u9577\u5148\u751F\u306E\u524D\u3067\u3001<ruby>\u4F7F\u3044\u6368<rt>\u3064\u304B\u3044\u3059</rt></ruby>\u3066\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u3092\u3059\u3079\u3066\u306A\u304F\u3059\u3079\u304D\u3060\u3068<ruby>\u8A34<rt>\u3046\u3063\u305F</rt></ruby>\u3048\u3001\u30A8\u30B3\u30D0\u30C3\u30B0\u3084<ruby>\u6C34\u7B52<rt>\u3059\u3044\u3068\u3046</rt></ruby>\u3092\u6301\u3063\u3066\u304F\u308B\u3053\u3068\u3092\u5F37\u304F\u3059\u3059\u3081\u308B\u30B9\u30D4\u30FC\u30C1\u306E<ruby>\u539F\u7A3F<rt>\u3052\u3093\u3053\u3046</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B66\u6821\u306E\u4EE3\u8868\u3084\u6821\u9577\u5148\u751F\u306E\u524D\u3067\u3001\u4F7F\u3044\u6368\u3066\u306E\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u3092\u3059\u3079\u3066\u306A\u304F\u3059\u3079\u304D\u3060\u3068\u8A34\u3048\u3001\u30A8\u30B3\u30D0\u30C3\u30B0\u3084\u6C34\u7B52\u3092\u6301\u3063\u3066\u304F\u308B\u3053\u3068\u3092\u5F37\u304F\u3059\u3059\u3081\u308B\u30B9\u30D4\u30FC\u30C1\u306E\u539F\u7A3F\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 57,
    category: "Persuasive",
    textType: "Essay",
    english: "Write a persuasive essay in Japanese for your Japanese teacher, discussing the serious negative impacts of sleep deprivation on high school students physical/mental health and learning efficiency, and arguing for the urgent need to improve sleep habits.",
    japanese: "\u9AD8\u6821\u751F\u306E<ruby>\u7761\u7720<rt>\u3059\u3044\u307F\u3093</rt></ruby><ruby>\u4E0D\u8DB3<rt>\u3075\u305D\u304F</rt></ruby>\u304C<ruby>\u5FC3<rt>\u3053\u3053\u308D</rt></ruby>\u3084\u4F53\u306E<ruby>\u5065\u5EB7<rt>\u3051\u3093\u3053\u3046</rt></ruby>\u3001\u52C9\u5F37\u306E<ruby>\u52B9\u7387<rt>\u3053\u3046\u308A\u3064</rt></ruby>\u306B<ruby>\u4E0E<rt>\u3042\u305F</rt></ruby>\u3048\u308B<ruby>\u6DF1\u523B<rt>\u3057\u3093\u3053\u304F</rt></ruby>\u306A<ruby>\u60AA\u5F71\u97FF<rt>\u3042\u304F\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u306B\u3064\u3044\u3066\u66F8\u304D\u3001\u751F\u6D3B<ruby>\u7FD2\u6163<rt>\u3057\u3085\u3046\u304B\u3093</rt></ruby>\u3092\u3059\u3050\u306B\u3088\u304F\u3059\u308B\u3053\u3068\u304C\u3044\u304B\u306B<ruby>\u5927\u5207<rt>\u305F\u3044\u305B\u3064</rt></ruby>\u304B\u306B\u3064\u3044\u3066\u81EA\u5206\u306E<ruby>\u4E3B\u5F35<rt>\u3057\u3085\u3061\u3087\u3046</rt></ruby>\u3092\u307E\u3068\u3081\u305F\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9AD8\u6821\u751F\u306E\u7761\u7720\u4E0D\u8DB3\u304C\u5FC3\u3084\u4F53\u306E\u5065\u5EB7\u3001\u52C9\u5F37\u306E\u52B9\u7387\u306B\u4E0E\u3048\u308B\u6DF1\u523B\u306A\u60AA\u5F71\u97FF\u306B\u3064\u3044\u3066\u66F8\u304D\u3001\u751F\u6D3B\u7FD2\u6163\u3092\u3059\u3050\u306B\u3088\u304F\u3059\u308B\u3053\u3068\u304C\u3044\u304B\u306B\u5927\u5207\u304B\u306B\u3064\u3044\u3066\u81EA\u5206\u306E\u4E3B\u5F35\u3092\u307E\u3068\u3081\u305F\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 58,
    category: "Persuasive",
    textType: "Letter",
    english: "Write a letter to a close friend who is hesitant to join the school's 'Digital Detox Week,' persuading them of the benefits of participating and encouraging them to join.",
    japanese: "\u5B66\u6821\u306E\u30C7\u30B8\u30BF\u30EB\u30C7\u30C8\u30C3\u30AF\u30B9\u9031\u9593\u306B<ruby>\u53C2\u52A0<rt>\u3055\u3093\u304B</rt></ruby>\u3059\u308B\u304B<ruby>\u8FF7<rt>\u307E\u3088</rt></ruby>\u3063\u3066\u3044\u308B<ruby>\u53CB\u9054<rt>\u3068\u3082\u3060\u3061</rt></ruby>\u306B\u3001<ruby>\u53C2\u52A0<rt>\u3055\u3093\u304B</rt></ruby>\u3059\u308B\u30E1\u30EA\u30C3\u30C8\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u3066\u3044\u3063\u3057\u3087\u306B<ruby>\u53C2\u52A0<rt>\u3055\u3093\u304B</rt></ruby>\u3057\u3088\u3046\u3068\u5F37\u304F\u3059\u3059\u3081\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B66\u6821\u306E\u30C7\u30B8\u30BF\u30EB\u30C7\u30C8\u30C3\u30AF\u30B9\u9031\u9593\u306B\u53C2\u52A0\u3059\u308B\u304B\u8FF7\u3063\u3066\u3044\u308B\u53CB\u9054\u306B\u3001\u53C2\u52A0\u3059\u308B\u30E1\u30EA\u30C3\u30C8\u3092\u4F1D\u3048\u3066\u3044\u3063\u3057\u3087\u306B\u53C2\u52A0\u3057\u3088\u3046\u3068\u5F37\u304F\u3059\u3059\u3081\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 59,
    category: "Persuasive",
    textType: "Email",
    english: "Write an email to apply to be a buddy for an exchange student coming from your sister school in Japan, explaining your hospitality and suitability for the role.",
    japanese: "\u65E5\u672C\u306E\u59C9\u59B9\u6821\u304B\u3089\u6765\u308B<ruby>\u7559\u5B66\u751F<rt>\u308A\u3085\u3046\u304C\u304F\u305B\u3044</rt></ruby>\u306E<ruby>\u304A\u4E16\u8A71<rt>\u304A\u305B\u308F</rt></ruby><ruby>\u4FC2<rt>\u304C\u304B\u308A</rt></ruby>\u306B<ruby>\u7ACB\u5019\u88DC<rt>\u308A\u3063\u3053\u3046\u307B</rt></ruby>\u3059\u308B\u305F\u3081\u3001\u81EA\u5206\u304C\u305D\u306E<ruby>\u5F79\u5272<rt>\u3084\u304F\u308F\u308A</rt></ruby>\u306B<ruby>\u5411<rt>\u3080</rt></ruby>\u3044\u3066\u3044\u308B<ruby>\u7406\u7531<rt>\u308A\u3086\u3046</rt></ruby>\u3092\u30A2\u30D4\u30FC\u30EB\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u59C9\u59B9\u6821\u304B\u3089\u6765\u308B\u7559\u5B66\u751F\u306E\u304A\u4E16\u8A71\u4FC2\u306B\u7ACB\u5019\u88DC\u3059\u308B\u305F\u3081\u3001\u81EA\u5206\u304C\u305D\u306E\u5F79\u5272\u306B\u5411\u3044\u3066\u3044\u308B\u7406\u7531\u3092\u30A2\u30D4\u30FC\u30EB\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 60,
    category: "Persuasive",
    textType: "Speech",
    english: "Deliver a speech to the school assembly arguing that teenage participation in volunteer work is essential for future career development.",
    japanese: "<ruby>\u82E5<rt>\u308F\u304B</rt></ruby>\u3044\u4EBA\u304C\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u6D3B\u52D5\u306B<ruby>\u53C2\u52A0<rt>\u3055\u3093\u304B</rt></ruby>\u3059\u308B\u3053\u3068\u306F<ruby>\u5C06\u6765<rt>\u3057\u3087\u3046\u3089\u3044</rt></ruby>\u306E\u4ED5\u4E8B\u306E\u305F\u3081\u306B\u3068\u3066\u3082<ruby>\u5927\u5207<rt>\u305F\u3044\u305B\u3064</rt></ruby>\u3067\u3042\u308B\u3068\u3044\u3046\u30C6\u30FC\u30DE\u3067\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u82E5\u3044\u4EBA\u304C\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u6D3B\u52D5\u306B\u53C2\u52A0\u3059\u308B\u3053\u3068\u306F\u5C06\u6765\u306E\u4ED5\u4E8B\u306E\u305F\u3081\u306B\u3068\u3066\u3082\u5927\u5207\u3067\u3042\u308B\u3068\u3044\u3046\u30C6\u30FC\u30DE\u3067\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 61,
    category: "Persuasive",
    textType: "Email",
    english: "Write an email to a friend who replied that they are 'too busy to join' a local volunteer cleanup, persuading them that even a short participation is worthwhile.",
    japanese: "<ruby>\u5730\u5143<rt>\u3058\u3082\u3068</rt></ruby>\u306E\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u306E<ruby>\u6383\u9664<rt>\u305D\u3046\u3058</rt></ruby>\u306B<ruby>\u8A98<rt>\u3055\u305D</rt></ruby>\u3063\u305F\u3068\u3053\u308D<ruby>\u5FD9<rt>\u3044\u305D\u304C</rt></ruby>\u3057\u3044\u304B\u3089<ruby>\u65AD<rt>\u3053\u3068\u308F</rt></ruby>\u308A\u305F\u3044\u3068<ruby>\u8FD4\u4E8B<rt>\u3078\u3093\u3058</rt></ruby>\u3092\u3057\u305F<ruby>\u53CB\u9054<rt>\u3068\u3082\u3060\u3061</rt></ruby>\u306B\u3001\u5C11\u3057\u306E\u6642\u9593\u3060\u3051\u3067\u3082<ruby>\u53C2\u52A0<rt>\u3055\u3093\u304B</rt></ruby>\u3059\u308B<ruby>\u4FA1\u5024<rt>\u304B\u3061</rt></ruby>\u304C\u3042\u308B\u3053\u3068\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5730\u5143\u306E\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u306E\u6383\u9664\u306B\u8A98\u3063\u305F\u3068\u3053\u308D\u5FD9\u3057\u3044\u304B\u3089\u65AD\u308A\u305F\u3044\u3068\u8FD4\u4E8B\u3092\u3057\u305F\u53CB\u9054\u306B\u3001\u5C11\u3057\u306E\u6642\u9593\u3060\u3051\u3067\u3082\u53C2\u52A0\u3059\u308B\u4FA1\u5024\u304C\u3042\u308B\u3053\u3068\u3092\u4F1D\u3048\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 62,
    category: "Persuasive",
    textType: "Letter",
    english: "Write a letter to a local community leader proposing the setup of a Japanese cultural food stall at the upcoming international food festival.",
    japanese: "<ruby>\u5730\u57DF<rt>\u3061\u3044\u304D</rt></ruby>\u3067\u3072\u3089\u304B\u308C\u308B\u304A<ruby>\u796D<rt>\u307E\u3064</rt></ruby>\u308A\u3067\u65E5\u672C<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u306E\u98DF\u3079\u7269\u306E\u30D6\u30FC\u30B9\u3092\u51FA\u305D\u3046\u3068<ruby>\u5730\u57DF<rt>\u3061\u3044\u304D</rt></ruby>\u306E\u4EBA\u306B<ruby>\u304A\u9858<rt>\u304A\u306D\u304C</rt></ruby>\u3044\u3059\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5730\u57DF\u3067\u3072\u3089\u304B\u308C\u308B\u304A\u796D\u308A\u3067\u65E5\u672C\u6587\u5316\u306E\u98DF\u3079\u7269\u306E\u30D6\u30FC\u30B9\u3092\u51FA\u305D\u3046\u3068\u5730\u57DF\u306E\u4EBA\u306B\u304A\u9858\u3044\u3059\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 63,
    category: "Persuasive",
    textType: "Letter",
    english: "Write a letter to your school librarian politely and persuasively requesting them to introduce more Japanese novels and magazines to the library.",
    japanese: "\u5B66\u6821\u306E<ruby>\u56F3\u66F8\u9928<rt>\u3068\u3057\u3087\u304B\u3093</rt></ruby>\u306B\u65E5\u672C\u8A9E\u306E<ruby>\u5C0F\u8AAC<rt>\u3057\u3087\u3046\u305B\u3064</rt></ruby>\u3084<ruby>\u96D1\u8A8C<rt>\u3056\u3063\u3057</rt></ruby>\u3092\u3082\u3063\u3068<ruby>\u7F6E<rt>\u304A</rt></ruby>\u3044\u3066\u307B\u3057\u3044\u3068\u3001<ruby>\u56F3\u66F8\u9928<rt>\u3068\u3057\u3087\u304B\u3093</rt></ruby>\u306E\u5148\u751F\u306B<ruby>\u71B1\u5FC3<rt>\u306D\u3063\u3057\u3093</rt></ruby>\u306B<ruby>\u304A\u9858<rt>\u304A\u306D\u304C</rt></ruby>\u3044\u3059\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B66\u6821\u306E\u56F3\u66F8\u9928\u306B\u65E5\u672C\u8A9E\u306E\u5C0F\u8AAC\u3084\u96D1\u8A8C\u3092\u3082\u3063\u3068\u7F6E\u3044\u3066\u307B\u3057\u3044\u3068\u3001\u56F3\u66F8\u9928\u306E\u5148\u751F\u306B\u71B1\u5FC3\u306B\u304A\u9858\u3044\u3059\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 64,
    category: "Persuasive",
    textType: "Letter",
    english: "Write a letter to local shop owners calling for their cooperation in an eco-project aimed at reducing plastic waste in your local neighborhood.",
    japanese: "<ruby>\u5730\u57DF<rt>\u3061\u3044\u304D</rt></ruby>\u306E\u5E97\u306E\u4EBA\u305F\u3061\u306B\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u306E\u30B4\u30DF\u3092\u3078\u3089\u3059\u30A8\u30B3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B<ruby>\u5354\u529B<rt>\u304D\u3087\u3046\u308A\u3087\u304F</rt></ruby>\u3057\u3066\u3082\u3089\u3046\u3088\u3046<ruby>\u547C<rt>\u3088</rt></ruby>\u3073\u304B\u3051\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5730\u57DF\u306E\u5E97\u306E\u4EBA\u305F\u3061\u306B\u30D7\u30E9\u30B9\u30C1\u30C3\u30AF\u306E\u30B4\u30DF\u3092\u3078\u3089\u3059\u30A8\u30B3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5354\u529B\u3057\u3066\u3082\u3089\u3046\u3088\u3046\u547C\u3073\u304B\u3051\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 65,
    category: "Persuasive",
    textType: "Speech",
    english: "Deliver a speech as a student representative to the entire school calling for cooperation on a school-wide food waste reduction plan.",
    japanese: "\u5B66\u6821<ruby>\u5168\u4F53<rt>\u305C\u3093\u305F\u3044</rt></ruby>\u3067<ruby>\u53D6\u308A\u7D44<rt>\u3068\u308A\u304F</rt></ruby>\u3080\u98DF\u3079\u7269\u306E\u30E0\u30C0\u3092\u306A\u304F\u3059<ruby>\u8A08\u753B<rt>\u3051\u3044\u304B\u304F</rt></ruby>\u306B\u3064\u3044\u3066\u3001<ruby>\u751F\u5F92<rt>\u305B\u3044\u3068</rt></ruby>\u306E<ruby>\u4EE3\u8868<rt>\u3060\u3044\u3072\u3087\u3046</rt></ruby>\u3068\u3057\u3066<ruby>\u5168\u6821<rt>\u305C\u3093\u3053\u3046</rt></ruby><ruby>\u751F\u5F92<rt>\u305B\u3044\u3068</rt></ruby>\u306B<ruby>\u5354\u529B<rt>\u304D\u3087\u3046\u308A\u3087\u304F</rt></ruby>\u3092<ruby>\u547C<rt>\u3088</rt></ruby>\u3073\u304B\u3051\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B66\u6821\u5168\u4F53\u3067\u53D6\u308A\u7D44\u3080\u98DF\u3079\u7269\u306E\u30E0\u30C0\u3092\u306A\u304F\u3059\u8A08\u753B\u306B\u3064\u3044\u3066\u3001\u751F\u5F92\u306E\u4EE3\u8868\u3068\u3057\u3066\u5168\u6821\u751F\u5F92\u306B\u5354\u529B\u3092\u547C\u3073\u304B\u3051\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 66,
    category: "Persuasive",
    textType: "Article",
    english: "Write an article discussing the importance of incorporating Indigenous Australian (Aboriginal) culture and art into the school education system.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u5148\u4F4F\u6C11<rt>\u305B\u3093\u3058\u3085\u3046\u307F\u3093</rt></ruby>\u65CF\u306E<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u3084\u30A2\u30FC\u30C8\u3092\u5B66\u6821\u306E<ruby>\u6559\u80B2<rt>\u304D\u3087\u3046\u3044\u304F</rt></ruby>\u306B<ruby>\u53D6\u308A\u5165<rt>\u3068\u308A\u3044</rt></ruby>\u308C\u308B\u3053\u3068\u304C\u306A\u305C<ruby>\u5927\u5207<rt>\u305F\u3044\u305B\u3064</rt></ruby>\u304B\u306B\u3064\u3044\u3066\u66F8\u304F<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u5148\u4F4F\u6C11\u65CF\u306E\u6587\u5316\u3084\u30A2\u30FC\u30C8\u3092\u5B66\u6821\u306E\u6559\u80B2\u306B\u53D6\u308A\u5165\u308C\u308B\u3053\u3068\u304C\u306A\u305C\u5927\u5207\u304B\u306B\u3064\u3044\u3066\u66F8\u304F\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 67,
    category: "Persuasive",
    textType: "Speech",
    english: "Deliver a speech at a Japanese speech contest arguing that learning a foreign language holds a value far beyond a mere communication tool.",
    japanese: "\u5916\u56FD\u8A9E\u3092\u5B66\u3076\u3053\u3068\u306F\u305F\u3060\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306E<ruby>\u9053\u5177<rt>\u3069\u3046\u3050</rt></ruby><ruby>\u4EE5\u4E0A<rt>\u3044\u3058\u3087\u3046</rt></ruby>\u306E<ruby>\u4FA1\u5024<rt>\u304B\u3061</rt></ruby>\u304C\u3042\u308B\u3068\u3044\u3046\u30C6\u30FC\u30DE\u3067\u65E5\u672C\u8A9E\u3092\u52C9\u5F37\u3059\u308B<ruby>\u610F\u5473<rt>\u3044\u307F</rt></ruby>\u3092<ruby>\u71B1<rt>\u3042\u3064</rt></ruby>\u304F\u8A71\u3059\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5916\u56FD\u8A9E\u3092\u5B66\u3076\u3053\u3068\u306F\u305F\u3060\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u9053\u5177\u4EE5\u4E0A\u306E\u4FA1\u5024\u304C\u3042\u308B\u3068\u3044\u3046\u30C6\u30FC\u30DE\u3067\u65E5\u672C\u8A9E\u3092\u52C9\u5F37\u3059\u308B\u610F\u5473\u3092\u71B1\u304F\u8A71\u3059\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 68,
    category: "Persuasive",
    textType: "Letter",
    english: "Write a letter to the local council arguing for the creation of more bicycle lanes to ensure safer commuting for students.",
    japanese: "<ruby>\u751F\u5F92<rt>\u305B\u3044\u3068</rt></ruby>\u304C<ruby>\u5B89\u5168<rt>\u3042\u3093\u305C\u3093</rt></ruby>\u306B<ruby>\u901A\u5B66<rt>\u3064\u3046\u304C\u304F</rt></ruby>\u3067\u304D\u308B\u3088\u3046\u306B<ruby>\u81EA\u8EE2\u8ECA<rt>\u3058\u3066\u3093\u3057\u3083</rt></ruby><ruby>\u5C02\u7528<rt>\u305B\u3093\u3088\u3046</rt></ruby>\u306E\u9053\u3092\u3082\u3063\u3068<ruby>\u5897<rt>\u3075</rt></ruby>\u3084\u3059\u3088\u3046\u3001<ruby>\u5E02\u5F79\u6240<rt>\u3057\u3084\u304F\u3057\u3087</rt></ruby>\u306B\u5F37\u304F<ruby>\u304A\u9858<rt>\u304A\u306D\u304C</rt></ruby>\u3044\u3059\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u751F\u5F92\u304C\u5B89\u5168\u306B\u901A\u5B66\u3067\u304D\u308B\u3088\u3046\u306B\u81EA\u8EE2\u8ECA\u5C02\u7528\u306E\u9053\u3092\u3082\u3063\u3068\u5897\u3084\u3059\u3088\u3046\u3001\u5E02\u5F79\u6240\u306B\u5F37\u304F\u304A\u9858\u3044\u3059\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 69,
    category: "Persuasive",
    textType: "Speech",
    english: "Deliver a speech arguing that high schools should incorporate practical financial literacy classes into their curriculum.",
    japanese: "\u9AD8\u6821\u3067<ruby>\u5B9F\u7528<rt>\u3058\u3064\u3088\u3046</rt></ruby><ruby>\u7684<rt>\u3066\u304D</rt></ruby>\u306A\u304A\u91D1\u306E<ruby>\u7BA1\u7406<rt>\u304B\u3093\u308A</rt></ruby>\u306B\u3064\u3044\u3066\u306E<ruby>\u6388\u696D<rt>\u3058\u3085\u304E\u3087\u3046</rt></ruby>\u3092<ruby>\u5FC5\u4FEE<rt>\u3072\u3063\u3057\u3085\u3046</rt></ruby><ruby>\u79D1\u76EE<rt>\u304B\u3082\u304F</rt></ruby>\u306B\u3059\u3079\u304D\u3060\u3068<ruby>\u8A34<rt>\u3046\u3063\u305F</rt></ruby>\u3048\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9AD8\u6821\u3067\u5B9F\u7528\u7684\u306A\u304A\u91D1\u306E\u7BA1\u7406\u306B\u3064\u3044\u3066\u306E\u6388\u696D\u3092\u5FC5\u4FEE\u79D1\u76EE\u306B\u3059\u3079\u304D\u3060\u3068\u8A34\u3048\u308B\u30B9\u30D4\u30FC\u30C1\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 70,
    category: "Persuasive",
    textType: "Article",
    english: "Write an article persuading readers that regular physical exercise is essential not only for physical health but also for mental wellbeing.",
    japanese: "\u6BCE\u65E5\u306E<ruby>\u9069\u5EA6<rt>\u3066\u304D\u3069</rt></ruby>\u306A<ruby>\u904B\u52D5<rt>\u3046\u3093\u3069\u3046</rt></ruby>\u304C\u4F53\u306E<ruby>\u5065\u5EB7<rt>\u3051\u3093\u3053\u3046</rt></ruby>\u3060\u3051\u3067\u306A\u304F<ruby>\u5FC3<rt>\u3053\u3053\u308D</rt></ruby>\u306E<ruby>\u5065\u5EB7<rt>\u3051\u3093\u3053\u3046</rt></ruby>\u306B\u3068\u3063\u3066\u3082\u3044\u304B\u306B<ruby>\u5927\u5207<rt>\u305F\u3044\u305B\u3064</rt></ruby>\u304B\u3092<ruby>\u8AAD\u8005<rt>\u3069\u304F\u3057\u3083</rt></ruby>\u306B\u5F37\u304F<ruby>\u8A34<rt>\u3046\u3063\u305F</rt></ruby>\u3048\u308B<ruby>\u8A18\u4E8B<rt>\u304D\u3058</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u6BCE\u65E5\u306E\u9069\u5EA6\u306A\u904B\u52D5\u304C\u4F53\u306E\u5065\u5EB7\u3060\u3051\u3067\u306A\u304F\u5FC3\u306E\u5065\u5EB7\u306B\u3068\u3063\u3066\u3082\u3044\u304B\u306B\u5927\u5207\u304B\u3092\u8AAD\u8005\u306B\u5F37\u304F\u8A34\u3048\u308B\u8A18\u4E8B\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 71,
    category: "Persuasive",
    textType: "Email",
    english: "Write an email to persuade the school principal to approve a student-led fundraising event for environmental protection.",
    japanese: "<ruby>\u74B0\u5883<rt>\u304B\u3093\u304D\u3087\u3046</rt></ruby><ruby>\u4FDD\u8B77<rt>\u307B\u3054</rt></ruby>\u306E\u305F\u3081\u306E<ruby>\u52DF\u91D1<rt>\u307C\u304D\u3093</rt></ruby>\u6D3B\u52D5\u3092\u5B66\u6821\u3067\u884C\u3046<ruby>\u8A31\u53EF<rt>\u304D\u3087\u304B</rt></ruby>\u3092\u6821\u9577\u5148\u751F\u306B\u3082\u3089\u3046\u305F\u3081\u3001<ruby>\u71B1\u610F<rt>\u306D\u3064\u3044</rt></ruby>\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u3066<ruby>\u7D0D\u5F97<rt>\u306A\u3063\u3068\u304F</rt></ruby>\u3057\u3066\u3082\u3089\u3046\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u74B0\u5883\u4FDD\u8B77\u306E\u305F\u3081\u306E\u52DF\u91D1\u6D3B\u52D5\u3092\u5B66\u6821\u3067\u884C\u3046\u8A31\u53EF\u3092\u6821\u9577\u5148\u751F\u306B\u3082\u3089\u3046\u305F\u3081\u3001\u71B1\u610F\u3092\u4F1D\u3048\u3066\u7D0D\u5F97\u3057\u3066\u3082\u3089\u3046\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 72,
    category: "Personal",
    textType: "Letter",
    english: "Write a personal letter in Japanese to your host family in Japan after returning to Australia, updating them on your life and expressing your gratitude for their support and the things you learned during your stay.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u81EA\u5206\u306E\u5BB6\u306B<ruby>\u623B<rt>\u3082\u3069</rt></ruby>\u3063\u305F\u3042\u3068\u65E5\u672C\u3067<ruby>\u304A\u4E16\u8A71<rt>\u304A\u305B\u308F</rt></ruby>\u306B\u306A\u3063\u305F\u30DB\u30B9\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306B<ruby>\u6700\u8FD1<rt>\u3055\u3044\u304D\u3093</rt></ruby>\u306E<ruby>\u69D8\u5B50<rt>\u3088\u3046\u3059</rt></ruby>\u3068<ruby>\u611F\u8B1D<rt>\u304B\u3093\u3057\u3083</rt></ruby>\u306E\u6C17\u6301\u3061\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u81EA\u5206\u306E\u5BB6\u306B\u623B\u3063\u305F\u3042\u3068\u65E5\u672C\u3067\u304A\u4E16\u8A71\u306B\u306A\u3063\u305F\u30DB\u30B9\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306B\u6700\u8FD1\u306E\u69D8\u5B50\u3068\u611F\u8B1D\u306E\u6C17\u6301\u3061\u3092\u4F1D\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 73,
    category: "Personal",
    textType: "Journal",
    english: "Write a journal entry in Japanese reflecting on your experiences, challenges, and personal growth since you started volunteering to teach Japanese to local children last month.",
    japanese: "\u5148\u6708\u304B\u3089\u8FD1\u6240\u306E\u5B50\u3069\u3082\u305F\u3061\u306B\u65E5\u672C\u8A9E\u3092\u6559\u3048\u308B\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u3092\u59CB\u3081\u3066\u304B\u3089<ruby>\u611F<rt>\u304B\u3093</rt></ruby>\u3058\u305F<ruby>\u5927\u5909<rt>\u305F\u3044\u3078\u3093</rt></ruby>\u306A\u3053\u3068\u3084\u81EA\u5206\u306E<ruby>\u6210\u9577<rt>\u305B\u3044\u3061\u3087\u3046</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u632F\u308A\u8FD4<rt>\u3075\u308A\u304B\u3048</rt></ruby>\u308B<ruby>\u65E5\u8A18<rt>\u306B\u3063\u304D</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5148\u6708\u304B\u3089\u8FD1\u6240\u306E\u5B50\u3069\u3082\u305F\u3061\u306B\u65E5\u672C\u8A9E\u3092\u6559\u3048\u308B\u30DC\u30E9\u30F3\u30C6\u30A3\u30A2\u3092\u59CB\u3081\u3066\u304B\u3089\u611F\u3058\u305F\u5927\u5909\u306A\u3053\u3068\u3084\u81EA\u5206\u306E\u6210\u9577\u306B\u3064\u3044\u3066\u632F\u308A\u8FD4\u308B\u65E5\u8A18\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 74,
    category: "Personal",
    textType: "Letter",
    english: "Write a letter to your host family expressing your gratitude for their birthday and describing the experience of cooking a traditional dish for them.",
    japanese: "\u30DB\u30B9\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306E<ruby>\u8A95\u751F<rt>\u305F\u3093\u3058\u3087\u3046</rt></ruby>\u65E5\u306B\u624B\u4F5C\u308A\u306E<ruby>\u6599\u7406<rt>\u308A\u3087\u3046\u308A</rt></ruby>\u3092\u3054\u3061\u305D\u3046\u3057\u305F\u3068\u304D\u306E\u30A8\u30D4\u30BD\u30FC\u30C9\u3068\u5BB6\u65CF\u3078\u306E<ruby>\u611F\u8B1D<rt>\u304B\u3093\u3057\u3083</rt></ruby>\u306E\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30DB\u30B9\u30C8\u30D5\u30A1\u30DF\u30EA\u30FC\u306E\u8A95\u751F\u65E5\u306B\u624B\u4F5C\u308A\u306E\u6599\u7406\u3092\u3054\u3061\u305D\u3046\u3057\u305F\u3068\u304D\u306E\u30A8\u30D4\u30BD\u30FC\u30C9\u3068\u5BB6\u65CF\u3078\u306E\u611F\u8B1D\u306E\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 75,
    category: "Personal",
    textType: "Letter",
    english: "Write a letter to your parents in Japan, reflecting on the challenges and growth you have experienced halfway through your study abroad program.",
    japanese: "<ruby>\u7559\u5B66<rt>\u308A\u3085\u3046\u304C\u304F</rt></ruby>\u751F\u6D3B\u306E\u3061\u3087\u3046\u3069<ruby>\u771F\u3093\u4E2D<rt>\u307E\u3093\u306A\u304B</rt></ruby>\u306E<ruby>\u6642\u671F<rt>\u3058\u304D</rt></ruby>\u3092\u3080\u304B\u3048\u3053\u308C\u307E\u3067\u306E<ruby>\u82E6\u52B4<rt>\u304F\u308D\u3046</rt></ruby>\u3068<ruby>\u6210\u9577<rt>\u305B\u3044\u3061\u3087\u3046</rt></ruby>\u3092<ruby>\u632F\u308A\u8FD4<rt>\u3075\u308A\u304B\u3048</rt></ruby>\u308A\u306A\u304C\u3089\u65E5\u672C\u306E<ruby>\u4E21\u89AA<rt>\u308A\u3087\u3046\u3057\u3093</rt></ruby>\u306B<ruby>\u6700\u8FD1<rt>\u3055\u3044\u304D\u3093</rt></ruby>\u306E<ruby>\u69D8\u5B50<rt>\u3088\u3046\u3059</rt></ruby>\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u7559\u5B66\u751F\u6D3B\u306E\u3061\u3087\u3046\u3069\u771F\u3093\u4E2D\u306E\u6642\u671F\u3092\u3080\u304B\u3048\u3053\u308C\u307E\u3067\u306E\u82E6\u52B4\u3068\u6210\u9577\u3092\u632F\u308A\u8FD4\u308A\u306A\u304C\u3089\u65E5\u672C\u306E\u4E21\u89AA\u306B\u6700\u8FD1\u306E\u69D8\u5B50\u3092\u4F1D\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 76,
    category: "Personal",
    textType: "Essay",
    english: "Write an essay about the most difficult challenge you have faced in your life and how you overcame it with the help of those around you.",
    japanese: "\u3053\u308C\u307E\u3067\u306E\u4EBA\u751F\u3067\u4E00\u756A<ruby>\u5927\u5909<rt>\u305F\u3044\u3078\u3093</rt></ruby>\u3060\u3063\u305F\u3053\u3068\u306B<ruby>\u7ACB\u3061\u5411<rt>\u305F\u3061\u3080</rt></ruby>\u304B\u3044\u307E\u308F\u308A\u306E\u4EBA\u305F\u3061\u306E<ruby>\u52A9<rt>\u305F\u3059</rt></ruby>\u3051\u3092<ruby>\u501F<rt>\u304B</rt></ruby>\u308A\u306A\u304C\u3089\u4E57\u308A\u3053\u3048\u305F<ruby>\u7D4C\u9A13<rt>\u3051\u3044\u3051\u3093</rt></ruby>\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u3053\u308C\u307E\u3067\u306E\u4EBA\u751F\u3067\u4E00\u756A\u5927\u5909\u3060\u3063\u305F\u3053\u3068\u306B\u7ACB\u3061\u5411\u304B\u3044\u307E\u308F\u308A\u306E\u4EBA\u305F\u3061\u306E\u52A9\u3051\u3092\u501F\u308A\u306A\u304C\u3089\u4E57\u308A\u3053\u3048\u305F\u7D4C\u9A13\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 77,
    category: "Personal",
    textType: "Journal",
    english: "Write a journal entry on the first night after finishing your work experience placement, expressing both the harshness of the job and your sense of achievement.",
    japanese: "<ruby>\u8077\u5834<rt>\u3057\u3087\u304F\u3070</rt></ruby>\u306E<ruby>\u4F53\u9A13<rt>\u305F\u3044\u3051\u3093</rt></ruby>\u3092\u7D42\u3048\u305F<ruby>\u6700\u521D<rt>\u3055\u3044\u3057\u3087</rt></ruby>\u306E\u591C\u4ED5\u4E8B\u306E\u5927<ruby>\u5927\u5909<rt>\u305F\u3044\u3078\u3093</rt></ruby>\u3055\u3068<ruby>\u3084\u308A\u9042<rt>\u3084\u308A\u3068</rt></ruby>\u3052\u305F\u3068\u3044\u3046\u6C17\u6301\u3061\u3092<ruby>\u7D20\u76F4<rt>\u3059\u306A\u304A</rt></ruby>\u306B\u66F8\u3044\u305F<ruby>\u65E5\u8A18<rt>\u306B\u3063\u304D</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u8077\u5834\u306E\u4F53\u9A13\u3092\u7D42\u3048\u305F\u6700\u521D\u306E\u591C\u4ED5\u4E8B\u306E\u5927\u5909\u3055\u3068\u3084\u308A\u9042\u3052\u305F\u3068\u3044\u3046\u6C17\u6301\u3061\u3092\u7D20\u76F4\u306B\u66F8\u3044\u305F\u65E5\u8A18\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 78,
    category: "Personal",
    textType: "Essay",
    english: "Write an essay about a special person who has had the greatest impact on your life, detailing specific memories you share with them.",
    japanese: "\u81EA\u5206\u306E\u4EBA\u751F\u306B\u4E00\u756A\u5927\u304D\u306A<ruby>\u5F71\u97FF<rt>\u3048\u3044\u304D\u3087\u3046</rt></ruby>\u3092<ruby>\u4E0E<rt>\u3042\u305F</rt></ruby>\u3048\u3066\u304F\u308C\u305F<ruby>\u7279\u5225<rt>\u3068\u304F\u3079\u3064</rt></ruby>\u306A\u4EBA\u3068\u306E\u601D\u3044\u51FA\u3084\u305D\u306E\u4EBA\u304B\u3089\u5B66\u3093\u3060\u3053\u3068\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u81EA\u5206\u306E\u4EBA\u751F\u306B\u4E00\u756A\u5927\u304D\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u3066\u304F\u308C\u305F\u7279\u5225\u306A\u4EBA\u3068\u306E\u601D\u3044\u51FA\u3084\u305D\u306E\u4EBA\u304B\u3089\u5B66\u3093\u3060\u3053\u3068\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 79,
    category: "Personal",
    textType: "Journal",
    english: "Write a New Year's Eve journal entry reflecting on the goals you set at the beginning of the year, your current progress, and the lessons you have learned.",
    japanese: "\u5E74\u306E<ruby>\u521D<rt>\u306F\u3058</rt></ruby>\u3081\u306B\u305F\u3066\u305F<ruby>\u76EE\u6A19<rt>\u3082\u304F\u3072\u3087\u3046</rt></ruby>\u304C\u3069\u3046\u306A\u3063\u3066\u3044\u308B\u304B\u3053\u308C\u307E\u3067\u306E<ruby>\u5931\u6557<rt>\u3057\u3063\u3071\u3044</rt></ruby>\u3084\u5B66\u3073\u3092<ruby>\u632F\u308A\u8FD4<rt>\u3075\u308A\u304B\u3048</rt></ruby>\u308B<ruby>\u5927\u6666\u65E5<rt>\u304A\u304A\u307F\u305D\u304B</rt></ruby>\u306E<ruby>\u65E5\u8A18<rt>\u306B\u3063\u304D</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5E74\u306E\u521D\u3081\u306B\u305F\u3066\u305F\u76EE\u6A19\u304C\u3069\u3046\u306A\u3063\u3066\u3044\u308B\u304B\u3053\u308C\u307E\u3067\u306E\u5931\u6557\u3084\u5B66\u3073\u3092\u632F\u308A\u8FD4\u308B\u5927\u6666\u65E5\u306E\u65E5\u8A18\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 80,
    category: "Personal",
    textType: "Journal",
    english: "Write a journal entry expressing your mixed feelings and anxiety as you approach the end of your high school life and face important career decisions.",
    japanese: "\u9AD8\u6821\u751F\u6D3B\u306E\u7D42\u308F\u308A\u304C\u8FD1\u3065\u304D<ruby>\u5C06\u6765<rt>\u3057\u3087\u3046\u3089\u3044</rt></ruby>\u306E<ruby>\u9032\u8DEF<rt>\u3057\u3093\u308D</rt></ruby>\u3092<ruby>\u6C7A<rt>\u304D</rt></ruby>\u3081\u308B\u3053\u3068\u3078\u306E<ruby>\u4E0D\u5B89<rt>\u3075\u3042\u3093</rt></ruby>\u3084\u3044\u308D\u3044\u308D\u306A\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F<ruby>\u65E5\u8A18<rt>\u306B\u3063\u304D</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9AD8\u6821\u751F\u6D3B\u306E\u7D42\u308F\u308A\u304C\u8FD1\u3065\u304D\u5C06\u6765\u306E\u9032\u8DEF\u3092\u6C7A\u3081\u308B\u3053\u3068\u3078\u306E\u4E0D\u5B89\u3084\u3044\u308D\u3044\u308D\u306A\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F\u65E5\u8A18\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 81,
    category: "Personal",
    textType: "Letter",
    english: "Write a letter to your teacher in Japan sharing your online participation experience in a Japanese university open campus and your strong desire to study in Japan in the future.",
    japanese: "\u65E5\u672C\u306E\u5927\u5B66\u306E\u30AA\u30FC\u30D7\u30F3\u30AD\u30E3\u30F3\u30D1\u30B9\u306B\u30AA\u30F3\u30E9\u30A4\u30F3\u3067<ruby>\u53C2\u52A0<rt>\u3055\u3093\u304B</rt></ruby>\u3057\u305F<ruby>\u611F\u60F3<rt>\u304B\u3093\u305D\u3046</rt></ruby>\u3068<ruby>\u5C06\u6765<rt>\u3057\u3087\u3046\u3089\u3044</rt></ruby>\u65E5\u672C\u3067\u52C9\u5F37\u3057\u305F\u3044\u3068\u3044\u3046\u5F37\u3044\u6C17\u6301\u3061\u3092\u65E5\u672C\u306E\u5148\u751F\u306B<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u5927\u5B66\u306E\u30AA\u30FC\u30D7\u30F3\u30AD\u30E3\u30F3\u30D1\u30B9\u306B\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u53C2\u52A0\u3057\u305F\u611F\u60F3\u3068\u5C06\u6765\u65E5\u672C\u3067\u52C9\u5F37\u3057\u305F\u3044\u3068\u3044\u3046\u5F37\u3044\u6C17\u6301\u3061\u3092\u65E5\u672C\u306E\u5148\u751F\u306B\u4F1D\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 82,
    category: "Personal",
    textType: "Letter",
    english: "Write a letter of gratitude to your host mother who kindly looked after you when you fell ill during your study abroad, describing how you are feeling now.",
    japanese: "<ruby>\u7559\u5B66<rt>\u308A\u3085\u3046\u304C\u304F</rt></ruby>\u4E2D\u306B\u75C5\u6C17\u306B\u306A\u3063\u305F\u3068\u304D\u306B\u3066\u3044\u306D\u3044\u306B<ruby>\u770B\u75C5<rt>\u304B\u3093\u3073\u3087\u3046</rt></ruby>\u3057\u3066\u304F\u308C\u305F\u30DB\u30B9\u30C8\u30DE\u30B6\u30FC\u306B<ruby>\u611F\u8B1D<rt>\u304B\u3093\u3057\u3083</rt></ruby>\u306E\u6C17\u6301\u3061\u3068\u4ECA\u306E\u5143\u6C17\u306A<ruby>\u69D8\u5B50<rt>\u3088\u3046\u3059</rt></ruby>\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u7559\u5B66\u4E2D\u306B\u75C5\u6C17\u306B\u306A\u3063\u305F\u3068\u304D\u306B\u3066\u3044\u306D\u3044\u306B\u770B\u75C5\u3057\u3066\u304F\u308C\u305F\u30DB\u30B9\u30C8\u30DE\u30B6\u30FC\u306B\u611F\u8B1D\u306E\u6C17\u6301\u3061\u3068\u4ECA\u306E\u5143\u6C17\u306A\u69D8\u5B50\u3092\u4F1D\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 83,
    category: "Personal",
    textType: "Email",
    english: "Write an email to your workplace manager asking to adjust your shifts so that you can focus more on your studies as a part-time worker.",
    japanese: "\u30A2\u30EB\u30D0\u30A4\u30C8\u3092\u3057\u3066\u3044\u308B<ruby>\u8077\u5834<rt>\u3057\u3087\u304F\u3070</rt></ruby>\u306E\u5E97\u9577\u306B\u52C9\u5F37\u306B<ruby>\u96C6\u4E2D<rt>\u3057\u3085\u3046\u3061\u3085\u3046</rt></ruby>\u3059\u308B\u305F\u3081\u306B\u30B7\u30D5\u30C8\u3092<ruby>\u5909<rt>\u304B</rt></ruby>\u3048\u3066\u307B\u3057\u3044\u3068<ruby>\u304A\u9858<rt>\u304A\u306D\u304C</rt></ruby>\u3044\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30A2\u30EB\u30D0\u30A4\u30C8\u3092\u3057\u3066\u3044\u308B\u8077\u5834\u306E\u5E97\u9577\u306B\u52C9\u5F37\u306B\u96C6\u4E2D\u3059\u308B\u305F\u3081\u306B\u30B7\u30D5\u30C8\u3092\u5909\u3048\u3066\u307B\u3057\u3044\u3068\u304A\u9858\u3044\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 84,
    category: "Personal",
    textType: "Letter",
    english: "Write a letter to your family and friends expressing gratitude for their support and sharing your future aspirations after winning a prize in a Japanese speech contest.",
    japanese: "\u65E5\u672C\u8A9E\u306E\u30B9\u30D4\u30FC\u30C1\u5927\u4F1A\u3067<ruby>\u5165\u8CDE<rt>\u306B\u3085\u3046\u3057\u3087\u3046</rt></ruby>\u3057\u305F\u81EA\u5206\u3092<ruby>\u5FDC\u63F4<rt>\u304A\u3046\u3048\u3093</rt></ruby>\u3057\u3066\u304F\u308C\u305F\u5BB6\u65CF\u3084<ruby>\u53CB\u9054<rt>\u3068\u3082\u3060\u3061</rt></ruby>\u306B<ruby>\u611F\u8B1D<rt>\u304B\u3093\u3057\u3083</rt></ruby>\u3068\u3053\u308C\u304B\u3089\u306E<ruby>\u76EE\u6A19<rt>\u3082\u304F\u3072\u3087\u3046</rt></ruby>\u3092<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u8A9E\u306E\u30B9\u30D4\u30FC\u30C1\u5927\u4F1A\u3067\u5165\u8CDE\u3057\u305F\u81EA\u5206\u3092\u5FDC\u63F4\u3057\u3066\u304F\u308C\u305F\u5BB6\u65CF\u3084\u53CB\u9054\u306B\u611F\u8B1D\u3068\u3053\u308C\u304B\u3089\u306E\u76EE\u6A19\u3092\u4F1D\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 85,
    category: "Personal",
    textType: "Email",
    english: "Write an email to a close friend in Japan who is far away, offering warm and practical advice and encouraging words in response to their worries.",
    japanese: "<ruby>\u9060<rt>\u3068\u304A</rt></ruby>\u304F\u306B\u3044\u308B\u65E5\u672C\u306E<ruby>\u53CB\u9054<rt>\u3068\u3082\u3060\u3061</rt></ruby>\u304B\u3089<ruby>\u5C4A<rt>\u3068\u3069</rt></ruby>\u3044\u305F<ruby>\u60A9<rt>\u306A\u3084</rt></ruby>\u307F\u306E<ruby>\u76F8\u8AC7<rt>\u305D\u3046\u3060\u3093</rt></ruby><ruby>\u306B\u5BFE<rt>\u306B\u305F\u3044</rt></ruby>\u3057\u3066\u3042\u305F\u305F\u304B\u3044\u30A2\u30C9\u30D0\u30A4\u30B9\u3068<ruby>\u52B1<rt>\u306F\u3052</rt></ruby>\u307E\u3057\u306E<ruby>\u8A00\u8449<rt>\u3053\u3068\u3070</rt></ruby>\u3092<ruby>\u9001<rt>\u304A\u304F</rt></ruby>\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9060\u304F\u306B\u3044\u308B\u65E5\u672C\u306E\u53CB\u9054\u304B\u3089\u5C4A\u3044\u305F\u60A9\u307F\u306E\u76F8\u8AC7\u306B\u5BFE\u3057\u3066\u3042\u305F\u305F\u304B\u3044\u30A2\u30C9\u30D0\u30A4\u30B9\u3068\u52B1\u307E\u3057\u306E\u8A00\u8449\u3092\u9001\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 86,
    category: "Personal",
    textType: "Email",
    english: "Write an email to a friend you met through a Japanese cultural exchange program, proposing that you continue your communication in Japanese.",
    japanese: "\u65E5\u672C\u306E<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u3092<ruby>\u4F53\u9A13<rt>\u305F\u3044\u3051\u3093</rt></ruby>\u3059\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u3067<ruby>\u77E5\u308A\u5408<rt>\u3057\u308A\u3042</rt></ruby>\u3063\u305F<ruby>\u53CB\u9054<rt>\u3068\u3082\u3060\u3061</rt></ruby>\u306B\u3053\u308C\u304B\u3089\u3082\u65E5\u672C\u8A9E\u3067<ruby>\u9023\u7D61<rt>\u308C\u3093\u3089\u304F</rt></ruby>\u3092<ruby>\u7D9A<rt>\u3064\u3065</rt></ruby>\u3051\u3088\u3046\u3068<ruby>\u63D0\u6848<rt>\u3066\u3044\u3042\u3093</rt></ruby>\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u306E\u6587\u5316\u3092\u4F53\u9A13\u3059\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u77E5\u308A\u5408\u3063\u305F\u53CB\u9054\u306B\u3053\u308C\u304B\u3089\u3082\u65E5\u672C\u8A9E\u3067\u9023\u7D61\u3092\u7D9A\u3051\u3088\u3046\u3068\u63D0\u6848\u3059\u308B\u30E1\u30FC\u30EB\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 87,
    category: "Personal",
    textType: "Letter",
    english: "Write a letter to your grandparents sharing the joy of winning a prize in a photography contest, which is one of your favorite hobbies.",
    japanese: "\u81EA\u5206\u306E<ruby>\u8DA3\u5473<rt>\u3057\u3085\u307F</rt></ruby>\u3067\u3042\u308B<ruby>\u5199\u771F<rt>\u3057\u3083\u3057\u3093</rt></ruby>\u306E\u30B3\u30F3\u30C6\u30B9\u30C8\u3067<ruby>\u8CDE<rt>\u3057\u3087\u3046</rt></ruby>\u3092\u3082\u3089\u3063\u305F<ruby>\u559C<rt>\u3088\u308D\u3053</rt></ruby>\u3073\u3092\u3044\u3064\u3082<ruby>\u5FDC\u63F4<rt>\u304A\u3046\u3048\u3093</rt></ruby>\u3057\u3066\u304F\u308C\u3066\u3044\u308B\u304A\u3058\u3044\u3055\u3093\u3068\u304A\u3070\u3042\u3061\u3083\u3093\u306B<ruby>\u4F1D<rt>\u3064\u305F</rt></ruby>\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u81EA\u5206\u306E\u8DA3\u5473\u3067\u3042\u308B\u5199\u771F\u306E\u30B3\u30F3\u30C6\u30B9\u30C8\u3067\u8CDE\u3092\u3082\u3089\u3063\u305F\u559C\u3073\u3092\u3044\u3064\u3082\u5FDC\u63F4\u3057\u3066\u304F\u308C\u3066\u3044\u308B\u304A\u3058\u3044\u3055\u3093\u3068\u304A\u3070\u3042\u3061\u3083\u3093\u306B\u4F1D\u3048\u308B\u624B\u7D19\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 88,
    category: "Personal",
    textType: "Journal",
    english: "Write a journal entry recording the mental stress and pressure you felt during the VCE exam period, and how you encouraged yourself.",
    japanese: "\u30C6\u30B9\u30C8\u306E<ruby>\u6642\u671F<rt>\u3058\u304D</rt></ruby>\u306B<ruby>\u611F<rt>\u304B\u3093</rt></ruby>\u3058\u305F\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3068\u305D\u308C\u306B<ruby>\u8CA0<rt>\u307E</rt></ruby>\u3051\u306A\u3044\u3088\u3046\u306B\u81EA\u5206\u3067\u81EA\u5206\u3092<ruby>\u52B1<rt>\u306F\u3052</rt></ruby>\u307E\u3057\u305F\u3068\u304D\u306E\u6C17\u6301\u3061\u3092<ruby>\u8A18\u9332<rt>\u304D\u308D\u304F</rt></ruby>\u3057\u305F<ruby>\u65E5\u8A18<rt>\u306B\u3063\u304D</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30C6\u30B9\u30C8\u306E\u6642\u671F\u306B\u611F\u3058\u305F\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3068\u305D\u308C\u306B\u8CA0\u3051\u306A\u3044\u3088\u3046\u306B\u81EA\u5206\u3067\u81EA\u5206\u3092\u52B1\u307E\u3057\u305F\u3068\u304D\u306E\u6C17\u6301\u3061\u3092\u8A18\u9332\u3057\u305F\u65E5\u8A18\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 89,
    category: "Personal",
    textType: "Essay",
    english: "Write an essay reflecting on the emotional changes you experienced by looking at photographs from a family trip you took during your childhood.",
    japanese: "<ruby>\u5B50\u4F9B<rt>\u3053\u3069\u3082</rt></ruby>\u306E\u3053\u308D\u306B\u884C\u3063\u305F\u5BB6\u65CF\u65C5\u884C\u306E<ruby>\u5199\u771F<rt>\u3057\u3083\u3057\u3093</rt></ruby>\u3092<ruby>\u898B\u8FD4<rt>\u307F\u304B\u3048</rt></ruby>\u3057\u3066\u305D\u306E\u3053\u308D\u3068\u4ECA\u306E\u6C17\u6301\u3061\u306E<ruby>\u5909\u5316<rt>\u3078\u3093\u304B</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u632F\u308A\u8FD4<rt>\u3075\u308A\u304B\u3048</rt></ruby>\u308B\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B50\u4F9B\u306E\u3053\u308D\u306B\u884C\u3063\u305F\u5BB6\u65CF\u65C5\u884C\u306E\u5199\u771F\u3092\u898B\u8FD4\u3057\u3066\u305D\u306E\u3053\u308D\u3068\u4ECA\u306E\u6C17\u6301\u3061\u306E\u5909\u5316\u306B\u3064\u3044\u3066\u632F\u308A\u8FD4\u308B\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 90,
    category: "Personal",
    textType: "Essay",
    english: "Write an essay about a club activity you have dedicated yourself to for years, reflecting on the hard work, sense of achievement, and impact it had on you.",
    japanese: "\u9577\u3044\u3042\u3044\u3060<ruby>\u4E00\u751F\u61F8\u547D<rt>\u3044\u3063\u3057\u3087\u3046\u3051\u3093\u3081\u3044</rt></ruby>\u3064\u3065\u3051\u3066\u304D\u305F\u30AF\u30E9\u30D6\u6D3B\u52D5\u3092<ruby>\u5F15\u9000<rt>\u3044\u3093\u305F\u3044</rt></ruby>\u3059\u308B\u65E5\u306B\u3053\u308C\u307E\u3067\u306E<ruby>\u52AA\u529B<rt>\u3069\u308A\u3087\u304F</rt></ruby>\u3068<ruby>\u4EF2\u9593<rt>\u306A\u304B\u307E</rt></ruby>\u3078\u306E<ruby>\u611F\u8B1D<rt>\u304B\u3093\u3057\u3083</rt></ruby>\u306E\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u9577\u3044\u3042\u3044\u3060\u4E00\u751F\u61F8\u547D\u3064\u3065\u3051\u3066\u304D\u305F\u30AF\u30E9\u30D6\u6D3B\u52D5\u3092\u5F15\u9000\u3059\u308B\u65E5\u306B\u3053\u308C\u307E\u3067\u306E\u52AA\u529B\u3068\u4EF2\u9593\u3078\u306E\u611F\u8B1D\u306E\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 91,
    category: "Personal",
    textType: "Account",
    english: "Write a personal account detailing a major cultural misunderstanding you faced during a homestay in Japan and the emotional conflict you overcame.",
    japanese: "\u65E5\u672C\u3067\u306E\u30DB\u30FC\u30E0\u30B9\u30C6\u30A4\u306E\u3068\u304D<ruby>\u6587\u5316<rt>\u3076\u3093\u304B</rt></ruby>\u306E<ruby>\u9055<rt>\u3061\u304C</rt></ruby>\u3044\u304B\u3089\u5927\u304D\u306A<ruby>\u8AA4\u89E3<rt>\u3054\u304B\u3044</rt></ruby>\u3092\u3057\u3066\u3057\u307E\u3044\u305D\u308C\u3092\u4E57\u308A\u3053\u3048\u308B\u307E\u3067\u306B\u81EA\u5206\u304C<ruby>\u611F<rt>\u304B\u3093</rt></ruby>\u3058\u305F\u3053\u3068\u306B\u3064\u3044\u3066\u306E<ruby>\u4F53\u9A13<rt>\u305F\u3044\u3051\u3093</rt></ruby><ruby>\u8AC7<rt>\u3060\u3093</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u65E5\u672C\u3067\u306E\u30DB\u30FC\u30E0\u30B9\u30C6\u30A4\u306E\u3068\u304D\u6587\u5316\u306E\u9055\u3044\u304B\u3089\u5927\u304D\u306A\u8AA4\u89E3\u3092\u3057\u3066\u3057\u307E\u3044\u305D\u308C\u3092\u4E57\u308A\u3053\u3048\u308B\u307E\u3067\u306B\u81EA\u5206\u304C\u611F\u3058\u305F\u3053\u3068\u306B\u3064\u3044\u3066\u306E\u4F53\u9A13\u8AC7\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 92,
    category: "Personal",
    textType: "Journal",
    english: "Write a reflective journal entry in a quiet school library, deeply contemplating your future dreams and how you want to live your life.",
    japanese: "<ruby>\u653E\u8AB2\u5F8C<rt>\u307B\u3046\u304B\u3054</rt></ruby>\u306E<ruby>\u9759<rt>\u3057\u305A</rt></ruby>\u304B\u306A<ruby>\u56F3\u66F8\u9928<rt>\u3068\u3057\u3087\u304B\u3093</rt></ruby>\u3067<ruby>\u5C06\u6765<rt>\u3057\u3087\u3046\u3089\u3044</rt></ruby>\u306E<ruby>\u5922<rt>\u3086\u3081</rt></ruby>\u3084\u81EA\u5206\u306E\u751F\u304D\u65B9\u306B\u3064\u3044\u3066<ruby>\u6DF1<rt>\u3075\u304B</rt></ruby>\u304F\u8003\u3048\u305F\u3068\u304D\u306E\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F<ruby>\u65E5\u8A18<rt>\u306B\u3063\u304D</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u653E\u8AB2\u5F8C\u306E\u9759\u304B\u306A\u56F3\u66F8\u9928\u3067\u5C06\u6765\u306E\u5922\u3084\u81EA\u5206\u306E\u751F\u304D\u65B9\u306B\u3064\u3044\u3066\u6DF1\u304F\u8003\u3048\u305F\u3068\u304D\u306E\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F\u65E5\u8A18\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 93,
    category: "Personal",
    textType: "Essay",
    english: "Write an essay about a time you experienced the truth behind the saying 'failure is stepping stone to success,' detailing how you recovered from a big mistake.",
    japanese: "<ruby>\u5931\u6557<rt>\u3057\u3063\u3071\u3044</rt></ruby>\u306F<ruby>\u6210\u529F<rt>\u305B\u3044\u3053\u3046</rt></ruby>\u306E\u3082\u3068\u3068\u3044\u3046<ruby>\u8A00\u8449<rt>\u3053\u3068\u3070</rt></ruby>\u3092<ruby>\u672C\u5F53<rt>\u307B\u3093\u3068\u3046</rt></ruby>\u306B\u305D\u3046\u3060\u3068\u601D\u3063\u305F<ruby>\u6614<rt>\u3080\u304B\u3057</rt></ruby>\u306E\u5927\u304D\u306A<ruby>\u5931\u6557<rt>\u3057\u3063\u3071\u3044</rt></ruby>\u3068\u305D\u3053\u304B\u3089<ruby>\u7ACB\u3061\u76F4<rt>\u305F\u3061\u306A\u304A</rt></ruby>\u3063\u305F<ruby>\u7D4C\u9A13<rt>\u3051\u3044\u3051\u3093</rt></ruby>\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5931\u6557\u306F\u6210\u529F\u306E\u3082\u3068\u3068\u3044\u3046\u8A00\u8449\u3092\u672C\u5F53\u306B\u305D\u3046\u3060\u3068\u601D\u3063\u305F\u6614\u306E\u5927\u304D\u306A\u5931\u6557\u3068\u305D\u3053\u304B\u3089\u7ACB\u3061\u76F4\u3063\u305F\u7D4C\u9A13\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 94,
    category: "Personal",
    textType: "Journal",
    english: "Write a journal entry capturing the feelings of loneliness and excitement you experienced while waiting in an airport lobby for your first solo trip abroad.",
    japanese: "<ruby>\u521D<rt>\u306F\u3058</rt></ruby>\u3081\u3066\u3072\u3068\u308A\u3067\u6D77\u5916\u65C5\u884C\u306B\u51FA\u767A\u3059\u308B\u305F\u3081<ruby>\u7A7A\u6E2F<rt>\u304F\u3046\u3053\u3046</rt></ruby>\u306E\u30ED\u30D3\u30FC\u3067\u5F85\u3063\u3066\u3044\u308B\u3068\u304D\u306B<ruby>\u611F<rt>\u304B\u3093</rt></ruby>\u3058\u305F<ruby>\u5BC2<rt>\u3055\u3073</rt></ruby>\u3057\u3055\u3068\u30EF\u30AF\u30EF\u30AF\u3057\u305F\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F<ruby>\u65E5\u8A18<rt>\u306B\u3063\u304D</rt></ruby>\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u521D\u3081\u3066\u3072\u3068\u308A\u3067\u6D77\u5916\u65C5\u884C\u306B\u51FA\u767A\u3059\u308B\u305F\u3081\u7A7A\u6E2F\u306E\u30ED\u30D3\u30FC\u3067\u5F85\u3063\u3066\u3044\u308B\u3068\u304D\u306B\u611F\u3058\u305F\u5BC2\u3057\u3055\u3068\u30EF\u30AF\u30EF\u30AF\u3057\u305F\u6C17\u6301\u3061\u3092\u66F8\u3044\u305F\u65E5\u8A18\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 95,
    category: "Personal",
    textType: "Essay",
    english: "Write a reflective essay about the scenery of summer vacations spent at your grandparents' house and the timeless teachings that still stay with you.",
    japanese: "<ruby>\u7956\u7236\u6BCD<rt>\u305D\u3075\u307C</rt></ruby>\u306E\u5BB6\u3067<ruby>\u904E<rt>\u3059</rt></ruby>\u3054\u3057\u305F<ruby>\u6614<rt>\u3080\u304B\u3057</rt></ruby>\u306E\u590F\u4F11\u307F\u306E\u601D\u3044\u51FA\u3068\u4ECA\u3067\u3082\u81EA\u5206\u306E\u4E2D\u306B\u3042\u308B<ruby>\u5927\u5207<rt>\u305F\u3044\u305B\u3064</rt></ruby>\u306A\u6559\u3048\u306B\u3064\u3044\u3066<ruby>\u632F\u308A\u8FD4<rt>\u3075\u308A\u304B\u3048</rt></ruby>\u308B\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u7956\u7236\u6BCD\u306E\u5BB6\u3067\u904E\u3054\u3057\u305F\u6614\u306E\u590F\u4F11\u307F\u306E\u601D\u3044\u51FA\u3068\u4ECA\u3067\u3082\u81EA\u5206\u306E\u4E2D\u306B\u3042\u308B\u5927\u5207\u306A\u6559\u3048\u306B\u3064\u3044\u3066\u632F\u308A\u8FD4\u308B\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 96,
    category: "Personal",
    textType: "Essay",
    english: "Write an essay about taking on a major responsibility in a school project and experiencing personal growth through battling the immense pressure.",
    japanese: "\u5B66\u6821\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5927\u304D\u306A\u4ED5\u4E8B\u3092\u307E\u304B\u3055\u308C\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3068<ruby>\u6226<rt>\u305F\u305F\u304B</rt></ruby>\u3044\u306A\u304C\u3089<ruby>\u3084\u308A\u9042<rt>\u3084\u308A\u3068</rt></ruby>\u3052\u305F\u3053\u3068\u3067\u81EA\u5206\u304C<ruby>\u6210\u9577<rt>\u305B\u3044\u3061\u3087\u3046</rt></ruby>\u3057\u305F<ruby>\u7D4C\u9A13<rt>\u3051\u3044\u3051\u3093</rt></ruby>\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5B66\u6821\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5927\u304D\u306A\u4ED5\u4E8B\u3092\u307E\u304B\u3055\u308C\u30D7\u30EC\u30C3\u30B7\u30E3\u30FC\u3068\u6226\u3044\u306A\u304C\u3089\u3084\u308A\u9042\u3052\u305F\u3053\u3068\u3067\u81EA\u5206\u304C\u6210\u9577\u3057\u305F\u7D4C\u9A13\u306B\u3064\u3044\u3066\u306E\u4F5C\u6587\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 97,
    category: "Imaginative",
    textType: "Story",
    english: "Write an imaginative story in Japanese for a short story writing contest aimed at young readers, beginning with finding an unfamiliar ticket in the gap of an old bookshelf in a library and boarding a train to an unexpected world.",
    japanese: "<ruby>\u56F3\u66F8\u9928<rt>\u3068\u3057\u3087\u304B\u3093</rt></ruby>\u306E\u53E4\u3044<ruby>\u672C\u68DA<rt>\u307B\u3093\u3060\u306A</rt></ruby>\u306E\u3059\u304D\u307E\u304B\u3089\u898B\u305F\u3053\u3068\u3082\u306A\u3044<ruby>\u5207\u7B26<rt>\u304D\u3063\u3077</rt></ruby>\u3092\u898B\u3064\u3051\u3066\u3001\u305D\u306E\u96FB\u8ECA\u306B\u4E57\u3063\u305F\u3053\u3068\u3067\u601D\u3044\u304C\u3051\u306A\u3044<ruby>\u4E16\u754C<rt>\u305B\u304B\u3044</rt></ruby>\u306B\u884C\u3063\u3066\u3057\u307E\u3063\u305F\u3068\u3044\u3046<ruby>\u82E5<rt>\u308F\u304B</rt></ruby>\u3044\u4EBA<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u56F3\u66F8\u9928\u306E\u53E4\u3044\u672C\u68DA\u306E\u3059\u304D\u307E\u304B\u3089\u898B\u305F\u3053\u3068\u3082\u306A\u3044\u5207\u7B26\u3092\u898B\u3064\u3051\u3066\u3001\u305D\u306E\u96FB\u8ECA\u306B\u4E57\u3063\u305F\u3053\u3068\u3067\u601D\u3044\u304C\u3051\u306A\u3044\u4E16\u754C\u306B\u884C\u3063\u3066\u3057\u307E\u3063\u305F\u3068\u3044\u3046\u82E5\u3044\u4EBA\u5411\u3051\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 98,
    category: "Imaginative",
    textType: "Story",
    english: "Write an imaginative story in Japanese for a youth magazine, centered around meditating on a garden stone in an old temple in Kyoto, which suddenly causes you to time-slip and encounter people from the Heian period.",
    japanese: "\u4EAC\u90FD\u306E\u53E4\u3044\u304A\u5BFA\u306E<ruby>\u5EAD<rt>\u306B\u308F</rt></ruby>\u306E<ruby>\u77F3<rt>\u3044\u3057</rt></ruby>\u306B<ruby>\u5EA7<rt>\u3059\u308F</rt></ruby>\u3063\u3066\u76EE\u3092<ruby>\u9589<rt>\u3068</rt></ruby>\u3058\u3066\u3044\u305F\u3089<ruby>\u7A81\u7136<rt>\u3068\u3064\u305C\u3093</rt></ruby>\u30BF\u30A4\u30E0\u30B9\u30EA\u30C3\u30D7\u3057\u3066<ruby>\u5E73\u5B89<rt>\u3078\u3044\u3042\u3093</rt></ruby><ruby>\u6642\u4EE3<rt>\u3058\u3060\u3044</rt></ruby>\u306E\u4EBA\u305F\u3061\u306B\u51FA\u4F1A\u3063\u305F\u3068\u3044\u3046<ruby>\u4E0D\u601D\u8B70<rt>\u3075\u3057\u304E</rt></ruby>\u306A<ruby>\u4F53\u9A13<rt>\u305F\u3044\u3051\u3093</rt></ruby>\u306B\u3064\u3044\u3066\u306E\u7269\u8A9E\u3092<ruby>\u82E5<rt>\u308F\u304B</rt></ruby>\u3044\u4EBA<ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u306B\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u4EAC\u90FD\u306E\u53E4\u3044\u304A\u5BFA\u306E\u5EAD\u306E\u77F3\u306B\u5EA7\u3063\u3066\u76EE\u3092\u9589\u3058\u3066\u3044\u305F\u3089\u7A81\u7136\u30BF\u30A4\u30E0\u30B9\u30EA\u30C3\u30D7\u3057\u3066\u5E73\u5B89\u6642\u4EE3\u306E\u4EBA\u305F\u3061\u306B\u51FA\u4F1A\u3063\u305F\u3068\u3044\u3046\u4E0D\u601D\u8B70\u306A\u4F53\u9A13\u306B\u3064\u3044\u3066\u306E\u7269\u8A9E\u3092\u82E5\u3044\u4EBA\u5411\u3051\u306B\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 99,
    category: "Imaginative",
    textType: "Story",
    english: "Write a children's story about a little koala that gets lost in the Australian bush and uses its wits to find its way back home to its family.",
    japanese: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E<ruby>\u68EE<rt>\u3082\u308A</rt></ruby>\u306E\u4E2D\u3067<ruby>\u8FF7\u5B50<rt>\u307E\u3044\u3054</rt></ruby>\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u305F\u5C0F\u3055\u306A\u30B3\u30A2\u30E9\u304C<ruby>\u77E5\u6075<rt>\u3061\u3048</rt></ruby>\u3092\u50CD\u304B\u305B\u3066\u5BB6\u65CF\u306E\u3068\u3053\u308D\u3078\u5E30\u308B<ruby>\u5B50\u4F9B<rt>\u3053\u3069\u3082</rt></ruby><ruby>\u5411<rt>\u3080</rt></ruby>\u3051\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u68EE\u306E\u4E2D\u3067\u8FF7\u5B50\u306B\u306A\u3063\u3066\u3057\u307E\u3063\u305F\u5C0F\u3055\u306A\u30B3\u30A2\u30E9\u304C\u77E5\u6075\u3092\u50CD\u304B\u305B\u3066\u5BB6\u65CF\u306E\u3068\u3053\u308D\u3078\u5E30\u308B\u5B50\u4F9B\u5411\u3051\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 100,
    category: "Imaginative",
    textType: "Story",
    english: "Write a sci-fi story about a protagonist who accidentally time-travels from the present day to the year 2100 and must navigate a world of flying cars and robots.",
    japanese: "<ruby>\u73FE\u4EE3<rt>\u3052\u3093\u3060\u3044</rt></ruby>\u304B\u3089<ruby>\u5076\u7136<rt>\u3050\u3046\u305C\u3093</rt></ruby>2100\u5E74\u306E<ruby>\u672A\u6765<rt>\u307F\u3089\u3044</rt></ruby>\u306B\u30BF\u30A4\u30E0\u30B9\u30EA\u30C3\u30D7\u3057\u3066\u3057\u307E\u3063\u305F<ruby>\u4E3B\u4EBA\u516C<rt>\u3057\u3085\u3058\u3093\u3053\u3046</rt></ruby>\u304C<ruby>\u7A7A<rt>\u305D\u3089</rt></ruby>\u3092<ruby>\u98DB<rt>\u3068</rt></ruby>\u3076\u8ECA\u3084\u30ED\u30DC\u30C3\u30C8\u3070\u304B\u308A\u306E<ruby>\u4E16\u754C<rt>\u305B\u304B\u3044</rt></ruby>\u3067<ruby>\u751F\u304D\u629C<rt>\u3044\u304D\u306C</rt></ruby>\u304FSF\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u73FE\u4EE3\u304B\u3089\u5076\u71362100\u5E74\u306E\u672A\u6765\u306B\u30BF\u30A4\u30E0\u30B9\u30EA\u30C3\u30D7\u3057\u3066\u3057\u307E\u3063\u305F\u4E3B\u4EBA\u516C\u304C\u7A7A\u3092\u98DB\u3076\u8ECA\u3084\u30ED\u30DC\u30C3\u30C8\u3070\u304B\u308A\u306E\u4E16\u754C\u3067\u751F\u304D\u629C\u304FSF\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 101,
    category: "Imaginative",
    textType: "Story",
    english: "Write a narrative from the perspective of an old leather wallet left behind on a train, describing its humorous adventure until it is picked up by a new owner.",
    japanese: "\u96FB\u8ECA\u306E\u4E2D\u306B<ruby>\u5FD8<rt>\u308F\u3059</rt></ruby>\u308C\u3089\u308C\u305F\u53E4\u3044<ruby>\u9769<rt>\u304B\u308F</rt></ruby>\u306E<ruby>\u8CA1\u5E03<rt>\u3055\u3044\u3075</rt></ruby>\u306E<ruby>\u76EE\u7DDA<rt>\u3081\u305B\u3093</rt></ruby>\u304B\u3089\u65B0\u3057\u3044<ruby>\u6301\u3061\u4E3B<rt>\u3082\u3061\u306C\u3057</rt></ruby>\u306B<ruby>\u62FE<rt>\u3072\u308D</rt></ruby>\u308F\u308C\u308B\u307E\u3067\u306E<ruby>\u9762\u767D<rt>\u304A\u3082\u3057\u308D</rt></ruby>\u3044<ruby>\u5192\u967A<rt>\u307C\u3046\u3051\u3093</rt></ruby>\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u96FB\u8ECA\u306E\u4E2D\u306B\u5FD8\u308C\u3089\u308C\u305F\u53E4\u3044\u9769\u306E\u8CA1\u5E03\u306E\u76EE\u7DDA\u304B\u3089\u65B0\u3057\u3044\u6301\u3061\u4E3B\u306B\u62FE\u308F\u308C\u308B\u307E\u3067\u306E\u9762\u767D\u3044\u5192\u967A\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 102,
    category: "Imaginative",
    textType: "Story",
    english: "Write a story about waking up one morning to find that your ears have turned into cat ears and you are suddenly able to understand and speak with cats.",
    japanese: "\u3042\u308B\u671D<ruby>\u8D77<rt>\u304A</rt></ruby>\u304D\u305F\u3089\u81EA\u5206\u306E\u8033\u304C<ruby>\u732B<rt>\u306D\u3053</rt></ruby>\u306E\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u3066\u8A71\u3059<ruby>\u732B<rt>\u306D\u3053</rt></ruby>\u305F\u3061\u3068\u4F1A\u8A71\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3068\u3044\u3046<ruby>\u4E0D\u601D\u8B70<rt>\u3075\u3057\u304E</rt></ruby>\u306A\u671D\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u3042\u308B\u671D\u8D77\u304D\u305F\u3089\u81EA\u5206\u306E\u8033\u304C\u732B\u306E\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u3066\u8A71\u3059\u732B\u305F\u3061\u3068\u4F1A\u8A71\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3068\u3044\u3046\u4E0D\u601D\u8B70\u306A\u671D\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 103,
    category: "Imaginative",
    textType: "Story",
    english: "Write a story about a monkey soaking in a hot spring who begins to observe and deeply contemplate human nature from an unique animal viewpoint.",
    japanese: "<ruby>\u6E29\u6CC9<rt>\u304A\u3093\u305B\u3093</rt></ruby>\u306B\u3086\u3063\u304F\u308A\u5165\u3063\u3066\u3044\u308B\u4E00<ruby>\u5339<rt>\u3072\u304D</rt></ruby>\u306E\u30B5\u30EB\u304C\u4EBA\u9593\u305F\u3061\u306E<ruby>\u69D8\u5B50<rt>\u3088\u3046\u3059</rt></ruby>\u3092\u52D5\u7269\u306A\u3089\u3067\u306F\u306E<ruby>\u76EE\u7DDA<rt>\u3081\u305B\u3093</rt></ruby>\u3067<ruby>\u6DF1<rt>\u3075\u304B</rt></ruby>\u304F<ruby>\u89B3\u5BDF<rt>\u304B\u3093\u3055\u3064</rt></ruby>\u3057\u3066\u3044\u308B\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u6E29\u6CC9\u306B\u3086\u3063\u304F\u308A\u5165\u3063\u3066\u3044\u308B\u4E00\u5339\u306E\u30B5\u30EB\u304C\u4EBA\u9593\u305F\u3061\u306E\u69D8\u5B50\u3092\u52D5\u7269\u306A\u3089\u3067\u306F\u306E\u76EE\u7DDA\u3067\u6DF1\u304F\u89B3\u5BDF\u3057\u3066\u3044\u308B\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 104,
    category: "Imaginative",
    textType: "Story",
    english: "Write a story about discovering a tiny, hidden door behind the bookshelf and opening it to find a whole miniature world waiting for you.",
    japanese: "<ruby>\u672C\u68DA<rt>\u307B\u3093\u3060\u306A</rt></ruby>\u306E<ruby>\u5965<rt>\u304A\u304F</rt></ruby>\u306B\u5C0F\u3055\u306A\u30C9\u30A2\u3092\u898B\u3064\u3051<ruby>\u52C7\u6C17<rt>\u3086\u3046\u304D</rt></ruby>\u3092\u51FA\u3057\u3066<ruby>\u958B<rt>\u3042</rt></ruby>\u3051\u305F\u5148\u3067\u5E83\u304C\u3063\u3066\u3044\u305F\u5C0F\u3055\u306A\u304A\u3082\u3061\u3083\u306E\u3088\u3046\u306A<ruby>\u4E16\u754C<rt>\u305B\u304B\u3044</rt></ruby>\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u672C\u68DA\u306E\u5965\u306B\u5C0F\u3055\u306A\u30C9\u30A2\u3092\u898B\u3064\u3051\u52C7\u6C17\u3092\u51FA\u3057\u3066\u958B\u3051\u305F\u5148\u3067\u5E83\u304C\u3063\u3066\u3044\u305F\u5C0F\u3055\u306A\u304A\u3082\u3061\u3083\u306E\u3088\u3046\u306A\u4E16\u754C\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 105,
    category: "Imaginative",
    textType: "Story",
    english: "Write a narrative about a high school student who suddenly becomes able to hear the voices of all animals and plants around them, resulting in a chaotic day.",
    japanese: "\u3042\u308B\u65E5<ruby>\u7A81\u7136<rt>\u3068\u3064\u305C\u3093</rt></ruby>\u307E\u308F\u308A\u306B\u3044\u308B\u3059\u3079\u3066\u306E\u52D5\u7269\u3084<ruby>\u690D\u7269<rt>\u3057\u3087\u304F\u3076\u3064</rt></ruby>\u306E<ruby>\u58F0<rt>\u3053\u3048</rt></ruby>\u304C\u805E\u3053\u3048\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u9AD8\u6821\u751F\u304C<ruby>\u4F53\u9A13<rt>\u305F\u3044\u3051\u3093</rt></ruby>\u3059\u308B\u306B\u304E\u3084\u304B\u306A\u4E00\u65E5\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u3042\u308B\u65E5\u7A81\u7136\u307E\u308F\u308A\u306B\u3044\u308B\u3059\u3079\u3066\u306E\u52D5\u7269\u3084\u690D\u7269\u306E\u58F0\u304C\u805E\u3053\u3048\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u9AD8\u6821\u751F\u304C\u4F53\u9A13\u3059\u308B\u306B\u304E\u3084\u304B\u306A\u4E00\u65E5\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 106,
    category: "Imaginative",
    textType: "Story",
    english: "Write a story about a secret midnight gathering in an art museum where the characters inside the paintings come alive and discuss their worlds.",
    japanese: "<ruby>\u771F\u591C\u4E2D<rt>\u307E\u3088\u306A\u304B</rt></ruby>\u306E<ruby>\u7F8E\u8853\u9928<rt>\u3073\u3058\u3085\u3064\u304B\u3093</rt></ruby>\u3067<ruby>\u7D75<rt>\u3048</rt></ruby>\u306E\u4E2D\u306E\u4EBA\u305F\u3061\u304C\u52D5\u304D\u51FA\u3057\u81EA\u5206\u305F\u3061\u306E<ruby>\u4E16\u754C<rt>\u305B\u304B\u3044</rt></ruby>\u306B\u3064\u3044\u3066<ruby>\u8A71\u3057\u5408<rt>\u306F\u306A\u3057\u3042</rt></ruby>\u3046<ruby>\u79D8\u5BC6<rt>\u3072\u307F\u3064</rt></ruby>\u306E\u591C\u4F1A\u306B\u3064\u3044\u3066\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u771F\u591C\u4E2D\u306E\u7F8E\u8853\u9928\u3067\u7D75\u306E\u4E2D\u306E\u4EBA\u305F\u3061\u304C\u52D5\u304D\u51FA\u3057\u81EA\u5206\u305F\u3061\u306E\u4E16\u754C\u306B\u3064\u3044\u3066\u8A71\u3057\u5408\u3046\u79D8\u5BC6\u306E\u591C\u4F1A\u306B\u3064\u3044\u3066\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 107,
    category: "Imaginative",
    textType: "Story",
    english: "Write a narrative about reading an old letter found inside a glass bottle on the beach, only to realize it was written by a girl your age fifty years ago.",
    japanese: "<ruby>\u6D77\u8FBA<rt>\u3046\u307F\u3079</rt></ruby>\u306E<ruby>\u7802\u6D5C<rt>\u3059\u306A\u306F\u307E</rt></ruby>\u3067<ruby>\u62FE<rt>\u3072\u308D</rt></ruby>\u3063\u305F\u30AC\u30E9\u30B9\u3073\u3093\u306E\u4E2D\u306B\u5165\u3063\u3066\u3044\u305F\u53E4\u3044\u624B\u7D19\u3092\u8AAD\u3093\u3060\u3068\u3053\u308D50\u5E74\u524D\u306E\u81EA\u5206\u3068\u540C\u3058\u5E74\u306E\u5973\u306E\u5B50\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3060\u3063\u305F\u3068\u3044\u3046\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u6D77\u8FBA\u306E\u7802\u6D5C\u3067\u62FE\u3063\u305F\u30AC\u30E9\u30B9\u3073\u3093\u306E\u4E2D\u306B\u5165\u3063\u3066\u3044\u305F\u53E4\u3044\u624B\u7D19\u3092\u8AAD\u3093\u3060\u3068\u3053\u308D50\u5E74\u524D\u306E\u81EA\u5206\u3068\u540C\u3058\u5E74\u306E\u5973\u306E\u5B50\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3060\u3063\u305F\u3068\u3044\u3046\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 108,
    category: "Imaginative",
    textType: "Story",
    english: "Write a sci-fi survival story about a pair of scientists whose time machine malfunctions, stranding them in a prehistoric era where dinosaurs roam.",
    japanese: "\u30BF\u30A4\u30E0\u30DE\u30B7\u30F3\u304C\u3053\u308F\u308C\u3066<ruby>\u6050\u7ADC<rt>\u304D\u3087\u3046\u308A\u3085\u3046</rt></ruby>\u304C\u6B69\u304D\u56DE\u308B<ruby>\u5927\u6614<rt>\u304A\u304A\u3080\u304B\u3057</rt></ruby>\u306E<ruby>\u6642\u4EE3<rt>\u3058\u3060\u3044</rt></ruby>\u306B<ruby>\u53D6\u308A\u6B8B<rt>\u3068\u308A\u306E\u3053</rt></ruby>\u3055\u308C\u3066\u3057\u307E\u3063\u305F<ruby>\u79D1\u5B66<rt>\u304B\u304C\u304F</rt></ruby><ruby>\u8005<rt>\u3057\u3083</rt></ruby>\u3075\u305F\u308A\u306E\u30CF\u30E9\u30CF\u30E9\u3059\u308B\u30B5\u30D0\u30A4\u30D0\u30EB\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u30BF\u30A4\u30E0\u30DE\u30B7\u30F3\u304C\u3053\u308F\u308C\u3066\u6050\u7ADC\u304C\u6B69\u304D\u56DE\u308B\u5927\u6614\u306E\u6642\u4EE3\u306B\u53D6\u308A\u6B8B\u3055\u308C\u3066\u3057\u307E\u3063\u305F\u79D1\u5B66\u8005\u3075\u305F\u308A\u306E\u30CF\u30E9\u30CF\u30E9\u3059\u308B\u30B5\u30D0\u30A4\u30D0\u30EB\u306E\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 109,
    category: "Imaginative",
    textType: "Story",
    english: "Write a humorous story about a pet dog that secretly manages a local bakery while its owners are away at work.",
    japanese: "<ruby>\u98FC\u3044\u4E3B<rt>\u304B\u3044\u306C\u3057</rt></ruby>\u304C\u4ED5\u4E8B\u306B\u51FA\u304B\u3051\u3066\u3044\u308B\u3042\u3044\u3060\u306B\u3001<ruby>\u98FC\u3044\u72AC<rt>\u304B\u3044\u3044\u306C</rt></ruby>\u304C\u3053\u3063\u305D\u308A\u30D1\u30F3\u5C4B\u3092<ruby>\u7D4C\u55B6<rt>\u3051\u3044\u3048\u3044</rt></ruby>\u3057\u3066\u3044\u305F\u3068\u3044\u3046\u30E6\u30FC\u30E2\u30A2\u3042\u3075\u308C\u308B\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u98FC\u3044\u4E3B\u304C\u4ED5\u4E8B\u306B\u51FA\u304B\u3051\u3066\u3044\u308B\u3042\u3044\u3060\u306B\u3001\u98FC\u3044\u72AC\u304C\u3053\u3063\u305D\u308A\u30D1\u30F3\u5C4B\u3092\u7D4C\u55B6\u3057\u3066\u3044\u305F\u3068\u3044\u3046\u30E6\u30FC\u30E2\u30A2\u3042\u3075\u308C\u308B\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  },
  {
    id: 110,
    category: "Imaginative",
    textType: "Story",
    english: "Write a story about a forgotten toy in the attic that decides to embark on a great adventure to find the child who once played with it.",
    japanese: "<ruby>\u5C4B\u6839\u88CF<rt>\u3084\u306D\u3046\u3089</rt></ruby><ruby>\u90E8\u5C4B<rt>\u3078\u3084</rt></ruby>\u3067<ruby>\u5FD8<rt>\u308F\u3059</rt></ruby>\u308C\u3089\u308C\u3066\u3044\u305F\u304A\u3082\u3061\u3083\u304C\u3001<ruby>\u6614<rt>\u3080\u304B\u3057</rt></ruby><ruby>\u904A<rt>\u3042\u305D</rt></ruby>\u3093\u3067\u304F\u308C\u305F<ruby>\u5B50\u4F9B<rt>\u3053\u3069\u3082</rt></ruby>\u3092<ruby>\u63A2<rt>\u3055\u304C</rt></ruby>\u3059\u305F\u3081\u306B<ruby>\u58EE\u5927<rt>\u305D\u3046\u3060\u3044</rt></ruby>\u306A<ruby>\u5192\u967A<rt>\u307C\u3046\u3051\u3093</rt></ruby>\u306B\u51FA\u308B\u3068\u3044\u3046<ruby>\u611F\u52D5<rt>\u304B\u3093\u3069\u3046</rt></ruby><ruby>\u7684<rt>\u3066\u304D</rt></ruby>\u306A\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002",
    japanese_original: "\u5C4B\u6839\u88CF\u90E8\u5C4B\u3067\u5FD8\u308C\u3089\u308C\u3066\u3044\u305F\u304A\u3082\u3061\u3083\u304C\u3001\u6614\u904A\u3093\u3067\u304F\u308C\u305F\u5B50\u4F9B\u3092\u63A2\u3059\u305F\u3081\u306B\u58EE\u5927\u306A\u5192\u967A\u306B\u51FA\u308B\u3068\u3044\u3046\u611F\u52D5\u7684\u306A\u7269\u8A9E\u3092\u66F8\u304D\u306A\u3055\u3044\u3002"
  }
];

// app/routes/dashboard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\dashboard.tsx"
  );
  import.meta.hot.lastModified = "1788349084523.6953";
}
var questions = questions_default;
var SUPABASE_URL = "https://ybquwzoreecxxbewjpdn.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlicXV3em9yZWVjeHhiZXdqcGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2OTA5NDksImV4cCI6MjEwMjI2Njk0OX0.OHz5CEV9CLO02vzP4FOBCwPSs-aHuDOZtgobfiO5VM0";
var supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    experimental: {
      passkey: true
    }
  }
});
var vceKanjiList = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u79C1", "\u65E5", "\u66DC", "\u8A9E", "\u5B66", "\u5B57", "\u52C9", "\u5F37", "\u53CB", "\u5BB6", "\u65CF", "\u6821", "\u7236", "\u6BCD", "\u5144", "\u5F1F", "\u59C9", "\u59B9", "\u5927", "\u5C0F", "\u65B0", "\u53E4", "\u9AD8", "\u5B89", "\u597D", "\u660E", "\u65E9", "\u5E83", "\u9577", "\u591A", "\u5C11", "\u884C", "\u6765", "\u898B", "\u805E", "\u66F8", "\u8A71", "\u8A00", "\u8AAD", "\u66F8", "\u98DF", "\u98F2", "\u8CB7", "\u6642", "\u5206", "\u534A", "\u5E74", "\u6708", "\u66DC", "\u65E5", "\u4ECA", "\u5148", "\u6BCE", "\u9031", "\u9593", "\u671D", "\u663C", "\u6669", "\u591C"];
var vceGrammarList = ["\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3067\u3057\u305F", "\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093", "\u306A\u304F\u3066\u306F\u3044\u3051\u307E\u305B\u3093", "\u305F\u304F\u306A\u304B\u3063\u305F\u3067\u3059", "\u3044\u305F\u3044\u3068\u601D\u3063\u3066\u3044\u307E\u3059", "\u306B\u3044\u3063\u305F\u3053\u3068\u304C\u3042\u308A\u307E\u3059", "\u3053\u3068\u304C\u597D\u304D\u3058\u3083\u306A\u3044\u3067\u3059", "\u3053\u3068\u304C\u3067\u304D\u307E\u3057\u305F", "\u3053\u3068\u304C\u3067\u304D\u307E\u3059", "\u3053\u3068\u304C\u306F\u3058\u307E\u308A\u307E\u3059", "\u307B\u3046\u304C\u3044\u3044\u3067\u3059", "\u3066\u3082\u3044\u3044\u3067\u3059\u304B", "\u3066\u3044\u305F\u3060\u3051\u307E\u305B\u3093\u304B", "\u3066\u304F\u3060\u3055\u3044\u307E\u305B\u3093\u304B", "\u3044\u3067\u304F\u3060\u3055\u3044", "\u304B\u3082\u3057\u308C\u307E\u305B\u3093", "\u305F\u306E\u3057\u307F\u306B\u3057\u3066\u3044\u307E\u3059", "\u306B\u304D\u3087\u3046\u307F\u304C\u3042\u308A\u307E\u3059", "\u3068\u3057\u3066\u3057\u3089\u308C\u3066\u3044\u307E\u3059", "\u3067\u3086\u3046\u540D\u3067\u3059", "\u306E\u304A\u304B\u3052\u3067\u3001", "\u306E\u307B\u304B\u306B\u3001", "\u3060\u3051\u3067\u306A\u304F", "\u3079\u304D\u3067\u3059", "\u3079\u304D\u3058\u3083\u306A\u3044\u3067\u3059", "\u3079\u304D\u3067\u3057\u305F", "\u307E\u3057\u3087\u3046", "\u3066\u304F\u3060\u3055\u3044", "\u3059\u304E\u307E\u3059", "\u3068\u3044\u3046", "\u306E\u305F\u3081\u306B", "\u307E\u3048\u306B", "\u3042\u3068\u3067", "\u304B\u3089\u3001", "\u306E\u3067\u3001", "\u305F\u3089\u3001", "\u3070\u3001", "\u3067\u3082", "\u3066\u3082\u3001", "\u3051\u308C\u3069", "\u306E\u306B", "\u306A\u304C\u3089", "\u306A\u306E\u3067\u3001"];
var modalData = {
  Article: {
    title: "Article (\u8A18\u4E8B\u30FB\u304D\u3058)",
    purpose: "Articles are used to inform, persuade, or entertain readers through a structured publication format.",
    structure: ["Items to include: Title, Author's name (fictional)", "Content: Introduction, Body, Conclusion", "Sentence style: Plain style in general"],
    sampleImage: "/article.pdf"
  },
  Email: {
    title: "Email (E\u30E1\u30FC\u30EB)",
    purpose: "Emails are used to convey a message, consultation, or advice to a specific recipient.",
    structure: ["Items to include: Name of recipient, Subject line, Main text, Sender", "Sentence style: Polite or plain style"],
    sampleImage: "/email.pdf"
  },
  Essay: {
    title: "Essay (\u4F5C\u6587\u30FB\u3055\u304F\u3076\u3093)",
    purpose: "Essays are used to present and logically argue your own thoughts or reflections.",
    structure: ["Items to include: Topic, Author's name (fictional)", "Sentence style: Polite style or, Plain style"],
    sampleImage: "/essay.pdf"
  }
};
function HighlightChecker() {
  _s();
  const [text, setText] = (0, import_react2.useState)("\u79C1\u306F\u65E5\u672C\u3078\u884C\u3063\u3066\u3001\u65E5\u672C\u8A9E\u306E\u52C9\u5F37\u3092\u305F\u304F\u3055\u3093\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002");
  const getHighlightedText = () => {
    let processedText = text;
    const placeholders = {};
    let placeholderIndex = 0;
    processedText = processedText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const uniqueMatchedGrammar = /* @__PURE__ */ new Set();
    const uniqueMatchedKanji = /* @__PURE__ */ new Set();
    const sortedGrammar = [...vceGrammarList].sort((a, b) => b.length - a.length);
    for (const pattern of sortedGrammar) {
      if (processedText.includes(pattern)) {
        uniqueMatchedGrammar.add(pattern);
        const regex = new RegExp(pattern, "g");
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
        const regex = new RegExp(kanji, "g");
        processedText = processedText.replace(regex, () => {
          const key = `___KANJI_${placeholderIndex}___`;
          placeholders[key] = `<span style="background-color: #fef08a; color: #854d0e; padding: 2px 4px; border-radius: 4px; font-weight: bold; border-bottom: 2px solid #ca8a04;">${kanji}</span>`;
          placeholderIndex++;
          return key;
        });
      }
    }
    let html2 = processedText;
    for (const [key, val] of Object.entries(placeholders)) {
      html2 = html2.replace(new RegExp(key, "g"), val);
    }
    html2 = html2.replace(/\\n/g, "<br />");
    return {
      html: html2,
      kanjiCount: uniqueMatchedKanji.size,
      grammarCount: uniqueMatchedGrammar.size
    };
  };
  const {
    html,
    kanjiCount,
    grammarCount
  } = getHighlightedText();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    marginBottom: "40px",
    padding: "24px",
    borderRadius: "12px",
    border: "2px dashed #cbd5e1",
    backgroundColor: "#f8fafc"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { style: {
      fontSize: "18px",
      color: "#1e293b",
      marginBottom: "8px",
      marginTop: "0"
    }, children: "\u2728 VCE Kanji & Grammar Checker" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: {
      fontSize: "14px",
      color: "#64748b",
      marginBottom: "16px"
    }, children: "Paste text here to highlight unique VCE Kanji (\u{1F7E1} Yellow) and VCE Grammar (\u{1F7E2} Green)!" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { value: text, onChange: (e) => setText(e.target.value), style: {
      width: "100%",
      height: "120px",
      padding: "12px",
      border: "1px solid #cbd5e1",
      borderRadius: "8px",
      marginBottom: "20px",
      fontSize: "14px",
      boxSizing: "border-box"
    } }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        flex: 1,
        padding: "12px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          fontSize: "12px",
          fontWeight: "bold",
          color: "#64748b"
        }, children: "UNIQUE VCE KANJI" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          color: "#854d0e"
        }, children: kanjiCount }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        flex: 1,
        padding: "12px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        textAlign: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          fontSize: "12px",
          fontWeight: "bold",
          color: "#64748b"
        }, children: "UNIQUE VCE GRAMMAR" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          color: "#065f46"
        }, children: grammarCount }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      padding: "16px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
      minHeight: "60px",
      fontSize: "15px",
      lineHeight: "1.8"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { dangerouslySetInnerHTML: {
      __html: html
    } }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s(HighlightChecker, "W7LIe5faqrhZ3Fn7aeOTXdHuXRg=");
_c2 = HighlightChecker;
function Dashboard() {
  _s2();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = (0, import_react2.useState)("all");
  const [activeTextType, setActiveTextType] = (0, import_react2.useState)("all");
  const [activeModal, setActiveModal] = (0, import_react2.useState)(null);
  const [loading, setLoading] = (0, import_react2.useState)(true);
  const [userEmail, setUserEmail] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    const checkSession = async () => {
      const {
        data: {
          session
        }
      } = await supabaseClient.auth.getSession();
      if (!session) {
        navigate("/");
      } else {
        setUserEmail(session.user.email || "");
        setLoading(false);
      }
    };
    checkSession();
    if (typeof window !== "undefined") {
      const reopen = sessionStorage.getItem("reopenModalTitle");
      if (reopen) {
        setActiveModal(reopen);
        sessionStorage.removeItem("reopenModalTitle");
      }
    }
  }, [navigate]);
  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    navigate("/");
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied problem description!");
  };
  const filteredQuestions = questions.filter((q) => {
    const matchesCategory = activeCategory === "all" || q.category === activeCategory;
    const matchesTextType = activeTextType === "all" || q.textType === activeTextType;
    return matchesCategory && matchesTextType;
  });
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: "Loading dashboard secure portal... \u{1F512}" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 253,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 247,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { style: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      borderBottom: "1px solid #e2e8f0",
      paddingBottom: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { style: {
          fontSize: "26px",
          fontWeight: "bold",
          color: "#0f172a"
        }, children: "\u{1F4DD} VCE Japanese AI Tutor" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 270,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: {
          fontSize: "13px",
          color: "#64748b",
          marginTop: "4px"
        }, children: [
          "Logged in as: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: userEmail }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 279,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 275,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        display: "flex",
        gap: "10px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/faq", style: {
          padding: "8px 16px",
          backgroundColor: "#e2e8f0",
          color: "#334155",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px"
        }, children: "\u{1F4AC} FAQs" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 285,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/grammar", style: {
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px"
        }, children: "\u{1F4DA} Grammar Master" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 294,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: handleLogout, style: {
          padding: "8px 16px",
          backgroundColor: "#ef4444",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px"
        }, children: "Logout" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 303,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 281,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HighlightChecker, {}, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 316,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      marginBottom: "30px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: "15px"
      }, children: "\u{1F3AF} Practice Questions" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 321,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        display: "flex",
        gap: "10px",
        marginBottom: "15px",
        flexWrap: "wrap"
      }, children: ["all", "Informative", "Evaluative", "Persuasive", "Personal", "Imaginative"].map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => setActiveCategory(cat), style: {
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "13px",
        backgroundColor: activeCategory === cat ? "#2563eb" : "#e2e8f0",
        color: activeCategory === cat ? "#fff" : "#334155"
      }, children: cat === "all" ? "All Categories" : cat }, cat, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 334,
        columnNumber: 101
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 328,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        display: "flex",
        gap: "10px",
        marginBottom: "25px",
        flexWrap: "wrap"
      }, children: ["all", "Article", "Email", "Essay", "Journal", "Message", "Letter", "Report", "Review", "Speech", "Story"].map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => setActiveTextType(type), style: {
        padding: "6px 12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "12px",
        backgroundColor: activeTextType === type ? "#0f172a" : "#f1f5f9",
        color: activeTextType === type ? "#fff" : "#475569"
      }, children: type === "all" ? "All Styles" : type }, type, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 354,
        columnNumber: 132
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 348,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }, children: filteredQuestions.map((q) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #e2e8f0",
        display: "flex",
        justifyContent: "space-between",
        gap: "15px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          flex: 1
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            flexWrap: "wrap"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: {
              fontSize: "11px",
              padding: "4px 8px",
              backgroundColor: "#eff6ff",
              color: "#1e40af",
              borderRadius: "4px",
              fontWeight: "bold"
            }, children: q.category }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 391,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => {
              if (modalData[q.textType]) {
                setActiveModal(q.textType);
              } else {
                alert(`Guidelines for ${q.textType} are under development!`);
              }
            }, style: {
              fontSize: "11px",
              padding: "4px 8px",
              backgroundColor: "#f0fdf4",
              color: "#166534",
              borderRadius: "4px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer"
            }, children: [
              "\u{1F4D6} ",
              q.textType,
              " (Style Guide)"
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 399,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 385,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: {
            fontSize: "15px",
            color: "#0f172a",
            fontWeight: "600",
            marginBottom: "8px",
            lineHeight: "1.5"
          }, children: q.japanese }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 418,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: {
            fontSize: "13px",
            color: "#64748b",
            lineHeight: "1.5"
          }, children: q.english }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 425,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 382,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
          display: "flex",
          alignItems: "center"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => copyToClipboard(q.japanese_original || q.japanese), style: {
          padding: "8px 12px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "13px"
        }, children: "\u{1F4CB} Copy" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 435,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 431,
          columnNumber: 15
        }, this)
      ] }, q.id, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 373,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 368,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 318,
      columnNumber: 7
    }, this),
    activeModal && modalData[activeModal] && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextTypeModal, { isOpen: true, onClose: () => setActiveModal(null), modalKey: activeModal, title: modalData[activeModal].title, purpose: modalData[activeModal].purpose, structure: modalData[activeModal].structure, sampleImage: modalData[activeModal].sampleImage }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 452,
      columnNumber: 49
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 256,
    columnNumber: 10
  }, this);
}
_s2(Dashboard, "ZVA+XKv4Ri4njM2+q4oKhlxNIIU=", false, function() {
  return [useNavigate];
});
_c22 = Dashboard;
var _c2;
var _c22;
$RefreshReg$(_c2, "HighlightChecker");
$RefreshReg$(_c22, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-64LHF5YD.js.map

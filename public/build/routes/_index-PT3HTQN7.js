import {
  createClient
} from "/build/_shared/chunk-JJUTWCRW.js";
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

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1788350041206.6985";
}
var SUPABASE_URL = "https://ybquwzoreecxxbewjpdn.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlicXV3em9yZWVjeHhiZXdqcGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2OTA5NDksImV4cCI6MjEwMjI2Njk0OX0.OHz5CEV9CLO02vzP4FOBCwPSs-aHuDOZtgobfiO5VM0";
var supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    experimental: {
      passkey: true
    }
  }
});
function LoginPage() {
  _s();
  const navigate = useNavigate();
  const [email, setEmail] = (0, import_react.useState)("");
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [logMessage, setLogMessage] = (0, import_react.useState)("Ready");
  const [pageLoading, setPageLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    const checkSession = async () => {
      const {
        data: {
          session
        }
      } = await supabaseClient.auth.getSession();
      if (session) {
        navigate("/dashboard");
      } else {
        setPageLoading(false);
      }
    };
    checkSession();
  }, [navigate]);
  const handleSignUpAndRegisterPasskey = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    setLoading(true);
    setLogMessage("Checking rules... \u23F3");
    try {
      const {
        error
      } = await supabaseClient.auth.signUp({
        email,
        password: "TemporaryPassword123!"
      });
      if (error)
        throw error;
      setLogMessage("Creating account... Complete passkey registration on your device.");
      const {
        error: passkeyError
      } = await supabaseClient.auth.setUpPasskey?.() || {
        error: null
      };
      if (passkeyError)
        throw passkeyError;
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };
  const handlePasskeyLogin = async () => {
    setLoading(true);
    setLogMessage("Calling passkey biometric authentication... \u{1F4E1}");
    try {
      const {
        error
      } = await supabaseClient.auth.signInWithPasskey();
      if (error)
        throw error;
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Passkey authentication failed");
    } finally {
      setLoading(false);
    }
  };
  if (pageLoading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Loading JA AI Tutor portal... \u{1F512}" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 104,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
      textAlign: "center",
      color: "#1e293b",
      marginBottom: "25px"
    }, children: "\u{1F4DD} VCE Japanese AI Tutor" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      padding: "30px",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSignUpAndRegisterPasskey, style: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", style: {
            display: "block",
            fontSize: "14px",
            fontWeight: "bold",
            marginBottom: "5px",
            color: "#475569"
          }, children: "Email Address" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "your.name@example.com", style: {
            width: "100%",
            padding: "10px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            fontSize: "14px",
            boxSizing: "border-box"
          } }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: loading, style: {
          padding: "12px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer"
        }, children: loading ? "Processing..." : "Sign Up & Register Passkey" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        margin: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          height: "1px",
          backgroundColor: "#cbd5e1",
          flex: 1
        } }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 172,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          padding: "0 10px",
          fontSize: "12px",
          color: "#94a3b8"
        }, children: "OR" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 177,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          height: "1px",
          backgroundColor: "#cbd5e1",
          flex: 1
        } }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 182,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handlePasskeyLogin, disabled: loading, style: {
        width: "100%",
        padding: "12px",
        backgroundColor: "#0f172a",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
      }, children: "\u{1F511} Login with Passkey (Biometric)" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        marginTop: "15px",
        fontSize: "12px",
        color: "#64748b",
        textAlign: "center"
      }, children: [
        "Status: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { style: {
          color: "#2563eb"
        }, children: logMessage }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 213,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
}
_s(LoginPage, "OAeoKrKf7Gb7PF1alhCsVUfsgXs=", false, function() {
  return [useNavigate];
});
_c = LoginPage;
var _c;
$RefreshReg$(_c, "LoginPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginPage as default
};
//# sourceMappingURL=/build/routes/_index-PT3HTQN7.js.map

# ScriptCraft

> **A modern, web-based Developer Sandbox & JavaScript Injection Workbench.**

**ScriptCraft** is a Progressive Web App (PWA) designed for front-end developers, security researchers, QA engineers, and students. It provides a safe, visual, and interactive environment to test custom scripts, explore browser security boundaries, analyze web application behavior, and master cross-origin communication APIs without writing full browser extensions or setting up local proxy servers.

---

# Mirror Links

**ALL MIRROR LINKS UPDATE AUTOMATICALLY**

[https://scriptcraft.pages.dev](https://scriptcraft.pages.dev)

[https://scriptcraft.scriptcraft.workers.dev](https://scriptcraft.scriptcraft.workers.dev)

## 🚀 Key Features

* **Dual Rendering Engines:**
  * **Proxy-Assisted HTML Rewrite & Injector:** Route target pages through CORS proxies (such as `corsproxy.dev`) to strip embedding restrictions like `X-Frame-Options` and `Content-Security-Policy`.
  * **Direct Sandboxed iFrame Mode:** Render target URLs natively inside an `<iframe>` with configurable HTML5 sandbox flags (`allow-scripts`, `allow-same-origin`, etc.).

* **Live Scriptlet Injector & Code Editor:**
  * Built-in JavaScript editor with customizable execution lifecycles (`Head`, `DOMContentLoaded`, or Instant).
  * Pre-loaded scriptlet library: **Dark Mode Enforcer**, **Element Inspector**, **FPS & Performance HUD**, **Auto Form Filler**, and **Ad/Popup Defuser**.

* **Integrated DevTools Console:**
  * Intercepts `console.log`, `console.warn`, `console.error`, and uncaught runtime errors directly inside the workbench interface.
  * Includes log filtering and an active command-line interface.

* **Cross-Origin Messaging Workbench (`postMessage`):**
  * Interactive workbench to test passing strings, JSON objects, and structured clones across frame boundaries with real-time log tracking.

* **PWA & Offline Ready:**
  * Installable directly to desktop or mobile home screens with offline caching for built-in templates and local code execution.

---

## 🛠️ Architecture & Security Boundaries

ScriptCraft is built to safely demonstrate how browser security policies enforce origin isolation:

```text
+-----------------------------------------------------------------------+
|                             SCRIPTCRAFT                               |
|                                                                       |
|  +------------------------+             +--------------------------+  |
|  |  Target Web Content    |             |  Injected JS Scriptlets  |  |
|  |  (Fetched via Proxy)   |  <-------   |  & Execution Engine      |  |
|  +------------------------+             +--------------------------+  |
|              |                                        |               |
|              v                                        v               |
|  +-----------------------------------------------------------------+  |
|  |                    Sandboxed iFrame Container                   |  |
|  +-----------------------------------------------------------------+  |
|                                  |                                    |
|                                  v                                    |
|  +-----------------------------------------------------------------+  |
|  |                Integrated Console & Event Stream                |  |
|  +-----------------------------------------------------------------+  |
+-----------------------------------------------------------------------+
```

---

## 🎯 Target Audiences & Use Cases

| Role | Primary Use Case |
| :--- | :--- |
| **Front-End Developers** | Prototype userscripts, bookmarklets, and DOM manipulation logic instantly. |
| **QA Test Engineers** | Verify application behavior under strict HTML5 sandbox constraints and automate inputs. |
| **Security Researchers** | Demonstrate Same-Origin Policy (SOP), CORS header manipulation, and XSS prevention. |
| **Students & Educators** | Learn client-side web security and browser APIs through interactive visual tools. |

---

## 👥 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for new scriptlets, feature enhancements, or bug fixes.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

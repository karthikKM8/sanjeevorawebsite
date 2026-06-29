import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as CircleX, c as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-BKp9f7Ag.mjs";
import { t as Route } from "./donate.failure-Jy6zPPAr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate.failure-m9vk_hEY.js
var import_jsx_runtime = require_jsx_runtime();
function Failure() {
	const { amount, ref } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-10 w-10" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-3xl font-extrabold sm:text-4xl",
					children: "Payment failed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-foreground/75",
					children: [
						"Your donation of ₹",
						amount?.toLocaleString("en-IN") ?? 0,
						" did not go through. No amount was charged."
					]
				}),
				ref && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: ["Reference: ", ref]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/donate",
						search: { amount },
						className: "inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), " Try again"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	}) });
}
//#endregion
export { Failure as component };

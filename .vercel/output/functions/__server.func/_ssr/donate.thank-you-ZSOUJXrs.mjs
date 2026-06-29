import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as CircleCheck, P as House, o as Share2 } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-BKp9f7Ag.mjs";
import { t as Route } from "./donate.thank-you-_MEZaqUW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate.thank-you-ZSOUJXrs.js
var import_jsx_runtime = require_jsx_runtime();
function ThankYou() {
	const { name, amount, ref } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-soft py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full gradient-brand text-white shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 font-display text-4xl font-extrabold sm:text-5xl",
					children: [
						"Thank you",
						name ? `, ${name.split(" ")[0]}` : "",
						"!"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-foreground/75",
					children: [
						"Your generous donation of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-bold text-primary",
							children: ["₹", amount?.toLocaleString("en-IN") ?? 0]
						}),
						" will reach the field this week."
					]
				}),
				ref && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: ["Reference: ", ref]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-foreground/70",
					children: "A tax receipt (80G) is on its way to your email."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), " Go home"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => navigator.share?.({
							title: "I donated to Sanjeevora Vidya Mission",
							url: location.origin
						}),
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), " Share"]
					})]
				})
			]
		})
	}) });
}
//#endregion
export { ThankYou as component };

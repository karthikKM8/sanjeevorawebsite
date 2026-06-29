import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as Calendar, k as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
import { n as _1__4__default, r as _1__6__default, t as _1__2__default } from "./1 (6)-Dtt_mIa9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Updates-qSn3CvHu.js
var import_jsx_runtime = require_jsx_runtime();
var EVENTS = [
	{
		date: "Jul 12, 2026",
		img: _1__2__default,
		title: "Scholarships Day 2026",
		summary: "Awarding 250 new merit scholarships at our annual ceremony in Delhi."
	},
	{
		date: "Aug 03, 2026",
		img: _1__4__default,
		title: "Women's Skill Mela",
		summary: "A 3-day exhibition featuring products made by our self-help groups."
	},
	{
		date: "Sep 21, 2026",
		img: _1__6__default,
		title: "10,000 Trees Drive",
		summary: "Join volunteers across 6 cities for our biggest plantation drive yet."
	}
];
function Updates() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "events",
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Latest Updates & Events"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "What's happening on the ground"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: EVENTS.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: e.img,
								alt: e.title,
								loading: "lazy",
								width: 800,
								height: 500,
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col gap-2 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "inline-flex w-fit items-center gap-1.5 rounded-full bg-green-tint px-2.5 py-1 text-xs font-semibold text-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }),
										" ",
										e.date
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold",
									children: e.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex-1 text-sm text-foreground/70",
									children: e.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary",
									children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})]
					})
				}, e.title))
			})]
		})
	});
}
//#endregion
export { Updates as t };

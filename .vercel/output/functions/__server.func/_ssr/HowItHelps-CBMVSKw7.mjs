import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as Sparkles, O as BookOpen, j as Utensils, s as Rocket, v as Heart } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
import { t as CAUSES } from "./causes-OfVkdlBS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HowItHelps-CBMVSKw7.js
var import_jsx_runtime = require_jsx_runtime();
function Causes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "causes",
		className: "relative py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 gradient-soft opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Our Programs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "Creating sustainable change through four core programs."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: CAUSES.map((c, i) => {
					const Icon = c.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.title,
									loading: "lazy",
									width: 800,
									height: 600,
									className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-primary shadow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-3 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-bold",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "flex-1 text-sm text-foreground/70",
										children: c.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/donate",
										search: { cause: c.slug },
										className: "mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }), " Donate"]
									})
								]
							})]
						})
					}, c.slug);
				})
			})]
		})]
	});
}
var STEPS = [
	{
		step: "Step 1",
		icon: Utensils,
		title: "Nourish",
		desc: "We start by ensuring children have access to nutritious meals and essential support."
	},
	{
		step: "Step 2",
		icon: BookOpen,
		title: "Educate",
		desc: "We provide educational resources, mentoring and learning opportunities to keep children in school."
	},
	{
		step: "Step 3",
		icon: Sparkles,
		title: "Empower",
		desc: "Children develop confidence, leadership, digital literacy and practical life skills."
	},
	{
		step: "Step 4",
		icon: Rocket,
		title: "Build Futures",
		desc: "Young adults receive career guidance, skill training and opportunities to become independent and successful."
	}
];
function HowItHelps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "How We Create Impact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "Every child's journey matters."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: STEPS.map((t, i) => {
					const Icon = t.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs font-semibold uppercase tracking-wider text-primary",
									children: t.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl font-bold",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm text-foreground/70",
									children: t.desc
								})
							]
						})
					}, t.title);
				})
			})]
		})
	});
}
//#endregion
export { HowItHelps as n, Causes as t };

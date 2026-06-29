import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as Eye, i as Target, l as Quote } from "../_libs/lucide-react.mjs";
import { t as Counter } from "./Counter-BfARf_rC.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-D433F4h3.js
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		label: "Children Supported",
		value: 24500,
		suffix: "+"
	},
	{
		label: "Meals Served",
		value: 86e4,
		suffix: "+"
	},
	{
		label: "Communities Reached",
		value: 320,
		suffix: ""
	},
	{
		label: "Young Adults Trained",
		value: 4100,
		suffix: "+"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
							children: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "Building brighter futures, one child at a time."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-foreground/70",
							children: "Sanjeevora Vidya Mission is dedicated to creating meaningful, lasting change in the lives of underprivileged children and young adults. We believe every child deserves access to nutritious food, quality education, mentorship and opportunities — regardless of background. Together with donors, volunteers, and partners, we are building stronger communities where every child can dream, learn, and succeed."
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl border border-border bg-green-tint/60 p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl font-bold",
								children: "Our Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-foreground/75",
								children: "To empower underprivileged children and young adults by providing nutritious food, quality education, mentorship, skill development and career opportunities — enabling them to build independent, confident, and meaningful lives."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-3xl border border-border bg-sky-tint/60 p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-blue text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-bold",
									children: "Our Vision"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-foreground/75",
									children: "A future where every child, regardless of socioeconomic background, has equal access to education, opportunity, and the support needed to reach their full potential and become a positive force in society."
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-4",
					children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-extrabold text-primary sm:text-4xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm",
								children: s.label
							})]
						})
					}, s.label))
				})
			]
		})
	});
}
var T = [
	{
		name: "Aarav Mehta",
		role: "Monthly Donor, Mumbai",
		text: "I've donated to dozens of NGOs. Sanjeevora Vidya Mission is the only one that sends me photos and stories of the children my contribution is supporting."
	},
	{
		name: "Ishita Banerjee",
		role: "Volunteer, Kolkata",
		text: "Two weekends a month and I've never felt more useful. The team is warm, organized, and ridiculously hard-working."
	},
	{
		name: "Dr. Karan Singh",
		role: "Nutrition Partner",
		text: "Their nutrition and education programs are field-tested and built on real respect for the communities. A rare thing in this sector."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/30 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "What donors & volunteers say"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: T.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col rounded-3xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex-1 text-sm text-foreground/80",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
//#endregion
export { Testimonials as n, About as t };

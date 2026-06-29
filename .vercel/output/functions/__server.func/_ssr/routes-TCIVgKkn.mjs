import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { P as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as CircleCheck, M as Sparkles, N as LoaderCircle, O as BookOpen, T as ChevronLeft, _ as IndianRupee, b as GraduationCap, j as Utensils, k as ArrowRight, l as Quote, m as Mail, r as Users, v as Heart, w as ChevronRight, y as HandHeart } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-BKp9f7Ag.mjs";
import { t as Counter } from "./Counter-BfARf_rC.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
import { n as Testimonials, t as About } from "./Testimonials-D433F4h3.mjs";
import { t as _1__2__default } from "./1 (6)-Dtt_mIa9.mjs";
import { n as HowItHelps, t as Causes } from "./HowItHelps-CBMVSKw7.mjs";
import { i as subscribeNewsletter } from "./db-CILto_Pr.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Contact } from "./Contact-BPWBZUPu.mjs";
import { t as Updates } from "./Updates-qSn3CvHu.mjs";
import { n as _1__8__default, t as _1__1__default } from "./1 (8)-DaPczjrt.mjs";
import { t as VolunteerForm } from "./VolunteerForm-CmqrekQB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-TCIVgKkn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRESETS = [
	5e3,
	8e3,
	14e3
];
function QuickDonate() {
	const navigate = useNavigate();
	const [amount, setAmount] = (0, import_react.useState)(5e3);
	const [custom, setCustom] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const finalAmount = amount === "custom" ? Number(custom) : amount;
	function onSubmit(e) {
		e.preventDefault();
		if (!name.trim() || !email.trim()) return toast.error("Please add your name and email");
		if (!finalAmount || finalAmount < 10) return toast.error("Please enter an amount of at least ₹10");
		setBusy(true);
		navigate({
			to: "/donate",
			search: {
				amount: finalAmount,
				name,
				email
			}
		}).finally(() => setBusy(false));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full max-w-md rounded-3xl border border-border bg-white/95 p-6 shadow-2xl shadow-primary/10 backdrop-blur sm:p-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex h-9 w-9 items-center justify-center rounded-full gradient-brand text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-current" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-bold leading-none",
				children: "Make a donation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "100% goes to programs on the ground"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/70",
						children: "Choose amount"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: [PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setAmount(p),
							className: `rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${amount === p ? "border-primary bg-primary text-white shadow" : "border-border bg-background hover:border-primary/50"}`,
							children: ["₹", p.toLocaleString("en-IN")]
						}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setAmount("custom"),
							className: `rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${amount === "custom" ? "border-primary bg-primary text-white shadow" : "border-border bg-background hover:border-primary/50"}`,
							children: "Custom"
						})]
					}),
					amount === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-muted-foreground",
							children: "₹"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 10,
							value: custom,
							onChange: (e) => setCustom(e.target.value),
							placeholder: "Enter amount",
							className: "w-full bg-transparent text-sm outline-none"
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Full name",
						className: "rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "Email address",
						className: "rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: busy,
					className: "group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:shadow-xl disabled:opacity-60",
					children: [
						busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-current" }),
						"Donate ",
						finalAmount ? `₹${finalAmount.toLocaleString("en-IN")}` : "",
						" Securely"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[11px] text-muted-foreground",
					children: "You'll be redirected to a secure payment page (Razorpay / Stripe)."
				})
			]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 gradient-soft",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-blue/20 blur-3xl",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .5 },
								className: "inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Food • Education • Opportunity • Hope"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .1
								},
								className: "mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl",
								children: [
									"Every Child Deserves Food, Education &",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-brand",
										children: "Opportunity"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .2
								},
								className: "mt-5 max-w-xl text-base text-foreground/70 sm:text-lg",
								children: "Poverty should never decide a child's future. At Sanjeevora Vidya Mission we provide nutritious meals, quality education, mentorship and career opportunities — empowering children to build brighter, independent futures. Every contribution creates lasting change."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .3
								},
								className: "mt-7 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/donate",
									className: "inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.03]",
									children: ["Donate Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary hover:text-primary",
									children: "Learn More"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: {
									duration: .8,
									delay: .5
								},
								className: "mt-10 hidden overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: _1__1__default,
									alt: "Children at a Sanjeevora Vidya Mission-supported school smiling and learning",
									width: 1600,
									height: 1024,
									className: "h-72 w-full object-cover"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .2
						},
						className: "flex items-start justify-center lg:items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickDonate, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: _1__1__default,
							alt: "Children smiling in a Sanjeevora Vidya Mission-supported classroom",
							width: 1600,
							height: 1024,
							className: "rounded-3xl border border-border object-cover shadow-xl"
						})
					})
				]
			})
		]
	});
}
var ITEMS$1 = [
	{
		icon: BookOpen,
		stat: "1.17 Million",
		title: "Children Are Out of School",
		desc: "More than 1.17 million children across India remain out of school, denying them the education needed to build a brighter future."
	},
	{
		icon: Utensils,
		stat: "35.5%",
		title: "Children Under Five Are Stunted",
		desc: "Over one-third of children under five suffer from chronic malnutrition, affecting growth, cognitive development, and ability to learn."
	},
	{
		icon: GraduationCap,
		stat: "1 in 10",
		title: "Drop Out During Secondary",
		desc: "Many students leave school before completing secondary education due to financial hardship, family responsibilities, and lack of resources."
	}
];
function Reality() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/30 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
							children: "The Reality We Face"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "The problems that still remain unseen"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-foreground/70",
							children: "Every child deserves the opportunity to learn, grow, and dream. Yet millions across India continue to face challenges that prevent them from reaching their full potential."
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: ITEMS$1.map((it, i) => {
						const Icon = it.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 font-display text-3xl font-extrabold text-primary",
										children: it.stat
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-lg font-bold",
										children: it.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-foreground/70",
										children: it.desc
									})
								]
							})
						}, it.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-10 max-w-2xl text-center text-sm text-foreground/70",
					children: "These challenges inspire our commitment to creating opportunities that transform lives through education, nutrition, mentorship, and community support."
				}) })
			]
		})
	});
}
var STORIES = [
	{
		img: _1__8__default,
		name: "Priya, 14 — Karnataka",
		story: "Priya skipped school often because there was rarely food at home. With daily nutrition support and tutoring, she's now the first in her family to qualify for the district science olympiad.",
		impact: "Back in school. Full scholarship secured."
	},
	{
		img: _1__1__default,
		name: "Aarthi, 19 — Bengaluru",
		story: "Through our career readiness program — digital literacy, communication training and mentorship — Aarthi landed her first full-time job and now supports her younger siblings' education.",
		impact: "First job. Financially independent."
	},
	{
		img: _1__2__default,
		name: "Ravi, 12 — Tamil Nadu",
		story: "Once shy and falling behind in class, Ravi joined our child-development program. With mentoring, art classes and leadership workshops, he now leads his school's debate club.",
		impact: "Confidence rebuilt. Class topper."
	}
];
function Stories() {
	const [i, setI] = (0, import_react.useState)(0);
	const s = STORIES[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Success Stories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "Real people. Real change."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.img,
					alt: s.name,
					loading: "lazy",
					width: 600,
					height: 600,
					className: "h-full max-h-[420px] w-full object-cover"
				}, s.img), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between p-7 sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-display text-lg font-medium leading-snug text-foreground sm:text-xl",
							children: [
								"\"",
								s.story,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm font-semibold text-foreground",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 inline-block rounded-full bg-green-tint px-3 py-1 text-xs font-semibold text-primary",
							children: s.impact
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: STORIES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setI(idx),
								"aria-label": `Story ${idx + 1}`,
								className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-3 bg-border"}`
							}, idx))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setI((i - 1 + STORIES.length) % STORIES.length),
								className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary",
								"aria-label": "Previous",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setI((i + 1) % STORIES.length),
								className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary",
								"aria-label": "Next",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})]
						})]
					})]
				})]
			}) })]
		})
	});
}
var ITEMS = [
	{
		icon: IndianRupee,
		label: "Total Donations Raised",
		value: 248e5,
		prefix: "₹",
		suffix: ""
	},
	{
		icon: Users,
		label: "Active Volunteers",
		value: 1842,
		suffix: ""
	},
	{
		icon: CircleCheck,
		label: "Projects Completed",
		value: 215,
		suffix: ""
	},
	{
		icon: HandHeart,
		label: "Beneficiaries Supported",
		value: 158e3,
		suffix: "+"
	}
];
function Impact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 gradient-brand opacity-95",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] opacity-90",
					children: "Our Impact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
					children: "Numbers that translate into lives changed."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: ITEMS.map((it, i) => {
					const Icon = it.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-white/15 p-6 text-white shadow-lg backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7 opacity-90" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 font-display text-3xl font-extrabold sm:text-4xl",
									children: ["prefix" in it ? it.prefix : "", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: it.value,
										suffix: it.suffix
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm opacity-90",
									children: it.label
								})
							]
						})
					}, it.label);
				})
			})]
		})]
	});
}
var LOGOS = [
	"Tata Trust",
	"Infosys Foundation",
	"Wipro Cares",
	"HDFC Bank",
	"Reliance Foundation",
	"Mahindra Rise",
	"ITC Mission",
	"Axis Bank"
];
function Partners() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-secondary/30 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground",
				children: "Partners & Sponsors"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:grid-cols-8",
				children: LOGOS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center rounded-xl border border-border bg-white px-3 py-4 text-center font-display text-sm font-bold text-foreground/60 transition hover:text-primary",
						children: l
					})
				}, l))
			})]
		})
	});
}
function Newsletter() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setBusy(true);
		try {
			await subscribeNewsletter({
				full_name: String(fd.get("name") || "").trim(),
				email: String(fd.get("email") || "").trim()
			});
			toast.success("Subscribed! Welcome to the community.");
			e.currentTarget.reset();
		} catch (err) {
			console.error(err);
			toast.error("Couldn't subscribe. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl gradient-brand p-8 text-white shadow-2xl shadow-primary/20 sm:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-7 w-7 opacity-90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl font-bold sm:text-3xl",
							children: "Stories from the field, in your inbox."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm opacity-90",
							children: "A short, honest newsletter once a month. No spam."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "name",
								placeholder: "Your name",
								className: "rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-white"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "email",
								type: "email",
								placeholder: "Email address",
								className: "rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-white"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: busy,
								className: "inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow disabled:opacity-60",
								children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Subscribe"]
							})
						]
					})]
				})]
			}) })
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Causes, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reality, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItHelps, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerForm, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Updates, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Index as component };

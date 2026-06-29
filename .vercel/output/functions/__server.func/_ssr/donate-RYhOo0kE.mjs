import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { P as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, C as CreditCard, N as LoaderCircle, _ as IndianRupee, a as Shield } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-BKp9f7Ag.mjs";
import { t as CAUSES } from "./causes-OfVkdlBS.mjs";
import { t as insertDonation } from "./db-CILto_Pr.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./donate-COMgokuF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-RYhOo0kE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ONE_TIME_PRESETS = [
	5e3,
	8e3,
	14e3,
	2e4
];
var MONTHLY_PRESETS = [
	800,
	1600,
	2400,
	5e3
];
function DonatePage() {
	const sp = Route.useSearch();
	const navigate = useNavigate();
	const [frequency, setFrequency] = (0, import_react.useState)("one-time");
	const [amount, setAmount] = (0, import_react.useState)(sp.amount ?? 5e3);
	const [name, setName] = (0, import_react.useState)(sp.name ?? "");
	const [email, setEmail] = (0, import_react.useState)(sp.email ?? "");
	const [cause, setCause] = (0, import_react.useState)(sp.cause ?? "general");
	const [gateway, setGateway] = (0, import_react.useState)("razorpay");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const PRESETS = frequency === "monthly" ? MONTHLY_PRESETS : ONE_TIME_PRESETS;
	async function pay() {
		if (!name.trim() || !email.trim()) return toast.error("Name and email are required");
		if (!amount || amount < 10) return toast.error("Minimum donation is ₹10");
		setBusy(true);
		try {
			const ref = `${gateway.toUpperCase()}_${Date.now()}`;
			const ok = Math.random() > .1;
			const status = ok ? "succeeded" : "failed";
			const donation = await insertDonation({
				donor_name: name.trim(),
				donor_email: email.trim(),
				amount,
				cause,
				payment_gateway: gateway,
				payment_status: status,
				payment_reference: ref
			});
			await new Promise((r) => setTimeout(r, 700));
			navigate({
				to: ok ? "/donate/thank-you" : "/donate/failure",
				search: {
					id: donation.id,
					amount,
					name,
					ref
				}
			});
		} catch (e) {
			console.error(e);
			toast.error("Payment could not start. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gradient-soft py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl font-extrabold sm:text-5xl",
					children: "Make a difference today"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-foreground/70",
					children: "Every contribution helps provide nutritious meals, quality education, mentorship and brighter opportunities for the children who need them most. Secure, transparent, tax-deductible (80G)."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "1. Choose giving option"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 inline-flex rounded-full border border-border bg-background p-1 text-sm font-semibold",
						children: ["one-time", "monthly"].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setFrequency(f);
								setAmount((f === "monthly" ? MONTHLY_PRESETS : ONE_TIME_PRESETS)[0]);
							},
							className: `rounded-full px-4 py-1.5 transition ${frequency === f ? "bg-primary text-white shadow" : "text-foreground/70 hover:text-foreground"}`,
							children: f === "one-time" ? "One-Time" : "Monthly"
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: frequency === "monthly" ? "Become a monthly supporter and help us create sustainable, long-term impact." : "Support our initiatives with a one-time contribution."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setAmount(p),
							className: `rounded-xl border px-3 py-2.5 text-sm font-semibold ${amount === p ? "border-primary bg-primary text-white" : "border-border hover:border-primary/50"}`,
							children: ["₹", p.toLocaleString("en-IN")]
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 rounded-xl border border-border px-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: amount,
							min: 10,
							onChange: (e) => setAmount(Number(e.target.value)),
							placeholder: "Custom amount",
							className: "w-full bg-transparent text-sm outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-xl font-bold",
						children: "2. Support a cause"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CauseChip, {
							value: "general",
							cur: cause,
							set: setCause,
							label: "Where most needed"
						}), CAUSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CauseChip, {
							value: c.slug,
							cur: cause,
							set: setCause,
							label: c.title
						}, c.slug))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-xl font-bold",
						children: "3. Your details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							placeholder: "Full name",
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							placeholder: "Email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 font-display text-xl font-bold",
						children: "4. Payment method"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GatewayCard, {
							label: "Razorpay",
							desc: "UPI, Cards, Net Banking",
							current: gateway,
							value: "razorpay",
							set: setGateway
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GatewayCard, {
							label: "Stripe",
							desc: "International cards",
							current: gateway,
							value: "stripe",
							set: setGateway
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: "Payment summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Donor",
								v: name || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Email",
								v: email || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Frequency",
								v: frequency === "monthly" ? "Monthly" : "One-Time"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Cause",
								v: cause === "general" ? "Where most needed" : CAUSES.find((c) => c.slug === cause)?.title ?? cause
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Method",
								v: gateway === "razorpay" ? "Razorpay" : "Stripe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 border-t border-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Donation",
								v: `₹${amount?.toLocaleString("en-IN") || 0}${frequency === "monthly" ? " /mo" : ""}`,
								bold: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: pay,
						disabled: busy,
						className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-60",
						children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }), frequency === "monthly" ? `Donate ₹${amount?.toLocaleString("en-IN") || 0} Monthly` : `Donate ₹${amount?.toLocaleString("en-IN") || 0}`]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-1.5 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✔ Secure Payments" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✔ Instant Donation Receipt" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✔ Trusted & Transparent Giving" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5" }), " Encrypted & PCI-DSS compliant"]
					})
				]
			})]
		})
	})] });
}
function CauseChip({ value, cur, set, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => set(value),
		className: `rounded-full border px-3.5 py-1.5 text-sm ${cur === value ? "border-primary bg-primary text-white" : "border-border hover:border-primary/50"}`,
		children: label
	});
}
function GatewayCard({ label, desc, value, current, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => set(value),
		className: `rounded-2xl border p-4 text-left ${current === value ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: desc
		})]
	});
}
function Row({ k, v, bold }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: `text-right ${bold ? "font-display text-lg font-extrabold text-primary" : ""}`,
			children: v
		})]
	});
}
//#endregion
export { DonatePage as component };

import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { N as LoaderCircle, m as Mail, p as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
import { r as sendContactMessage } from "./db-CILto_Pr.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-BPWBZUPu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setBusy(true);
		try {
			await sendContactMessage({
				full_name: String(fd.get("name") || "").trim(),
				email: String(fd.get("email") || "").trim(),
				subject: String(fd.get("subject") || "").trim(),
				message: String(fd.get("message") || "").trim()
			});
			toast.success("Message sent. We'll respond within 1 business day.");
			e.currentTarget.reset();
		} catch (err) {
			console.error(err);
			toast.error("Couldn't send. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
						children: "Reach Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
						children: "Every conversation begins a change"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-foreground/70",
						children: "Whether you want to donate, volunteer, partner with us, or simply learn more about our mission, we'd love to hear from you."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: [
										"Sanjeevora Vidya Mission",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"No. 33, Top Floor, CBI Main Road,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Pilappa Garden, Ganganagar,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Bengaluru – 560032, Karnataka, India"
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "+91 70198 27645"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "hello@sanjeevora.org"
								})] })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Sanjeevora Vidya Mission office location",
							src: "https://www.openstreetmap.org/export/embed.html?bbox=77.58%2C13.02%2C77.62%2C13.05&layer=mapnik",
							className: "h-full w-full",
							loading: "lazy"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "grid gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "name",
								label: "Full Name",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "email",
								type: "email",
								label: "Email",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "phone",
								label: "Phone Number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "subject",
								label: "Subject",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							required: true,
							className: "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: busy,
							className: "inline-flex items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-60",
							children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Send Message"]
						})
					]
				})]
			})]
		})
	});
}
function Input({ name, label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
	})] });
}
//#endregion
export { Contact as t };

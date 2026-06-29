import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { N as LoaderCircle, y as HandHeart } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
import { n as insertVolunteer } from "./db-CILto_Pr.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VolunteerForm-CmqrekQB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AREAS = [
	"Teach",
	"Mentor",
	"Create Content",
	"Support Events",
	"Partner With Us",
	"Nutrition Programs",
	"Career Readiness"
];
function VolunteerForm() {
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setBusy(true);
		try {
			await insertVolunteer({
				full_name: String(fd.get("name") || "").trim(),
				email: String(fd.get("email") || "").trim(),
				phone: String(fd.get("phone") || "").trim(),
				area_of_interest: String(fd.get("area") || ""),
				message: String(fd.get("message") || "").trim() || void 0
			});
			toast.success("Thank you! We'll be in touch shortly.");
			e.currentTarget.reset();
		} catch (err) {
			console.error(err);
			toast.error("Couldn't submit. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "volunteer",
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative gradient-soft p-8 sm:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
							children: "Be Part of the Change"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "Give your time. Change a life."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-foreground/75",
							children: "Your time, skills and compassion can make a lasting difference. Join our community of volunteers and help create brighter futures for children and young adults."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-2 gap-2 text-sm",
							children: [
								"👨‍🏫 Teach",
								"🤝 Mentor",
								"🎨 Create Content",
								"🎉 Support Events",
								"🏢 Partner With Us"
							].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl bg-white px-3 py-2 font-medium shadow-sm",
								children: w
							}, w))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm shadow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "1,842 active volunteers — and counting"
							})]
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-4 p-8 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "name",
							label: "Full Name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "email",
							type: "email",
							label: "Email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "phone",
							label: "Phone",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70",
							children: "How would you like to help?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "area",
							required: true,
							defaultValue: "",
							className: "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Choose a way to help"
							}), AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: a,
								children: a
							}, a))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70",
							children: "Anything else? (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 3,
							className: "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: busy,
							className: "inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-60",
							children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Become a Volunteer"]
						})
					]
				})]
			})
		})
	});
}
function Field({ name, label, type = "text", required }) {
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
export { VolunteerForm as t };

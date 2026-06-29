import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteShell } from "./SiteShell-BKp9f7Ag.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
import { n as _1__4__default, r as _1__6__default, t as _1__2__default } from "./1 (6)-Dtt_mIa9.mjs";
import { n as _1__5__default, r as _1__7__default, t as _1__3__default } from "./1 (7)-D33jx8oN.mjs";
import { n as _1__8__default, t as _1__1__default } from "./1 (8)-DaPczjrt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-fFXUhwj1.js
var import_jsx_runtime = require_jsx_runtime();
var IMAGES = [
	{
		src: _1__1__default,
		alt: "Children learning together"
	},
	{
		src: _1__2__default,
		alt: "Classroom education program"
	},
	{
		src: _1__3__default,
		alt: "Nutrition and healthcare camp"
	},
	{
		src: _1__4__default,
		alt: "Career readiness program"
	},
	{
		src: _1__5__default,
		alt: "Child development workshop"
	},
	{
		src: _1__6__default,
		alt: "Community drive"
	},
	{
		src: _1__7__default,
		alt: "Rural community support"
	},
	{
		src: _1__8__default,
		alt: "Student success story"
	},
	{
		src: _1__1__default,
		alt: "Young adult mentorship"
	},
	{
		src: _1__2__default,
		alt: "Confidence-building program"
	}
];
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gradient-soft py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-extrabold sm:text-5xl",
				children: "Gallery"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-foreground/70",
				children: "Moments from the field — the children, communities, and journeys your support makes possible."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: IMAGES.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 6 * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
						})
					})
				}, img.src))
			})
		})
	})] });
}
//#endregion
export { GalleryPage as component };

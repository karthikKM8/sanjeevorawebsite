import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { F as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Calendar, L as ChartColumn, _ as IndianRupee, d as MessageSquare, m as Mail, r as Users, v as Heart, y as HandHeart } from "../_libs/lucide-react.mjs";
import { t as SiteShell } from "./SiteShell-BKp9f7Ag.mjs";
import { t as Counter } from "./Counter-BfARf_rC.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$11 } from "./donate-COMgokuF.mjs";
import { t as Route$12 } from "./donate.failure-Jy6zPPAr.mjs";
import { t as Route$13 } from "./donate.success-CXvgDZ4R.mjs";
import { t as Route$14 } from "./donate.thank-you-_MEZaqUW.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DIKJmCS-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CNW0jJGL.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sanjeevora Vidya Mission — Food, Education & Opportunity for Every Child" },
			{
				name: "description",
				content: "Sanjeevora Vidya Mission empowers underprivileged children and young adults with nutritious meals, quality education, mentorship, and career opportunities."
			},
			{
				name: "author",
				content: "Sanjeevora Vidya Mission"
			},
			{
				property: "og:title",
				content: "Sanjeevora Vidya Mission — Food, Education & Opportunity for Every Child"
			},
			{
				property: "og:description",
				content: "Donate to provide nutrition, education, mentorship and career opportunities for children in need."
			},
			{
				property: "og:site_name",
				content: "Sanjeevora Vidya Mission"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "NGO",
				name: "Sanjeevora Vidya Mission",
				url: "/",
				description: "Non-profit empowering underprivileged children and young adults through nutrition, education, mentorship, skill development and career opportunities.",
				address: {
					"@type": "PostalAddress",
					streetAddress: "No. 33, Top Floor, CBI Main Road, Pilappa Garden, Ganganagar",
					addressLocality: "Bengaluru",
					postalCode: "560032",
					addressRegion: "Karnataka",
					addressCountry: "IN"
				},
				email: "hello@sanjeevora.org",
				telephone: "+91 70198 27645"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			richColors: true,
			position: "top-center"
		})]
	});
}
var $$splitComponentImporter$7 = () => import("./volunteer-B0W1vqhM.mjs");
var Route$9 = createFileRoute("/volunteer")({
	head: () => ({
		meta: [
			{ title: "Volunteer — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Be part of the change. Volunteer to teach, mentor, create content, support events or partner with us."
			},
			{
				property: "og:title",
				content: "Volunteer — Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "Give your time. Change a life."
			},
			{
				property: "og:url",
				content: "/volunteer"
			}
		],
		links: [{
			rel: "canonical",
			href: "/volunteer"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var BASE_URL = "";
var entries = [
	{
		path: "/",
		changefreq: "weekly",
		priority: "1.0"
	},
	{
		path: "/about",
		changefreq: "monthly",
		priority: "0.8"
	},
	{
		path: "/our-mission",
		changefreq: "monthly",
		priority: "0.7"
	},
	{
		path: "/causes",
		changefreq: "monthly",
		priority: "0.9"
	},
	{
		path: "/volunteer",
		changefreq: "monthly",
		priority: "0.8"
	},
	{
		path: "/gallery",
		changefreq: "monthly",
		priority: "0.6"
	},
	{
		path: "/events",
		changefreq: "weekly",
		priority: "0.7"
	},
	{
		path: "/contact",
		changefreq: "monthly",
		priority: "0.6"
	},
	{
		path: "/donate",
		changefreq: "monthly",
		priority: "0.9"
	}
];
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./our-mission-iY4Y7QM_.mjs");
var Route$7 = createFileRoute("/our-mission")({
	head: () => ({
		meta: [
			{ title: "Our Mission — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Our mission and vision: empowering underprivileged children and young adults through nutrition, education, mentorship and career opportunities."
			},
			{
				property: "og:title",
				content: "Our Mission — Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "Empowering children with food, education, mentorship and opportunity."
			},
			{
				property: "og:url",
				content: "/our-mission"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-mission"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-fFXUhwj1.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Moments from Sanjeevora Vidya Mission's programs — meals served, classrooms supported, and futures built."
			},
			{
				property: "og:title",
				content: "Gallery — Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "See the lives you're helping transform."
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./events-CcQAwI2Y.mjs");
var Route$5 = createFileRoute("/events")({
	head: () => ({
		meta: [
			{ title: "Events — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Upcoming Sanjeevora Vidya Mission events, drives, and community programs you can join."
			},
			{
				property: "og:title",
				content: "Events — Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "Upcoming events you can be part of."
			},
			{
				property: "og:url",
				content: "/events"
			}
		],
		links: [{
			rel: "canonical",
			href: "/events"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-DclHSgIO.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Get in touch with the Sanjeevora Vidya Mission team — partnerships, volunteering, donations."
			},
			{
				property: "og:title",
				content: "Contact — Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "Every conversation begins a change. We respond within one business day."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./causes-BSs3i4Xq.mjs");
var Route$3 = createFileRoute("/causes")({
	head: () => ({
		meta: [
			{ title: "Our Programs — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Nutrition, education, child development, and career readiness — the four programs through which we transform lives."
			},
			{
				property: "og:title",
				content: "Our Programs — Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "Four core programs creating sustainable change."
			},
			{
				property: "og:url",
				content: "/causes"
			}
		],
		links: [{
			rel: "canonical",
			href: "/causes"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$2 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin Dashboard — Sanjeevora Vidya Mission" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: AdminPage
});
var STATS = [
	{
		label: "Total Donations",
		value: 248e5,
		prefix: "₹",
		icon: IndianRupee
	},
	{
		label: "Donors",
		value: 12480,
		icon: Heart
	},
	{
		label: "Active Volunteers",
		value: 1842,
		icon: HandHeart
	},
	{
		label: "Newsletter Subs",
		value: 8920,
		icon: Mail
	}
];
var RECENT_DONATIONS = [
	{
		name: "Aarav M.",
		amount: 5e3,
		cause: "Education",
		date: "2026-06-18"
	},
	{
		name: "Ishita B.",
		amount: 1200,
		cause: "Healthcare",
		date: "2026-06-18"
	},
	{
		name: "Karan S.",
		amount: 3e3,
		cause: "Environment",
		date: "2026-06-17"
	},
	{
		name: "Meera P.",
		amount: 800,
		cause: "Child Welfare",
		date: "2026-06-17"
	},
	{
		name: "Rohit V.",
		amount: 1e4,
		cause: "Where most needed",
		date: "2026-06-16"
	}
];
function AdminPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gradient-soft py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-extrabold sm:text-4xl",
					children: "Dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-foreground/70",
					children: "Mock view — connect this to the backend tables to power real admin features."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: STATS.map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-display text-2xl font-extrabold",
							children: ["prefix" in s ? s.prefix : "", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.value })]
						})]
					}, s.label);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Recent donations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2",
										children: "Donor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Cause" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-right",
										children: "Amount"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RECENT_DONATIONS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3",
										children: d.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-muted-foreground",
										children: d.cause
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-muted-foreground",
										children: d.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "text-right font-semibold text-primary",
										children: ["₹", d.amount.toLocaleString("en-IN")]
									})
								]
							}, i)) })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: Heart,
							title: "Manage Donations",
							desc: "View, refund, export records."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: HandHeart,
							title: "Manage Volunteers",
							desc: "Approve and assign roles."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: MessageSquare,
							title: "Manage Causes",
							desc: "Edit cause pages and targets."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: Calendar,
							title: "Manage Events",
							desc: "Publish & track attendance."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: Users,
							title: "Beneficiaries",
							desc: "Add stories & track impact."
						})
					]
				})]
			})]
		})
	})] });
}
function ManageCard({ icon: Icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: desc
			})] })]
		})
	});
}
var $$splitComponentImporter$1 = () => import("./about-BkHCqTx3.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Sanjeevora Vidya Mission is dedicated to creating lasting change in the lives of underprivileged children and young adults through nutrition, education, mentorship and career opportunities."
			},
			{
				property: "og:title",
				content: "About Us — Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "Building brighter futures, one child at a time."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-TCIVgKkn.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Sanjeevora Vidya Mission — Food, Education & Opportunity for Every Child" },
			{
				name: "description",
				content: "Sanjeevora Vidya Mission empowers underprivileged children and young adults with nutritious meals, quality education, mentorship and career opportunities. Donate today."
			},
			{
				property: "og:title",
				content: "Sanjeevora Vidya Mission — Food, Education & Opportunity for Every Child"
			},
			{
				property: "og:description",
				content: "Donate to provide nutrition, education, mentorship and career opportunities for children in need."
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var VolunteerRoute = Route$9.update({
	id: "/volunteer",
	path: "/volunteer",
	getParentRoute: () => Route$10
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$10
});
var OurMissionRoute = Route$7.update({
	id: "/our-mission",
	path: "/our-mission",
	getParentRoute: () => Route$10
});
var GalleryRoute = Route$6.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$10
});
var EventsRoute = Route$5.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$10
});
var DonateRoute = Route$11.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var CausesRoute = Route$3.update({
	id: "/causes",
	path: "/causes",
	getParentRoute: () => Route$10
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var DonateThankYouRoute = Route$14.update({
	id: "/thank-you",
	path: "/thank-you",
	getParentRoute: () => DonateRoute
});
var DonateSuccessRoute = Route$13.update({
	id: "/success",
	path: "/success",
	getParentRoute: () => DonateRoute
});
var DonateRouteChildren = {
	DonateFailureRoute: Route$12.update({
		id: "/failure",
		path: "/failure",
		getParentRoute: () => DonateRoute
	}),
	DonateSuccessRoute,
	DonateThankYouRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	CausesRoute,
	ContactRoute,
	DonateRoute: DonateRoute._addFileChildren(DonateRouteChildren),
	EventsRoute,
	GalleryRoute,
	OurMissionRoute,
	SitemapDotxmlRoute,
	VolunteerRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

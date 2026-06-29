import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-COMgokuF.js
var $$splitComponentImporter = () => import("./donate-RYhOo0kE.mjs");
var search = objectType({
	amount: coerce.number().min(10).optional(),
	name: stringType().optional(),
	email: stringType().email().optional(),
	cause: stringType().optional()
});
var Route = createFileRoute("/donate")({
	validateSearch: search,
	head: () => ({
		meta: [
			{ title: "Donate — Sanjeevora Vidya Mission" },
			{
				name: "description",
				content: "Make a secure one-time or monthly donation to Sanjeevora Vidya Mission — funds nutrition, education, mentorship and career opportunities for children."
			},
			{
				property: "og:title",
				content: "Donate to Sanjeevora Vidya Mission"
			},
			{
				property: "og:description",
				content: "Secure online donation page — one-time or monthly giving."
			},
			{
				property: "og:url",
				content: "/donate"
			}
		],
		links: [{
			rel: "canonical",
			href: "/donate"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

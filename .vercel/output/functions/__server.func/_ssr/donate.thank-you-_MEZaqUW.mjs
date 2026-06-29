import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate.thank-you-_MEZaqUW.js
var $$splitComponentImporter = () => import("./donate.thank-you-ZSOUJXrs.mjs");
var Route = createFileRoute("/donate/thank-you")({
	validateSearch: objectType({
		id: stringType().optional(),
		amount: coerce.number().optional(),
		name: stringType().optional(),
		ref: stringType().optional()
	}),
	head: () => ({ meta: [{ title: "Thank you — Sanjeevora Vidya Mission" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

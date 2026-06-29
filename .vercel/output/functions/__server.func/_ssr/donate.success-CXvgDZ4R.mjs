import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate.success-CXvgDZ4R.js
var $$splitComponentImporter = () => import("./donate.success-DpyI53XU.mjs");
var Route = createFileRoute("/donate/success")({
	validateSearch: objectType({
		id: stringType().optional(),
		amount: coerce.number().optional(),
		name: stringType().optional(),
		ref: stringType().optional()
	}),
	head: () => ({ meta: [{ title: "Donation successful — Sanjeevora" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

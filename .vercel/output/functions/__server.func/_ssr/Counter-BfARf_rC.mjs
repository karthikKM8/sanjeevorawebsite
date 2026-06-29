import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Counter-BfARf_rC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, suffix = "", duration = 1600 }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const obs = new IntersectionObserver(([e]) => {
			if (e.isIntersecting && !started.current) {
				started.current = true;
				const start = performance.now();
				const tick = (t) => {
					const p = Math.min(1, (t - start) / duration);
					setN(Math.floor(p * to));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .3 });
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n.toLocaleString("en-IN"), suffix]
	});
}
//#endregion
export { Counter as t };

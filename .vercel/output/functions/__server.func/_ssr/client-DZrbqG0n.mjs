import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-DZrbqG0n.js
function createSupabaseClient() {
	return createClient("https://xyecmjiixzqeqcqvvxfq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZWNtamlpeHpxZXFjcXZ2eGZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NzA1OTMsImV4cCI6MjA5NzM0NjU5M30.vFGxbE-_mMxxOiVxJ8L9qkRQofGCO0b3k6-D41hB7x8", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };

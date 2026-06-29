import { t as supabase } from "./client-DZrbqG0n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-CILto_Pr.js
async function insertDonation(input) {
	const { data, error } = await supabase.from("donations").insert({
		...input,
		currency: "INR"
	}).select("id").single();
	if (error) throw error;
	return data;
}
async function insertVolunteer(input) {
	const { error } = await supabase.from("volunteers").insert(input);
	if (error) throw error;
}
async function subscribeNewsletter(input) {
	const { error } = await supabase.from("newsletter_subscribers").insert(input);
	if (error && !String(error.message).toLowerCase().includes("duplicate")) throw error;
}
async function sendContactMessage(input) {
	const { error } = await supabase.from("contact_messages").insert(input);
	if (error) throw error;
}
//#endregion
export { subscribeNewsletter as i, insertVolunteer as n, sendContactMessage as r, insertDonation as t };

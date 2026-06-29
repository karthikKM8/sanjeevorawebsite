import { supabase } from "@/integrations/supabase/client";

export async function insertDonation(input: {
  donor_name: string;
  donor_email: string;
  amount: number;
  cause?: string;
  payment_gateway?: string;
  payment_status?: string;
  payment_reference?: string;
}) {
  const { data, error } = await supabase
    .from("donations")
    .insert({ ...input, currency: "INR" })
    .select("id")
    .single();
  if (error) throw error;
  return data;
}

export async function insertVolunteer(input: {
  full_name: string;
  email: string;
  phone: string;
  area_of_interest: string;
  message?: string;
}) {
  const { error } = await supabase.from("volunteers").insert(input);
  if (error) throw error;
}

export async function subscribeNewsletter(input: { full_name: string; email: string }) {
  const { error } = await supabase.from("newsletter_subscribers").insert(input);
  if (error && !String(error.message).toLowerCase().includes("duplicate")) throw error;
}

export async function sendContactMessage(input: { full_name: string; email: string; subject: string; message: string }) {
  const { error } = await supabase.from("contact_messages").insert(input);
  if (error) throw error;
}
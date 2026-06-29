
DROP POLICY IF EXISTS "anyone can read donations" ON public.donations;
DROP POLICY IF EXISTS "anyone can read volunteers" ON public.volunteers;
DROP POLICY IF EXISTS "anyone can read newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "anyone can read contact" ON public.contact_messages;

REVOKE SELECT ON public.donations FROM anon, authenticated;
REVOKE SELECT ON public.volunteers FROM anon, authenticated;
REVOKE SELECT ON public.newsletter_subscribers FROM anon, authenticated;
REVOKE SELECT ON public.contact_messages FROM anon, authenticated;

import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { CheckCircle2, Home, Share2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/donate/thank-you")({
  validateSearch: z.object({
    id: z.string().optional(),
    amount: z.coerce.number().optional(),
    name: z.string().optional(),
    ref: z.string().optional(),
  }),
  head: () => ({ meta: [{ title: "Thank you — Sanjeevora Vidya Mission" }, { name: "robots", content: "noindex" }] }),
  component: ThankYou,
});

function ThankYou() {
  const { name, amount, ref } = Route.useSearch();
  return (
    <SiteShell>
      <section className="gradient-soft py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full gradient-brand text-white shadow-lg">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">Thank you{name ? `, ${name.split(" ")[0]}` : ""}!</h1>
          <p className="mt-3 text-foreground/75">
            Your generous donation of <span className="font-bold text-primary">₹{amount?.toLocaleString("en-IN") ?? 0}</span> will reach the field this week.
          </p>
          {ref && <p className="mt-2 text-xs text-muted-foreground">Reference: {ref}</p>}
          <p className="mt-4 text-sm text-foreground/70">A tax receipt (80G) is on its way to your email.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-white"><Home className="h-4 w-4" /> Go home</Link>
            <button onClick={() => navigator.share?.({ title: "I donated to Sanjeevora Vidya Mission", url: location.origin })} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold"><Share2 className="h-4 w-4" /> Share</button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
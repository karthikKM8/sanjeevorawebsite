import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { XCircle, RefreshCw } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/donate/failure")({
  validateSearch: z.object({
    id: z.string().optional(),
    amount: z.coerce.number().optional(),
    name: z.string().optional(),
    ref: z.string().optional(),
  }),
  head: () => ({ meta: [{ title: "Payment failed — Sanjeevora" }, { name: "robots", content: "noindex" }] }),
  component: Failure,
});

function Failure() {
  const { amount, ref } = Route.useSearch();
  return (
    <SiteShell>
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <XCircle className="h-10 w-10" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">Payment failed</h1>
          <p className="mt-3 text-foreground/75">
            Your donation of ₹{amount?.toLocaleString("en-IN") ?? 0} did not go through. No amount was charged.
          </p>
          {ref && <p className="mt-2 text-xs text-muted-foreground">Reference: {ref}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/donate" search={{ amount }} className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white"><RefreshCw className="h-4 w-4" /> Try again</Link>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold">Go home</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
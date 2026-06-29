import { createFileRoute, Navigate } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/donate/success")({
  validateSearch: z.object({
    id: z.string().optional(),
    amount: z.coerce.number().optional(),
    name: z.string().optional(),
    ref: z.string().optional(),
  }),
  head: () => ({ meta: [{ title: "Donation successful — Sanjeevora" }, { name: "robots", content: "noindex" }] }),
  component: () => {
    const s = Route.useSearch();
    return <Navigate to="/donate/thank-you" search={s} />;
  },
});
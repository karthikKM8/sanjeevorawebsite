import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Counter } from "@/components/site/Counter";
import { IndianRupee, Users, HandHeart, Mail, MessageSquare, Calendar, Heart, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Sanjeevora Vidya Mission" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const STATS = [
  { label: "Total Donations", value: 24800000, prefix: "₹", icon: IndianRupee },
  { label: "Donors", value: 12480, icon: Heart },
  { label: "Active Volunteers", value: 1842, icon: HandHeart },
  { label: "Newsletter Subs", value: 8920, icon: Mail },
];

const RECENT_DONATIONS = [
  { name: "Aarav M.", amount: 5000, cause: "Education", date: "2026-06-18" },
  { name: "Ishita B.", amount: 1200, cause: "Healthcare", date: "2026-06-18" },
  { name: "Karan S.", amount: 3000, cause: "Environment", date: "2026-06-17" },
  { name: "Meera P.", amount: 800, cause: "Child Welfare", date: "2026-06-17" },
  { name: "Rohit V.", amount: 10000, cause: "Where most needed", date: "2026-06-16" },
];

export default function AdminPage() {
  return (
    <SiteShell>
      <div className="gradient-soft py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Admin</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Dashboard</h1>
          <p className="mt-2 text-sm text-foreground/70">Mock view — connect this to the backend tables to power real admin features.</p>
        </div>
      </div>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="mt-2 font-display text-2xl font-extrabold">
                    {"prefix" in s ? s.prefix : ""}<Counter to={s.value} />
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-bold">Recent donations</h2>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="py-2">Donor</th><th>Cause</th><th>Date</th><th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_DONATIONS.map((d, i) => (
                      <tr key={i} className="border-b border-border/60">
                        <td className="py-3">{d.name}</td>
                        <td className="text-muted-foreground">{d.cause}</td>
                        <td className="text-muted-foreground">{d.date}</td>
                        <td className="text-right font-semibold text-primary">₹{d.amount.toLocaleString("en-IN")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-4">
              <ManageCard icon={Heart} title="Manage Donations" desc="View, refund, export records." />
              <ManageCard icon={HandHeart} title="Manage Volunteers" desc="Approve and assign roles." />
              <ManageCard icon={MessageSquare} title="Manage Causes" desc="Edit cause pages and targets." />
              <ManageCard icon={Calendar} title="Manage Events" desc="Publish & track attendance." />
              <ManageCard icon={Users} title="Beneficiaries" desc="Add stories & track impact." />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ManageCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="h-4 w-4" /></div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}
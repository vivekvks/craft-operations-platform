import MetricCard from "./MetricCard";
import OperationalActivity from "./OperationalActivity";
import RecentActivity from "./RecentActivity";

const metrics = [
  {
    label: "Active Operations",
    value: "24",
    status: "+12% from yesterday",
    statusClassName: "text-emerald-400",
  },
  {
    label: "Open Incidents",
    value: "07",
    status: "2 require attention",
    statusClassName: "text-amber-400",
  },
  {
    label: "Teams Online",
    value: "18",
    status: "96% availability",
    statusClassName: "text-emerald-400",
  },
  {
    label: "System Health",
    value: "99.9%",
    status: "All systems operational",
    statusClassName: "text-emerald-400",
  },
];

export default function Dashboard() {
  return (
    <section className="space-y-6">
      <div>
        <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
          CRAFT
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Operations, designed for clarity.
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          A modern command center for monitoring work, incidents, teams, and
          operational activity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            status={metric.status}
            statusClassName={metric.statusClassName}
          />
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <OperationalActivity />
        <RecentActivity />
      </div>
    </section>
  );
}

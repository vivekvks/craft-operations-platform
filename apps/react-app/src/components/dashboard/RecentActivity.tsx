type ActivityItem = {
  title: string;
  source: string;
  time: string;
};

const activities: ActivityItem[] = [
  {
    title: "Incident resolved",
    source: "Production API",
    time: "2m ago",
  },
  {
    title: "Team assigned",
    source: "North region",
    time: "8m ago",
  },
  {
    title: "Operation completed",
    source: "Dispatch #4821",
    time: "14m ago",
  },
  {
    title: "Alert acknowledged",
    source: "Database latency",
    time: "21m ago",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-xl border border-white/10 bg-[#10141c] p-5">
      <div>
        <h3 className="text-sm font-semibold text-white">Recent Activity</h3>

        <p className="mt-1 text-xs text-slate-500">Latest operational events</p>
      </div>

      <div className="mt-5 space-y-4">
        {activities.map((activity) => (
          <div
            key={`${activity.title}-${activity.time}`}
            className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-0"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />

            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium text-slate-300">
                {activity.title}
              </div>

              <div className="mt-1 text-[11px] text-slate-600">
                {activity.source}
              </div>
            </div>

            <span className="text-[10px] text-slate-600">{activity.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  status: string;
  statusClassName?: string;
};

export default function MetricCard({
  label,
  value,
  status,
  statusClassName = "text-slate-400",
}: MetricCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-[#10141c] p-5">
      <div className="text-xs text-slate-500">{label}</div>

      <div className="mt-3 text-3xl font-semibold text-white">{value}</div>

      <div className={`mt-2 text-xs ${statusClassName}`}>{status}</div>
    </article>
  );
}

import type { Incident } from "./IncidentTable";

type IncidentDetailsProps = {
  incident: Incident | null;
  onClose: () => void;
  onStatusChange: (incidentId: string, status: Incident["status"]) => void;
};

export default function IncidentDetails({
  incident,
  onClose,
  onStatusChange,
}: IncidentDetailsProps) {
  if (!incident) {
    return (
      <aside className="rounded-xl border border-white/10 bg-[#10141c] p-6">
        <div className="flex min-h-[300px] items-center justify-center text-center">
          <div>
            <div className="text-sm text-slate-500">Select an incident</div>

            <div className="mt-1 text-xs text-slate-700">
              Incident details will appear here.
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="rounded-xl border border-white/10 bg-[#10141c]">
      <div className="flex items-start justify-between border-b border-white/10 p-5">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-slate-600">
            {incident.id}
          </div>

          <h3 className="mt-1 text-sm font-semibold text-white">
            {incident.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-xs text-slate-600 transition hover:text-white"
        >
          Close
        </button>
      </div>

      <div className="space-y-6 p-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-600">
              Severity
            </div>

            <div className="mt-2 text-xs font-medium text-red-400">
              {incident.severity}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-600">
              Service
            </div>

            <div className="mt-2 text-xs text-slate-300">
              {incident.service}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-600">
              Assigned Team
            </div>

            <div className="mt-2 text-xs text-slate-300">{incident.team}</div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-600">
              Created
            </div>

            <div className="mt-2 text-xs text-slate-300">
              {incident.created}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3 text-[10px] uppercase tracking-wider text-slate-600">
            Update Status
          </div>

          <div className="grid grid-cols-3 gap-2">
            {(
              [
                "Investigating",
                "Monitoring",
                "Resolved",
              ] as Incident["status"][]
            ).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => onStatusChange(incident.id, status)}
                className={`rounded-lg border px-2 py-2 text-[10px] transition ${
                  incident.status === status
                    ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                    : "border-white/10 bg-[#0b0f15] text-slate-500 hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 text-[10px] uppercase tracking-wider text-slate-600">
            Timeline
          </div>

          <div className="space-y-4">
            <TimelineItem
              title="Incident created"
              description="Incident was detected and created."
              time="21 minutes ago"
            />

            <TimelineItem
              title="Team assigned"
              description={`${incident.team} has been assigned.`}
              time="18 minutes ago"
            />

            <TimelineItem
              title="Investigation started"
              description="Engineering team is investigating the issue."
              time="12 minutes ago"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

type TimelineItemProps = {
  title: string;
  description: string;
  time: string;
};

function TimelineItem({ title, description, time }: TimelineItemProps) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 flex flex-col items-center">
        <span className="h-2 w-2 rounded-full bg-indigo-400" />
        <span className="mt-1 h-full w-px bg-white/10" />
      </div>

      <div className="pb-2">
        <div className="text-xs font-medium text-slate-300">{title}</div>

        <div className="mt-1 text-[11px] leading-relaxed text-slate-600">
          {description}
        </div>

        <div className="mt-1 text-[10px] text-slate-700">{time}</div>
      </div>
    </div>
  );
}

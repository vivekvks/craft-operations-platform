import { useState, type FormEvent } from "react";
import type { Incident } from "./IncidentTable";

type CreateIncidentModalProps = {
  onClose: () => void;
  onCreate: (
    incident: Pick<Incident, "title" | "severity" | "service" | "team">
  ) => void;
};

export default function CreateIncidentModal({
  onClose,
  onCreate,
}: CreateIncidentModalProps) {
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState<Incident["severity"]>("Medium");
  const [service, setService] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onCreate({
      title: title.trim(),
      severity,
      service: service.trim(),
      team: team.trim(),
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-incident-title"
        className="w-full max-w-lg rounded-xl border border-white/10 bg-[#10141c] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 p-5">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-indigo-400">
              CRAFT / INCIDENTS
            </div>

            <h2
              id="create-incident-title"
              className="mt-2 text-lg font-semibold text-white"
            >
              Create New Incident
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Add a new operational incident to the platform.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-lg text-slate-500 transition hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          <div>
            <label
              htmlFor="incident-title"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Incident Title
            </label>

            <input
              id="incident-title"
              type="text"
              required
              maxLength={120}
              autoFocus
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Production API outage"
              className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-700 focus:border-indigo-500/50"
            />
          </div>

          <div>
            <label
              htmlFor="incident-severity"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Severity
            </label>

            <select
              id="incident-severity"
              value={severity}
              onChange={(event) =>
                setSeverity(event.target.value as Incident["severity"])
              }
              className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-indigo-500/50"
            >
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="incident-service"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Affected Service
            </label>

            <input
              id="incident-service"
              type="text"
              required
              maxLength={100}
              value={service}
              onChange={(event) => setService(event.target.value)}
              placeholder="e.g. API Gateway"
              className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-700 focus:border-indigo-500/50"
            />
          </div>

          <div>
            <label
              htmlFor="incident-team"
              className="mb-2 block text-xs font-medium text-slate-400"
            >
              Assigned Team
            </label>

            <input
              id="incident-team"
              type="text"
              required
              maxLength={100}
              value={team}
              onChange={(event) => setTeam(event.target.value)}
              placeholder="e.g. Infrastructure"
              className="w-full rounded-lg border border-white/10 bg-[#0b0f15] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-700 focus:border-indigo-500/50"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 px-4 py-2.5 text-xs font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Create Incident
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import type { VolunteerTask } from "@/data/volunteer-tasks";

export function VolunteerList({ tasks }: { tasks: VolunteerTask[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {tasks.map((task) => (
        <div
          key={task.task}
          className={`card ${task.lowSlots ? "ring-2 ring-saffron" : ""}`}
        >
          <h3 className="text-lg font-bold text-maroon-deep">
            <span className="mr-2" aria-hidden>
              {task.icon}
            </span>
            {task.task}
          </h3>
          <p className="mt-1 text-sm text-brown/80">{task.schedule}</p>
          <p className="mt-4">
            <span
              className={`text-2xl font-black ${
                task.lowSlots ? "text-saffron" : "text-maroon"
              }`}
            >
              {task.slotsOpen}
            </span>
            <span className="ml-2 text-sm font-semibold text-brown/70">
              {task.lowSlots ? "slots left!" : "slots open"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

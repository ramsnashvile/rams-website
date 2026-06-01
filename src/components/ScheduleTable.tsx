import type { ScheduleItem } from "@/data/schedule";

function TimelineGroup({
  label,
  items,
}: {
  label: string;
  items: ScheduleItem[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="mb-10">
      <h2 className="mb-6 font-display text-xl font-bold text-saffron">
        {label}
      </h2>
      <div className="relative space-y-0 border-l-2 border-maroon/30 pl-8">
        {items.map((item, i) => (
          <div key={`${item.time}-${i}`} className="relative pb-8">
            <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-maroon text-[10px] text-white">
              ●
            </span>
            <p className="text-sm font-bold text-saffron">{item.time}</p>
            <h3 className="mt-1 text-lg font-bold text-maroon-deep">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-1 text-sm text-brown/85">{item.description}</p>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScheduleTable({ items }: { items: ScheduleItem[] }) {
  const morning = items.filter(
    (i) => i.period === "morning" || !i.period
  );
  const afternoon = items.filter((i) => i.period === "afternoon");

  return (
    <div>
      <TimelineGroup label="Morning" items={morning} />
      <TimelineGroup label="Afternoon & Evening" items={afternoon} />
    </div>
  );
}

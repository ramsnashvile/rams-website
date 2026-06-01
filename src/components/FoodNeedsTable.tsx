import type { FoodNeed } from "@/data/food-needs";

function statusLabel(status: FoodNeed["status"]) {
  switch (status) {
    case "filled":
      return (
        <span className="font-semibold text-income">✓ Filled</span>
      );
    case "open":
      return <span className="font-semibold text-saffron">1 open</span>;
    default:
      return <span className="font-semibold text-expense">Needed</span>;
  }
}

export function FoodNeedsTable({ items }: { items: FoodNeed[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-amber/50 bg-white/90">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-amber/40 bg-maroon/5">
            <th className="px-4 py-3 font-bold text-maroon-deep">
              Dish / Category
            </th>
            <th className="px-4 py-3 font-bold text-maroon-deep">Serves</th>
            <th className="px-4 py-3 font-bold text-maroon-deep">Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.dish}
              className="border-b border-amber/20 last:border-0"
            >
              <td className="px-4 py-3">
                <strong>{item.dish}</strong>
                <br />
                <span className="text-brown/70">{item.detail}</span>
              </td>
              <td className="px-4 py-3">{item.serves}</td>
              <td className="px-4 py-3">{statusLabel(item.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

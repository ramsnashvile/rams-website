// import { event } from "@/data/event";
// import {
//   expenseRows,
//   financeSummary,
//   incomeRows,
// } from "@/data/finance-sample";

// function formatMoney(n: number) {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     maximumFractionDigits: 0,
//   }).format(n);
// }

export function FinanceReport() {
  return null;
  // return (
  //   <div className="space-y-10">
  //     <div className="grid gap-4 sm:grid-cols-3">
  //       <div className="card text-center">
  //         <p className="text-sm font-bold text-brown/70">Total Income</p>
  //         <p className="mt-2 font-display text-3xl font-black text-income">
  //           {formatMoney(financeSummary.totalIncome)}
  //         </p>
  //       </div>
  //       <div className="card text-center">
  //         <p className="text-sm font-bold text-brown/70">Total Expenses</p>
  //         <p className="mt-2 font-display text-3xl font-black text-expense">
  //           {formatMoney(financeSummary.totalExpenses)}
  //         </p>
  //       </div>
  //       <div className="card text-center">
  //         <p className="text-sm font-bold text-brown/70">Current Balance</p>
  //         <p className="mt-2 font-display text-3xl font-black text-maroon-deep">
  //           {formatMoney(financeSummary.balance)}
  //         </p>
  //       </div>
  //     </div>

  //     <div>
  //       <h2 className="section-title mb-4">Income</h2>
  //       <div className="overflow-x-auto rounded-xl border border-amber/50 bg-white/90">
  //         <table className="w-full min-w-[600px] text-left text-sm">
  //           <thead>
  //             <tr className="border-b bg-income/10">
  //               <th className="px-4 py-2">Date</th>
  //               <th className="px-4 py-2">Category</th>
  //               <th className="px-4 py-2">Description</th>
  //               <th className="px-4 py-2 text-right">Amount</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {incomeRows.map((row) => (
  //               <tr key={`${row.date}-${row.description}`} className="border-b">
  //                 <td className="px-4 py-2">{row.date}</td>
  //                 <td className="px-4 py-2">{row.category}</td>
  //                 <td className="px-4 py-2">{row.description}</td>
  //                 <td className="px-4 py-2 text-right font-semibold text-income">
  //                   +{formatMoney(row.amount)}
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>

  //     <div>
  //       <h2 className="section-title mb-4">Expenses</h2>
  //       <div className="overflow-x-auto rounded-xl border border-amber/50 bg-white/90">
  //         <table className="w-full min-w-[640px] text-left text-sm">
  //           <thead>
  //             <tr className="border-b bg-expense/10">
  //               <th className="px-4 py-2">Date</th>
  //               <th className="px-4 py-2">Category</th>
  //               <th className="px-4 py-2">Vendor / Payee</th>
  //               <th className="px-4 py-2 text-right">Amount</th>
  //               <th className="px-4 py-2">Receipt</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {expenseRows.map((row) => (
  //               <tr key={`${row.date}-${row.vendor}`} className="border-b">
  //                 <td className="px-4 py-2">{row.date}</td>
  //                 <td className="px-4 py-2">{row.category}</td>
  //                 <td className="px-4 py-2">{row.vendor}</td>
  //                 <td className="px-4 py-2 text-right font-semibold text-expense">
  //                   −{formatMoney(row.amount)}
  //                 </td>
  //                 <td className="px-4 py-2">
  //                   {row.receipt ? "✓ Yes" : "—"}
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>

  //     {event.financeSheetEmbedUrl ? (
  //       <iframe
  //         src={event.financeSheetEmbedUrl}
  //         title="Live finance spreadsheet"
  //         className="h-[500px] w-full rounded-xl border border-amber/50"
  //         loading="lazy"
  //       />
  //     ) : (
  //       <div className="card text-center" />
  //     )}
  //   </div>
  // );
}

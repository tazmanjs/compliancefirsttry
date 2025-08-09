import Card from "@/components/Card";
import { getCounts, listObligations, listAlerts } from "@/lib/db";
export default async function Page() {
  const counts = await getCounts();
  const obligations = await listObligations();
  const alerts = await listAlerts();
  const upcoming = obligations.filter(o=>o.status==='upcoming').length;
  const overdue = obligations.filter(o=>o.status==='overdue').length;
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><div className="text-xs">Obligations</div><div className="text-2xl">{counts.obligations}</div></Card>
        <Card><div className="text-xs">Upcoming</div><div className="text-2xl text-amber-600">{upcoming}</div></Card>
        <Card><div className="text-xs">Overdue</div><div className="text-2xl text-red-600">{overdue}</div></Card>
        <Card><div className="text-xs">Policies</div><div className="text-2xl text-blue-700">{counts.policies}</div></Card>
      </div>
    </div>
  );
}

import { sql } from '@vercel/postgres';
export async function getCounts() {
  const [{ rows: o }, { rows: a }, { rows: p }] = await Promise.all([
    sql`select count(*) from obligations`,
    sql`select count(*) from alerts`,
    sql`select count(*) from policies`,
  ]);
  return { obligations: Number(o[0].count), alerts: Number(a[0].count), policies: Number(p[0].count) };
}
export async function listObligations() {
  return (await sql`select * from obligations order by due_date nulls last`).rows;
}
export async function listPolicies() {
  return (await sql`select * from policies`).rows;
}
export async function listAlerts() {
  return (await sql`select * from alerts order by date desc`).rows;
}

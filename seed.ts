  import { sql } from '@vercel/postgres';
  import { lastDayOfMonth, format } from 'date-fns';
  function nvDue() {
    const m = parseInt(process.env.NV_ANNIVERSARY_MONTH||'8',10);
    return format(lastDayOfMonth(new Date(new Date().getFullYear(), m-1)), 'MMM d');
  }
  async function main(){
    await sql`create table if not exists obligations (
  id serial primary key,
  name text,
  level text,
  jurisdiction text,
  frequency text,
  due_date text,
  status text,
  link text
);
create table if not exists policies (
  id serial primary key,
  title text,
  level text,
  effective_date text,
  renewal text,
  link text
);
create table if not exists alerts (
  id serial primary key,
  title text,
  level text,
  summary text,
  source_url text,
  date text,
  change_type text
);
`;
    await sql`delete from obligations`; await sql`delete from policies`; await sql`delete from alerts`;
    const due = nvDue();
    await sql`insert into obligations (name, level, jurisdiction, frequency, due_date, status, link) values
      ('Nevada Annual List', 'state', 'NV', 'annual', ${due}, 'upcoming', 'https://www.nvsilverflume.gov/'),
      ('State Business License Renewal', 'state', 'NV', 'annual', ${due}, 'upcoming', 'https://www.nvsilverflume.gov/'),
      ('IRS Federal Return', 'federal', null, 'annual', 'Mar/Apr 15', 'upcoming', 'https://www.irs.gov/')`;
    await sql`insert into policies (title, level) values ('Operating Agreement','internal')`;
    await sql`insert into alerts (title, level, summary, source_url, date, change_type) values
      ('OSHA penalty update','federal','Annual adjustment','https://www.osha.gov/','2025-01-01','update')`;
  }
  main().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});

create table if not exists obligations (
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

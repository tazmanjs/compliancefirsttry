export default function Card({ title, children }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      {title && <div className="mb-2 text-sm font-medium text-gray-700">{title}</div>}
      {children}
    </div>
  );
}

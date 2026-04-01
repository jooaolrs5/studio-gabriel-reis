export function Label({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <div className="w-6 h-px bg-primary" />
      <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{text}</span>
      <div className="w-6 h-px bg-primary" />
    </div>
  );
}

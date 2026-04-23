export default function RichText({
  text,
  className,
  boldClassName = "text-slate-12",
}: {
  text: string;
  className?: string;
  boldClassName?: string;
}) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={boldClassName}>
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </span>
  );
}

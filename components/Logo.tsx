export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-dark)] text-[color:var(--color-accent-soft)] font-semibold"
      style={{ width: size, height: size, fontSize: size * 0.45 }}
      aria-hidden
    >
      N
    </span>
  );
}

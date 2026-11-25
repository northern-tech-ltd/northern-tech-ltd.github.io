import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";

export default function Header() {
  return (
    <header className="py-6 md:py-7">
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">
            Northern Tech
          </span>
        </Link>
        <nav className="flex items-center gap-7 text-[14px] text-[color:var(--color-ink)]">
          <Link href="/services" className="hover:text-[color:var(--color-muted)]">
            Services
          </Link>
          <Link href="/about" className="hover:text-[color:var(--color-muted)]">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[color:var(--color-dark)] text-white px-4 py-2 text-[13.5px] font-medium hover:bg-[color:var(--color-dark-2)] transition-colors"
          >
            Get in touch
          </Link>
        </nav>
      </Container>
    </header>
  );
}

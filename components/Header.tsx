import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";

export default function Header() {
  return (
    <header className="pt-6 md:pt-7">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Northern Tech home"
        >
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">
            Northern Tech
          </span>
        </Link>
        <nav className="flex items-center gap-7 text-[14px]">
          <Link
            href="/services"
            className="text-[color:var(--color-ink)]/80 hover:text-[color:var(--color-ink)]"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[color:var(--color-ink)]/80 hover:text-[color:var(--color-ink)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="pill-dark rounded-full px-4 py-2 text-[13.5px] font-medium"
          >
            Get in touch
          </Link>
        </nav>
      </Container>
    </header>
  );
}

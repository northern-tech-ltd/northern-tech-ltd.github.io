import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 pt-14 pb-10 border-t border-[color:var(--color-border)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[15px] font-semibold">Northern Tech</span>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[color:var(--color-muted)] max-w-[300px]">
              Northern Tech LTD is a private limited company registered in
              Scotland, working with clients across the UK and remotely further
              afield.
            </p>
          </div>

          <div>
            <h4 className="eyebrow">Site</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <Link href="/services" className="hover:text-[color:var(--color-muted)]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[color:var(--color-muted)]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[color:var(--color-muted)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Contact</h4>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <a
                  href="mailto:hello@northerntechltd.com"
                  className="hover:text-[color:var(--color-muted)]"
                >
                  hello@northerntechltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-[color:var(--color-border)]">
          <p className="text-[12.5px] text-[color:var(--color-muted)]">
            © {new Date().getFullYear()} Northern Tech LTD. All rights reserved.
          </p>
          <p className="text-[12px] text-[color:var(--color-muted)] tracking-wide">
            Registered in Scotland
          </p>
        </div>
      </Container>
    </footer>
  );
}

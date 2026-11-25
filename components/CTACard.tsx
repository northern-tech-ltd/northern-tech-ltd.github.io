import Link from "next/link";
import Container from "./Container";

export default function CTACard() {
  return (
    <section className="mt-24 md:mt-32">
      <Container>
        <div className="cta-panel rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
          <h3 className="display text-[36px] md:text-[44px] leading-[1.05] max-w-[520px]">
            Tell us what eats your week.
          </h3>
          <p className="mt-4 text-[14.5px] text-white/70 max-w-[480px]">
            A short conversation is usually enough to spot the first thing worth
            automating.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-dark)] px-5 py-2.5 text-[14px] font-semibold hover:brightness-95 transition"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

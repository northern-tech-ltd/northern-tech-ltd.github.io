import Link from "next/link";
import Container from "./Container";

export default function CTACard() {
  return (
    <section className="mt-24 md:mt-32">
      <Container>
        <div className="cta-panel rounded-[28px] p-10 md:p-14 text-white relative overflow-hidden">
          <h3 className="display text-[36px] md:text-[48px] leading-[1.02] max-w-[560px]">
            Tell us what eats your week.
          </h3>
          <p className="mt-5 text-[15px] text-white/60 max-w-[480px] leading-relaxed">
            A short conversation is usually enough to spot the first thing worth
            automating.
          </p>
          <div className="mt-9">
            <Link
              href="/contact"
              className="pill-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold"
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

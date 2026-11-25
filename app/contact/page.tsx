import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what eats your week. A short conversation is usually enough to spot the first thing worth automating.",
};

export default function ContactPage() {
  return (
    <section className="pt-10 md:pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-start">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-6 text-[48px] md:text-[60px] max-w-[460px]">
              Tell us what eats your week.
            </h1>
            <p className="mt-6 text-[15.5px] text-[color:var(--color-muted)] max-w-[380px] leading-relaxed">
              Describe the task your team dreads most. We&apos;ll reply with
              where we&apos;d start.
            </p>
            <a
              href="mailto:hello@northerntechltd.com"
              className="mt-6 inline-flex items-center gap-2 text-[14.5px] text-[color:var(--color-ink)] underline underline-offset-4 hover:text-[color:var(--color-muted)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M2.5 4.5l5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              hello@northerntechltd.com
            </a>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

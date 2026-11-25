import type { Metadata } from "next";
import Container from "@/components/Container";
import CTACard from "@/components/CTACard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, workflow automation, and practical AI — built to cut the typing, chasing and double-checking.",
};

const services = [
  {
    n: "01",
    title: "Custom software",
    body: "Internal tools built around how your team actually works, where off-the-shelf products fall short.",
    bullets: [
      "Dashboards and admin tools",
      "Client and staff portals",
      "Replacements for sprawling spreadsheets",
    ],
  },
  {
    n: "02",
    title: "Workflow automation",
    body: "We connect the tools you already use so data moves on its own and nothing gets typed twice.",
    bullets: [
      "Connecting CRM, accounts and inbox",
      "Automatic reports and reminders",
      "Order, invoice and onboarding flows",
    ],
  },
  {
    n: "03",
    title: "Practical AI",
    body: "AI applied to real, repetitive jobs — reading documents, sorting requests, drafting replies.",
    bullets: [
      "Document search and extraction",
      "Triage and routing of enquiries",
      "Assistants trained on your own material",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-10 md:pt-20">
        <Container>
          <p className="eyebrow">Services</p>
          <h1 className="display mt-6 text-[48px] md:text-[64px] max-w-[760px]">
            Less typing, chasing and double-checking.
          </h1>
        </Container>
      </section>

      <section className="mt-16 md:mt-20">
        <Container>
          <div className="divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
            {services.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-1 md:grid-cols-[72px_1fr_1fr] gap-6 md:gap-10 py-12"
              >
                <p className="text-[13px] text-[color:var(--color-muted)] font-mono">
                  {s.n}
                </p>
                <div>
                  <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-[15px] text-[color:var(--color-muted)] leading-[1.6] max-w-[380px]">
                    {s.body}
                  </p>
                </div>
                <ul className="space-y-3 text-[14.5px]">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--color-accent)]/15 shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-deep)]" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTACard />
    </>
  );
}

import Link from "next/link";
import Container from "@/components/Container";
import CTACard from "@/components/CTACard";

const workflowSteps = [
  { label: "Invoice arrives by email", sub: "Posted automatically" },
  { label: "Details read automatically", sub: null },
  { label: "Synced to accounts", sub: null },
  { label: "Team notified", sub: "Nothing missed" },
];

const pillars = [
  {
    title: "Custom software",
    body: "Internal tools built around how your team actually works, where off-the-shelf products fall short.",
  },
  {
    title: "Workflow automation",
    body: "We connect the tools you already use so data moves on its own and nothing gets typed twice.",
  },
  {
    title: "Practical AI",
    body: "AI applied to real, repetitive jobs — reading documents, sorting requests, drafting replies.",
  },
];

const steps = [
  {
    n: "01",
    title: "Find the lost time",
    body: "We start with a hard look at where hours are actually going, not where you'd guess.",
  },
  {
    n: "02",
    title: "Build the fix",
    body: "A small, working version first — connected to your existing tools and tested with your team.",
  },
  {
    n: "03",
    title: "Keep it running",
    body: "We monitor, adjust and extend it as your business changes.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="pt-10 md:pt-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-start">
            <div>
              <p className="eyebrow">Automation Agency · Scotland</p>
              <h1 className="display mt-6 text-[52px] md:text-[64px] lg:text-[72px]">
                We take the manual work out of your business.
              </h1>
              <p className="mt-6 text-[16px] md:text-[17px] text-[color:var(--color-muted)] max-w-[480px] leading-relaxed">
                Custom software, workflow automation and practical AI for small
                and mid-sized businesses that are tired of copying, pasting and
                chasing.
              </p>
              <div className="mt-9 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-dark)] text-white px-5 py-3 text-[14px] font-medium hover:bg-[color:var(--color-dark-2)] transition"
                >
                  Get in touch
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-3 py-3 text-[14px] text-[color:var(--color-ink)] hover:text-[color:var(--color-muted)]"
                >
                  See our services
                </Link>
              </div>
            </div>

            <WorkflowCard />
          </div>
        </Container>
      </section>

      <section className="mt-28 md:mt-40">
        <Container>
          <p className="eyebrow">What we do</p>
          <h2 className="display mt-5 text-[36px] md:text-[44px] max-w-[640px]">
            Three ways we give your team its time back.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl bg-white p-7 border border-[color:var(--color-border)]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-bg)] text-[color:var(--color-dark)]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M3 7h8M7 3v8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-6 text-[18px] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] text-[color:var(--color-muted)] leading-relaxed">
                  {p.body}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-muted)]"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-24 md:mt-32">
        <Container>
          <p className="eyebrow">How we work</p>
          <h2 className="display mt-5 text-[36px] md:text-[44px] max-w-[640px]">
            Every engagement starts with where the time goes.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[color:var(--color-border)] pt-10">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="text-[12.5px] text-[color:var(--color-muted)]">{s.n}</p>
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] text-[color:var(--color-muted)] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTACard />
    </>
  );
}

function WorkflowCard() {
  return (
    <div className="cta-panel rounded-3xl p-6 md:p-7 text-white">
      <div className="flex items-center justify-between">
        <p className="text-[11px] tracking-[0.18em] uppercase text-white/50">
          Example workflow
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-[color:var(--color-accent-soft)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-soft)]" />
          Running
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {workflowSteps.map((s) => (
          <li
            key={s.label}
            className="flex items-start gap-3 rounded-xl bg-white/[0.04] px-4 py-3.5 border border-white/[0.06]"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-accent)]/90 text-[color:var(--color-dark)]">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2.5 6.5l2.2 2.2L9.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-[13.5px] text-white">{s.label}</p>
              {s.sub && (
                <p className="text-[12px] text-white/50 mt-0.5">{s.sub}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[12.5px] text-white/50 text-center">
        No hand entering. Nothing missed.
      </p>
    </div>
  );
}

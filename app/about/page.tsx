import type { Metadata } from "next";
import Container from "@/components/Container";
import CTACard from "@/components/CTACard";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small Scotland-based agency that cuts out busywork for small and mid-sized teams.",
};

const facts = [
  { label: "Based in", value: "Scotland" },
  { label: "Working with", value: "Small and mid-sized businesses" },
  { label: "Clients", value: "Across the UK and remotely further afield" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-10 md:pt-20">
        <Container>
          <p className="eyebrow">About</p>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
            <div>
              <h1 className="display text-[44px] md:text-[60px] max-w-[560px]">
                A small agency that cuts out busywork.
              </h1>
              <div className="mt-8 space-y-5 text-[16px] text-[color:var(--color-muted)] leading-[1.6] max-w-[520px]">
                <p>
                  We work with small and mid-sized businesses to cut the manual
                  work out of their operations — connecting the tools they
                  already use, automating repetitive tasks, and building
                  internal software where off-the-shelf products fall short.
                </p>
                <p>
                  Every engagement starts with a hard look at where time is
                  actually being lost.
                </p>
              </div>
            </div>

            <div className="card-surface rounded-2xl p-7 md:p-8 h-fit">
              <dl className="divide-y divide-[color:var(--color-border)]">
                {facts.map((f) => (
                  <div key={f.label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="eyebrow">{f.label}</dt>
                    <dd className="mt-2 text-[15px] font-medium text-[color:var(--color-ink)]">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <CTACard />
    </>
  );
}

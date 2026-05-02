import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Lama",
  description:
    "Lama Koleib is a software engineer and designer based in Ottawa.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <p className="text-sm uppercase tracking-[0.2em] text-rose-deep">About</p>
      <h1 className="serif mt-6 text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
        I write code that tries to{" "}
        <span className="serif-italic text-rose-deep">feel</span> like
        something.
      </h1>

      <div className="mt-12 grid gap-12 md:mt-20 md:grid-cols-[2fr_1fr] md:gap-20">
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft md:text-xl">
          <p>
            I&rsquo;m Lama Koleib, a software engineering student at the
            University of Ottawa (graduating January 2026, 3.85 GPA). I
            started out in graphic design and never quite let it go. My
            favourite problems sit where product strategy, careful interfaces,
            and well-built code overlap.
          </p>
          <p>
            Most recently I was a Technical Project Manager at Global Affairs
            Canada, translating business requirements into sprint-ready stories
            and reporting KPIs to director-level stakeholders. Before that I
            was a Software Developer on the same platform, doing UX research,
            front-end work, and data migration with Python and SQL.
          </p>
          <p>
            I started my career as a graphic design intern at Porsche Prestige
            in Montreal, where I made a motion piece for the 2019 Canadian Grand Prix, which is one of my favourite pieces of work.
          </p>
        </div>

        <aside className="space-y-10 text-sm text-ink-soft">
          <Section title="Currently">
            <ul className="space-y-1">
              <li>Software engineering (graduating Jan 2026)</li>
              <li>University of Ottawa — 3.85 GPA</li>
              <li>Dean&rsquo;s Honour List × 6</li>
            </ul>
          </Section>

          <Section title="Toolkit">
            <ul className="space-y-1">
              <li>TypeScript, React, Next.js</li>
              <li>Python, Java, SQL</li>
              <li>PostgreSQL, RabbitMQ, Supabase</li>
              <li>Kotlin, Android Studio</li>
              <li>Figma, After Effects, Illustrator</li>
            </ul>
          </Section>

          <Section title="Elsewhere">
            <ul className="space-y-1">
              <li>
                <Link
                  className="link-underline"
                  href="https://linkedin.com/in/lamakoleib/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline"
                  href="https://github.com/lamakoleib"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="link-underline"
                  href="mailto:lkoleib11@gmail.com"
                >
                  lkoleib11@gmail.com
                </Link>
              </li>
            </ul>
          </Section>
        </aside>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs uppercase tracking-[0.18em] text-ink-muted">
        {title}
      </h2>
      <div className="mt-3 text-base text-ink">{children}</div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Mealer — Lama",
  description:
    "A two-sided mobile marketplace connecting home cooks with hungry diners.",
};

export default function MealerCaseStudy() {
  const project = getProject("mealer");
  if (!project) return notFound();

  return (
    <CaseStudy
      project={project}
      context="Course project (Group 27)"
      team="4-person team"
      stack={["Android Studio", "Java", "Firebase", "Figma"]}
      links={[{ label: "Read the full report (PDF)", href: "/artifacts/Mealer_Report_Group27.pdf" }]}
    >
      <Hero />

      <Section
        title="The premise"
        body="Mealer is a two-sided app: cooks list dishes they make at home, clients browse and order them. Two account types, two flows, one shared object — the meal. We built it as a final project for a software engineering course, end-to-end on Android."
      />

      <Section
        title="Two roles, one app"
        body="Both cook and client begin at the same login screen but immediately diverge. Cooks land in a dashboard for managing dishes and orders; clients drop into a discovery feed grouped by cuisine and meal type. Keeping the two flows visually identical at the shell level — same nav, same colour, same type — meant we could share a lot more code than we expected."
      />

      <FlowComposite />

      <Section
        title="Discovery, not search"
        body="Most food apps default to a search bar. Ours leads with cuisines and meal types — Italian, Mexican, Breakfast, Lunch — because that's how people actually decide what they want. The search bar is there, but it earns its keep behind the categories instead of dominating the screen."
      />

      <Section
        title="Building it"
        body="Java and Android Studio for the app, Firebase for auth and the meal database, Figma for the screens. The biggest engineering lift was modeling the order state machine — a meal moves through several states before the client receives it, and both sides of the marketplace need to see the right view at the right time."
      />

      <Section
        title="What I'd do differently"
        body="Tighter image discipline (each cuisine icon was sourced separately and it shows), a real design token system instead of repeating hex values across screens, and a single source of truth for order states instead of recomputing it in three places."
      />
    </CaseStudy>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#FFF4E6]">
      <div className="relative mx-auto max-w-[680px] px-8 py-10 md:px-12 md:py-14">
        <div className="relative w-full" style={{ aspectRatio: "1070 / 1402" }}>
          <Image
            src="/artifacts/Adobe%20Express%20-%20file.png"
            alt="Six Mealer phone screens showing login, welcome, account creation, browsing by cuisine and the profile tab"
            fill
            priority
            sizes="(min-width: 1024px) 680px, (min-width: 768px) 560px, 85vw"
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

function FlowComposite() {
  return (
    <figure className="my-20 md:my-28">
      <div className="relative mx-auto max-w-[560px] overflow-hidden rounded-2xl bg-[#FFF4E6] shadow-sm">
        <div className="relative w-full p-6" style={{ aspectRatio: "1070 / 1402" }}>
          <Image
            src="/artifacts/Adobe%20Express%20-%20file.png"
            alt="Mealer navigation flow"
            fill
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 440px, 85vw"
            className="object-contain p-6"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-ink-muted">
        Login → Welcome → Account creation → Discovery → Profile
      </figcaption>
    </figure>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="my-20 grid gap-8 md:my-28 md:grid-cols-[1fr_2fr] md:gap-16">
      <h2 className="serif text-3xl text-ink md:sticky md:top-28 md:self-start md:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
        {body}
      </p>
    </section>
  );
}

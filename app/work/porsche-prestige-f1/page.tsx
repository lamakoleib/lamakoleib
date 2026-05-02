import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Porsche Prestige × F1 — Lama",
  description:
    "A motion piece for the Montreal Grand Prix, the F1 2019 event.",
};

export default function PorscheCaseStudy() {
  const project = getProject("porsche-prestige-f1");
  if (!project) return notFound();

  return (
    <CaseStudy
      project={project}
      context="Internship — Porsche Prestige (Montreal)"
      stack={["Adobe After Effects", "Illustrator", "Photoshop"]}
    >
      <Hero />

      <Section
        title="The moment"
        body="The Canadian Grand Prix comes through Montreal once a year and the city turns into one big motorsport conversation. Porsche Prestige wanted a short motion piece for their F1 weekend: fast, premium, unmistakably Porsche, partnering with Wingo Racing for the 2019 GT3 Cup Challenge featuring driver Martin Harvey."
      />

      <Section
        title="My role"
        body="I joined Porsche Prestige as a graphic design intern in 2019. I designed and animated this spot end-to-end in After Effects, working from existing brand assets provided by Porsche Germany and a creative brief from the marketing team."
      />

      <Section
        title="Direction"
        body="Two ideas drove the edit: speed as a feeling (cuts on the beat, motion blur, restraint with type) and prestige as a posture (negative space, tight crops, no novelty effects). Porsche had a couple of guidelines and a list of car makes and specific angles to show off, but beyond that, it was pretty open creatively."
      />
    </CaseStudy>
  );
}

function Hero() {
  return (
    <div className="overflow-hidden rounded-3xl bg-ink">
      <video
        src="/artifacts/Porsche_Prestige_F1.MP4"
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full"
      />
    </div>
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

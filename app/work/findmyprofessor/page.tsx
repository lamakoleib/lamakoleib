import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "findmyprofessor.ca — Lama",
  description:
    "Helping students across Canada discover professors by research interest and expertise.",
};

export default function FindMyProfessorCaseStudy() {
  const project = getProject("findmyprofessor");
  if (!project) return notFound();

  return (
    <CaseStudy
      project={project}
      context="Live product"
      stack={["Figma", "Adobe Illustrator", "Photoshop"]}
      links={[{ label: "findmyprofessor.ca", href: "https://findmyprofessor.ca" }]}
    >
      <Hero />

      <Section
        title="The problem"
        body="Finding a research supervisor in Canada is surprisingly hard. University faculty directories are inconsistent; some schools list research interests, some don't. Students end up cold-emailing professors based on a Google search and hoping for the best. findmyprofessor.ca aggregates professors from 25+ Canadian universities into one searchable, filterable index."
      />

      <Section
        title="My role"
        body="I designed the full UI (landing page, search experience, and professor profile cards) in Figma, polishing assets in Illustrator and Photoshop. The product was built by a small team; I owned the design end-to-end, from early wireframes to final specs handed off to engineering."
      />

      <Section
        title="Search that feels obvious"
        body="The search experience needed to handle three different user intents: finding a specific professor by name, exploring a research area, and filtering by practical criteria (department, school, whether they're accepting students). The result was a unified search bar paired with persistent filter chips; no separate pages, no mode switching."
      />

      <Showcase
        src="/artifacts/findmyprof-results.png"
        alt="Search results for 'Human Computer Interaction' showing professor cards with tags, ratings, and contact links"
        caption="Results: professors surfaced by relevance with research tags, student-acceptance status, and direct contact links."
        aspect="2008 / 1706"
      />

      <Section
        title="Scale"
        body="The platform now serves 1,000+ active users and processes over 4,500 search queries a month. Designing for that density early was the central challenge: making sure professor cards stayed scannable at scale and tag systems didn't collapse under hundreds of research areas."
      />
    </CaseStudy>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#1E2A5E]">
      <div className="relative" style={{ aspectRatio: "2008 / 1706" }}>
        <Image
          src="/artifacts/findmyprof-landing.png"
          alt="findmyprofessor.ca hero"
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="my-20 grid gap-8 md:my-28 md:grid-cols-[1fr_2fr] md:gap-16">
      <h2 className="serif text-3xl text-ink md:sticky md:top-28 md:self-start md:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-ink-soft md:text-xl">{body}</p>
    </section>
  );
}

function Showcase({
  src,
  alt,
  caption,
  aspect,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect: string;
}) {
  return (
    <figure className="my-16 md:my-20">
      <div
        className="relative overflow-hidden rounded-2xl bg-[#1E2A5E]/10"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-ink-muted">{caption}</figcaption>
      )}
    </figure>
  );
}

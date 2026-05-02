import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "e-Hotels — Lama",
  description:
    "A booking experience for boutique stays across North America.",
};

export default function EHotelsCaseStudy() {
  const project = getProject("e-hotels");
  if (!project) return notFound();

  return (
    <CaseStudy
      project={project}
      context="Personal project"
      stack={["Next.js", "TypeScript", "Tailwind", "Figma"]}
    >
      <Hero />
      <Section
        title="The brief"
        body="Most hotel booking flows still feel like airline forms: dense, anxious, accidentally hostile. e-Hotels is a small experiment in what a booking surface could feel like if it were treated as a calm, almost spa-like product. The neumorphic shell, soft sage palette, and tactile controls do the heavy lifting."
      />

      <Section
        title="Auth without friction"
        body="Login and sign-up are split into focused pages with the same neumorphic vocabulary. Soft pill inputs, a single primary action, and gentle background blobs that move the eye toward the form."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Showcase
          src="/artifacts/login.webp"
          alt="e-Hotels login screen"
          caption="Login"
          inline
        />
        <Showcase
          src="/artifacts/signup.png"
          alt="e-Hotels create account screen"
          caption="Create account"
          inline
        />
      </div>

      <Section
        title="Search results, but breathing"
        body="Result cards include just enough information (image, location, rating, capacity, amenities, and price) set inside generous whitespace. Filters are docked to the side behind a single soft container."
      />

      <Showcase
        src="/artifacts/search.webp"
        alt="e-Hotels search results listing San Diego and Alberta hotels with filters"
        caption="Search results with filters"
      />

      <Section
        title="Reflections"
        body="The hardest part wasn't the visual style; it was deciding what to leave out. Every booking site wants to add a banner. The win here was holding the line on quiet."
      />
    </CaseStudy>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#A8C2A4]/15">
      <div className="relative aspect-[16/9]">
        <Image
          src="/artifacts/home.webp"
          alt="e-Hotels hero"
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
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
      <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
        {body}
      </p>
    </section>
  );
}

function Showcase({
  src,
  alt,
  caption,
  inline = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  inline?: boolean;
}) {
  return (
    <figure className={inline ? "" : "my-16 md:my-20"}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#A8C2A4]/15">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

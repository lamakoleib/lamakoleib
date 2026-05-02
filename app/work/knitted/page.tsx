import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import PhoneMockup from "@/components/PhoneMockup";
import { getProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Knitted — Lama",
  description:
    "A social platform for fibre artists to share, discover, and track their knitting and crochet projects.",
};

export default function KnittedCaseStudy() {
  const project = getProject("knitted");
  if (!project) return notFound();

  return (
    <CaseStudy
      project={project}
      context="Capstone project"
      team="Cross-functional team"
      stack={["Next.js", "PostgreSQL", "RabbitMQ", "Figma"]}
      links={[
        { label: "Live demo", href: "https://knitted.vercel.app" },
        { label: "Source code", href: "https://github.com/lamakoleib/knitted" },
      ]}
    >
      <Hero />

      <Section
        title="The brief"
        body="Fibre artists: knitters, crocheters, weavers, have been sharing work on Instagram and Ravelry for years, but neither platform was built for them. Instagram lacks project tracking; Ravelry hasn't had a meaningful redesign in a decade. Knitted is a purpose-built social platform: a feed of finished objects, a project tracker with yarn and needle specs, and a pattern library, all in one."
      />

      <Section
        title="My role"
        body="I managed the full project roadmap for a cross-functional team, overseeing the software development lifecycle from ideation to deployment using Agile. I was the primary point of contact for the client, running biweekly requirement elicitation sessions and translating business needs into technical specs. I also contributed to frontend development in Next.js."
      />

      <Section
        title="Post = project"
        body="The key design insight was that a 'post' in Knitted is also a project record. When you share a photo, you're also logging the yarn type, needle size, pattern, and status. That dual nature means your feed is also your project history; you never have to maintain a separate tracker."
      />

      <PhoneRow
        screens={[
          {
            src: "/artifacts/knitted-projects.png",
            alt: "Share Your Knitting Project form with photo upload and project metadata fields",
            caption: "Create project",
          },
          {
            src: "/artifacts/knitted-settings.png",
            alt: "Knitted sidebar navigation showing Feed, Search, Yarn, Patterns, Notifications, Create Project",
            caption: "Navigation",
          },
        ]}
      />

      <Section
        title="Engineering highlights"
        body="RabbitMQ handles async notifications (new followers, comments, pattern requests) so they don't block the main request cycle. PostgreSQL models the many-to-many relationships between projects, yarn types, and patterns. The Next.js frontend is fully server-rendered for SEO; pattern and profile pages are indexable, which matters for a discovery-driven platform."
      />

      <Section
        title="What I learned"
        body="Running the client relationship and the technical backlog simultaneously is a lot to hold. The biggest lesson: write acceptance criteria before sprint planning, not during. When the client says 'users should be able to discover patterns,' that means ten different things to ten different people. The sessions where we defined done upfront were the ones that shipped cleanly."
      />
    </CaseStudy>
  );
}

/* ——— Hero: three phones on a soft background ——— */
function Hero() {
  return (
    <div className="flex items-end justify-center gap-4 overflow-hidden rounded-3xl bg-[#F5F5F5] px-6 py-10 md:gap-8 md:px-12 md:py-14">
      <PhoneMockup
        src="/artifacts/knitted-feed.png"
        alt="Knitted feed"
        priority
      />
      <PhoneMockup
        src="/artifacts/knitted-post.png"
        alt="Knitted post"
        priority
      />
      <div className="hidden md:block">
        <PhoneMockup
          src="/artifacts/knitted-profile.png"
          alt="Knitted profile"
          priority
        />
      </div>
    </div>
  );
}

/* ——— Row of phone mockups ——— */
function PhoneRow({
  screens,
}: {
  screens: { src: string; alt: string; caption: string }[];
}) {
  return (
    <div className="my-16 flex flex-wrap items-start justify-center gap-6 md:my-20 md:gap-10">
      {screens.map(({ src, alt, caption }) => (
        <PhoneMockup key={src} src={src} alt={alt} caption={caption} />
      ))}
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

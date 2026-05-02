import Image from "next/image";
import ProjectTile from "@/components/ProjectTile";
import { projects } from "@/lib/projects";

/* ——— Custom tile covers for low-res mobile projects ——— */
function KnittedCover() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 overflow-hidden bg-[#faf0ee] px-4 md:gap-5 md:px-8">
      {[
        { src: "/artifacts/knitted-feed.png", alt: "Knitted feed" },
        { src: "/artifacts/knitted-post.png", alt: "Knitted post" },
        { src: "/artifacts/knitted-profile.png", alt: "Knitted profile" },
      ].map(({ src, alt }, i) => (
        <div
          key={src}
          className={`relative shrink-0 overflow-hidden rounded-t-2xl bg-white shadow-lg md:rounded-t-3xl ${i === 2 ? "hidden sm:block" : ""}`}
          style={{ height: "88%", aspectRatio: "9 / 19.5" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 260px, 30vw"
            className="object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

function MealerCover() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#FFF4E6] p-6 md:p-10">
      <div className="relative h-full w-full max-w-[680px]" style={{ aspectRatio: "1070 / 1402" }}>
        <Image
          src="/artifacts/Adobe%20Express%20-%20file.png"
          alt="Six Mealer app screens showing the navigation flow"
          fill
          sizes="(min-width: 1024px) 680px, 85vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

/* Maps slug → custom cover component */
const coverOverrides: Record<string, React.ReactNode> = {
  knitted: <KnittedCover />,
  mealer: <MealerCover />,
};

export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      <section className="pt-20 pb-24 md:pt-32 md:pb-36">
        <p className="text-sm uppercase tracking-[0.2em] text-rose-deep">
          Lama · Software Engineer
        </p>
        <h1 className="serif mt-6 max-w-5xl text-5xl leading-[1.05] tracking-tight text-ink md:text-[88px] md:leading-[1.02]">
          Building quietly{" "}
          <span className="serif-italic text-rose-deep">opinionated</span>{" "}
          software and design — with a soft spot for thoughtful interfaces.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft md:text-xl">
          A small selection of projects I&rsquo;ve shipped over the past few
          years: apps, motion, and the occasional screen-printed surprise.
        </p>
      </section>

      <section className="space-y-24 pb-24 md:space-y-32">
        {projects.map((project, i) => (
          <ProjectTile
            key={project.slug}
            project={project}
            index={i}
            coverOverride={coverOverrides[project.slug]}
          />
        ))}
      </section>
    </div>
  );
}

import Link from "next/link";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  context: string;
  team?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  children: React.ReactNode;
};

export default function CaseStudy({
  project,
  context,
  team,
  stack,
  links,
  children,
}: Props) {
  return (
    <article className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
      <header>
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.18em] text-ink-muted link-underline"
        >
          ← All work
        </Link>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-rose-deep">
              {project.tags.join(" · ")}
            </p>
            <h1 className="serif mt-5 text-5xl leading-[1.05] tracking-tight text-ink md:text-[88px] md:leading-[1.02]">
              {project.title}
            </h1>
            <p className="serif-italic mt-6 max-w-2xl text-2xl text-ink-soft md:text-3xl">
              {project.subtitle}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-y-6 self-end text-sm md:text-[15px]">
            <Meta label="Year" value={project.year} />
            <Meta label="Role" value={project.role} />
            {team && <Meta label="Team" value={team} />}
            <Meta label="Context" value={context} />
            <Meta label="Stack" value={stack.join(", ")} />
            {links && links.length > 0 && (
              <div className="col-span-2">
                <div className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                  Links
                </div>
                <ul className="mt-2 space-y-1 text-ink">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="link-underline"
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                      >
                        {l.label} ↗
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </dl>
        </div>
      </header>

      <div className="mt-16 md:mt-24">{children}</div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </dt>
      <dd className="mt-2 text-ink">{value}</dd>
    </div>
  );
}

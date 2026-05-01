"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index: number;
  coverOverride?: React.ReactNode;
};

export default function ProjectTile({ project, index, coverOverride }: Props) {
  const isWide = project.cover.aspect === "16 / 9";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="group"
    >
      <Link
        href={`/work/${project.slug}`}
        className="block"
        aria-label={`Open case study: ${project.title}`}
      >
        {coverOverride ? (
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              aspectRatio: project.cover.aspect,
              backgroundColor: project.accent + "22",
            }}
          >
            {coverOverride}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
          </div>
        ) : (
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              aspectRatio: project.cover.aspect,
              backgroundColor: project.accent + "22",
            }}
          >
            {project.cover.type === "image" ? (
              <Image
                src={project.cover.src}
                alt={project.cover.alt ?? project.title}
                fill
                priority={index < 2}
                sizes={isWide ? "(min-width: 1024px) 80vw, 100vw" : "(min-width: 1024px) 60vw, 100vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <video
                src={project.cover.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            )}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
          </div>
        )}
        <div className="mt-5 flex items-baseline justify-between gap-6">
          <div>
            <h2 className="serif text-3xl tracking-tight text-ink md:text-[40px]">
              {project.title}
            </h2>
            <p className="mt-1 max-w-xl text-ink-soft md:text-lg">
              {project.subtitle}
            </p>
          </div>
          <div className="hidden shrink-0 text-right text-xs uppercase tracking-[0.18em] text-ink-muted md:block">
            <div>{project.tags.join(" · ")}</div>
            <div className="mt-1">{project.year}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

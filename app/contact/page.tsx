import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Lama",
  description: "Get in touch with Lama Koleib.",
};

export default function Contact() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[1100px] flex-col justify-center px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
      <p className="text-sm uppercase tracking-[0.2em] text-rose-deep">
        Contact
      </p>
      <h1 className="serif mt-6 text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
        Say <span className="serif-italic text-rose-deep">hello</span>.
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-ink-soft md:text-xl">
        I&rsquo;m always up for a conversation about thoughtful product work,
        design-engineering, or anything in between. The fastest way to reach
        me is email.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <ContactCard
          label="Email"
          value="lkoleib11@gmail.com"
          href="mailto:lkoleib11@gmail.com"
        />
        <ContactCard
          label="LinkedIn"
          value="linkedin.com/in/lamakoleib"
          href="https://linkedin.com/in/lamakoleib/"
        />
        <ContactCard
          label="GitHub"
          value="github.com/lamakoleib"
          href="https://github.com/lamakoleib"
        />
      </div>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="overflow-hidden rounded-2xl bg-blush/40 p-8 transition-colors hover:bg-blush/70">
      <div className="text-xs uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </div>
      <div className="serif mt-3 truncate text-xl text-ink md:text-2xl">{value}</div>
    </div>
  );
  return href ? (
    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined}>
      {inner}
    </Link>
  ) : (
    inner
  );
}

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t hairline">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-12 text-sm md:flex-row md:items-end md:justify-between md:px-10">
        <div className="space-y-2">
          <p className="serif-italic text-2xl text-ink md:text-3xl">
            Let&rsquo;s make something.
          </p>
          <Link
            href="mailto:lkoleib11@gmail.com"
            className="link-underline text-ink-soft"
          >
            lkoleib11@gmail.com
          </Link>
        </div>
        <div className="flex items-center gap-6 text-ink-muted">
          <Link href="/about" className="link-underline">
            About
          </Link>
          <Link href="/contact" className="link-underline">
            Contact
          </Link>
          <span>© {year} Lama</span>
        </div>
      </div>
    </footer>
  );
}

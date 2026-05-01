import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="serif-italic text-xl tracking-tight text-ink md:text-2xl"
          aria-label="Lama — Home"
        >
          Lama
          <span className="text-rose-deep">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm md:gap-10 md:text-[15px]">
          <Link href="/" className="link-underline">
            Work
          </Link>
          <Link href="/about" className="link-underline">
            About
          </Link>
          <Link href="/contact" className="link-underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

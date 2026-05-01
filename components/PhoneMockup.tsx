import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
};

/**
 * Renders a screenshot inside a stylised phone bezel.
 * The bezel is pure CSS so it scales with the container — no extra images needed.
 * The inner screenshot uses aspect-ratio 9/19.5 (standard modern phone).
 */
export default function PhoneMockup({
  src,
  alt,
  priority = false,
  caption,
}: Props) {
  return (
    <figure className="flex flex-col items-center">
      <div className="phone-bezel">
        <div className="phone-screen">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 280px, (min-width: 768px) 220px, 200px"
            className="object-cover object-top"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

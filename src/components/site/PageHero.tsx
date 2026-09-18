import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import type { ImageAsset, SiteRoute } from "@/data/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: ImageAsset;
  cta?: { label: string; to: SiteRoute };
};

export function PageHero({ eyebrow, title, text, image, cta }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[68svh] overflow-hidden bg-primary text-primary-foreground">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-photo-gradient" />
      <div className="absolute inset-0 -z-10 bg-primary/26" />
      <div className="mx-auto flex min-h-[68svh] max-w-7xl flex-col justify-end px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl reveal-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/78">
            {eyebrow}
          </p>
          <h1 className="font-display text-6xl leading-[0.9] md:text-8xl lg:text-9xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/86 md:text-xl">
            {text}
          </p>
          {cta ? (
            <Button asChild variant="inverse" size="lg" className="mt-9">
              <Link to={cta.to}>{cta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

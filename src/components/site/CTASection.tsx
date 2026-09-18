import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ImageAsset, SiteRoute } from "@/data/site";

type CTASectionProps = {
  title: string;
  text: string;
  primary: { label: string; to: SiteRoute };
  secondary?: { label: string; to: SiteRoute };
  image?: ImageAsset;
};

export function CTASection({ title, text, primary, secondary, image }: CTASectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10 lg:py-28">
        <div className="reveal-up max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/64">
            Kennismaken
          </p>
          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">{title}</h2>
          <p className="mt-7 text-lg leading-8 text-primary-foreground/78">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="warm" size="xl">
              <Link to={primary.to}>
                {primary.label} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            {secondary ? (
              <Button asChild variant="inverse" size="xl">
                <Link to={secondary.to}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        {image ? (
          <div className="min-h-[320px] overflow-hidden rounded-md shadow-premium lg:min-h-[440px]">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

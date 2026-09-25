import { MapPin } from "lucide-react";

import type { projects } from "@/data/site";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasBeforeAfter =
    "before" in project && project.before !== undefined && project.after !== undefined;

  return (
    <article className="grid gap-8 rounded-md border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium lg:grid-cols-[1.1fr_0.9fr] lg:p-5">
      {hasBeforeAfter ? (
        <BeforeAfterSlider before={project.before} after={project.after} />
      ) : (
        <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-col justify-between p-3 lg:p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-earth">
            {project.number}
          </p>
          <h3 className="mt-4 font-display text-4xl leading-none text-foreground md:text-5xl">
            {project.title}
          </h3>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1 text-secondary-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {project.location}
            </span>
            <span className="rounded-md bg-secondary px-3 py-1 text-secondary-foreground">
              Status: {project.status}
            </span>
            <span className="rounded-md bg-secondary px-3 py-1 text-secondary-foreground">
              Budget: {project.budget}
            </span>
          </div>
          <p className="mt-6 leading-7 text-muted-foreground">{project.description}</p>
        </div>
        <p className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
          Deze casus is fictief en bedoeld om de toekomstige projectpresentatie te laten zien.
        </p>
      </div>
    </article>
  );
}

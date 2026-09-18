import type { team } from "@/data/site";

type TeamMember = (typeof team)[number];

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="grid overflow-hidden rounded-md border border-border bg-card shadow-soft md:grid-cols-[0.86fr_1fr]">
      <div className="aspect-[4/5] bg-muted md:aspect-auto">
        <img
          src={member.image.src}
          alt={member.image.alt}
          width={member.image.width}
          height={member.image.height}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-earth">{member.region}</p>
        <h3 className="mt-4 font-display text-5xl leading-none text-foreground">{member.name}</h3>
        <p className="mt-5 leading-7 text-muted-foreground">{member.text}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {member.focus.map((item) => (
            <span key={item} className="rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

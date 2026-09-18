import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "reveal-up max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-earth">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-5xl leading-[0.95] text-foreground md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {children ? <div className="mt-6 text-lg leading-8 text-muted-foreground">{children}</div> : null}
    </div>
  );
}

import type { processSteps } from "@/data/site";

type Step = (typeof processSteps)[number];

export function ProcessStep({ step }: { step: Step }) {
  return (
    <article className="relative border-l border-border pl-7 md:border-l-0 md:border-t md:pl-0 md:pt-7">
      <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground md:-top-3 md:left-0">
        {step.number}
      </span>
      <h3 className="font-display text-3xl leading-none text-foreground">{step.title}</h3>
      <p className="mt-4 leading-7 text-muted-foreground">{step.text}</p>
    </article>
  );
}

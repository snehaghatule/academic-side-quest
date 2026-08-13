import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  index,
  label,
  title,
  description,
  descriptionClassName = "",
  className = "",
}: {
  index?: string;
  label: string;
  title: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
}) {
  return (
    <Reveal>
      <div className={className}>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {index ? <span className="label label-large text-ember">{index} /</span> : null}
          <span className="label label-large text-mist">{label}</span>
        </div>
        <h2 className="display mt-5 max-w-4xl text-balance text-4xl font-bold uppercase leading-[1.02] tracking-[-0.02em] text-ember sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${descriptionClassName ? "" : "text-mist"} ${descriptionClassName}`}>
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

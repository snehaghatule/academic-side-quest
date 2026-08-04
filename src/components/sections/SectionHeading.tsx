import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  index,
  label,
  title,
  description,
  className = "",
}: {
  index?: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal>
      <div className={className}>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {index ? <span className="label text-ember">{index} /</span> : null}
          <span className="label text-mist">{label}</span>
        </div>
        <h2 className="display mt-5 max-w-4xl text-balance text-4xl font-bold uppercase leading-[1.02] tracking-[-0.02em] text-ember sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

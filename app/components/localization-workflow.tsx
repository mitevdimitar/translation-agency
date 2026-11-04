const stages = [
  { title: "Prepare", description: "Content analysis and project setup" },
  { title: "Localize", description: "Translation and cultural adaptation" },
  { title: "Review", description: "Linguistic checks and consistency" },
  { title: "Deliver", description: "Organized multilingual output" },
] as const;

export default function LocalizationWorkflow() {
  return (
    <figure className="min-w-0 rounded-2xl border border-workflow-border bg-workflow-panel p-5 sm:p-8 xl:p-10">
      <figcaption className="flex items-center justify-between gap-4 border-b border-workflow-border pb-6">
        <span className="text-xs font-medium uppercase leading-5 tracking-[0.16em] text-technology-secondary">
          Localization workflow
        </span>
        <span aria-hidden="true" className="flex shrink-0 items-center gap-1.5">
          <span className="h-1 w-6 bg-teal-accent" />
          <span className="h-1 w-3 bg-secondary-accent" />
          <span className="size-1 bg-technology-secondary" />
        </span>
      </figcaption>
      <ol className="mt-8 sm:mt-10">
        {stages.map(({ title, description }, index) => (
          <li key={title} className="relative flex gap-4 pb-10 last:pb-0 sm:gap-6 sm:pb-12">
            {index < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-5 top-10 w-px bg-workflow-border sm:left-6 sm:top-12"
              >
                <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 rotate-45 border-b border-r border-technology-secondary" />
              </span>
            )}
            <span
              aria-hidden="true"
              className={`relative flex size-10 shrink-0 items-center justify-center rounded-lg border bg-workflow-panel font-mono text-sm sm:size-12 ${
                index === 0 || index === stages.length - 1
                  ? "border-teal-accent/50 text-teal-accent"
                  : "border-secondary-accent/50 text-secondary-accent"
              }`}
            >
              0{index + 1}
            </span>
            <div className="min-w-0 pt-1 sm:pt-2">
              <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-2 text-base leading-7 text-technology-secondary">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className="mt-8 flex items-center gap-3 border-t border-workflow-border pt-5 sm:mt-10">
        <span className="size-1.5 bg-teal-accent" />
        <span className="h-px flex-1 bg-workflow-border" />
        <span className="h-2 w-px bg-secondary-accent" />
        <span className="h-2 w-px bg-secondary-accent" />
        <span className="h-2 w-px bg-secondary-accent" />
      </div>
    </figure>
  );
}

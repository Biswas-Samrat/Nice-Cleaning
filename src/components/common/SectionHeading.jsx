export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className = "",
  light = false,
}) {
  const alignClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="mb-5 inline-flex items-center gap-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" />
          <span>{eyebrow}</span>
          <span className="h-px w-8 bg-brand-teal" />
        </div>
      )}

      <h2
        className={`
          font-display
          text-3xl
          font-semibold
          leading-[1.08]
          tracking-[-0.035em]
          ${light ? "text-white" : "text-neutral-900"}
          sm:text-4xl
          lg:text-[3.2rem]
        `}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={`
            mt-5
            max-w-2xl
            font-sans
            text-[15px]
            leading-7
            text-neutral-500
            sm:text-base
            sm:leading-8
            ${align === "center" ? "mx-auto" : ""}
          `}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

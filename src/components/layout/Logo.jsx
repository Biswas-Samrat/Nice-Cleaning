export default function Logo({ size = "md", light = false }) {
  const heightClass =
    {
      sm: "h-8 sm:h-9",
      md: "h-10 sm:h-12",
      lg: "h-14 sm:h-16",
    }[size] || "h-10 sm:h-12";

  return (
    <div
      className={`flex items-center gap-2.5 ${light ? "text-white" : "text-dark"}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-pink/40 bg-white text-brand-pink shadow-sm">
        <span className="font-script text-2xl leading-none">S</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-script text-2xl sm:text-3xl leading-none">
          Sparkle
        </span>
        <span className="font-sans text-[10px] font-semibold tracking-[0.28em] uppercase text-current/80">
          & Clean
        </span>
      </div>
    </div>
  );
}

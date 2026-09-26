import ImageComparison from './ImageComparison'

export default function WorkCard({ comparison }) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-[#f1d9de] bg-white p-2 shadow-[0_10px_35px_rgba(181,109,121,0.07)] flex flex-col justify-between">
      <ImageComparison
        before={comparison.before}
        after={comparison.after}
        beforeAlt={comparison.beforeAlt}
        afterAlt={comparison.afterAlt}
      />

      <div className="px-4 pb-4 pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#c47784] font-sans">
          {comparison.category}
        </p>

        <div className="mt-1 flex items-center justify-between gap-4">
          <h3 className="text-base font-medium text-[#34272b] font-display">
            {comparison.title}
          </h3>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff1f3] text-[#c47784] font-sans font-bold">
            ↔
          </span>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-[#75676b] font-sans">
          Drag the slider to compare the transformation.
        </p>
      </div>
    </article>
  )
}

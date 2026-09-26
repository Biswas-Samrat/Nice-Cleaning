import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services, serviceIcons } from "../../data/services";
import SectionHeading from "../common/SectionHeading";

export default function ServicesPreview() {
  const previewServices = services.slice(0, 5);

  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-32"
      aria-label="Services preview"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Offer"
            heading="Cleaning services designed around your needs."
            subheading="From regular home cleaning to specialist jobs, every service is carried out with care, attention to detail and a professional finish."
            align="left"
          />

          <Link
            to="/services"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2.5
              rounded-full
              border
              border-pink-100
              bg-pink-50
              px-5
              py-3
              font-sans
              text-sm
              font-semibold
              text-pink-600
              transition-all
              duration-300
              hover:border-pink-200
              hover:bg-pink-100
              hover:text-pink-700
            "
          >
            View all services
            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {previewServices.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            const isFeatured = index === 0;
            const isLarge = index >= 3;

            const gridClass = isFeatured
              ? "lg:col-span-6"
              : isLarge
                ? "lg:col-span-6"
                : "lg:col-span-3";

            return (
              <Link
                key={service.id}
                to="/services"
                className={`
                  group
                  relative
                  flex
                  min-h-[520px]
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-neutral-200/80
                  bg-white
                  shadow-[0_8px_35px_rgba(236,72,153,0.04)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-pink-200
                  hover:shadow-[0_20px_50px_rgba(236,72,153,0.10)]
                  ${gridClass}
                `}
              >
                {/* Image */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    bg-pink-50
                    ${isFeatured || isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}
                  `}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.045]
                    "
                    loading="lazy"
                  />

                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5">
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/30
                        bg-white/90
                        px-3
                        py-1.5
                        backdrop-blur-md
                      "
                    >
                      <span className="text-[10px] font-bold tracking-[0.16em] text-neutral-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-3 w-px bg-neutral-300" />

                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                        Service
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        bg-pink-50
                        text-pink-500
                        ring-1
                        ring-inset
                        ring-pink-100
                        transition-all
                        duration-300
                        group-hover:bg-pink-100
                        group-hover:text-pink-600
                      "
                    >
                      {Icon && (
                        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                      )}
                    </div>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-pink-400
                      "
                    >
                      Sparkle & Clean
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      font-display
                      font-semibold
                      leading-[1.1]
                      tracking-[-0.025em]
                      text-neutral-900
                      ${
                        isFeatured || isLarge
                          ? "text-2xl sm:text-[1.8rem]"
                          : "text-xl"
                      }
                    `}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-neutral-500">
                    {service.shortDescription}
                  </p>

                  {/* Bottom area */}
                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between border-t border-neutral-100 pt-5">
                      <div className="flex flex-col">
                        <span className="font-sans text-xs font-semibold text-neutral-800">
                          {service.price}
                        </span>

                        {service.priceNote && (
                          <span className="mt-1 font-sans text-[11px] text-neutral-400">
                            {service.priceNote}
                          </span>
                        )}
                      </div>

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-pink-50
                          text-pink-500
                          transition-all
                          duration-300
                          group-hover:bg-pink-500
                          group-hover:text-white
                        "
                      >
                        <ArrowUpRight
                          size={17}
                          strokeWidth={2}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

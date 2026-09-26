// import { Link } from "react-router-dom";
// import {
//   Home,
//   Sparkles,
//   Car,
//   Key,
//   ShieldCheck,
//   ArrowRight,
// } from "lucide-react";

// export default function HeroSection() {
//   const waMessage = encodeURIComponent(
//     "Hi Sparkle & Clean, I'd like to request a cleaning service.",
//   );

//   return (
//     <section
//       className="bg-[#F7F3EC] pt-4 sm:pt-6 lg:pt-5 pb-6 sm:pb-8 lg:pb-8 overflow-hidden"
//       aria-label="Hero"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-18">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
//           {/* Mobile Order 1 / Desktop Order 2: Hero Photo FIRST on Mobile */}
//           <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end">
//             <img
//               src="/new%20hero%20photo.png"
//               alt="Sparkle & Clean home cleaning services - Hero"
//               className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-md xl:max-w-lg lg:max-h-[380px] object-contain"
//             />
//           </div>

//           {/* Mobile Order 2 / Desktop Order 1: Text & Actions SECOND on Mobile */}
//           <div className="order-2 lg:order-1 lg:col-span-6 space-y-3.5 sm:space-y-4 lg:space-y-4 text-center lg:text-left">
//             {/* Top Pill / Badge */}
//             <div className="inline-flex items-center gap-2 bg-[#EFE7DA] border border-[#E2D6C3] px-3.5 py-1 rounded-full text-xs sm:text-sm font-sans text-charcoal/80 shadow-xs mx-auto lg:mx-0">
//               <svg
//                 className="w-3.5 h-3.5 text-charcoal"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
//               </svg>
//               <span>Fast and efficient service</span>
//             </div>

//             {/* Headline */}
//             <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-charcoal leading-[1.12] tracking-tight">
//               Your Trusted <br className="hidden sm:inline" />
//               Partner for Home <br className="hidden sm:inline" />
//               <span className="relative inline-block font-script font-normal text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-charcoal mt-0.5">
//                 Clean Solutions
//                 {/* Floating sparkles around Clean Solutions */}
//                 <span className="absolute -top-2 -right-5 text-charcoal/70 text-base sm:text-lg select-none">
//                   ✦
//                 </span>
//                 <span className="absolute -bottom-1 -right-8 text-charcoal/50 text-xs sm:text-sm select-none">
//                   ✦
//                 </span>
//                 {/* Curved underline flourish */}
//                 <svg
//                   className="absolute -bottom-2 left-0 w-full h-2.5 text-charcoal/80"
//                   viewBox="0 0 200 12"
//                   fill="none"
//                   preserveAspectRatio="none"
//                 >
//                   <path
//                     d="M2 9C50 3 150 3 198 8"
//                     stroke="currentColor"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//             </h1>

//             {/* Subheading */}
//             <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
//               We take pride in our attention to detail and commitment to
//               customer satisfaction.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-0.5">
//               <div className="flex items-center gap-2.5">
//                 <a
//                   href={`https://wa.me/447715533186?text=${waMessage}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center rounded-full bg-[#25D366] p-2.5 text-white shadow-sm transition-colors hover:bg-[#1fb75d]"
//                   aria-label="WhatsApp us"
//                 >
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white"
//                   >
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                   </svg>
//                 </a>

//                 <Link
//                   to="/request-quote"
//                   className="inline-flex items-center gap-2.5 bg-[#343A3A] hover:bg-[#232828] text-white rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-sans font-medium transition-colors shadow-sm group"
//                 >
//                   <span>Request Service</span>
//                   <ArrowRight
//                     size={15}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </Link>
//               </div>

//               {/* Secondary CTA: Underlined Discover More */}
//               <Link
//                 to="/services"
//                 className="inline-flex items-center gap-1.5 text-charcoal font-sans font-medium text-xs sm:text-sm hover:text-charcoal-dark border-b border-charcoal/40 hover:border-charcoal pb-0.5 transition-colors group"
//               >
//                 <span>Discover More</span>
//                 <ArrowRight
//                   size={13}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const waMessage = encodeURIComponent(
    "Hi Sparkle & Clean, I'd like to request a cleaning service.",
  );

  return (
    <section
      className="bg-[#F7F3EC] pt-10 sm:pt-6 lg:pt-5 pb-6 sm:pb-8 lg:pb-8 overflow-hidden"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Mobile Order 1 / Desktop Order 2: Hero Photo FIRST on Mobile */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end">
            <img
              src="/new%20hero%20photo.png"
              alt="Sparkle & Clean home cleaning services - Hero"
              className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-md xl:max-w-lg lg:max-h-[380px] object-contain"
            />
          </div>

          {/* Mobile Order 2 / Desktop Order 1: Text & Actions SECOND on Mobile */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-3.5 sm:space-y-4 lg:space-y-4 text-center lg:text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EFE7DA] border border-[#E2D6C3] px-3.5 py-1 rounded-full text-xs sm:text-sm font-sans text-charcoal/80 shadow-xs mx-auto lg:mx-0">
              <svg
                className="w-3.5 h-3.5 text-charcoal"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>

              <span>Fast and efficient service</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-charcoal leading-[1.12] tracking-tight max-sm:mb-2">
              Your Trusted <br className="hidden sm:inline" />
              Partner for Home <br className="hidden sm:inline" />
              <span className="relative inline-block font-script font-normal text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-charcoal mt-0.5">
                Clean Solutions
                {/* Floating sparkles */}
                <span className="absolute -top-2 -right-5 text-charcoal/70 text-base sm:text-lg select-none">
                  ✦
                </span>
                <span className="absolute -bottom-1 -right-8 text-charcoal/50 text-xs sm:text-sm select-none">
                  ✦
                </span>
                {/* Curved underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-charcoal/80"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 198 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
              We take pride in our attention to detail and commitment to
              customer satisfaction.
            </p>

            {/* Action Buttons */}
            <div
              className="
                flex flex-col items-center justify-center
                gap-4 pt-4
                sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-0
                lg:justify-start
              "
            >
              {/* Request Service + WhatsApp */}
              <div className="flex items-center gap-2.5">
                {/* WhatsApp Button - Hidden on Mobile */}
                <a
                  href={`https://wa.me/447715533186?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#25D366] p-2.5 text-white shadow-sm transition-colors hover:bg-[#1fb75d]"
                  aria-label="WhatsApp us"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>

                {/* Request Service */}
                <Link
                  to="/request-quote"
                  className="
                    inline-flex items-center gap-2.5
                    bg-[#D88F9B] hover:bg-[#C97D89]
                    text-white
                    rounded-full
                    px-5 sm:px-6 py-2.5
                    text-xs sm:text-sm
                    font-sans font-medium
                    transition-all duration-200
                    shadow-sm
                    group
                  "
                >
                  <span>Request Service</span>

                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Discover More */}
              <Link
                to="/services"
                className="
                  inline-flex items-center gap-1.5
                  bg-[#EBC1C8] hover:bg-[#DFB0B9]
                  text-charcoal
                  border border-[#D9A8B1]
                  rounded-full
                  px-5 py-2.5
                  font-sans font-medium text-xs sm:text-sm
                  shadow-sm
                  transition-all duration-200
                  group
                "
              >
                <span>Discover More</span>

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

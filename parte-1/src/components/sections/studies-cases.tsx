import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { Heading } from "../ui/heading";
import { Link } from "../ui/link";

export function StudiesCases() {
  return (
    <div className="flex flex-col">
            <div className="flex flex-col items-center gap-6 pt-20 pb-20 md:flex-row md:items-center md:gap-10 lg:pt-35">
        <Heading fontSize="text-h2" fontWeight="font-medium">
          Case Studies
        </Heading>
        <p className="max-w-130 text-center md:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="w-full">

        {/* MOBILE */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.3 },
            }}
          >

            <SwiperSlide className="h-full">
              <div className="flex flex-col justify-between gap-5 bg-dark rounded-[45px] px-6 py-8 h-65 sm:h-70">
                <p className="text-white text-p leading-[130%]">
                  For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                </p>
                <Link variant="text-green" href="#">Learn more</Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <div className="flex flex-col justify-between gap-5 bg-dark rounded-[45px] px-6 py-8 h-65 sm:h-70">
                <p className="text-white text-p leading-[130%]">
                  For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                </p>
                <Link variant="text-green" href="#">Learn more</Link>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-full">
              <div className="flex flex-col justify-between gap-5 bg-dark rounded-[45px] px-6 py-8 h-65 sm:h-70">
                <p className="text-white text-p leading-[130%]">
                  For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                </p>
                <Link variant="text-green" href="#">Learn more</Link>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-full h-81.5 gap-16 bg-dark rounded-[45px] px-15 py-17.5 transition-smooth">
          
          <div className="flex flex-col gap-5 justify-between flex-1 max-w-71.5">
            <p className="text-white text-p leading-[100%]">
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <Link variant="text-green" href="#">Learn more</Link>
          </div>

          <div className="w-px bg-grey"></div>

          <div className="flex flex-col gap-5 justify-between flex-1 max-w-71.5">
            <p className="text-white text-p leading-[100%]">
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <Link variant="text-green" href="#">Learn more</Link>
          </div>

          <div className="w-px bg-grey"></div>

          <div className="flex flex-col gap-5 justify-between flex-1 max-w-71.5">
            <p className="text-white text-p leading-[100%]">
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>
            <Link variant="text-green" href="#">Learn more</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
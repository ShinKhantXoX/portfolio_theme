import React from "react";
import { useSwiper } from "swiper/react";
import { FcNext, FcPrevious } from "react-icons/fc";

const SwiperNavBtn = () => {
  const swiper = useSwiper();

  return (
    <div>
      <div className=" flex justify-center mt-5 gap-10">
        <button
          className=" next&prev border-2 rounded-full px-2 transition hover:border-[#72e2ae] py-2"
          onClick={() => swiper.slidePrev()}
        >
          <FcPrevious className="text-white hover:text-[#72e2ae]" />
        </button>
        <button
          className=" next&prev border-2 rounded-full px-2 transition hover:border-[#72e2ae] py-2"
          onClick={() => swiper.slideNext()}
        >
          <FcNext className="text-white hover:text-[#72e2ae]" />
        </button>
      </div>
    </div>
  );
};

export default SwiperNavBtn;

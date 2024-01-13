import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
// import Styles from "./caraousel.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "react-slick";

const CustomCaraousel = (props) => {
  const { data, rootUrl } = props;
  console.log(data, rootUrl);
  useEffect(() => {
    setTimeout(() => {
      elements.forEach((element) => {
        element.style.display = "flex";
      });
    }, 2000);
    // Find the elements with the specified class name
    const elements = document.querySelectorAll(".swiper-wrapper");
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Pagination, Navigation]}
    >
      {data?.map((item, idx) => (
        <SwiperSlide>
          <Image
            src={`${rootUrl}/${item?.ratio2}`}
            alt=""
            width={1000}
            height={1000}
            style={{ width: "100vw", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomCaraousel;

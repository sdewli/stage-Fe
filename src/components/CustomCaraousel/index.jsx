import Image from "next/image";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CustomCaraousel = (props) => {
  const { data, rootUrl, deviceType } = props;
  const imgName = useMemo(()=>{
    if (deviceType === 'mobile'){
      return 'ratio1'
    }else if( deviceType === 'tablet'){
      return 'ratio2'
    }else{
      return 'ratio3'
    }
  },[deviceType]) 
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.map((item, idx) => {
        const imgUrl = `${rootUrl}/${item[imgName]}` 
        return (
          <SwiperSlide key={`slide_${idx}`}>
            <Image
              src={imgUrl}
              alt=""
              width={1000}
              height={1000}
              style={{ width: "100vw", height: "250px" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CustomCaraousel;

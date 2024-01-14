import Image from "next/image";
import React, { useMemo } from "react";
import Styles from "./card.module.css";

const CustomCard = (props) => {
  const { data, rootUrl, deviceType } = props;
  const imgUrl = useMemo(()=>{
    if(deviceType === 'mobile'){
       return `${rootUrl?.vertical}/${data?.vertical}`
    }else{
       return `${rootUrl?.horizontal}/${data?.horizontal}`
    }
  },[deviceType])
  return (
    <div className={Styles.card}>
      <Image
        src={imgUrl}
        alt=""
        width={500}
        height={500}
      />
    </div>
  );
};

export default CustomCard;

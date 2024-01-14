"use client";

import Caraousel from "@src/components/CustomCaraousel";
import CustomCard from "@src/components/CustomCard";
import { getCaraouselData, getRowData} from "@src/service/api";
import useEffectOnce from "@src/utils/CustomHooks/useEffectOnce";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Styles from "./homepage.module.css";

const Homepage = () => {
  const [caraouselData, setCaraouselData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [rootUrl, setrootUrl] = useState("");
  const [rowRootUrl, setRowRootUrl] = useState(null);
  const [deviceType, setDeviceType] = useState("");
  const router = useRouter();
 
  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;

      if (innerWidth < 600) {
        setDeviceType("mobile");
      } else if (innerWidth >= 600 && innerWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffectOnce(() => {
  
    getCaraouselData().then((res) => {
      if (res.success) {
        setCaraouselData(res.data.carousel);
        setrootUrl(res.data.rootUrl);
      }
    });
    getRowData().then((res) => {
      if (res.success) {
        setRowData(res.data.rowData);
        setRowRootUrl({
          horizontal: res.data.rootUrlHorizontal,
          vertical: res.data.rootUrlVertical,
        });
      }
    });
  });

  const handleCardClick =()=>{
    router.push('/Videopage')
  }
  return (
    <main>
      {/* Caraousel  */}
      {caraouselData?.length > 0 && (
        <Caraousel
          data={caraouselData}
          rootUrl={rootUrl}
          deviceType={deviceType}
        />
      )}
      {/* Row */}
      <div className={Styles.rowData}>
        <p>Top 20 in haryana</p>

        {rowData?.length && (
          <div className={Styles.cards_container}>
            {rowData?.map((element, idx) => (
              <div className={Styles.rank_card} key={`card_${idx}`} onClick={handleCardClick}>
                <CustomCard
                  data={element}
                  rootUrl={rowRootUrl}
                  deviceType={deviceType}
                />
                <p className={Styles?.ranking}>{idx + 1}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <p>VIP Shows</p>

        {rowData?.length && (
          <div className={Styles.cards_container}>
            {rowData.reverse()?.map((element, idx) => (
              <CustomCard
                data={element}
                rootUrl={rowRootUrl}
                key={`card_${idx}`}
                deviceType={deviceType}
              />
            ))}
          </div>
        )}
      </div>
      
    </main>
  );
};

export default Homepage;

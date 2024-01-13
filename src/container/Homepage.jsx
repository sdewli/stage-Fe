"use client";

import Caraousel from "@src/components/CustomCaraousel";
import { getCaraouselData, getRowData } from "@src/service/api";
import useEffectOnce from "@src/utils/CustomHooks/useEffectOnce";
import React, { useState } from "react";

const Homepage = () => {
  const [caraouselData, setCaraouselData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [rootUrl, setrootUrl] = useState("");
  const [rowRootUrl, setRowRootUrl] = useState(null);

  useEffectOnce(() => {
    getCaraouselData().then((res) => {
      if (res.success) {
        setCaraouselData(res.data.carousel);
        setrootUrl(res.data.rootUrl);
      }
      console.log("response", res);
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

  return (
    <main>
      {/* Caraousel  */}
      {caraouselData?.length > 0 && (
        <Caraousel data={caraouselData} rootUrl={rootUrl} />
      )}
      {/* Row */}
      <div>
        <p>Top 20 in haryana</p>
      </div>
    </main>
  );
};

export default Homepage;

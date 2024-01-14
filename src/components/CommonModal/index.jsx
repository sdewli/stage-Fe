import React, { useState } from "react";
import Styles from "./modal.module.css";
import Image from "next/image";

import stageLogo from "@src/assets/_images/stage_logo.png";
const CommonModal = (props) => {
  const { showModal, handleClose, children } = props;
  return (
    <>
      {showModal && (
        <div className={Styles.modal_overlay}>
          <div className={Styles.modal}>
            <div className={Styles.heading}>
              <Image
                src={stageLogo}
                alt=""
                width={400}
                height={400}
                className={Styles.logom}
              />
              <p className="">STAGE</p>
            </div>
            <p>Choose your Language</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonModal;

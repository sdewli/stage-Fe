import React, { useState } from "react";
import Styles from "./modal.module.css";
import Image from "next/image";

import stageLogo from "@src/assets/_images/stage_logo.png";
const CommonModal = (props) => {
  const { showModal, handleClose, selectedLanguage,setSelectedLanguage } = props;


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleSubmmit=()=>{
    handleClose();
  }
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
            <div className={Styles.radio}>
              <label>
                <input
                  type="radio"
                  value="Rajasthani"
                  checked={selectedLanguage === "Rajasthani"}
                  onChange={handleLanguageChange}
                />
                Rajasthani
              </label>
              <label>
                <input
                  type="radio"
                  value="Haryanvi"
                  checked={selectedLanguage === "Haryanvi"}
                  onChange={handleLanguageChange}
                />
                Haryanvi
              </label>
            </div>
            <div>
              <button
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  background: "red",
                  fontSize: "20px",
                  padding: "5px 20px",
                  cursor: "pointer",
                }}
                onClick={handleSubmmit}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonModal;

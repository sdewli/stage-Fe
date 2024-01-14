"use client";

import React, { useState } from "react";
import Image from "next/image";
import Styles from "./header.module.css";
import { useRouter } from 'next/navigation'
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import stageLogo from "@src/assets/_images/stage_logo.png";
import CommonModal from "../CommonModal";

const Header = () => {
  const router = useRouter();
  const [showModal, toggleModal] = useState(true);
  const handleClose = () => {
    toggleModal(false);
  };
  const handleLogoClick =()=>{
    router.push('/')
  }
  return (
    <header className={Styles.header}>
      <div className={Styles.logo_section} onClick={handleLogoClick}>
        <Image
          src={stageLogo}
          alt=""
          width={400}
          height={400}
          className={Styles.logo}
        />
        <p className="">STAGE</p>
      </div>

      <div className={Styles.right_section}>
        <button
          className={Styles.dialect_btn}
          onClick={() => toggleModal(true)}
        >
          <p>Haryanvi</p>
          <IoIosArrowDown />
        </button>
        <IoSearch />
      </div>
      {/* <CommonModal
        showModal={showModal}
        handleClose={handleClose}
      ></CommonModal> */}
    </header>
  );
};

export default Header;

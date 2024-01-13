'use client';

import React, { useState } from "react";
import Image from "next/image";
import Styles from "./header.module.css";

import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Modal } from "react-bootstrap";

import stageLogo from "@src/assets/_images/stage_logo.png";
import CommonModal from "../CommonModal";

const Header = () => {
    const [showModal,toggleModal] = useState(false)
  return (
    <header className={Styles.header}>
    <CommonModal>

    </CommonModal>
      <div className={Styles.logo_section}>
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
        <button className={Styles.dialect_btn} onClick={()=>toggleModal(true)}>
          <p>Haryanvi</p>
          <IoIosArrowDown />
        </button>
        <IoSearch />
      </div>
    </header>
  );
};

export default Header;

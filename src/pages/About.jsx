import React from 'react';
import img from "../assets/images/con1.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t,] = useTranslation();
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-screen-lg w-full px-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mb-6 lg:mb-0">
          <img src={img} className="max-w-full lg:max-w-md rounded-lg shadow-2xl" alt="Building" />
        </div>
        <div className="w-full lg:w-1/2 px-6">
          <h1 className="text-5xl font-bold mb-6  text-black text-center lg:text-left">{t("title")}</h1>
          <p className="mb-6 text-center text-black lg:text-left">{t("description")}</p>
          <div className="text-center lg:text-left">
            <button className="btn btn-primary">{t("read_more")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

"use client";

import Image from "next/image";
import PlayStore from "../../assets/svg/play-store.svg";
import AppStore from "../../assets/svg/app-store.svg";
import Logo from "../../assets/svg/LogoFooter.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#FF9914] py-2 w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="ishbor-logo" width={100} height={100} />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-white font-[550] text-[15px]">
          <a href="#">Вакансии</a>
          <a href="#">Услуги</a>
          <a href="#">Задачи</a>
          <a href="#">Конфиденциальность</a>
          <a href="#">О нас</a>
          <a href="#">Карьера</a>
          <a href="#">Оферта</a>
        </div>

        {/* App Buttons */}
        <div className="flex gap-4 items-center justify-center">
          <Image
            src={AppStore}
            alt="Download on the App Store"
            width={140}
            height={45}
            className="cursor-pointer"
          />
          <Image
            src={PlayStore}
            alt="Download on Google Play"
            width={140}
            height={45}
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

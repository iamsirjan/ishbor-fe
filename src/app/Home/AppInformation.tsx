"use client";

import { useState } from "react";
import Image from "next/image";
import PlayStore from "../../assets/svg/play-store.svg";
import AppStore from "../../assets/svg/app-store.svg";
import AppScreen from "../../assets/svg/app-screen.svg";
import BlueBg from "../../assets/svg/blue-bg.svg";
import Image1 from "../../assets/svg/Image1.svg";

const tabData = {
  Вакансии: [
    "Создавайте объявления о вакансиях",
    "Управляйте откликами",
    "Фильтруйте по навыкам",
    "Находите лучших кандидатов",
  ],
  Услуги: [
    "Размещайте свои услуги",
    "Получайте заказы от клиентов",
    "Управляйте расписанием",
    "Получайте оплату напрямую",
  ],
  Задачи: [
    "Публикуйте задачи для фрилансеров",
    "Оценивайте предложения",
    "Контролируйте выполнение",
    "Закрывайте задачи с отзывом",
  ],
};

export const AppInformation = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>("Вакансии");

  return (
    <div>
      <div className="px-70 mt-20">
        {/* App Download Section */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#000000] font-[700] text-[40px]">
              <p>Загрузите мобильное</p>
              <p>
                приложение{" "}
                <span className="text-[#FF9914] font-[700] text-[40px]">
                  ISHBOR.uz
                </span>
              </p>
            </div>
            <p className="text-[#888888] font-[550] text-[18px] w-[480px]">
              Специальное и современное приложение для Вашего смартфона.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <Image
                src={PlayStore}
                width={150}
                height={150}
                alt="ishbor-app-andriod"
              />
              <Image
                src={AppStore}
                width={150}
                height={150}
                alt="ishbor-app-ios"
              />
            </div>
          </div>
          <Image
            src={AppScreen}
            width={400}
            height={400}
            alt="ishbor-app-screen"
          />
        </div>

        {/* New Section */}
        <div
          className="mt-20 rounded-xl bg-cover bg-center text-white px-10 py-10"
          style={{
            backgroundImage: `url(${BlueBg.src})`,
          }}
        >
          <h2 className="text-[40px] font-[700]  text-center">Как работает</h2>

          <h2 className="text-[40px] font-[700] mb-10 text-center">
            платформа ISHBOR.uz
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-10">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-[20px] font-[700] cursor-pointer ${
                  activeTab === tab
                    ? "border-b-2 border-[#fff]  text-white"
                    : "opacity-60"
                }`}
                onClick={() => setActiveTab(tab as keyof typeof tabData)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-[18px] font-normal">
            {tabData[activeTab].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span
                  className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white shadow-[0px_4px_8px_0px_#00000026] text-black text-[40px] leading-[100%] font-[700]"
                  style={{ fontFamily: "HelveticaNeueCyr" }}
                >
                  {index + 1}
                </span>
                <span className="font-[550] text-[18px]">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[16px] font-[550] text-[#fff] mt-10 text-center opacity-60">
            С TopHob больше не нужно тратить время на поиск клиентов! Более 100
            новых заданий каждую неделю!
          </p>
        </div>
      </div>

      <div className="h-[450px] bg-[#fff] flex flex-col items-center justify-center text-center  mt-20">
        <Image src={Image1} width={150} height={150} alt="ishbor-image" />
        <p className="font-[500] text-[18px] text-[#000] mt-5">
          Служба поддержки
        </p>
        <p className="font-[400] text-[15px] text-[#888888] mt-4">
          Не нашли ответа на вопрос
        </p>
        <p className="font-[400] text-[15px] text-[#888888]">
          столкнулись с проблемой?
        </p>
        <p className="font-[500] text-[18px] text-[#000] mt-2 bg-[#FAFAFA] rounder-[5px] p-[10px] mt-4">
          Связаться с поддержкой
        </p>
      </div>
    </div>
  );
};

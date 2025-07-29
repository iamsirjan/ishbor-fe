import { ChevronDown } from "lucide-react";
import Image from "next/image";
import CheckCircle from "../../assets/svg/checkmark-circle.svg";
import Calendar from "../../assets/svg/calendar.svg";
import Heart from "../../assets/svg/heart.svg";
import ClientLogo from "../../assets/svg/client-logo.svg";
import Pin from "../../assets/svg/pin.svg";
import { Button } from "ishbor/components/ui/button";

export const PopularJobs = () => {
  const jobCategories = [
    "Курьерские услуги",
    "Дизайн",
    "Ремонт транспорта",
    "Ремонт и строительство",
    "Web-разработка",
    "Ремонт цифровой техники",
    "Грузоперевозки",
    "Фото- и видео-услуги",
    "Юридическая помощь",
    "Уборка и помощь по хозяйству",
    "Установка и ремонт техники",
    "Мероприятия и промо-акции",
    "Виртуальный помощник",
    "Красота и здоровье",
    "Что-то другое",
    "Компьютерная помощь",
    "Репетиторы и обучение",
    "Посмотреть все категории",
  ];

  const jobs = [
    {
      company: "Akfa Group",
      time: "12 часов назад",
      title: "Графический дизайнер",
      salary: "6 000 000-9 000 000 сум",
      description:
        "Ищем талантливого дизайнера для создания креативных решений...",
      location: "Ташкент - Шайхонтохурский район",
      isTop: true,
    },
    {
      company: "Yandex Go",
      time: "3 часа назад",
      title: "Курьер",
      salary: "3 000 000-5 000 000 сум",
      description: "Стань частью команды и доставляй заказы по городу...",
      location: "Самарканд",
      isTop: false,
    },
    {
      company: "IT Labs",
      time: "1 день назад",
      title: "Frontend разработчик",
      salary: "10 000 000-13 000 000 сум",
      description: "React, TypeScript, UI/UX знания обязательны...",
      location: "Ташкент - Мирзо-Улугбекский район",
      isTop: true,
    },
    {
      company: "CleanPro",
      time: "6 часов назад",
      title: "Уборщица",
      salary: "2 500 000 сум",
      description: "Регулярная уборка офисных помещений...",
      location: "Бухара",
      isTop: false,
    },
    {
      company: "Legal Aid",
      time: "2 дня назад",
      title: "Юрист",
      salary: "7 000 000 сум",
      description: "Опыт работы с контрактами, корпоративное право...",
      location: "Андижан",
      isTop: false,
    },
    {
      company: "TechFix",
      time: "5 часов назад",
      title: "Мастер по ремонту ноутбуков",
      salary: "4 000 000 сум",
      description: "Диагностика и ремонт различной цифровой техники...",
      location: "Ташкент",
      isTop: true,
    },
  ];

  return (
    <div className="py-10 w-full px-4">
      {/* Header */}
      <div className="text-center w-full flex flex-col items-center justify-center">
        <p className="text-[22px] font-[700] text-[#2E3A59] flex flex-wrap items-center justify-center gap-2">
          Популярные вакансии в{" "}
          <div className="relative">
            <select
              className="appearance-none bg-[#4F7CBF17] rounded-[12px] px-[12px] pr-10 py-[8px] text-[22px] font-[700] text-[#2E3A59] focus:outline-none leading-[1.2] h-[48px]"
              defaultValue="tashkent"
            >
              <option value="tashkent">Ташкенте</option>
              <option value="samarkand">Самарканде</option>
              <option value="bukhara">Бухаре</option>
              <option value="andijan">Андижане</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2E3A59] pointer-events-none" />
          </div>
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto py-6">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#4F7CBF17] text-[#2E3A59] text-[15px] font-[400] px-[10px] py-[10px] rounded-[12px] cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        {/* Jobs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-[12px] shadow-md hover:shadow-lg transition w-full cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <p className="text-[#2E3A59] text-[13px] font-[400]">
                    {job.company}
                  </p>
                  <Image
                    src={CheckCircle}
                    alt="checkmark"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Calendar} alt="calendar" width={20} height={20} />
                  <p className="text-[#2E3A59] text-[13px] font-[400]">
                    {job.time}
                  </p>
                  <Image
                    src={Heart}
                    width={20}
                    height={20}
                    alt="favorite"
                    className="cursor-pointer"
                  />
                </div>
              </div>

              {/* Job Content */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={ClientLogo}
                    alt="job"
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  {job.isTop && (
                    <p className="p-1 bg-[#FF9914] rounded-[4px] text-[13px] font-[700] text-white absolute top-[-8px] left-[-20px] w-[60px] text-center">
                      ТОП
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-[18px] font-[700] text-[#2E3A59]">
                    {job.title}
                  </p>
                  <p className="text-[15px] font-[700] text-[#FF9914]">
                    {job.salary}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#888888] text-[14px] font-[400] mt-4 min-h-[40px] overflow-hidden">
                {job.description}
              </p>

              {/* Location */}
              <div className="text-[#2E3A59] text-[13px] font-[400] mt-4 flex items-center gap-2">
                <Image src={Pin} alt="location" width={20} height={20} />
                <p>{job.location}</p>
              </div>
            </div>
          ))}
        </div>
        <Button className="p-[16px] bg-[#fff] rounder-[12px] text-[17px] text-[#2E3A59] font-[550]  hover:bg-[#fff] mt-8 w-[full]">
          Посмотреть все вакансии
        </Button>
      </div>
    </div>
  );
};

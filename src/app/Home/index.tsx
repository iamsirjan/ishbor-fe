import { Button } from "ishbor/components/ui/button";
import { Input } from "ishbor/components/ui/input";
import { ChevronDown } from "lucide-react";
import { PopularJobs } from "./PopularJobs";

export const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  w-full ">
      {/* top filter bar */}
      <div className="w-full flex flex-col justify-center items-center bg-[#F7F9FC] py-20 gap-4">
        {/* Top title */}
        <p className="text-[32px] font-[700] text-[#2E3A59]">
          Найди работу вместе с ISHBOR
        </p>

        {/* 👇 Search Bar */}
        <div className="flex items-stretch">
          {" "}
          {/* changed items-center -> items-stretch */}
          <div className="flex items-center rounded-l-[12px] overflow-hidden bg-[#fff] p-2">
            <Input
              placeholder="Ищу сантехника"
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-60"
            />

            <div className="flex items-center justify-center px-4 h-full gap-4">
              <select className="appearance-none bg-transparent text-black font-medium focus:outline-none focus:ring-0 focus:border-transparent">
                <option value="vacancy">Вакансии</option>
                <option value="freelancer">Фрилансеры</option>
              </select>
              <ChevronDown className="h-4 w-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="flex items-center justify-center px-4 h-full gap-4">
              <select className="appearance-none bg-transparent text-black font-medium">
                <option value="tashkent">Ташкент</option>
                <option value="samarkand">Самарканд</option>
              </select>
              <ChevronDown className="h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <Button className="bg-[#FF9914] hover:bg-[#FF9914] text-white p-2 rounded-none rounded-r-[12px] w-[140px] h-full">
            Найти
          </Button>
        </div>
        <p className="text-start text-[15px] font-[550]">
          Например: <span className="text-[#13A5E3]">Веб-дизайн </span>
        </p>

        {/* Subtitle */}
        <p className="text-[17px] font-[550] text-[#2E3A59] mt-10">
          Стать исполнителем и начать зарабатывать
        </p>
      </div>
      <div
        className="w-full bg-cover bg-center text-white py-16 px-4 flex flex-col items-center "
        style={{
          background: `linear-gradient(89.69deg, #DB9326 0.15%, #FF993A 99.71%), url('/assets/svg/home-bg.png')`,
          backgroundBlendMode: "overlay", // Ensures gradient overlays the image
        }}
      >
        <p className="text-[40px] font-[700] text-center">
          Хотите разместить свою вакансию?
        </p>
        <p className="text-[40px] font-[700] text-center">
          Расскажите коротко ИИ дополнит её!
        </p>
        <Button className="rounded-[12px] px-[16px] py-[24px] text-[#000] bg-[#FFFFFF] hover:bg-[#FFFFFF] mt-6">
          Создать вакансию
        </Button>
      </div>

      <PopularJobs />
    </div>
  );
};

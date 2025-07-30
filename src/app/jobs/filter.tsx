"use client";

import { useState } from "react";
import { Input } from "ishbor/components/ui/input";
import { Button } from "ishbor/components/ui/button";
import { ChevronDown, ChevronRight, X } from "lucide-react";

type Category = {
  name: string;
  children?: string[];
};

const categories: Category[] = [
  { name: "Курьерские услуги" },
  { name: "Ремонт и строительство" },
  { name: "Уборка и помощь по хозяйству" },
  { name: "Грузоперевозки" },
  { name: "Виртуальный помощник" },
  {
    name: "Компьютерная помощь",
    children: [
      "Ремонт компьютеров и ноутбуков",
      "Установка и настройка ОС",
      "Удаление вирусов",
      "Настройка интернета и Wi-Fi",
    ],
  },
];

export const JobFilterPanel = () => {
  const [city, setCity] = useState("Ташкент");
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  const selectSubcategory = (sub: string) => {
    setSelectedSubcategory(selectedSubcategory === sub ? null : sub);
  };

  return (
    <aside className="w-[300px] bg-white p-4 rounded-2xl shadow-md flex flex-col gap-4">
      {/* City selection */}
      <div>
        <label className="text-[18px] font-[700] text-[#2E3A59]">Город</label>
        <p className="text-[#2E3A59] font-[550] text-[17px] bg-[#F7F9FC] rounded-[10px] px-5 py-2 mt-4">
          {city}
        </p>
        <div className="mt-2 h-[150px] w-full bg-gray-200 rounded-md text-center text-sm text-gray-500 flex items-center justify-center">
          Карта (static)
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-2">
        <label className="text-[18px] font-[700] text-[#2E3A59]">
          Категории
        </label>
        <Input
          placeholder="Поиск категории..."
          className="bg-gray-50 rounded-md p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        {/* Category List */}
        <div className="mt-2 flex flex-col gap-1">
          {categories.map((category) => (
            <div key={category.name}>
              <button
                onClick={() => toggleCategory(category.name)}
                className={`w-full text-left px-4 py-2 rounded-md bg-[#F3F6FA] text-[#2E3A59] font-medium hover:bg-[#E6EDF5] flex justify-between items-center`}
              >
                {category.name}
                {category.children ? (
                  openCategory === category.name ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )
                ) : (
                  <ChevronRight size={16} className="opacity-30" />
                )}
              </button>

              {/* Subcategories */}
              {openCategory === category.name && category.children && (
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  {category.children.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => selectSubcategory(sub)}
                      className={`text-left px-4 py-1 rounded-lg text-sm font-medium flex items-center gap-2 ${
                        selectedSubcategory === sub
                          ? "bg-[#2E3A59] text-white"
                          : "bg-[#F3F6FA] text-[#2E3A59]"
                      }`}
                    >
                      {selectedSubcategory === sub && <X size={14} />}
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Apply button */}
      <Button className="bg-[#2E3A59] text-white w-full mt-4">
        Применить фильтр
      </Button>
    </aside>
  );
};

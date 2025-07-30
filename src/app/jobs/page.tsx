import { Button } from "ishbor/components/ui/button";
import { Input } from "ishbor/components/ui/input";
import { ChevronDown } from "lucide-react";
import { JobList } from "./jobList";
import { JobFilterPanel } from "./filter";

export default function JobsPage() {
  return (
    <main className="flex  flex-col items-center justify-between w-full">
      <div className="flex items-stretch mt-10">
        {" "}
        {/* changed items-center -> items-stretch */}
        <div className="flex items-center rounded-l-[12px] overflow-hidden bg-[#fff] p-2">
          <Input
            placeholder="Ищу сантехника"
            className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-60"
          />

          <div className="flex items-center justify-center px-4 h-full gap-4">
            <Input
              placeholder="Зарплата от..."
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-40"
            />
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
      <div className="mx-auto mt-10 flex gap-6 w-[60%]">
        {/* Left Sidebar */}
        <JobFilterPanel />

        {/* Right Content */}
        <div className="flex-1">
          <JobList />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import LikeIcon from "../../assets/svg/Like.svg";
import Dislike from "../../assets/svg/Dislike.svg";
import Calendar from "../../assets/svg/calendar.svg";
import Heart from "../../assets/svg/heart.svg";
import Pin from "../../assets/svg/pin.svg";
import Verified from "../../assets/svg/verified.svg";
import JobImg from "../../assets/svg/client-logo.svg";

export const JobList = () => {
  const job = {
    user: "Михаил Шевцов",
    verified: true,
    likes: 284,
    dislikes: 284,
    posted: "12 soat avval",
    title: "Сантехник",
    extraServices: 4,
    salary: "3 000 000 - 5 000 000 сум",
    location: "Ташкент - Шайхонтохурский район",
    description:
      "Описание: Здравствуйте я арт-директор Рек. аг. Мандарин нам требуются дизайнеры...",
  };

  return (
    <div className="bg-white p-4 rounded-2xl   w-full  cursor-pointer max-w-[600px]">
      {/* Top: Profile & Actions */}

      {/* Middle: Job Image + Title/Salary */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 items-stretch">
          {/* Fix Image size */}
          <Image src={JobImg} alt="job" className="rounded-lg object-cover" />
          {/* Content should stretch to image height */}
          <div className="flex flex-col justify-between">
            {/* User, verified, likes */}
            <div>
              <div className="flex items-center gap-1">
                <p className="text-[#2E3A59] text-[13px] font-[400]">
                  {job.user}
                </p>
                {job.verified && (
                  <Image src={Verified} alt="verified" width={16} height={16} />
                )}
                <div className="flex items-center gap-2 text-[13px] text-[#888888] ml-3 font-[550]">
                  <div className="flex items-center gap-1">
                    <Image src={LikeIcon} alt="like" width={16} height={16} />
                    <p>{job.likes}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src={Dislike} alt="dislike" width={16} height={16} />
                    <p>{job.dislikes}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Title, extra services */}
            <div className="flex items-center gap-1 mt-2">
              <p className="text-[18px] font-bold text-[#2E3A59]">
                {job.title}
              </p>
              <p className="text-[#B7BFCA] text-[13px] font-[550] ml-3">
                + ещё {job.extraServices} услуги
              </p>
            </div>

            {/* Salary */}
            <p className="text-[18px] font-[700] text-[#FF9914]">
              {job.salary}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mt-2">
              <Image src={Pin} alt="location" width={18} height={18} />
              <p className="text-[13px] font-[400] text-[#2E3A59]">
                {job.location}
              </p>
            </div>
          </div>
        </div>

        {/* Right side: calendar, posted, favorite */}
        <div className="flex items-center gap-2">
          <Image src={Calendar} alt="calendar" width={18} height={18} />
          <p className="text-[13px] text-[#2E3A59]">{job.posted}</p>
          <Image
            src={Heart}
            alt="favorite"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Location */}

      {/* Description */}
      <p className="text-[#888888] text-[14px] font-[400] line-clamp-2">
        {job.description}
      </p>
    </div>
  );
};

import Image from "next/image";
import PlayStore from "../../assets/svg/play-store.svg";
import AppStore from "../../assets/svg/app-store.svg";
import AppScreen from "../../assets/svg/app-screen.svg";
export const AppInformation = () => {
  return (
    <div className="px-70 mt-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[#000000] font-[700] text-[40px] ">
            <p>Загрузите мобильное</p>
            <p>
              приложение{" "}
              <span className="text-[#FF9914] font-[700] text-[40px] ">
                ISHBOR.uz
              </span>
            </p>
          </div>
          <p className="text-[#888888] font-[550] text-[18px] w-[480px]">
            Специальное и современное приложение для Вашего смартфона.
          </p>

          <div className="flex items-center  gap-4 mt-4">
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
    </div>
  );
};

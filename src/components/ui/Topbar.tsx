"use client";

import Link from "next/link";
import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "ishbor/components/ui/dialog";
import { Button } from "./button";
import TelegramIcon from "../../assets/svg/telegram.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import PhoneIcon from "../../assets/svg/phone.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "ishbor/components/ui/input-otp";

import { FormProvider } from "../Form/FormProvider";
import { PhoneNumberField } from "../Form/PhoneNumberField";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

export default function Topbar() {
  const pathname = usePathname();

  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isOTPDialogOpen, setOTPDialogOpen] = useState(false);
  const [resendTimer, setResendTimer] = useState(59);
  const [canResend, setCanResend] = useState(false);

  const [otp, setOTP] = useState("");
  // Login form
  const loginSchema = yup.object().shape({
    phone: yup.string().required("Номер телефона обязателен"),
  });

  const formMethods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit, watch, reset } = formMethods;

  const onLoginSubmit = (data: { phone: string }) => {
    console.log("Submitted Phone Number:", data.phone);
    setLoginDialogOpen(false);
    setOTPDialogOpen(true);
    setResendTimer(59);
    setCanResend(false);
  };

  const onOTPSubmit = () => {
    console.log("Submitted OTP:", otp);
    setOTPDialogOpen(false);
    setOTP("");
    reset({
      phone: "",
    });
  };

  const handleResend = () => {
    setResendTimer(59);
    setCanResend(false);
    console.log("Resending OTP...");
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (isOTPDialogOpen && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }

    if (resendTimer === 0) {
      setCanResend(true);
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOTPDialogOpen, resendTimer]);

  const navLinks = [
    { href: "/", label: "Вакансии" },
    { href: "/career", label: "Услуги" },
    { href: "/about", label: "Задачи" },
  ];

  return (
    <div className="border-b border-[#F6F7FB] bg-white">
      <div className="p-2 ml-8 mr-8 ">
        <header className="text-black flex justify-between items-center text-[15px] font-[550]">
          <nav className="mt-2">
            <ul className="flex space-x-4 text-[#888888] text-[15px] font-[550]">
              <li>
                <Link href="/">Специалистам</Link>
              </li>
              <li>
                <Link href="/career">Карьера</Link>
              </li>
              <li>
                <Link href="/about">О нас</Link>
              </li>
            </ul>
          </nav>

          <div className="mt-2">
            <select className="text-dark">
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="uz">O‘zbekcha</option>
            </select>
          </div>
        </header>

        <nav className="flex items-center mt-4 justify-between text-[17px] font-[550]">
          <div className="flex items-center">
            <Image src={Logo} alt="Ishbor Logo" width={50} height={50} />
            <ul className="flex space-x-4 text-[#000] text-[17px] font-[550] ml-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`p-2 rounded ${
                      pathname === link.href
                        ? "bg-[#F6F7FB] text-black rounded-[12px] px-[16px] py-[8px]"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span
            className="text-[#000] cursor-pointer"
            onClick={() => setLoginDialogOpen(true)}
          >
            Вход в Аккаунт
          </span>
          {/* Login Dialog */}
          <Dialog open={isLoginDialogOpen} onOpenChange={setLoginDialogOpen}>
            <DialogTrigger asChild></DialogTrigger>
            <DialogContent className="w-100" showCloseButton={false}>
              <DialogHeader>
                <DialogTitle className="text-[28px] font-[700] text-center">
                  Войти
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-2">
                <FormProvider methods={formMethods}>
                  <form
                    onSubmit={handleSubmit(onLoginSubmit)}
                    className="space-y-2"
                  >
                    <PhoneNumberField
                      name="phone"
                      label="Введите ваш номер телефона"
                      type="tel"
                      variant="login"
                      placeholder="XX XXX XX XX"
                      leftIcon={<Image src={PhoneIcon} alt="phone-icon" />}
                    />
                    <Button variant={"secondary"} className="w-full h-12 mt-2">
                      Войти
                      <Image src={ArrowRight} alt="login-ishbor" />
                    </Button>
                    <p className="text-[17px] font-[550] text-[#B7BFCA] text-center">
                      или
                    </p>
                    <Button variant={"telegram"} className="w-full h-12">
                      Вход через Telegram
                      <Image src={TelegramIcon} alt="login-ishbor" />
                    </Button>
                    <p className="text-[#2E3A59] text-[17px] font-[400] text-center mt-2">
                      Нужна помощь?{" "}
                      <span className="underline cursor-pointer">
                        Напишите нам
                      </span>
                    </p>
                  </form>
                </FormProvider>
              </div>
            </DialogContent>
          </Dialog>

          {/* OTP Dialog */}
          <Dialog open={isOTPDialogOpen} onOpenChange={setOTPDialogOpen}>
            <DialogContent className="w-100" showCloseButton={true}>
              <DialogHeader>
                <DialogTitle className="text-[24px] font-[700] text-center">
                  Введите проверочный код высланный по смс
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 flex flex-col items-center space-y-2  ">
                <p className="text-[15px] font-[550] text-[#888888]">
                  Код был выслан на номер{" "}
                  <span className="text-[#2E3A59]">+998 {watch("phone")}</span>
                </p>

                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(val: string) => setOTP(val)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={1} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                  </InputOTPGroup>
                </InputOTP>

                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-[#2E3A59] underline text-sm"
                  >
                    Отправить код снова
                  </button>
                ) : (
                  <p className="text-[#2E3A59] font-[400] text-[15px]">
                    Повторно отправить код 00:
                    {resendTimer.toString().padStart(2, "0")}
                  </p>
                )}

                <Button
                  variant={"otp"}
                  className="w-full h-12 mt-2"
                  type="submit"
                  disabled={otp.length < 5}
                  onClick={onOTPSubmit}
                >
                  Войти
                </Button>

                <p className="text-[#2E3A59] text-[17px] font-[400] text-center mt-2">
                  Нужна помощь?{" "}
                  <span className="underline cursor-pointer">Напишите нам</span>
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </div>
  );
}

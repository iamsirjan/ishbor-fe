// next-i18next.config.ts

const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "uz"],
  },
  react: { useSuspense: false }, // optional
};

export default nextI18NextConfig;

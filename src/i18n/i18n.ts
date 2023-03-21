import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import resources from "virtual:i18next-loader";

void i18n.use(initReactI18next).init({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
  defaultNS: "translation",
  ns: "translation",
});

export {i18n};

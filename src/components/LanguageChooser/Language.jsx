import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

const Language = ({ language }) => {
  const { i18n } = useTranslation();

  const chooseLanguage = () => i18n.changeLanguage(language);

  return (
    <li
      className={cn({ active: language === i18n.language })}
      onClick={chooseLanguage}
    >
      {language}
    </li>
  );
};

export default Language;

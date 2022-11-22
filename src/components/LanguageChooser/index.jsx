import React from "react";
import Language from "./Language";

export const LanguageChooser = ({ languages }) => (
  <ul className="language-chooser">
    {languages.map(({ language }) => (
      <Language key={language} language={language} />
    ))}
  </ul>
);

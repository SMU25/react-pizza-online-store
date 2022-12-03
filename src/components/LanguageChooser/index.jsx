import React, { memo } from "react";
import Language from "./Language";

export const LanguageChooser = memo(({ languages }) => (
  <ul className="language-chooser">
    {languages.map(({ language }) => (
      <Language key={language} language={language} />
    ))}
  </ul>
));

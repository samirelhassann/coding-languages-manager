"use client";

import { useContext } from "react";

import { Edit2 } from "lucide-react";

import { DialogContext } from "@/app/providers/DialogContext";
import { Language } from "@/model/Language";

interface LanguageEditButtonProps {
  language: Language;
}

export function LanguageEditButton({ language }: LanguageEditButtonProps) {
  const { toggle } = useContext(DialogContext);

  const handleEditLanguage = () => {
    toggle(language);
  };

  return (
    <Edit2
      className="w-5 h-5 cursor-pointer hover:text-primary"
      onClick={handleEditLanguage}
    />
  );
}

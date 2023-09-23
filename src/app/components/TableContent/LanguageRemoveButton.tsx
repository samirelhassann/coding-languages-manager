"use client";

import { useRouter } from "next/navigation";

import { Trash2 } from "lucide-react";

import { deleteLanguageService } from "@/services/deleteLanguage/deleteLanguageService";

interface LanguageRemoveButtonProps {
  languageId: string;
}

export function LanguageRemoveButton({
  languageId,
}: LanguageRemoveButtonProps) {
  const router = useRouter();

  const handleRemoveLanguage = () => {
    deleteLanguageService(languageId).then(() => {
      router.refresh();
    });
  };

  return (
    <Trash2
      className="w-5 h-5 cursor-pointer hover:text-primary"
      onClick={handleRemoveLanguage}
    />
  );
}

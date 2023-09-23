/* eslint-disable @typescript-eslint/no-shadow */

"use client";

import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

import { Language } from "@/model/Language";

interface DialogType {
  toggle: (language?: Language) => void;
  showDialog: boolean;
  language: Language | null;
}

export const DialogContext = createContext({} as DialogType);

export function DialogProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [showDialog, setShowDialog] = useState(false);
  const [language, setLanguage] = useState<Language | null>(null);

  const toggle = useCallback((language?: Language) => {
    setShowDialog((state) => !state);

    setLanguage(language ?? null);
  }, []);

  const contextReturn = useMemo(() => {
    return {
      toggle,
      showDialog,
      language,
    };
  }, [showDialog, toggle, language]);

  return (
    <DialogContext.Provider value={contextReturn}>
      {children}
    </DialogContext.Provider>
  );
}

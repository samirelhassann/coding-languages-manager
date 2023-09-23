"use client";

import { useContext } from "react";

import { DialogContext } from "../providers/DialogContext";
import { LanguageForm } from "./LanguageForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function NewLanguageDialog() {
  const { showDialog, toggle } = useContext(DialogContext);

  const handleOpenChange = () => {
    toggle();
  };

  return (
    <Dialog open={showDialog} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Language</DialogTitle>
          <DialogDescription>
            Please inform all the information about the new language.
          </DialogDescription>
        </DialogHeader>

        <LanguageForm />
      </DialogContent>
    </Dialog>
  );
}

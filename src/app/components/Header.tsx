"use client";

import { useContext } from "react";

import { Plus } from "lucide-react";

import { DialogContext } from "../providers/DialogContext";
import { Button } from "./ui/button";

export function Header() {
  const { toggle } = useContext(DialogContext);

  const handleAddLanguage = () => {
    toggle();
  };

  return (
    <div className="flex items-end justify-between w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl text-primary">Language Manager</h1>
        <h2 className="text-xl text-foreground/30">
          Phase 1 • Challenge 2 (Docker)
        </h2>
        <span className="text-secondary-foreground/70">
          This is a project created to apply the docker concepts studied during
          the <span className="text-primary">FIAP Pós-tech</span>
        </span>
      </div>

      <Button
        type="button"
        variant="outline"
        className="flex items-center gap-2 group"
        onClick={handleAddLanguage}
      >
        <Plus className="w-5 h-5" />
        <span> Add language</span>
      </Button>
    </div>
  );
}

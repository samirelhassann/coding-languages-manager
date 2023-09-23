"use client";

import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { Info } from "lucide-react";
import * as z from "zod";

import { createLanguageService } from "@/services/createLanguage/CreateLanguageService";
import { updateLanguageService } from "@/services/updateLanguage/UpdateLanguageService";
import { zodResolver } from "@hookform/resolvers/zod";

import { DialogContext } from "../providers/DialogContext";
import { SelectQuantityBar } from "./SelectQuantityBar";
import { TooltipInfo } from "./TooltipInfo";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  creatorName: z.string().min(2).max(50),
  popularity: z.number().min(0).max(5),
  typingLevel: z.number().min(0).max(5),
});

export function LanguageForm() {
  const { language, toggle } = useContext(DialogContext);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: language ?? {
      name: "",
      creatorName: "",
      popularity: 0,
      typingLevel: 0,
    },
  });

  const { control } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!language) {
      createLanguageService(values).then(() => {
        router.refresh();
        toggle();
      });
    }

    if (language) {
      updateLanguageService({ ...values, id: language?.id }).then(() => {
        router.refresh();
        toggle();
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col mt-5 gap-7"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  placeholder="inform the language name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="creatorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Creator Name</FormLabel>
              <FormControl>
                <Input
                  id="creatorName"
                  placeholder="inform the creator's name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between px-10">
          <Controller
            control={control}
            name="popularity"
            render={({ field: { value, onChange } }) => (
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-1">
                  <Label>Popularity</Label>
                  <TooltipInfo hoverMessage="The popularity of this language taking into account the market">
                    <Info className="w-4 h-4" />
                  </TooltipInfo>
                </div>

                <SelectQuantityBar
                  value={value}
                  onClick={(newValue) => onChange(newValue)}
                />
              </div>
            )}
          />

          <Controller
            control={control}
            name="typingLevel"
            render={({ field: { value, onChange } }) => (
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-1">
                  <Label>Typing Level</Label>
                  <TooltipInfo hoverMessage="The typing level of this language">
                    <Info className="w-4 h-4" />
                  </TooltipInfo>
                </div>

                <SelectQuantityBar
                  value={value}
                  onClick={(newValue) => onChange(newValue)}
                />
              </div>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

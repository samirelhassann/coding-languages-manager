/* eslint-disable @typescript-eslint/no-use-before-define */

import { axiosInstance } from "@/lib/axios";
import { Language } from "@/model/Language";

import { GetLanguagesResponse } from "./GetLanguagesResponse";

export function getLanguagesService(): Promise<Language[]> {
  return axiosInstance
    .get<GetLanguagesResponse>("/api/languages")
    .then((response) => converter(response.data));
}

const converter = (requestResponse: GetLanguagesResponse): Language[] => {
  return requestResponse.languages.map((language) => {
    return {
      id: language.id,
      name: language.name,
      creatorName: language.creator_name,
      popularity: language.popularity,
      typingLevel: language.typing_level,
    } as Language;
  });
};

/* eslint-disable @typescript-eslint/no-use-before-define */

import { axiosInstance } from "@/lib/axios";

export function deleteLanguageService(languageId: string) {
  return axiosInstance.delete(`/api/languages/${languageId}`);
}

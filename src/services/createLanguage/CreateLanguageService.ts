/* eslint-disable @typescript-eslint/no-use-before-define */

import { axiosInstance } from "@/lib/axios";

import { CreateLanguageRequest } from "./model/CreateLanguageRequest";

export function createLanguageService(
  createLanguageRequest: CreateLanguageRequest
) {
  return axiosInstance.post("/api/languages", createLanguageRequest);
}

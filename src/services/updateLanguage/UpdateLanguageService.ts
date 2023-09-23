/* eslint-disable @typescript-eslint/no-use-before-define */

import { axiosInstance } from "@/lib/axios";

import { UpdateLanguageServiceRequest } from "./model/UpdateLanguageServiceRequest";

export function updateLanguageService(
  updateLanguageServiceRequest: UpdateLanguageServiceRequest
) {
  return axiosInstance.put(
    `/api/languages/${updateLanguageServiceRequest.id}`,
    updateLanguageServiceRequest
  );
}

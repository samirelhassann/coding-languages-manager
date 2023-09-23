export interface GetLanguagesResponse {
  languages: Language[];
}

interface Language {
  id: string;
  name: string;
  creator_name: string;
  popularity: number;
  typing_level: number;
  created_at: string;
}

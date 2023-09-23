import { getLanguagesService } from "@/services/getLanguages/GetLanguagesService";

import { QuantityBar } from "../QuantityBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { LanguageEditButton } from "./LanguageEditButton";
import { LanguageRemoveButton } from "./LanguageRemoveButton";

export async function TableContent() {
  const languages = await getLanguagesService();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-primary">Name</TableHead>
          <TableHead className="font-bold text-primary">Creator name</TableHead>
          <TableHead className="font-bold text-primary">Popularity</TableHead>
          <TableHead className="font-bold text-primary">Typing Level</TableHead>
          <TableHead className="font-bold text-right text-primary">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {languages
          .sort((a, b) => (a.name < b.name ? 1 : -1))
          .map((language) => (
            <TableRow key={language.id}>
              <TableCell>{language.name}</TableCell>
              <TableCell>{language.creatorName}</TableCell>
              <TableCell>
                <QuantityBar value={language.popularity} />
              </TableCell>
              <TableCell>
                <QuantityBar value={language.typingLevel} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-4">
                  <LanguageEditButton language={language} />
                  <LanguageRemoveButton languageId={language.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

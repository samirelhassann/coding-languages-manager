import { Header } from "./components/Header";
import { NewLanguageDialog } from "./components/NewLanguageDialog";
import { TableContent } from "./components/TableContent";

export default async function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-10 p-24">
      <NewLanguageDialog />

      <Header />

      <TableContent />
    </main>
  );
}

import { Button } from "@/components/ui/button";

export const Header = async () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container m-auto flex max-w-lg items-center gap-1 py-2">
        <h1 className="mr-auto text-2xl font-bold">Githreads</h1>
        <Button>Démo</Button>
      </div>
    </header>
  );
};

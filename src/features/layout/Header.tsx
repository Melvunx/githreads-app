import { ToggleTheme } from "@/src/theme/ToggleTheme";
export const Header = async () => {
  return (
    <header>
      <div className="border-b border-b-accent">
        <div className="container m-auto flex max-w-lg items-center gap-1 py-2">
          <h2 className="mr-auto text-2xl font-bold">Githreads</h2>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;

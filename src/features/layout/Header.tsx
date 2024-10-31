import { getAuthSession } from "@/lib/auth";
import { ToggleTheme } from "@/src/theme/ToggleTheme";
import { LoginButton } from "./auth/LoginButton";
import { UserProfile } from "./auth/UserProfile";

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header>
      <div className="fixed top-0 w-full border-b border-b-accent bg-background">
        <div className="container m-auto flex max-w-lg items-center gap-1 py-2">
          <h2 className="mr-auto text-2xl font-bold">Githreads</h2>
          {session?.user ? <UserProfile /> : <LoginButton />}
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;

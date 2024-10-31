import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";

export default async function RootPage() {
  const session = await getAuthSession();

  return (
    <div className="">
      <p>{JSON.stringify(session, null, 2)}</p>

      <Button> Click</Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-1/2 bg-foreground/75 flex items-center flex-col justify-end p-20">
        <p className="text-5xl font-bold text-background">Aucune Page</p>
      </div>
      <div className="grow flex items-center justify-center gap-y-8 flex-col">
        <p className="text-4xl">Il n'y a rien ici.</p>
        <Link href="/">
          <Button size="lg">Aller à la liste des utilisateurs</Button>
        </Link>
      </div>
    </div>
  );
}

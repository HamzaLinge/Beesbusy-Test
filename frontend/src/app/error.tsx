"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-1/2 bg-foreground/75 flex items-center flex-col justify-end p-20 gap-y-8">
        <p className="text-5xl font-bold text-background">
          Une erreur s'est produite
        </p>
        <Button variant={"outline"} size="lg" onClick={() => reset()}>
          Réessayer
        </Button>
      </div>
      <div className="grow flex items-center justify-center gap-y-8 flex-col">
        <p className="text-2xl">{error.message}</p>
        <Link href="/">
          <Button size="lg">Aller à la liste des utilisateurs</Button>
        </Link>
      </div>
    </div>
  );
}

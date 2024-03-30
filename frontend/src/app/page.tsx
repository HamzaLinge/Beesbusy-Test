import DevSection from "@/components/dev";
import SkeletonUsers from "@/components/skeleton-users";
import { Button } from "@/components/ui/button";
import Users from "@/components/users-list/users";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 gap-y-16">
      <h1 className="text-5xl font-semibod">Beesbusy Test</h1>

      <DevSection />

      <div className="space-y-4 flex flex-col w-full items-center">
        <Link href="/create">
          <Button size="lg" className="space-x-2">
            <PlusIcon className="w-6 h-6" />
            <span>Créer un Nouvel Utilisateur</span>
          </Button>
        </Link>
        <Suspense fallback={<SkeletonUsers />}>
          <Users />
        </Suspense>
      </div>
    </main>
  );
}

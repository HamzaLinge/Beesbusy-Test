import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateFakeUsersButton from "@/components/dev/create-fake-users-btn";
import DeleteAllUsers from "@/components/dev/delete-all-users";
import Users from "@/components/users/users";
import DevSection from "@/components/dev";

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

        <Users />
      </div>
    </main>
  );
}

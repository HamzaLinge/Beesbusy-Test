"use client";

import { deleteAllUsers } from "@/actions/user";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

function DeleteAllUsers() {
  const [isPending, startTransition] = useTransition();

  const handleDeleteAllUsers = async () => {
    startTransition(async () => {
      await deleteAllUsers();
    });
  };
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleDeleteAllUsers}
      className="space-x-2"
      disabled={isPending}
    >
      {isPending && <ReloadIcon className="h-4 w-4 animate-spin" />}
      <span>Supprimer tous les utilisateurs</span>
    </Button>
  );
}

export default DeleteAllUsers;

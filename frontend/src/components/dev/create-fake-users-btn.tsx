"use client";

import { generateFakeUsers } from "@/actions/user";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

function CreateFakeUsersButton() {
  const [isPending, startTransition] = useTransition();

  const handleGenerateFakeUsers = async () => {
    startTransition(async () => {
      await generateFakeUsers();
    });
  };
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleGenerateFakeUsers}
      className="space-x-2"
      disabled={isPending}
    >
      {isPending && <ReloadIcon className="h-4 w-4 animate-spin" />}
      <span>Générer des utilisateurs factices (+10)</span>
    </Button>
  );
}

export default CreateFakeUsersButton;

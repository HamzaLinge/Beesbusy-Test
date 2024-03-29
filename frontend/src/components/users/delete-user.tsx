import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { TUser } from "@/types/user";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { deleteUserById } from "@/actions/user";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";

type DeleteUserProps = {
  user: TUser;
  callback: () => void;
};
function DeleteUser({ user, callback }: DeleteUserProps) {
  const [isPending, startTransition] = useTransition();

  const [open, setOpen] = useState(false);
  const handleDeleteUser = () => {
    startTransition(async () => {
      deleteUserById(user.id).then((err) =>
        !err
          ? toast.success("Suppression réussie", {
              description: `${user.prenom} ${user.nom} a bien été supprimé.`,
            })
          : toast.error("Suppression échouée", {
              description: `${err.message}.`,
            })
      );
      callback();
    });
  };
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          Vous vous apprêtez à supprimer{" "}
          <span className="font-semibold capitalize">
            {user.prenom} {user.nom}
          </span>
          .<br />
          Cette suppression ne sera pas réversible.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Annuler</AlertDialogCancel>
        <Button variant="destructive" onClick={handleDeleteUser}>
          {isPending ? (
            <ReloadIcon className="h-4 w-4 animate-spin" />
          ) : (
            "Continuer"
          )}
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default DeleteUser;

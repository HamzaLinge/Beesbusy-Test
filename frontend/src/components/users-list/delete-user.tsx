import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { deleteUserById } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types/user";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useTransition } from "react";
import { toast } from "sonner";
import { capitalize } from "@/utils/helpers";

type DeleteUserProps = {
  user: TUser;
  callback: () => void;
};
function DeleteUser({ user, callback }: DeleteUserProps) {
  const [isPending, startTransition] = useTransition();

  const handleDeleteUser = () => {
    startTransition(async () => {
      deleteUserById(user.id).then((err) =>
        !err
          ? toast.success("Suppression réussie", {
              description: `${capitalize(user.prenom)} ${capitalize(user.nom)} a bien été supprimé.`,
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
        <AlertDialogTitle>Certain?</AlertDialogTitle>
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

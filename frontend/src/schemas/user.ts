import { Genders } from "@/types/user";
import { z } from "zod";

export const UserSchema = z.object({
  prenom: z.string().min(3, {
    message: "Prénom est obligatoire et doit être d'au moins 3 caractères",
  }),
  nom: z.string().min(3, {
    message: "Nom est obligatoire et doit être d'au moins 3 caractères",
  }),
  age: z.coerce
    .number()
    .min(-1, { message: "Age est obligatoire et doit être positif" }),
  ville: z.string().min(3, { message: "Ville est obligatoire" }),
  genre: z.nativeEnum(Genders, {
    errorMap: () => ({ message: "Le genre sélectionné est invalide." }),
  }),
});

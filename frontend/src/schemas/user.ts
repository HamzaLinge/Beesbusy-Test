import { Genders } from "@/types/user";
import { z } from "zod";

export const UserSchema = z.object({
  prenom: z.string().min(3, {
    message: "Le Prénom est obligatoire et doit être d'au moins 3 caractères",
  }),
  nom: z.string().min(3, {
    message: "Le Nom est obligatoire et doit être d'au moins 3 caractères",
  }),
  age: z.coerce
    .number()
    .min(1, { message: "L'Age est obligatoire et doit être positif" }),
  ville: z.string().min(3, {
    message: "La Ville est obligatoire et doit être d'au moins 3 caractères",
  }),
  genre: z.nativeEnum(Genders, {
    errorMap: () => ({ message: "Le genre sélectionné est invalide." }),
  }),
});

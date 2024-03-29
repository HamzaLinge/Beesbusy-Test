export type TUser = {
  id: string;
  prenom: string;
  nom: string;
  age: number;
  ville: string;
  genre: TGender;
};

export enum Genders {
  Homme = "Homme",
  Femme = "Femme",
  Autre = "Autre",
}

export type TGender = Genders;

"use client";

import { createUser, editUser } from "@/actions/user";
import FormError from "@/components/form-error";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserSchema } from "@/schemas/user";
import { TErrorApi } from "@/types/api";
import { TUser } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormUserProps = {
  user?: TUser;
};

export default function FormUser({ user }: FormUserProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<TErrorApi | undefined>(undefined);

  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: user
      ? user
      : {
          prenom: "",
          nom: "",
          age: 0,
          ville: "",
        },
  });

  async function onSubmit(inputs: z.infer<typeof UserSchema>) {
    setError(undefined);
    startTransition(() => {
      !user
        ? createUser(inputs).then((err) => setError(err))
        : editUser(user.id, inputs);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-3xl flex-col items-center gap-y-10 rounded p-4"
      >
        <div className="w-full flex flex-col gap-y-4 md:gap-x-4 md:gap-y-0 md:flex-row">
          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Prénom *</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Bees"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Veuillez entrer votre prénom.</FormDescription>
                <FormMessage>{error?.errors?.prenom}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Nom *</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Busy"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Veuillez entrer votre nom.</FormDescription>
                <FormMessage>{error?.errors?.nom}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex flex-col gap-y-4 md:gap-x-4 md:gap-y-0 md:flex-row">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Age *</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="27"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Veuillez entrer votre age.</FormDescription>
                <FormMessage>{error?.errors?.age}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ville"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Ville *</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Nantes"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Veuillez entrer votre ville.</FormDescription>
                <FormMessage>{error?.errors?.ville}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem className="w-full max-w-md">
              <FormLabel>Genre *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {["Homme", "Femme", "Autre"].map((gender) => (
                    <SelectItem key={gender} value={gender}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription className="w-full">
                Veuillez indiquer votre genre.
              </FormDescription>
              <FormMessage>{error?.errors?.genre}</FormMessage>
            </FormItem>
          )}
        />
        <FormError
          message={error?.errors?.details?.join(" ") || error?.message}
        />
        <Button disabled={isPending} className="w-full" size={"lg"}>
          {isPending ? (
            <ReloadIcon className="h-4 w-4 animate-spin" />
          ) : (
            "Soumettre"
          )}
        </Button>
      </form>
    </Form>
  );
}

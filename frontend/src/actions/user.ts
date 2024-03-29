"use server";

import { UserSchema } from "@/schemas/user";
import { TUser } from "@/types/user";
import { z } from "zod";
import { revalidateTag } from "next/cache";
import { TErrorApi } from "@/types/api";
import { redirect } from "next/navigation";

const tag_revalidation = "users";

export async function getUsers() {
  const url = `${process.env.BASE_URL}/user/`;
  const res = await fetch(url, { next: { tags: [tag_revalidation] } });
  if (!res.ok) {
    console.error({ ERROR: res });
    throw new Error("Um! Une erreur s'est produite");
  }
  const users: TUser[] = await res.json();
  return users;
}

export async function createUser(inputs: z.infer<typeof UserSchema>) {
  const url = `${process.env.BASE_URL}/user/`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(inputs),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    // console.error({ ERROR_CREATE: await res.json() });
    const error_response: TErrorApi = await res.json();
    return error_response;
  }
  revalidateTag(tag_revalidation);
  redirect("/");
}

export async function generateFakeUsers() {
  const url = `${process.env.BASE_URL}/generate-fake-users/`;
  const res = await fetch(url, {
    method: "POST",
  });
  if (!res.ok) {
    // console.error({ ERROR_GENERATE_FAKE_USERS: await res.json() });
    const error_response: TErrorApi = await res.json();
    return error_response;
  }
  revalidateTag(tag_revalidation);
}

export async function deleteAllUsers() {
  const url = `${process.env.BASE_URL}/delete-all-users/`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  if (!res.ok) {
    // console.error({ ERROR_DELETE_ALL_USERS: await res.json() });
    const error_response: TErrorApi = await res.json();
    return error_response;
  }
  revalidateTag(tag_revalidation);
}

export async function deleteUserById(userId: string) {
  const url = `${process.env.BASE_URL}/user/${userId}/`;
  const res = await fetch(url, {
    method: "DELETE",
  });
  if (!res.ok) {
    // console.error({ ERROR_DELETE_USER_BY_ID: await res.json() });
    const error_response: TErrorApi = await res.json();
    return error_response;
  }
  revalidateTag(tag_revalidation);
}

export async function getUserById(userId: string) {
  const url = `${process.env.BASE_URL}/user/${userId}/`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    // console.error({ ERROR_GET_USER_BY_ID: await res.json() });
    const error_response: TErrorApi = await res.json();
    throw new Error("Um! Une erreur s'est produite");
  }
  const user: TUser = await res.json();
  return user;
}

export async function editUser(
  userId: string,
  inputs: Partial<z.infer<typeof UserSchema>>
) {
  const url = `${process.env.BASE_URL}/user/${userId}/`;
  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(inputs),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    // console.error({ ERROR_GET_USER_BY_ID: await res.json() });
    const error_response: TErrorApi = await res.json();
    return error_response;
  }
  revalidateTag(tag_revalidation);
  redirect("/");
}

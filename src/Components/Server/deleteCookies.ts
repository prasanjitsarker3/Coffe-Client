"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const deleteCookies = (keys: string[], path?: any) => {
  keys.forEach((key) => {
    cookies().delete(key);
  });
  if (path) {
    redirect(path);
  }
};

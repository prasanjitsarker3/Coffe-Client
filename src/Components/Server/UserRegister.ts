"use server";

import { FieldValues } from "react-hook-form";

export const userRegister = async (formData: FieldValues) => {
  const res = await fetch(`http://localhost:3333/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const userInfo = await res.json();

  return userInfo;
};

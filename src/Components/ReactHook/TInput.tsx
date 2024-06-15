"use client";
import { Input } from "@nextui-org/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type IFromInput = {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
};

const PTInput = ({ name, label, type = "text", required }: IFromInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Input
            {...field}
            fullWidth
            type={type}
            size="sm"
            label={label}
            required={required}
            //@ts-ignore
            error={!!error?.message}
          />
          {error && (
            <p className="text-red-500 mt-1">{String(error.message)}</p>
          )}
        </div>
      )}
    />
  );
};

export default PTInput;

"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type PTMultiSelectProps = {
  name: string;
  label?: string;
  items: string[];
  required?: boolean;
};

const PTSingleSelect = ({
  name,
  label,
  items,
  required,
}: PTMultiSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          {label && (
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
          )}
          <Select
            {...field}
            aria-label={label}
            placeholder={`Select ${label?.toLowerCase()}`}
            className="max-w-xs"
            required={required}
            selectedKeys={field.value ? new Set([field.value]) : new Set()}
            onSelectionChange={(values) => field.onChange(Array.from(values))}
          >
            {items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </Select>
          {error && (
            <p className="text-red-500 mt-1">{String(error.message)}</p>
          )}
        </div>
      )}
    />
  );
};

export default PTSingleSelect;

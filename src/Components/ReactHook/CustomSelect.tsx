import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

type PTCustomSelectProps = {
  name: string;
  label?: string;
  items: any[];
  required?: boolean;
};

const PTCustomSelect = ({
  name,
  label,
  items,
  required = false,
}: PTCustomSelectProps) => {
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
            value={field.value ?? ""}
            onChange={(e) => field.onChange(e.target.value)}
          >
            {items &&
              items?.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
          </Select>
          {error && <p className="text-red-500 mt-1">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default PTCustomSelect;

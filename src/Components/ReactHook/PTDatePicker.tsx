"use client";

import React from "react";
import { DatePicker } from "@nextui-org/react";
import { Controller, useFormContext, FieldError } from "react-hook-form";
import { parseDate } from "@internationalized/date";

type PTDatePickerProps = {
  name: string;
  label?: string;
  required?: boolean;
};

const PTDatePicker: React.FC<PTDatePickerProps> = ({
  name,
  label,
  required = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          {label && (
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
          )}
          <DatePicker
            size="sm"
            {...field}
            label={label}
            defaultValue={parseDate(new Date().toISOString().split("T")[0])}
            fullWidth={true}
            isRequired={required}
            onChange={(date) => field.onChange(date)}
          />
          {error && <p className="text-red-500 mt-1">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default PTDatePicker;

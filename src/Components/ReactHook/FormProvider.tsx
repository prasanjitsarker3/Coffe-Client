import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type FormProviderProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  resolver?: any;
  defaultValues?: Record<string, any>;
};

const FromProvider = ({
  children,
  onSubmit,
  resolver,
  defaultValues = {},
}: FormProviderProps) => {
  const methods = useForm({
    resolver,
    defaultValues,
  });

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FromProvider;

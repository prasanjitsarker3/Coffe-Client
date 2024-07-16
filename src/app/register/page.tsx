"use client";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { userRegister } from "@/components/Server/UserRegister";
import { userLogin } from "@/components/Server/userLogin";
import { useAppDispatch } from "@/components/Redux/Provider/hook";
import { setUser } from "@/components/Redux/authSlice";
import { useRouter } from "next/navigation";

const loginValidationSchema = z.object({
  name: z.string({ required_error: "Name is required1" }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type Inputs = z.infer<typeof loginValidationSchema>;

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const toastId = toast.loading("Register Processing !");

    try {
      const res = await userRegister(data);
      console.log(res);
      if (res?.statusCode === 201) {
        const loginData = {
          email: data.email,
          password: data.password,
        };
        const loginRes = await userLogin(loginData);
        if (loginRes?.statusCode === 201) {
          toast.success(res?.message, { id: toastId, duration: 2000 });
          dispatch(setUser({ accessToken: loginRes.data?.accessToken }));
          reset();
          router.push("/");
        }
      } else {
        toast.error(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-opacity-50 backdrop-blur-md"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white bg-opacity-40 px-12 py-8 rounded-md shadow-md w-96">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 bg-opacity-100"
        >
          <h1 className="text-center text-2xl font-bold">
            Register In Here...
          </h1>

          <div>
            <Input size="md" {...register("name")} label="Name" fullWidth />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input size="md" {...register("email")} label="Email" fullWidth />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <Input
              {...register("password")}
              size="md"
              type={show ? "text" : "password"}
              label="Password"
              fullWidth
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit">Register</Button>
        </form>

        <h1 className="text-gray-900 mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-700">Login</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;

"use client";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { userLogin } from "@/components/Server/userLogin";
import { useRouter } from "next/navigation";
import { logOut, setUser } from "@/components/Redux/authSlice";
import { useChangePasswordMutation } from "@/components/Redux/AdminApi/User/userApi";
import { useAppDispatch } from "@/components/Redux/Provider/hook";
import { logoutUser } from "@/components/Server/logoutUser";

const loginValidationSchema = z.object({
  oldPassword: z.string().min(6, "Password must be at least 6 characters"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

type Inputs = z.infer<typeof loginValidationSchema>;

const ChangePassword = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const toastId = toast.loading("Processing !");
    try {
      const res = await changePassword(data);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        reset();
        dispatch(logOut());
        logoutUser(router, "/login");
      } else {
        toast.error(res?.data?.message, { id: toastId, duration: 2000 });
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
      <div className="bg-white bg-opacity-40 px-12 py-8 rounded-md shadow-md ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 bg-opacity-100"
        >
          <h1 className="text-center text-2xl font-bold">
            Change Password In Here...
          </h1>

          <div className="relative">
            <Input
              {...register("oldPassword")}
              size="md"
              type={show ? "text" : "password"}
              label="Old Password"
              fullWidth
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {errors.oldPassword && (
              <p className="text-red-500">{errors.oldPassword.message}</p>
            )}
          </div>
          <div className="relative">
            <Input
              {...register("newPassword")}
              size="md"
              type={show ? "text" : "password"}
              label="New Password"
              fullWidth
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {errors.newPassword && (
              <p className="text-red-500">{errors.newPassword.message}</p>
            )}
          </div>

          <Button type="submit">Change Password</Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

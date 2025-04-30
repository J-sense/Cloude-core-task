"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Handle login
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-black px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="w-full max-w-md bg-[#111] border border-neutral-800 text-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register("email")}
                placeholder="Email"
                className="bg-neutral-900 border-neutral-700 text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="bg-neutral-900 border-neutral-700 text-white"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700"
            >
              Sign In
            </Button>
          </form>

          <div className="my-6 text-center text-gray-500">OR</div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-700"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border-neutral-700"
              onClick={() => signIn("github")}
            >
              <FaGithub className="text-xl" />
              Continue with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

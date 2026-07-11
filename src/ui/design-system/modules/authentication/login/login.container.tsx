import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { LoginFormFieldType } from "@/types/forms";
import { useState } from "react";
import { firebaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAuth } from "@/context/authUserContext";

export const LoginContainer = () => {
  const { authUser } = useAuth();
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false);

  console.log("authUser", authUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<LoginFormFieldType>();

  const handleSigneInUserAuthentication = async ({
    email,
    password,
  }: LoginFormFieldType) => {
    const { data, error } = await firebaseSignInUser(email, password);
    if (error) {
      setIsloading(false);
      toast.error(error.message);
      return;
    }
    setIsloading(true);
    reset();
    const onboardingIsCompleted = await authUser?.userDocument
      ?.onboardingIsCompleted;
    if (onboardingIsCompleted) {
      toast.success("Connexion réussit!");
      router.push("/mon-espace");
    }
    router.push("/onboarding");
  };

  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    handleSigneInUserAuthentication(formData);
  };

  return (
    <>
      <LoginView
        form={{
          register,
          handleSubmit,
          errors,
          onSubmit,
          isLoading,
          control,
          reset,
        }}
      />
    </>
  );
};

import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordForgetView } from "./forget.view";
import { ForgetPasswordFormFieldType } from "@/types/forms";
import { useState } from "react";
import { async } from "@firebase/util";
import { firebaseRecovery } from "@/api/authentication";
import { toast } from "react-toastify";

export const ForgetPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ForgetPasswordFormFieldType>();

  const handleRocoveryPasswordAuthentication = async ({
    email,
  }: ForgetPasswordFormFieldType) => {
    const { error } = await firebaseRecovery(email);

    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Email envoyé...");
    reset();
  };

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = (formData) => {
    console.log("formData", formData);
    handleRocoveryPasswordAuthentication(formData);
  };

  return (
    <>
      <PasswordForgetView
        form={{
          register,
          handleSubmit,
          errors,
          isLoading,
          onSubmit,
          control,
          reset,
        }}
      />
    </>
  );
};

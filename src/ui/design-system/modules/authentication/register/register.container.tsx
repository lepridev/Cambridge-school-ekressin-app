import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFieldType } from "@/types/forms";
import { useState } from "react";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { firestoreCreateDocument } from "@/api/firestore";
import { useRouter } from "next/router";

export const RegisterContainer = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldType>();

  const handleCreateUserDocument = async (
    collectionName: string,
    documentID: any,
    document: object
  ) => {
    const { error } = await firestoreCreateDocument(
      collectionName,
      documentID,
      document
    );
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("base de donnée crée avec succès");
  };

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFieldType) => {
    const { data, error } = await firebaseCreateUser(email, password);
    if (error) {
      console.log(error.message);
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    console.log("data", data);
    setIsLoading(true);
    reset();
    toast.success("Vous etes incrit");
    const userDocument = {
      email: email,
      how_did_hear: how_did_hear,
      uid: data?.uid,
      create_date: Date(),
    };
    handleCreateUserDocument("users", data?.uid, userDocument);
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
    console.log("formData", formData);

    const { email, password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manuel",
        message: "6 caracteres minimum",
      });
      setIsLoading(false);
      return;
    }
    handleCreateUserAuthentication(formData);
  };

  return (
    <>
      <RegisterView
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
          reset,
        }}
      />
    </>
  );
};

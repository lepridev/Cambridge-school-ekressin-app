import { useState } from "react";
import { OnboardingView } from "./onboarding.view";
import { WelcomeStep } from "./components/steps/welcome/welcome-step";
import { ProfileStep } from "./components/steps/profile/profile-step";
import { SubmitHandler, useForm } from "react-hook-form";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authUserContext";
import { Router, useRouter } from "next/router";

interface FormDataType {
  pseudo?: string;
  specialite?: string;
  biographie?: string;
  onboardingIsCompleted?: boolean;
}

export const OnboardingContainer = ({
  pseudo,
  specialite,
  biographie,
  onboardingIsCompleted,
}: FormDataType) => {
  const { authUser } = useAuth();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateDocument = async (
    collectionName: string,
    documentID: any,
    document: object
  ) => {
    const { error } = await firestoreUpdateDocument(
      collectionName,
      documentID,
      document
    );
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Document mis a jour !");
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<FormDataType> = (formData) => {
    console.log("formData", formData);
    const { pseudo, specialite, biographie, onboardingIsCompleted } = formData;
    const upData = {
      pseudo: pseudo,
      specialite: specialite,
      biographie: biographie,
      onboardingIsCompleted: true,
    };

    handleUpdateDocument("users", authUser?.uid, upData);
    console.log("authUser", authUser);
  };

  const stepsList = [
    {
      id: 1,
      label: "Bienvenue",
      component: {
        step: WelcomeStep,
      },
    },
    {
      id: 2,
      label: "Profile",
      component: {
        step: ProfileStep,
      },
    },
  ];

  const getCurrentStep = () => {
    return stepsList.find((el) => el.id === currentStep);
  };

  const nextStep = () => {
    if (currentStep < stepsList.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirstStep = () => {
    if (currentStep === 1) {
      return true;
    }
    return false;
  };

  const isFinalStep = () => {
    if (currentStep === stepsList.length) {
      return true;
    }
    return false;
  };

  console.log(currentStep);

  return (
    <OnboardingView
      getCurrentStep={getCurrentStep}
      nextStep={nextStep}
      prevStep={prevStep}
      isFirstStep={isFirstStep}
      isFinalStep={isFinalStep}
      stepsList={stepsList}
      form={{ register, handleSubmit, errors, onSubmit }}
    />
  );
};

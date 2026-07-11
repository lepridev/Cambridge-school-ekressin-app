import { Typograpy } from "@/ui/design-system/typograpy/typography";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Input } from "@/ui/design-system/forms/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@/ui/design-system/forms/textarea";
import { useEffect, useState } from "react";
import { Button } from "@/ui/design-system/button/button";
import { FormType } from "@/types/onboarding-step";
import { useAuth } from "@/context/authUserContext";

interface Props {
  nextStep?: () => void;
  prevStep?: () => void;
  isFirstStep?: () => boolean;
  isFinalStep?: () => boolean;
  form: FormType;
}

interface FormDataType {
  pseudo: string;
  specialite: string;
  biographie: string;
  onboardingIsCompleted: boolean;
}
export const ProfileStep = ({
  nextStep,
  prevStep,
  isFirstStep,
  isFinalStep,
  form,
}: Props) => {
  const { register, handleSubmit, errors, onSubmit, setValue }: FormType = form;
  const [isLoadind, setIsloading] = useState(false);
  const { authUser } = useAuth();
  // const { pseudo, specialite, biographie } = authUser?.userDocument;

  // useEffect(() => {
  //   setValue("pseudo", pseudo);
  //   setValue("specialite", specialite);
  //   setValue("biographie", biographie);
  // }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative flex items-center h-screen">
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
              <Typograpy variant="h1" component="h1">
                Présente-toi !
              </Typograpy>{" "}
              <Typograpy
                variant="body-base"
                component="p"
                theme="gray"
                className="max-w-md"
              >
                Dis-nous tout sur toi ! Remplis notre formulaire de présentation
                pour quon puisse mieux te connaître. On veut savoir qui tu es,
                ce que tu fais et comment tas atterri ici. Plus on en saura sur
                toi, mieux on pourra personnaliser ton expérience sur notre
                plateforme.
              </Typograpy>
            </div>

            <div className="space-y-4">
              <Typograpy variant="caption3" theme="gray">
                Pseudo
              </Typograpy>
              <Input
                placehoder="Indique ton pseudo"
                type="text"
                register={register}
                id="pseudo"
                required
                isLoading={false}
                errors={errors}
                errorMsg={"Champ requis"}
                isAutocompleted={false}
              />
              <Typograpy variant="caption3" theme="gray">
                Spécialité
              </Typograpy>
              <Input
                placehoder="Développeur font-end React..."
                type="text"
                register={register}
                id="specialite"
                required
                isLoading={false}
                errors={errors}
                errorMsg={"Champ requis"}
                isAutocompleted={false}
              />{" "}
              <Typograpy variant="caption3" theme="gray">
                Biographie
              </Typograpy>
              <Textarea
                id="biographie"
                placeholder="Indique une courte description de toi et ton parcours..."
                cols={10}
                rows={3}
                register={register}
                errors={errors}
                errorMsg="Ce champ est requis"
                required
                disabled={isLoadind}
              />
            </div>
          </div>
          <OnboardingFooter
            nextStep={nextStep}
            prevStep={prevStep}
            isLoading={false}
          />
        </div>
      </form>
    </Container>
  );
};

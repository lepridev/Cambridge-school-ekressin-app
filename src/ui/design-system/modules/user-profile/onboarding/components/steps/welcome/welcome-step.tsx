import { Typograpy } from "@/ui/design-system/typograpy/typography";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { Button } from "@/ui/design-system/button/button";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
import { Container } from "@/ui/components/container/container";
import { useAuth } from "@/context/authUserContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  nextStep?: () => void;
  prevStep?: () => void;
  isFirstStep?: () => boolean;
  isFinalStep?: () => boolean;
}
export const WelcomeStep = ({
  nextStep,
  prevStep,
  isFirstStep,
  isFinalStep,
}: Props) => {
  const router = useRouter();
  const { authUser } = useAuth();

  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  const checkOnboarding = () => {
    if (onboardingIsCompleted) {
      router.push("/mon-espace");
    }
  };

  useEffect(() => {
    checkOnboarding;
  });

  return (
    <Container>
      <div className="relative flex flex-col items-center justify-center h-screen">
        <div className="flex items-center justify-center">
          <div className="flex flex-col max-w-xl space-y-4">
            <Typograpy variant="h1" component="h1">
              Bienvenue sur l’appli des singes codeurs !
            </Typograpy>
            <Typograpy
              variant="body-base"
              component="p"
              theme="gray"
              className="max-w-md"
            >
              Viens traîner avec des développeurs aussi fous que toi, montre tes
              projets persos et reçois des feedbacks constructifs (ou fais-toi
              carrément descendre). Prêt à créer des trucs incroyables ?
            </Typograpy>
          </div>
          <div className="relative w-[660px] h-[625px] ">
            <Image
              fill
              src="/assets/svg/rocket.svg"
              alt="la rocket d'inscription"
              className="object-fit-down"
            />
          </div>
        </div>
        <OnboardingFooter
          isFirstStep={isFirstStep}
          nextStep={nextStep}
          isLoading={false}
        />
      </div>
    </Container>
  );
};

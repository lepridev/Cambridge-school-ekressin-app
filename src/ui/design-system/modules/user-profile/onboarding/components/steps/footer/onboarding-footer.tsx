import { BaseComponentProps, FormType } from "@/types/onboarding-step";
import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";
import { RiArrowRightLine } from "react-icons/ri";

interface Props {
  nextStep?: () => void;
  prevStep?: () => void;
  isFirstStep?: () => boolean;
  isFinalStep?: () => boolean;
  isLoading?: boolean;
}
export const OnboardingFooter = ({
  nextStep,
  prevStep,
  isFirstStep,
  isFinalStep,
  isLoading,
}: Props) => {
  let footerButtonTitle = "";

  if (isFirstStep && isFirstStep()) {
    footerButtonTitle = "Commencer";
  } else if (isFinalStep && isFinalStep()) {
    footerButtonTitle = "Terminer";
  } else {
    footerButtonTitle = "Continuer";
  }

  // if (form) {
  //   const { onSubmit, errors } = form;
  // }

  // console.log("OBForm", form);

  return (
    <div className="absolute bottom-0 left-0 border-t  border-gray-600 w-full p-5 ">
      <div
        className={clsx(
          "flex items-center",
          isFirstStep && "flex-start",
          nextStep && "justify-between",
          isFinalStep && "justify-end"
        )}
      >
        {prevStep && (
          <Button
            type="submit"
            disabled={isLoading}
            variant={isLoading ? "disabled" : "outline"}
            action={prevStep}
          >
            Retour
          </Button>
        )}

        {nextStep ? (
          <Button
            type="submit"
            isLoading={isLoading}
            action={nextStep}
            icon={isFirstStep && { icon: RiArrowRightLine }}
            iconPosition="right"
          >
            {footerButtonTitle}
          </Button>
        ) : (
          <Button isLoading={isLoading} type="submit">
            Terminer
          </Button>
        )}
      </div>
      {}
    </div>
  );
};

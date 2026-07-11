import { BaseComponentProps } from "@/types/onboarding-step";

export const OnboardingView = ({
  getCurrentStep,
  nextStep,
  prevStep,
  isFirstStep,
  isFinalStep,
  stepsList,
  form,
}: BaseComponentProps) => {
  const Component = getCurrentStep()?.component?.step;

  return (
    <div>
      {Component && (
        <Component
          getCurrentStep={getCurrentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          isFirstStep={isFirstStep}
          isFinalStep={isFinalStep}
          stepsList={stepsList}
          form={form}
        />
      )}
    </div>
  );

  return null;
};

export interface BaseComponentProps {
  getCurrentStep: () => onboardingStepProps | undefined;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: () => boolean;
  isFinalStep: () => boolean;
  stepsList: onboardingStepProps[];
  form: {};
}

export interface onboardingStepProps {
  id: number;
  label: string;
  component: {
    step: React.ComponentType<BaseComponentProps>;
  };
}

export interface FormType {
  onSubmit: any;
  errors: any;
  register: any;
  handleSubmit: any;
  setValue: any;
}

interface FormDataType {
  pseudo: string;
  specialite: string;
  biographie: string;
}

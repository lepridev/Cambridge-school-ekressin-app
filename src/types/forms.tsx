export interface FormType {
  control: any;
  onSubmit: any;
  errors: any;
  isLoading: boolean;
  register: any;
  handleSubmit: any;
  reset: any;
}

export interface RegisterFormFieldType {
  email: string;
  password: string;
  how_did_hear: string;
}

export interface LoginFormFieldType {
  email: string;
  password: string;
}

export interface ForgetPasswordFormFieldType {
  email: string;
}

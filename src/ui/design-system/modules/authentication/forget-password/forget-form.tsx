import { FormType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormType;
}

export const ForgetForm = ({ form }: Props) => {
  const { register, handleSubmit, errors, isLoading, onSubmit } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placehoder="johndoe@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="Ce champ est requis"
        id="email"
        required={true}
        isAutocompleted={false}
      />
      <Button type="submit" fullwidth isLoading={isLoading}>
        Envoyer
      </Button>
    </form>
  );
};

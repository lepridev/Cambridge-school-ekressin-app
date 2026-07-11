import { FormType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormType;
}

export const LoginForm = ({ form }: Props) => {
  const { register, handleSubmit, errors, onSubmit, isLoading } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        type="email"
        placehoder="johndoe@gmail.com"
        register={register}
        errors={errors}
        errorMsg="Ce champ est requis"
        isLoading={isLoading}
        id="email"
        isAutocompleted={false}
      />
      <Input
        type="password"
        placehoder="Mot de passe"
        register={register}
        errors={errors}
        errorMsg="Ce champ est requis"
        isLoading={isLoading}
        id="password"
        isAutocompleted={false}
      />
      <Button type="submit" fullwidth isLoading={isLoading}>
        Connexion
      </Button>
    </form>
  );
};

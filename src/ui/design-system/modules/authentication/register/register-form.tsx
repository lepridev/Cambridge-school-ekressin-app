import { FormType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
  form: FormType;
}

export const RegisterForm = ({ form }: Props) => {
  const { errors, control, register, handleSubmit, onSubmit, isLoading } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placehoder="johndoe@gmail.com"
        type="email"
        register={register}
        errors={errors}
        errorMsg="Il vous faut entrer un email"
        id="email"
        isAutocompleted={false}
      />
      <Input
        isLoading={isLoading}
        placehoder="Mot de passe"
        type="password"
        register={register}
        errors={errors}
        errorMsg="Ce Champ est requis !"
        id="password"
        isAutocompleted={false}
      />
      <Input
        isLoading={isLoading}
        placehoder="Confirmer le  mot de passe"
        type="password"
        register={register}
        errors={errors}
        errorMsg="Ce Champ est requis !"
        id="re-password"
        isAutocompleted={false}
      />
      <Input
        isLoading={isLoading}
        placehoder="Comment nous a tu connu ?"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Ce Champ est requis !"
        id="how_did_hear"
        isAutocompleted={false}
      />
      <Button fullwidth={true} isLoading={isLoading} type="submit">
        Sinscrire
      </Button>
    </form>
  );
};

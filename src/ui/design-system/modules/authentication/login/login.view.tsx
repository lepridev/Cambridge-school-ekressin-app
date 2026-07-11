import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./login-form";
import { FormType, LoginFormFieldType } from "@/types/forms";

interface Props {
  form: FormType;
}

export const LoginView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 md:mt-24 mb-32">
      <div className=" items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/connexion.png"
            alt="connexion"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex-col md:flex-row items-center justify-between">
            <div>
              <Typograpy variant="h5" component="h1">
                Connexion
              </Typograpy>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-2">
              <Typograpy
                variant="caption4"
                component="span"
                className="text-gray-600"
              >
                Tu n’as pas de compte ?
              </Typograpy>
              <Typograpy variant="caption4" component="span" theme="primary">
                <Link href="/connexion/inscription">S’inscrire</Link>
              </Typograpy>
            </div>
          </div>
          <LoginForm form={form} />
          <div>
            <Typograpy
              variant="caption4"
              component="div"
              theme="primary"
              className="text-center"
            >
              <Link href="/connexion/mot-de-passe-perdu">
                mot de passe perdu ?
              </Link>
            </Typograpy>
          </div>
        </Box>
      </div>
    </Container>
  );
};

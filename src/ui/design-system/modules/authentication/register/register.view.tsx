import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register-form";
import { FormType } from "@/types/forms";

interface Props {
  form: FormType;
}

export const RegisterView = ({ form }: Props) => {
  return (
    <Container className="md:grid flex flex-col md:grid-cols-2 gap-5 md:gap-20 md:mt-20 mb-32">
      <div className=" items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/inscription.png"
            alt="inscription"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex-col md:flex-row items-center justify-between">
            <div>
              <Typograpy variant="h5" component="h1">
                Inscription
              </Typograpy>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-2">
              <Typograpy
                variant="caption4"
                component="span"
                className="text-gray-600"
              >
                Tu as déjà un compte ?{" "}
              </Typograpy>
              <Typograpy variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typograpy>
            </div>
          </div>
          <RegisterForm form={form} />
          <div>
            <Typograpy
              variant="caption4"
              component="div"
              theme="gray"
              className="text-center"
            >
              <Typograpy
                variant="caption4"
                component="span"
                className="text-gray-600"
              >
                En t’inscrivant, tu acceptes
              </Typograpy>
              <br />
              les Conditions dutilisation et la Politique de confidentialité.
            </Typograpy>
          </div>
        </Box>
      </div>
    </Container>
  );
};

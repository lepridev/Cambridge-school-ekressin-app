import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import Link from "next/link";

import { ForgetForm } from "./forget-form";
import { FormType } from "@/types/forms";

interface Props {
  form: FormType;
}

export const PasswordForgetView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 mb-32">
      <div className=" items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/motdpasse.png"
            alt="connexion"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <div>
              <Typograpy variant="h5" component="h1">
                Mot de passe perdu ?
              </Typograpy>
            </div>
            <Typograpy variant="caption4" component="span" theme="primary">
              <Link href="/connexion">Connexion</Link>
            </Typograpy>
          </div>
          <ForgetForm form={form} />
        </Box>
      </div>
    </Container>
  );
};

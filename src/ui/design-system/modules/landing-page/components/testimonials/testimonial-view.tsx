import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import { scrollToBottom } from "@/utils/scroll";
import Image from "next/image";

export const TestimonialView = () => {
  return (
    <Container className="flex justify-between space-x-3 md:space-x-0 py-20">
      <div className="flex flex-col justify-center w-full md:w-1/2 space-y-10 ">
        <div className="flex items-center gap-2">
          <Logo size="small" />
          <Typograpy variant="caption2" component="span">
            CAMBRIDGE INTERNATIONAL SCHOOL EKRESSINVILLE
          </Typograpy>
        </div>
        <div className="max-w-2xl">
          <Typograpy variant="h2" component="h2" className="mb-5">
            Rejoins-nous vite...
          </Typograpy>
          <Typograpy variant="lead" component="p" className="mb-8 text-left ">
            Apprends l&apos;anglais et plonge-toi dans des cours immersifs qui
            te prépareront à un avenir international. En plus de l&apos;anglais,
            maîtrise l&apos;informatique grâce à des programmes modernes et
            innovants. N&apos;hésitez pas à nous contacter pour plus
            d&apos;informations ou pour organiser une visite de notre école.
            Nous serions ravis de vous accueillir et de répondre à toutes vos
            questions.
          </Typograpy>
          <Button type="button" action={scrollToBottom}>
            Contactez l&apos;école
          </Button>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center relative   w-1/2 ">
        <Image
          src="/assets/images/maternel.png"
          alt="illustration du slack"
          fill
          className="blur-3xl"
        />
        <Image
          src="/assets/images/WhatsApp Image 2024-06-14 at 09.08.06 (1).jpeg"
          alt="illustration du slack"
          fill
          className="object-scale-down "
        />
      </div>
    </Container>
  );
};

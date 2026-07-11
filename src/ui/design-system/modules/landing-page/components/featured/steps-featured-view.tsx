import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import Link from "next/link";
import {
  RiArrowDropRightFill,
  RiArrowDropRightLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

export const StepsFeaturedView = () => {
  return (
    <>
      <StepsElements />
    </>
  );
};

const StepsElements = () => {
  return (
    <Container className="md:py-24 p-5 space-y-3 md:space-y-7">
      <div className="flex flex-col md:flex-row justify-center gap-24">
        <div className="md:w-[520px] w-full h-[350px] relative mt-3 md:mt-10 ">
          <Image
            src="/assets/images/professeur.png"
            alt="illustration cake"
            fill
            className="rounded"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typograpy variant="h3" component="h2">
            Des professeurs qualifiés
          </Typograpy>
          <div className="space-y-3">
            <ListPoint>Expertise Pédagogique.</ListPoint>
            <ListPoint>Encadrement Personnalisé.</ListPoint>
            <ListPoint>Motivation et Inspiration.</ListPoint>
          </div>
          <div className="relative inline-block">
            <Link href={"/formations"}>
              <Button
                icon={{ icon: RiArrowDropRightLine }}
                iconPosition="right"
              >
                je m&apos;inscris
              </Button>
            </Link>
            <Image
              width={25}
              height={27}
              src="/assets/svg/mouse.svg"
              alt="mouse indication"
              className="absolute -bottom-4 right-5"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row-reverse gap-24">
        <div className="md:w-[520px] w-full h-[350px] relative mt-10 ">
          <Image src="/assets/svg/compass.svg" alt="illustration cake" fill />
        </div>
        <div className="max-w-md space-y-7">
          <Typograpy variant="h3" component="h2">
            Administration de pointe
          </Typograpy>
          <div className="space-y-3">
            <ListPoint>Efficacité Organisationnelle</ListPoint>
            <ListPoint>Communication Transparente </ListPoint>
            <ListPoint>Soutien aux Éleves et aux Enseignants</ListPoint>
          </div>
          <div className="relative inline-block">
            <Link href={"/formations"}>
              <Button
                variant="secondary"
                icon={{ icon: RiArrowDropRightLine }}
                iconPosition="right"
              >
                je m&apos;inscris
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface Props {
  children: React.ReactNode;
}

const ListPoint = ({ children }: Props) => {
  return (
    <div className="flex items-start gap-2">
      <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
      <Typograpy variant="body-lg" component="span">
        {children}
      </Typograpy>
    </div>
  );
};

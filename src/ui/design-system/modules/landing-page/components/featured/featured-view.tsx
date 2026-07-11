import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { RiArrowRightLine } from "react-icons/ri";
import { SocialNetWorksButton } from "@/ui/components/navigation/social-networks-buttons";
import Link from "next/link";

interface FeaturedProps {
  label: string;
  image: string;
  text: string;
  alt: string;
}

const data: FeaturedProps[] = [
  {
    label: "Cadre ideal",
    image: "/assets/images/WhatsApp Image 2024-06-14 at 09.08.31 (5).jpeg",
    text: "un cadre idéal pour l'apprentissage et l'épanouissement personnel.",
    alt: "disquette",
  },
  {
    label: "Des airs de jeux",
    image: "/assets/images/WhatsApp Image 2024-06-14 at 09.08.07 (1).jpeg",
    text: "Équipées de structures modernes et sécurisées, nos aires de jeux permettent aux enfants de développer leur motricité tout en s'amusant.",
    alt: "Jeux videos",
  },
  {
    label: "Un complexe sportif",
    image: "/assets/images/activitepiscine.jpeg",
    text: "Grâce à notre complexe sportif, nous favorisons non seulement la santé physique mais aussi l'esprit d'équipe et la discipline.",
    alt: "audience",
  },
  {
    label: "Des salles spacieuses",
    image: "/assets/images/WhatsApp Image 2024-06-14 at 09.08.30 (3).jpeg",
    text: "Nos salles de classe spacieuses sont conçues pour offrir un environnement de travail confortable et stimulant.",
    alt: "avoir des repères",
  },
];

export const FeaturedView = () => {
  const landingContents = data.map((landingContent) => (
    <div
      key={uuidv4()}
      className="flex flex-col justify-center items-center bg-white rounded p-7"
    >
      <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative rounded-full mb-6 p-10 bg-gray-500 overflow-hidden ">
        <Image
          src={landingContent.image}
          alt={landingContent.alt}
          fill
          className="blur-2xl"
        />

        <Image
          src={landingContent.image}
          alt={landingContent.alt}
          fill
          className="absolute object-cover"
        />
      </div>
      <Typograpy
        variant="lead"
        component="h3"
        weight="medium"
        className="mb-2.5 "
      >
        {landingContent.label}
      </Typograpy>
      <Typograpy variant="body-base" component="p" className=" text-center">
        {landingContent.text}
      </Typograpy>
    </div>
  ));

  return (
    <div className="bg-gray-300">
      <Container className=" md:grid md:grid-cols-12 md:py-24 md:gap-24 py-12  flex flex-col-reverse">
        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-7 gap-3 md:gap-7">
          {landingContents}
        </div>
        <div className="col-span-5 flex flex-col justify-between gap-40">
          <div className="mb-5">
            <Typograpy variant="h3" component="h3" className="mb-5">
              L’endroit le plus cool pour apprendre
            </Typograpy>
            <Typograpy
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8"
            >
              Nous offrons un cadre idéal pour l&apos;apprentissage. Notre école
              crée une atmosphère paisible et inspirante. Les Elèves peuvent se
              concentrer sur leurs études dans un environnement serein, propice
              à la réflexion et à la créativité.
            </Typograpy>
            <Link href={"/formations"}>
              <Button
                variant="secondary"
                iconPosition="right"
                icon={{ icon: RiArrowRightLine }}
              >
                Je m&apos;inscris maintenant
              </Button>
            </Link>
          </div>
          <div className="hidden md:block">
            <Typograpy variant="caption3" theme="gray" className="mb-3">
              Nos réseaux sociaux
            </Typograpy>
            <SocialNetWorksButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

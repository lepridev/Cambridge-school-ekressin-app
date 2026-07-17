import { Container } from "@/ui/components/container/container";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import { RiPlayCircleFill } from "react-icons/ri";

export const VideoView = () => {
  return (
    <div className="bg-gray-400">
      <Container className="md:py-20 p-10">
        <div className="flex flex-col justify-center text-center space-y-4">
          <Typograpy variant="h2" component="h2">
            COURS D&apos;ANGLAIS TOUT AU LONG DE L&apos;ANNÉE SCOLAIRE
          </Typograpy>
          <Typograpy
            variant="lead"
            component="p"
            weight="medium"
            className="text-gray-700"
          >
            Apprends l&apos;anglais de manière interactive pendant toute l&apos;année
          </Typograpy>
          <Typograpy variant="caption3" component="p" theme="gray">
            Nos cours d&apos;anglais complets sont conçus pour aider les élèves
            à développer leurs compétences linguistiques durant l&apos;année scolaire.
            Grâce à des leçons interactives, des activités engageantes et un
            accompagnement personnalisé, nous guidons les apprenants vers la
            maîtrise de la langue. Que vous partiez de zéro ou que vous souhaitiez
            perfectionner vos compétences, nos programmes s&apos;adaptent à tous les
            niveaux et à tous les rythmes d&apos;apprentissage.
          </Typograpy>
        </div>
        <div className="md:w-[100%] w-[100%] h-[200px] relative md:h-[626px] md:mt-10">
          {/* <div className="bg-gray absolute w-full h-full  z-10 opacity-0 hover:opacity-75 animate rounded text-white flex flex-col justify-center items-center">
            <RiPlayCircleFill
              size={50}
              className="cursor-pointer hover:scale-150 animate"
            />
            <Typograpy variant="h5" component="p" theme="white">
              Voir la vidéo.
            </Typograpy>
          </div> */}

          <Image
            src="/assets/images/heroPhoto1.jpeg"
            alt="Cours d&apos;anglais pour l&apos;année scolaire"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </Container>
    </div>
  );
};
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
            COURS DE VACANCES EN ANGLAIS
          </Typograpy>
          <Typograpy
            variant="lead"
            component="p"
            weight="medium"
            className="text-gray-700"
          >
            Apprends anglais de manière interactive
          </Typograpy>
          <Typograpy variant="caption3" component="p" theme="gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            esse dolorem possimus ut architecto error placeat iure eum?
            Repellendus placeat itaque sequi ipsa delectus aut praesentium
            nulla, nisi alias dignissimos!
          </Typograpy>
        </div>
        <div className="md:w-[100%] w-[100%] h-[200px] relative md:h-[626px] rounded md:mt-10">
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
            src="/assets/images/vacances.jpeg"
            alt="suivre le cours pour mieux appréhender le concepte"
            fill
            className="rounded object-contain"
          />
        </div>
      </Container>
    </div>
  );
};

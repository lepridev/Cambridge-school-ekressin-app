import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import Link from "next/link";

export const HeroTopView = () => {
  return (
    <Container className="mt-20 p-10 md:pt-40 pb-10 md:pb-52 overflow-hidden">
      {/* Grille pour une disposition proportionnelle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Colonne texte - prend 1/2 de l'espace */}
        <div className="space-y-6">
          <Typograpy variant="h1" component="h1" className="max-w-lg">
            Rejoins-nous à Cambridge International School Ekressinville !
          </Typograpy>
          <Typograpy
            variant="body-lg"
            component="p"
            theme="gray"
            className="max-w-xl"
          >
            À la Cambridge International School d&apos;Ekressinville, nous offrons
            un cadre idéal pour l&apos;apprentissage. Notre école crée une
            atmosphère paisible et inspirante. Les élèves peuvent se concentrer
            sur leurs études dans un environnement serein, propice à la réflexion
            et à la créativité. Chaque coin de notre ecole est pensé pour stimuler
            l&apos;esprit et encourager l&apos;excellence académique.
          </Typograpy>
          
          <div className="space-x-4">
            <Link href="/formations">
              <Button>Reservation</Button>
            </Link>
            <Link href="/projet">
              <Button variant="secondary">En savoir plus</Button>
            </Link>
          </div>
        </div>

        {/* Colonne image - prend l'autre 1/2 */}
        <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 md:ml-auto">
          <Image
            src="/assets/images/heroPhoto1.jpeg"
            alt="illustration de ma progression en developpement Front-end"
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Container>
  );
};
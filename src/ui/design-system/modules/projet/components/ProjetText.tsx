import { Container } from "@/ui/components/container/container";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import React from "react";

type Props = {};

const ProjetText = (props: Props) => {
  return (
    <div>
      <Container className={"mt-24"}>
        <div>
          <Typograpy variant="h4" weight="medium">
            Projet Éducatif de la Cambridge International School
            d&lsquo;Ekressinville
          </Typograpy>
          <Typograpy
            className="ml-5 mt-2 text-center"
            variant="body-base"
            weight="medium"
          >
            À la Cambridge International School d&lsquo;Ekressinville, notre
            projet éducatif est conçu pour offrir à chaque élève une expérience
            d&apos;apprentissage enrichissante et dynamique. Voici les atouts
            clés qui font la différence dans notre approche :
          </Typograpy>
        </div>
        <div className="my-3 space-y-7">
          <div></div>
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Matériel Pédagogique Moderne
            </Typograpy>
            <Typograpy variant="body-sm">
              Nous disposons d’un matériel pédagogique à la pointe de la
              technologie, incluant des tableaux interactifs, des ressources
              numériques et des manuels actualisés. Cela permet aux enseignants
              d&apos;utiliser des méthodes d’enseignement variées et
              engageantes, rendant chaque leçon captivante pour les élèves.
            </Typograpy>
          </div>
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Salles de Classe Spacieuses
            </Typograpy>
            <Typograpy variant="body-sm">
              Nos salles de classe sont conçues pour favoriser un apprentissage
              collaboratif et interactif. Leur espace généreux permet aux élèves
              de travailler en groupes, d’échanger des idées et de participer
              activement aux activités pédagogiques.
            </Typograpy>
          </div>
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Équipe Pédagogique Qualifiée
            </Typograpy>
            <Typograpy variant="body-sm">
              Nos professeurs expérimentés et passionnés sont formés aux
              meilleures pratiques pédagogiques. Ils s&apos;engagent à créer un
              environnement d&apos;apprentissage positif, en adaptant leurs
              méthodes aux besoins de chaque élève pour garantir une réussite
              individuelle.
            </Typograpy>
          </div>
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Programme Bilingue
            </Typograpy>
            <Typograpy variant="body-sm">
              Nous offrons un programme éducatif bilingue, permettant aux élèves
              de maîtriser l&apos;anglais et la langue locale. Cette compétence
              linguistique est un atout majeur pour leur avenir académique et
              professionnel dans un monde de plus en plus connecté.
            </Typograpy>
          </div>
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Complexe Sportif Complet
            </Typograpy>
            <Typograpy variant="body-sm">
              Notre complexe sportif offre une variété d&apos;activités
              physiques, favorisant le développement physique et l&apos;esprit
              d&apos;équipe. Les cours de sport sont intégrés au programme
              éducatif, encourageant les élèves à adopter un mode de vie sain.
            </Typograpy>
          </div>{" "}
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Aires de Jeux Sécurisées
            </Typograpy>
            <Typograpy variant="body-sm">
              Les aires de jeux modernes et sécurisées sont conçues pour le
              développement physique et social des élèves. Ces espaces
              permettent aux enfants de se divertir tout en apprenant à
              collaborer et à respecter les autres.
            </Typograpy>
          </div>
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Excursion
            </Typograpy>
            <Typograpy variant="body-sm">
              L&apos;école oraganise des excursions chaque année pour permettre
              aux élèves de decouvrir d&apos;autres horizons
            </Typograpy>
          </div>
          <div>
            <Typograpy className="" variant="lead" weight="medium">
              Engagement envers la Communauté
            </Typograpy>
            <Typograpy variant="body-sm">
              Nous encourageons les élèves à participer à des projets
              communautaires, renforçant ainsi leur sens de la responsabilité
              sociale et leur engagement envers leur environnement. Ces
              expériences pratiques leur permettent de devenir des citoyens
              actifs et responsables.
            </Typograpy>
          </div>
          <div>
            <Typograpy variant="body-lg">
              En choisissant la Cambridge International School
              d&apos;Ekressinville, vous offrez à votre enfant un parcours
              éducatif enrichissant, soutenu par des ressources modernes et une
              équipe pédagogique dédiée. Ensemble, nous préparons nos élèves à
              relever les défis de demain !
            </Typograpy>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjetText;

import { Container } from "@/ui/components/container/container";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import React from "react";
import { 
  RiInvisionLine, 
  RiAtLine, 
  RiBookOpenLine, 
  RiUserStarLine,
  RiShieldCheckLine,
  RiStarLine,
  RiLightbulbLine,
  RiHeartPulseLine,
  RiUserHeartLine
} from "react-icons/ri";

type Props = {};

const PresentationText = (props: Props) => {
  return (
    <div>
      {/* Hero Banner avec titre responsive */}
      <div className="relative w-full md:min-h-[500px] h-[300px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <Typograpy
            variant="display"
            theme="white"
            className="text-xl sm:text-xl md:text-7xl lg:text-8xl font-bold text-center"
            component="h1"
          >
            Présentation
          </Typograpy>
        </div>
        <Image
          src={"/assets/images/banner2.jpg"}
          alt="Cambridge School"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <Container className="mt-8 md:mt-20">
        {/* Section titre */}
        <div className="mb-8 md:mb-12">
          <Typograpy 
            variant="h3" 
            weight="medium" 
            component="h2"
            className="text-primary text-2xl md:text-3xl"
          >
            QUI SOMMES-NOUS ?
          </Typograpy>
          <div className="w-16 md:w-20 h-1 bg-primary mt-2 rounded-full" />
          <Typograpy variant="body-base" className="mt-4 text-gray-600">
            Cambridge International School Ekressinville est une institution d'excellence 
            dédiée à former la prochaine génération de leaders africains.
          </Typograpy>
        </div>

        <div className="space-y-6 md:space-y-10">
          {/* VISION */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border-l-4 border-primary hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 rounded-full p-2 md:p-3">
                <RiInvisionLine className="text-primary text-xl md:text-2xl" />
              </div>
              <Typograpy variant="h4" weight="medium" className="text-primary text-lg md:text-xl">
                VISION
              </Typograpy>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-sm md:text-base">✦</span>
                <span>Offrir une éducation de classe mondiale aux élèves de la communauté ouest-africaine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-sm md:text-base">✦</span>
                <span>Former des leaders polyvalents grâce à une éducation aux normes internationales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-sm md:text-base">✦</span>
                <span>Rendre les élèves francophones bilingues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 text-sm md:text-base">✦</span>
                <span>Inculquer l'intégrité et la probité dès le plus jeune âge</span>
              </li>
            </ul>
          </div>

          {/* OBJECTIFS */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border-l-4 border-secondary hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary/10 rounded-full p-2 md:p-3">
                <RiAtLine className="text-secondary text-xl md:text-2xl" />
              </div>
              <Typograpy variant="h4" weight="medium" className="text-secondary text-lg md:text-xl">
                OBJECTIFS
              </Typograpy>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1 text-sm md:text-base">✦</span>
                <span>Rendre le système éducatif occidental accessible aux États francophones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1 text-sm md:text-base">✦</span>
                <span>Former des leaders d'exception ayant un impact positif à l'échelle mondiale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1 text-sm md:text-base">✦</span>
                <span>Favoriser la coexistence entre les États francophones et anglophones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1 text-sm md:text-base">✦</span>
                <span>Créer des emplois et des opportunités d'affaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1 text-sm md:text-base">✦</span>
                <span>Former des élèves intègres, disciplinés et responsables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1 text-sm md:text-base">✦</span>
                <span>Révéler les talents cachés des élèves pour répondre aux défis modernes</span>
              </li>
            </ul>
          </div>

          {/* CODE DE CONDUITE - ÉLÈVES */}
          <div className="bg-gray-50 rounded-xl p-4 md:p-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="bg-primary/10 rounded-full p-2 md:p-3">
                <RiBookOpenLine className="text-primary text-xl md:text-2xl" />
              </div>
              <Typograpy variant="h4" weight="medium" className="text-primary text-lg md:text-xl">
                CODE DE CONDUITE - ÉLÈVES
              </Typograpy>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {[
                "Heure d'arrivée : 7h00",
                "Respecter toutes les règles de l'école",
                "Faire preuve de courtoisie en tout temps",
                "Adopter un comportement responsable",
                "Absence de 4 jours consécutifs = sanction",
                "Non-paiement des frais = exclusion",
                "Menu scolaire obligatoire",
                "Fraude aux examens = sanction",
                "Équipements scolaires : permission requise",
                "Toute question passe par le professeur",
                "Tenue scolaire obligatoire",
                "Préparer les cours et devoirs",
                "Participation obligatoire aux activités",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 bg-white p-2 md:p-3 rounded-lg shadow-sm">
                  <span className="text-primary text-sm md:text-base">•</span>
                  <Typograpy variant="caption1" className="text-gray-700">
                    {item}
                  </Typograpy>
                </div>
              ))}
            </div>
          </div>

          {/* CODE DE CONDUITE - ENSEIGNANTS */}
          <div className="bg-gray-50 rounded-xl p-4 md:p-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="bg-secondary/10 rounded-full p-2 md:p-3">
                <RiUserStarLine className="text-secondary text-xl md:text-2xl" />
              </div>
              <Typograpy variant="h4" weight="medium" className="text-secondary text-lg md:text-xl">
                CODE DE CONDUITE - ENSEIGNANTS
              </Typograpy>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {[
                "Arrivée : 7h00 - Départ : 16h00",
                "Tenue correcte exigée",
                "Préparer les leçons à l'avance",
                "Noter et corriger les exercices",
                "Pas de remarque désobligeante",
                "Pas de conversation privée pendant les cours",
                "Anglais obligatoire",
                "Pas de commerce sur le campus",
                "Pas de sortie sans permission",
                "Pas de punition corporelle",
                "Pas de harcèlement ou intimidation",
                "Pas d'isolément des élèves",
                "Pas d'humiliation publique",
                "Pas de harcèlement sexuel",
                "Pas de favoritisme",
                "Absence justifiée par certificat médical",
                "Absence 3 semaines = suspension",
                "Pas d'usage du nom de l'école à des fins personnelles",
                "Pas de drogue ou alcool sur le lieu de travail",
                "Pas de collecte d'argent non autorisée",
                "Téléphone en mode silencieux",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 bg-white p-2 md:p-3 rounded-lg shadow-sm">
                  <span className="text-secondary text-sm md:text-base">•</span>
                  <Typograpy variant="caption1" className="text-gray-700">
                    {item}
                  </Typograpy>
                </div>
              ))}
            </div>
          </div>

          {/* MISSION PRÉSCOLAIRE */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 rounded-full p-2 md:p-3">
                <RiHeartPulseLine className="text-primary text-xl md:text-2xl" />
              </div>
              <Typograpy variant="h4" weight="medium" className="text-primary text-lg md:text-xl">
                MISSION PRÉSCOLAIRE
              </Typograpy>
            </div>
            <div className="space-y-3 text-gray-700 text-sm md:text-base">
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">✦</span>
                <span>Favoriser l'amour de l'apprentissage et encourager la découverte</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">✦</span>
                <span>Développer des individus confiants, responsables et craignant Dieu</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">✦</span>
                <span>Créer un environnement d'apprentissage heureux, sécurisé et stimulant</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">✦</span>
                <span>Offrir un environnement inclusif pour les tout-petits et les enfants d'âge scolaire</span>
              </p>
            </div>
          </div>

          {/* NOTRE PHILOSOPHIE */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 rounded-full p-2 md:p-3">
                <RiLightbulbLine className="text-white text-xl md:text-2xl" />
              </div>
              <Typograpy variant="h4" theme="white" weight="medium" className="text-lg md:text-xl">
                NOTRE PHILOSOPHIE ÉDUCATIVE
              </Typograpy>
            </div>
            <div className="space-y-3 text-white/90 text-sm md:text-base">
              <p>• Notre objectif est de soutenir et de nourrir le désir naturel d'apprendre tout au long de la vie</p>
              <p>• Une communauté où chaque enfant se sent aimé, respecté et encouragé</p>
              <p>• Une éducation de qualité dans un environnement sécurisé, respectueux et inclusif</p>
              <p>• Un programme éducatif centré sur l'enfant qui développe l'autonomie, la confiance et la résilience</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-6 md:py-8">
            <Typograpy variant="body-lg" className="text-gray-600">
              Rejoignez-nous dans notre mission d'excellence éducative
            </Typograpy>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PresentationText;
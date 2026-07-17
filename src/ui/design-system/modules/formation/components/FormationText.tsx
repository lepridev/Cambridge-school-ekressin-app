import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import { ImFilePdf } from "react-icons/im";
import {
  RiArrowRightLine,
  RiArtboardFill,
  RiCheckFill,
  RiFilePdfLine,
  RiDownloadLine,
  RiFileListLine,
} from "react-icons/ri";
import { jsPDF } from "jspdf";
import Image from "next/image";
import { useState } from "react";

type Props = {};

const FormationText = (props: Props) => {
  const [downloading, setDownloading] = useState<string | null>(null);

  const data = [
    {
      name: "Documents à fournir",
      lien: "https://i.ibb.co/r65GN6s/piecesafournies-2.png",
      description: "Liste complète des documents requis",
    },
    {
      name: "Fiche d'engagement - Page 1",
      lien: "https://i.ibb.co/SVDC1qq/CAMBRIDGE1.jpg",
      description: "Formulaire d'inscription",
    },
    {
      name: "Fiche d'engagement - Page 2",
      lien: "https://i.ibb.co/Xy0C3gD/CAMBRIDGE2.jpg",
      description: "Suite du formulaire d'inscription",
    },
  ];

  const downloadFile = async (link: string, name: string) => {
    setDownloading(name);
    try {
      const pdf = new jsPDF("portrait", "px", "a4", false);
      pdf.addImage(link, "PNG", 0, 0, 500, 550);
      pdf.save(`${name}.pdf`);
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error);
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div>
      {/* Hero Banner avec titre plus grand */}
      <div className="relative w-full md:min-h-[500px] h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Typograpy
            variant="display"
            theme="white"
            className="text-xl md:text-7xl lg:text-8xl font-bold text-center px-4 max-w-4xl"
            component="h1"
          >
            Devenir élève
          </Typograpy>
        </div>
        <Image
          src={"/assets/images/banner3p.jpg"}
          alt="Cambridge School"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <Container className="mt-12 md:mt-20">
        {/* Section d'inscription */}
        <div className="mb-10">
          <Typograpy 
            variant="h3" 
            weight="medium" 
            component="h2"
            className="text-primary"
          >
            S`&apos;`inscrire à Cambridge International School
          </Typograpy>
          <div className="w-20 h-1 bg-primary mt-2 rounded-full" />
        </div>

        <div className="space-y-8">
          {/* PRIMAIRE & PRE-SCOLAIRE */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-primary">
            <Typograpy 
              variant="h4" 
              weight="medium" 
              className="text-primary flex items-center gap-2 mb-4"
            >
              <span className="text-2xl">📚</span> PRIMAIRE & PRE-SCOLAIRE
            </Typograpy>
            <Typograpy variant="body-lg" className="text-gray-700 leading-relaxed">
              Les inscriptions et réinscriptions débuteront à compter du <strong>05 Août</strong> 
              jusqu`&apos;`au <strong>30 septembre</strong> sous réserve du nombre de places disponibles 
              pour toutes les classes. Bien que présentant les mêmes formalités 
              administratives, les conditions de réinscription des anciens 
              élèves diffèrent quelque peu des cas d`&apos;`inscription de nouveaux élèves.
            </Typograpy>
          </div>

          {/* Modalités d'accès */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <Typograpy 
              variant="h4" 
              weight="medium" 
              className="flex items-center gap-3 mb-6"
            >
              <RiArtboardFill className="text-primary text-2xl" />
              Modalités d`&apos;`accès
            </Typograpy>

            <div className="space-y-6 ml-4 md:ml-8">
              {/* Test d'entrée */}
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <RiCheckFill className="text-primary text-xl" />
                  </div>
                  <div>
                    <Typograpy variant="body-lg" weight="medium">
                      Test d`&apos;`entrée <span className="text-sm font-normal text-gray-500">(Nouveau inscrit)</span>
                    </Typograpy>
                    <Typograpy variant="body-base" className="mt-2 text-gray-700">
                      L`&apos;`inscription de nouveaux élèves du CP2 au CM2 est soumise à un test de recrutement.
                    </Typograpy>
                  </div>
                </div>
              </div>

              {/* Condition d'admission */}
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <RiCheckFill className="text-primary text-xl" />
                  </div>
                  <div>
                    <Typograpy variant="body-lg" weight="medium">
                      Condition d`&apos;`admission <span className="text-sm font-normal text-gray-500">(Ancien élève)</span>
                    </Typograpy>
                    <Typograpy variant="body-base" className="mt-2 text-gray-700">
                      Sont autorisés à se réinscrire les élèves ayant obtenu une moyenne supérieure ou égale à 5 sur 10.
                    </Typograpy>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents à télécharger */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <Typograpy variant="h4" weight="medium" className="flex items-center gap-3">
                <RiFileListLine className="text-primary text-2xl" />
                Documents à télécharger
              </Typograpy>
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                <ImFilePdf className="text-red-500" />
                <span>{data.length} documents disponibles</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Typograpy variant="body-base" weight="medium" className="mb-1">
                        {item.name}
                      </Typograpy>
                      {item.description && (
                        <Typograpy variant="caption1" theme="gray" className="text-xs">
                          {item.description}
                        </Typograpy>
                      )}
                    </div>
                    <button
                      onClick={() => downloadFile(item.lien, item.name)}
                      disabled={downloading === item.name}
                      className="ml-3 p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                      title="Télécharger"
                    >
                      {downloading === item.name ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <RiDownloadLine className="text-lg" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents requis */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <Typograpy variant="h4" weight="medium" className="mb-6">
              Documents requis
            </Typograpy>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <Typograpy variant="body-lg" weight="medium" className="text-primary mb-3">
                  For Day Care, KG1 & KG2 pupils
                </Typograpy>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    01 Extrait de naissance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    01 carnet de vaccination BCG-Rougeole-Tétanos-Fièvre jaune
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm">
                <Typograpy variant="body-lg" weight="medium" className="text-primary mb-3">
                  For Level 1 - 5 pupils
                </Typograpy>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    01 Extrait de naissance copie originale
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    01 carnet de vaccination BCG-Rougeole-Tétanos-Fièvre jaune
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    01 Attestation et le dernier bulletin
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg p-5 shadow-sm">
              <Typograpy variant="body-lg" weight="medium" className="text-primary mb-3">
                Fournitures pour les Classes: Day Care, KG1, KG2
              </Typograpy>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
                <div>• 01 pièce de savon BF</div>
                <div>• 04 savons de toilette</div>
                <div>• 04 bouteilles de Dettol/Carmel</div>
                <div>• 01 paquet papier hygiénique</div>
                <div>• 01 bouteille d`&apos;`eau</div>
                <div>• 01 assiette/cuillère/verre en plastique</div>
              </div>
            </div>
          </div>

          {/* Tableaux des frais - version simplifiée */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-primary p-4">
              <Typograpy variant="h4" theme="white" weight="medium">
                Frais de Scolarité
              </Typograpy>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Description</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Primary: Level 1-5</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Day Care, KG1 & KG2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Tuition</td>
                    <td className="px-4 py-3">360 000 FCFA</td>
                    <td className="px-4 py-3">360 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Canteen</td>
                    <td className="px-4 py-3">180 000 FCFA</td>
                    <td className="px-4 py-3">180 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Text books</td>
                    <td className="px-4 py-3">100 000 FCFA</td>
                    <td className="px-4 py-3">50 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Admission</td>
                    <td className="px-4 py-3">320 000 FCFA</td>
                    <td className="px-4 py-3">270 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">November</td>
                    <td className="px-4 py-3">64 000 FCFA</td>
                    <td className="px-4 py-3">54 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">December</td>
                    <td className="px-4 py-3">64 000 FCFA</td>
                    <td className="px-4 py-3">54 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">January</td>
                    <td className="px-4 py-3">64 000 FCFA</td>
                    <td className="px-4 py-3">54 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">February</td>
                    <td className="px-4 py-3">64 000 FCFA</td>
                    <td className="px-4 py-3">54 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">March</td>
                    <td className="px-4 py-3">64 000 FCFA</td>
                    <td className="px-4 py-3">54 000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Frais annexes */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-secondary p-4">
              <Typograpy variant="h4" theme="white" weight="medium">
                Frais Annexes
              </Typograpy>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Articles</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Day Care, KG1 & KG2</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Level 1 - Level 5</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Sports wear</td>
                    <td className="px-4 py-3">5 000 FCFA</td>
                    <td className="px-4 py-3">5 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">School uniform</td>
                    <td className="px-4 py-3">5 000 x 2 FCFA</td>
                    <td className="px-4 py-3">5 000 x 2 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">T-shirt (polo) Thursday wear</td>
                    <td className="px-4 py-3">5 000 FCFA</td>
                    <td className="px-4 py-3">5 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Insurance</td>
                    <td className="px-4 py-3">1 000 FCFA</td>
                    <td className="px-4 py-3">1 000 FCFA</td>
                  </tr>
                  <tr className="hover:bg-gray-50 font-medium bg-gray-50">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3">21 000 FCFA</td>
                    <td className="px-4 py-3">21 000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FormationText;
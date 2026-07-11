import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className=" flex items-center overflow-hidden justify-between bg-primary md:px-40 py-12">
      <Container className="relative h-[300px] flex-col md:flex-row max-w-3xl">
        <div className=" flex-row space-y-6 w-full ">
          <Typograpy variant="h4" theme="white" component="h3">
            N&apos;attendez plus pour réserver vos places ! Les inscriptions
            sont ouvertes et il est temps de rejoindre notre communauté
            dynamique à la Cambridge International School d&apos;Ekressinville.
          </Typograpy>
          <div>
            <Link href={"/formations"}>
              <Button size="medium" variant="success">
                Faire une reservation...
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-[250px] w-[408px] absolute -bottom-15 right-0 ">
          <Image
            fill
            src="/assets/svg/bomb.svg"
            alt="illustration d'une bombe"
            className="blur-3xl"
          />
          <Image
            fill
            src="/assets/svg/bomb.svg"
            alt="illustration d'une bombe"
          />
        </div>
      </Container>
    </div>
  );
};

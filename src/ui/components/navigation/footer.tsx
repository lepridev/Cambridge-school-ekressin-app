import { Container } from "../container/container";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 } from "uuid";
import ActiveLink from "./active-link";
import { FooterTitles } from "@/types/app-links";
import { SocialNetWorksButton } from "./social-networks-buttons";

type Props = {};

const Footer = ({}: Props) => {
  const currentYear = new Date().getUTCFullYear();

  const footerNavList = footerLinks.map((column) => (
    <FooterLink key={v4()} data={column} />
  ));

  return (
    <div className="bg-gray ">
      <Container className="flex flex-col md:flex-row justify-between w-full pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typograpy variant="caption1" theme="white" weight="medium">
            Ecole Primaire Bilingue
          </Typograpy>
          <Typograpy variant="caption3" theme="gray">
            Programme Britanique
          </Typograpy>
          <a href="http://youtube.com/@lepriarmand1368" target="_blank">
            <Image
              src="/assets/images/cambridge.png"
              alt="chaine Youtube"
              width={229}
              height={216}
            />
          </a>
          <Typograpy component="p" variant="body-base" theme="white">
            +225 07 87 72 00 80
          </Typograpy>
          <Typograpy component="p" variant="body-base" theme="white">
            +225 05 64 36 87 03
          </Typograpy>
        </div>
        {/* Liste de Liens */}
        <div className="flex flex-col md:flex-row  items-center  justify-center w-full gap-7">
          {footerNavList}
        </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11 w-full">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typograpy variant="caption4" theme="gray" className="text-center">
            {`Copyright © ${currentYear} | CAMBRIDGE INTERNATIONAL SCHOOL EKRESSINVILLE - C.I`}
          </Typograpy>
          <div className="hidden md:block">
            <SocialNetWorksButton
              theme="gray"
              className="flex items-center gap-2.5"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterTitles;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={v4()}>
      {link.type === "interne" && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === "externe" && <a href={link.baseUrl}>{link.label}</a>}
    </div>
  ));

  return (
    <div className="w-full text-center md:min-w-[160px]">
      <Typograpy
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-4"
      >
        {data.label}
      </Typograpy>
      <Typograpy theme="gray" variant="caption3" className="space-y-4">
        {linkList}
      </Typograpy>
    </div>
  );
};

export default Footer;

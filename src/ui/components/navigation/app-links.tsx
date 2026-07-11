import { FooterLinks, FooterTitles } from "@/types/app-links";
import {
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiSlackFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";

export const applinks: FooterLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "interne",
  },
  {
    label: "Présentation",
    baseUrl: "/presentation",
    type: "interne",
  },
  {
    label: "Devenir élève",
    baseUrl: "/formations",
    type: "interne",
  },
  {
    label: "Projet éducatif",
    baseUrl: "/projet",
    type: "externe",
  },
];

export const userslinks: FooterLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "interne",
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "interne",
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "interne",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/connexion/mot-de-passe-perdu",
    type: "externe",
  },
];

export const informationlinks: FooterLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "interne",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "interne",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "interne",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "externe",
  },
];

export const Sociallinks: FooterLinks[] = [
  {
    label: "Facebook",
    baseUrl: "/#",
    type: "interne",
    icon: RiFacebookBoxFill,
  },
  {
    label: "Linkedin",
    baseUrl: "/#",
    type: "interne",
    icon: RiLinkedinFill,
  },
  {
    label: "whatsapp",
    baseUrl: "/#",
    type: "interne",
    icon: RiWhatsappFill,
  },
];

export const footerLinks: FooterTitles[] = [
  {
    label: "App",
    links: applinks,
  },
  {
    label: "Utilisateurs",
    links: userslinks,
  },
  {
    label: "Informations",
    links: informationlinks,
  },
  {
    label: "Réseaux",
    links: Sociallinks,
  },
];

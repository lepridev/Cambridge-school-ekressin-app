import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons";

export interface FooterLinks {
  label: string;
  baseUrl: string;
  type: LinkType;
  icon?: IconType;
}

export interface FooterTitles {
  label: string;
  links: FooterLinks[];
}

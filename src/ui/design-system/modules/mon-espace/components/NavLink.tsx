"use client";

import { FaMailchimp, FaHome } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typograpy } from "@/ui/design-system/typograpy/typography";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Accueil", href: "/mon-espace", icon: FaHome },
  {
    name: "Messages",
    href: "/mon-espace/messages",
    icon: FaMailchimp,
  },
  { name: "Paramètres", href: "/mon-espace/setting", icon: AiFillSetting },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" size={30} />
            <Typograpy variant="body-base" className="hidden md:block">
              {link.name}
            </Typograpy>
          </Link>
        );
      })}
    </>
  );
}

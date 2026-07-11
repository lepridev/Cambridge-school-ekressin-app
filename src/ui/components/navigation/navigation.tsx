import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import ActiveLink from "./active-link";
import { useAuth } from "@/context/authUserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  AiOutlineClose,
  AiOutlineCloudUpload,
  AiOutlineMenu,
} from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { firebaseSignout } from "@/api/authentication";

interface Props {
  isOpen: any;
  setIsOpen: any;
}

export const Navigation = ({ isOpen, setIsOpen }: Props) => {
  const handleSignOut = () => {
    firebaseSignout();
  };
  const { authUser, authUserIsLoading } = useAuth();
  console.log("authUser", authUser);
  console.log("authUserIsLoading", authUserIsLoading);
  const authenticationSystem = (
    <div className="space-x-2">
      <Button baseUrl="/connexion" size="small">
        Connexion
      </Button>
      <Button baseUrl="/connexion/inscription" variant="secondary" size="small">
        Inscription
      </Button>
    </div>
  );

  let pseudo = authUser?.userDocument?.pseudo;
  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="border-b-2 border-gray-400 fixed top-0 w-full  z-30 bg-[#FDDA26]">
      <Container className="flex justify-between items-center gap-7 py-1.5 relative  ">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="medium" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[19px] ">
                CAMBRIDGE INTERNATIONAL SCHOOL
              </div>
              <Typograpy variant="caption4" theme="black" component="span">
                EKRESSINVILLE
              </Typograpy>
            </div>
          </div>
        </Link>
        <div className="lg:hidden cursor-pointer z-20" onClick={toggleMobile}>
          {isOpen ? (
            <AiOutlineClose size={28} color="red" />
          ) : (
            <AiOutlineMenu size={28} color="red" />
          )}
        </div>
        <div className="hidden lg:flex items-center gap-7">
          <Typograpy
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/presentation">Présentation</ActiveLink>
            <ActiveLink href="/formations">Devenir élève</ActiveLink>
            <ActiveLink href="/projet">Projet éducatif</ActiveLink>
          </Typograpy>
          <div className="flex items-center gap-2">
            {!authUser ? (
              authenticationSystem
            ) : (
              <Link href={"/mon-espace"}>
                <div className="flex items-center justify-center gap-2">
                  <Avatar
                    size="small"
                    alt="cambridge avatar"
                    src="/assets/svg/bomb.svg"
                  />

                  <Typograpy variant="body-base">{pseudo} </Typograpy>

                  <Button
                    variant="ico"
                    iconTheme="alert"
                    action={handleSignOut}
                    className="bg-alert-danger"
                    icon={{ icon: IoExitOutline }}
                  ></Button>
                </div>
              </Link>
            )}
          </div>
        </div>
        {/* MOBILE */}
        <div
          className={`z-10 absolute lg:hidden  space-y-4 top-12 right-8 bg-gray-300 rounded ${
            isOpen ? "flex" : "hidden"
          } w-[75%]  flex-col items-center justify-between gap-2 p-6 text-xs shadow-md rounded-b-md duration-100`}
        >
          <Typograpy
            variant="caption3"
            component="div"
            className="flex flex-col items-center gap-7"
          >
            <ActiveLink href="/presentation">Présentation</ActiveLink>
            <ActiveLink href="/formations">Devenir élève</ActiveLink>
            <ActiveLink href="/projet">Projet éducatif</ActiveLink>
          </Typograpy>
          <div className="flex flex-col items-center gap-2">
            {authUser ? (
              <div className="flex items-center gap-2">
                <Avatar
                  size="small"
                  alt="cambridge avatar"
                  src="/assets/svg/bomb.svg"
                />
                <Link href={"/mon-espace"}>
                  <Typograpy variant="body-base">{pseudo} </Typograpy>
                </Link>
              </div>
            ) : (
              <>
                <Button baseUrl="/connexion" size="small">
                  Connexion
                </Button>
                <Button
                  baseUrl="/connexion/inscription"
                  variant="secondary"
                  size="small"
                >
                  Inscription
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

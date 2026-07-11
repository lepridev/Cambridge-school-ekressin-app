import { Box } from "@/ui/design-system/box/box";
import { Breadcrumb } from "../breadcrumbs/breadcrumbs";
import { Container } from "../container/container";
import Footer from "../navigation/footer";
import { Navigation } from "../navigation/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import { Button } from "@/ui/design-system/button/button";
import { firebaseSignout } from "@/api/authentication";
import { LinkTypes } from "@/lib/link-type";
import { Session } from "../session/session";
import { SessionStatusType } from "@/types/session-status-type";
import { useState } from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: React.ReactNode;
  sessionStatus?: SessionStatusType;
}

export const Layout = ({
  children,
  withSidebar,
  isDisplayBreadcrumbs = true,
  sessionStatus,
}: Props) => {
  const handleSignOut = () => {
    firebaseSignout();
  };
  let view = <></>;
  const [isOpen, setIsOpen] = useState(false);

  if (withSidebar) {
    view = (
      <Container className="">
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-12 md:gap-10 md:mt10 md:mb-11 ">
          <div className="w-full md:col-span-3 ">
            <Box className=" flex flex-col space-y-8 bg-secondary-200">
              <Link href={"/mon-espace"}>
                <Typograpy variant="caption4" component="p">
                  Accueil
                </Typograpy>
              </Link>
              <Link href={"/mon-espace/messages"}>
                <Typograpy variant="caption4" component="p">
                  Messages
                </Typograpy>
              </Link>

              <Button variant="danger" action={handleSignOut} className="mt-3">
                Déconnexion
              </Button>
            </Box>
          </div>
          <div className="w-full md:col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else view = <>{children}</>;

  return (
    <Session sessionStatus={sessionStatus}>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      {isDisplayBreadcrumbs && <Breadcrumb />}
      {view}
      <Footer />
    </Session>
  );
};

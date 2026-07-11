import { useAuth } from "@/context/authUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusType } from "@/types/session-status-type";
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spainner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  sessionStatus?: SessionStatusType;
}

export const Session = ({ children, sessionStatus }: Props) => {
  const { authUser, authUserIsLoading } = useAuth();
  const router = useRouter();
  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  // const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;
  // console.log("onboardingIsCompleted", onboardingIsCompleted);

  const shouldRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      !onboardingIsCompleted &&
      router.asPath !== "/onboarding"
    );
  };

  const shouldNotRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      onboardingIsCompleted &&
      router.asPath === "/onboarding"
    );
  };

  if (shouldRedirectToOnboarding()) {
    router.push("/onboarding");
    return <ScreenSpinner />;
  }

  if (shouldNotRedirectToOnboarding()) {
    router.push("/mon-espace");
    return <ScreenSpinner />;
  }

  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children} </>;
    } else {
      router.push("/mon-espace");
    }
  }
  console.log("authUser-gues", authUser);

  if (sessionStatus === REGISTERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children} </>;
    } else {
      router.push("/connexion");
    }
  }
  console.log("authUser-Registered", authUser);

  if (!sessionStatus && !authUserIsLoading) {
    return <>{children} </>;
  }

  return <ScreenSpinner />;
};

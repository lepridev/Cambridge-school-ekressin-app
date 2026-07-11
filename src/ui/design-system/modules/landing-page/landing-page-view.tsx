import { Breadcrumb } from "@/ui/components/breadcrumbs/breadcrumbs";
import { CallToAction } from "./components/cta/call-to-action";
import { FeaturedView } from "./components/featured/featured-view";
import { StepsFeaturedView } from "./components/featured/steps-featured-view";
import { HeroTopView } from "./components/herotop/hero-top-view";
import { TestimonialView } from "./components/testimonials/testimonial-view";
import { VideoView } from "./components/video/video-view";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authUserContext";
import { useEffect } from "react";

export const LandingPageView = () => {
  const router = useRouter();
  const { authUser } = useAuth();

  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  const checkOnboarding = () => {
    if (onboardingIsCompleted) {
      router.push("/");
    }
  };

  useEffect(() => {
    checkOnboarding;
  });
  return (
    <div>
      <HeroTopView />
      <FeaturedView />
      <TestimonialView />
      <VideoView />
      <StepsFeaturedView />
      <CallToAction />
    </div>
  );
};

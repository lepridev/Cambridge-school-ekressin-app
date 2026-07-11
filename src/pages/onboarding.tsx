import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/design-system/modules/landing-page/landing-page-container";
import { Session } from "@/ui/components/session/session";
import { REGISTERED } from "@/lib/session-status";
import { OnboardingContainer } from "@/ui/design-system/modules/user-profile/onboarding/onboarding.container";

export default function Onboarding() {
  return (
    <Session>
      <Seo
        title="Cambridge International School "
        description="Ecole bilingue et programme britanique"
      />

      <Layout sessionStatus={REGISTERED}>
        <OnboardingContainer />
      </Layout>
    </Session>
  );
}

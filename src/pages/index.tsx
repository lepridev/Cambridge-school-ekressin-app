import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LandingPageContainer } from "@/ui/design-system/modules/landing-page/landing-page-container";
import { Session } from "@/ui/components/session/session";

export default function Home() {
  return (
    <Session>
      <Seo
        title="Cambridge International School "
        description="Ecole bilingue et programme britanique"
      />

      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageContainer />
      </Layout>
    </Session>
  );
}

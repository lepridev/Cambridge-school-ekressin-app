import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/design-system/modules/authentication/login/login.container";
import { GUEST } from "@/lib/session-status";

export default function Connexion() {
  return (
    <>
      <Seo
        title="Cambridge International School"
        description="Page de connexion "
      />
      <Layout sessionStatus={GUEST}>
        <LoginContainer />
      </Layout>
    </>
  );
}

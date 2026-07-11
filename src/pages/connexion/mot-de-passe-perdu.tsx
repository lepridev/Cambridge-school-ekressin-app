import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ForgetPasswordContainer } from "@/ui/design-system/modules/authentication/forget-password/forget.container";

const MotDePassePerdu = () => {
  return (
    <>
      <Seo
        title="Cambridge International School"
        description="Page de recuperation de mot de passe "
      />
      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer />{" "}
      </Layout>
    </>
  );
};

export default MotDePassePerdu;

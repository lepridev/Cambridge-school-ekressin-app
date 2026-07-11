import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { RegisterContainer } from "@/ui/design-system/modules/authentication/register/register.container";

const Inscription = () => {
  return (
    <>
      <Seo
        title="Cambridge International School"
        description="Page d'inscription "
      />
      <Layout sessionStatus={GUEST}>
        <RegisterContainer />
      </Layout>
    </>
  );
};

export default Inscription;

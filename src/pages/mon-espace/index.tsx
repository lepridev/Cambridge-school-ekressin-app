import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { UserProfileContainer } from "@/ui/design-system/modules/user-profile/user-profile.container";
import React from "react";

const MonEspace = () => {
  return (
    <Layout sessionStatus={REGISTERED} withSidebar>
      <UserProfileContainer />
    </Layout>
  );
};

export default MonEspace;

import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { UserProfileContainer } from "@/ui/design-system/modules/user-profile/user-profile.container";
import { Typograpy } from "@/ui/design-system/typograpy/typography";
import React from "react";

const Messages = () => {
  return (
    <Layout sessionStatus={REGISTERED} withSidebar>
      <div className="mt-24 pb-7">
        <Typograpy variant="h4">Mes Messages</Typograpy>
        <p className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et
          vel dolorem nam corrupti at ut laboriosam commodi libero nemo, fugit
          quae cum.
        </p>
      </div>
    </Layout>
  );
};

export default Messages;

import { Layout } from "@/ui/components/layout/layout";
import Footer from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { PresentationPageContainer } from "@/ui/design-system/modules/presentation/presentation-page-container";
import React from "react";

type Props = {};

const Presentation = ({}: Props) => {
  return (
    <Layout>
      <PresentationPageContainer />
    </Layout>
  );
};

export default Presentation;

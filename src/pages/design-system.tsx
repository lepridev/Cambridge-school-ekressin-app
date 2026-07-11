import { Layout } from "@/ui/components/layout/layout";
import Footer from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import React from "react";

function DesignSystem() {
  return (
    <>
      <Seo
        title="Cambridge International School"
        description="Ecole bilingue et programme britanique"
      />

      <Layout>
        <h1>Design Sytem</h1>
      </Layout>
    </>
  );
}

export default DesignSystem;

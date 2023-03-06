// External libraries
import Head from "next/head";

// SK Components
import { ContentLayout, MaterialIcon } from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";
import { usePageRelations } from "@/utils/routing";

const AboutPage: CustomPage = () => {
  const pageRelations = usePageRelations("/", []);
  
  return (
    <>
      <Head>
        <title>About - SK Components</title>
      </Head>
      <ContentLayout key="about-page" pageRelations={pageRelations}>
        <p>TODO</p>
      </ContentLayout>
    </>
  );
};

AboutPage.pageHeader = {
  title: "About",
  icon: <MaterialIcon icon="info" />,
};

export default AboutPage;

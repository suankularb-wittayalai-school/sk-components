// External libraries
import Head from "next/head";

// SK Components
import { ContentLayout, MaterialIcon } from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const AboutPage: CustomPage = () => (
  <>
    <Head>
      <title>About - SK Components</title>
    </Head>
    <ContentLayout>
      <p>TODO</p>
    </ContentLayout>
  </>
);

AboutPage.pageHeader = {
  title: "About",
  icon: <MaterialIcon icon="info" />,
};

export default AboutPage;

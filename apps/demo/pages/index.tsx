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
    <ContentLayout key="about-page">
      <p>TODO</p>
    </ContentLayout>
  </>
);

AboutPage.pageHeader = {
  title: "About",
  icon: <MaterialIcon icon="info" />,
};

AboutPage.childURLs = ["/actions", "/input", "/navigation", "/containers"];

export default AboutPage;

// External libraries
import Head from "next/head";

// SK Components
import { ContentLayout, MaterialIcon } from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ContainersPage: CustomPage = () => (
  <>
    <Head>
      <title>Containers - SK Components</title>
    </Head>
    <ContentLayout>
      <p>TODO</p>
    </ContentLayout>
  </>
);

ContainersPage.pageHeader = {
  title: "Containers",
  icon: <MaterialIcon icon="dashboard" />,
  parentURL: "/",
};

export default ContainersPage;

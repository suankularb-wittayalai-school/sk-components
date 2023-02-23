// External libraries
import Head from "next/head";

// SK Components
import {
  ContentLayout,
  Header,
  MaterialIcon,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ContainersPage: CustomPage = () => (
  <>
    <Head>
      <title>Containers - SK Components</title>
    </Head>
    <ContentLayout>
      <Header level={2} icon={<MaterialIcon icon="assignment" />}>
        Header level 2
      </Header>
      <Header level={3} icon={<MaterialIcon icon="assignment" />}>
        Header level 3
      </Header>
      <Header level={4} icon={<MaterialIcon icon="assignment" />}>
        Header level 4
      </Header>
      <Header level={5} icon={<MaterialIcon icon="assignment" />}>
        Header level 5
      </Header>
      <Header level={6} icon={<MaterialIcon icon="assignment" />}>
        Header level 6
      </Header>
    </ContentLayout>
  </>
);

ContainersPage.pageHeader = {
  title: "Containers",
  icon: <MaterialIcon icon="dashboard" />,
  parentURL: "/",
};

export default ContainersPage;

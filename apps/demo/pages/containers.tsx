// SK Components
import { ContentLayout, MaterialIcon } from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ContainersPage: CustomPage = () => (
  <ContentLayout>
    <p>TODO</p>
  </ContentLayout>
);

ContainersPage.pageHeader = {
  title: "Containers",
  icon: <MaterialIcon icon="dashboard" />,
  parentURL: "/",
};

export default ContainersPage;

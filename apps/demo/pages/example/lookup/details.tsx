// External libraries
import Head from "next/head";

// SK Components
import {
  AssistChip,
  ChipSet,
  MaterialIcon,
} from "@suankularb-components/react";

// Internal components
import StudentDetails from "@/components/example/lookup/StudentDetails";

// Utilities
import { CustomPage } from "@/utils/types";

const LookupDetailsPage: CustomPage = () => (
  <>
    <Head>
      <title>About - SK Components</title>
    </Head>
    <StudentDetails />
  </>
);

LookupDetailsPage.pageHeader = {
  title: "Siravit Phokeed",
  parentURL: "/example/lookup",
  children: (
    <ChipSet>
      <AssistChip icon={<MaterialIcon icon="chat" />}>Chat with</AssistChip>
      <AssistChip icon={<MaterialIcon icon="groups" />}>See class</AssistChip>
      <AssistChip icon={<MaterialIcon icon="dashboard" />}>
        See schedule
      </AssistChip>
      <AssistChip icon={<MaterialIcon icon="share" />}>Share</AssistChip>
    </ChipSet>
  ),
};

export default LookupDetailsPage;

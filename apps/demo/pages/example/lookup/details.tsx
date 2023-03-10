// External libraries
import Head from "next/head";
import { FC, useState } from "react";

// SK Components
import {
  AssistChip,
  ChipSet,
  MaterialIcon,
} from "@suankularb-components/react";

// Internal components
import ShareDialog from "@/components/example/lookup/ShareDialog";
import StudentDetails from "@/components/example/lookup/StudentDetails";

// Utilities
import { CustomPage } from "@/utils/types";

const StudentQuickActions: FC = () => {
  const [showShare, setShowShare] = useState<boolean>(false);

  return (
    <ChipSet>
      <AssistChip icon={<MaterialIcon icon="chat" />}>Chat with</AssistChip>
      <AssistChip icon={<MaterialIcon icon="groups" />}>See class</AssistChip>
      <AssistChip icon={<MaterialIcon icon="dashboard" />}>
        See schedule
      </AssistChip>
      <AssistChip
        icon={<MaterialIcon icon="share" />}
        onClick={() => setShowShare(true)}
      >
        Share
      </AssistChip>
      <ShareDialog open={showShare} onClose={() => setShowShare(false)} />
    </ChipSet>
  );
};

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
  children: <StudentQuickActions />,
};

export default LookupDetailsPage;

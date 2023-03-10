// External libraries
import Head from "next/head";
import Link from "next/link";
import { FC, useState } from "react";

// SK Components
import {
  AssistChip,
  Avatar,
  Card,
  CardHeader,
  ChipSet,
  MaterialIcon,
  SplitLayout,
  useBreakpoint,
} from "@suankularb-components/react";

// Internal components
import StudentDetails from "@/components/example/lookup/StudentDetails";

// Utilities
import { CustomPage } from "@/utils/types";
import ShareDialog from "@/components/example/lookup/ShareDialog";

// List side

const ListSide: FC = () => {
  const { atBreakpoint } = useBreakpoint();

  return (
    <aside className="flex flex-col gap-6">
      {/* Search */}
      <div className="bg-surface-3 h-14 rounded-full" />

      {/* Search results */}
      <div className="flex flex-col gap-2">
        <Card
          appearance="filled"
          direction="row"
          stateLayerEffect
          className="!border-0 !bg-transparent"
        >
          <CardHeader
            avatar={<Avatar>SP</Avatar>}
            title="Sirapop Prateeppavameta"
            subtitle="M.505"
          />
        </Card>
        <Card
          appearance="filled"
          direction="row"
          stateLayerEffect
          className="!bg-primary-container"
          href={atBreakpoint === "base" ? "/example/lookup/details" : undefined}
          element={Link}
        >
          <CardHeader
            avatar={
              <Avatar className="!bg-primary !text-on-primary">SP</Avatar>
            }
            title="Siravit Phokeed"
            subtitle="M.504"
          />
        </Card>
        <Card
          appearance="filled"
          direction="row"
          stateLayerEffect
          className="!border-0 !bg-transparent"
        >
          <CardHeader
            avatar={<Avatar>SS</Avatar>}
            title="Sirawish Sukkee"
            subtitle="M.504"
          />
        </Card>
      </div>
    </aside>
  );
};

// Details side

const StudentDetailsHeader: FC = () => {
  const [showShare, setShowShare] = useState<boolean>(false);

  return (
    <div className="bg-surface-2 flex flex-col gap-6 px-5 py-4 md:flex-row">
      <div>
        <Avatar className="!h-14 !w-14" />
      </div>
      <div className="flex grow flex-col gap-2">
        <h2 className="skc-display-small">Siravit Phokeed</h2>
        <ChipSet>
          <AssistChip icon={<MaterialIcon icon="chat" />}>Chat with</AssistChip>
          <AssistChip icon={<MaterialIcon icon="groups" />}>
            See class
          </AssistChip>
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
      </div>
    </div>
  );
};

const LookupPage: CustomPage = () => (
  <>
    <Head>
      <title>Split Layout demo - SK Components</title>
    </Head>

    <SplitLayout ratio="list-detail">
      <ListSide />
      <main>
        <Card appearance="outlined" className="h-full overflow-y-auto">
          <StudentDetailsHeader />
          <StudentDetails />
        </Card>
      </main>
    </SplitLayout>
  </>
);

LookupPage.pageHeader = {
  title: "Lookup students",
  icon: <MaterialIcon icon="search" />,
  parentURL: "/example",
};

LookupPage.childURLs = ["/example/lookup/details"];

export default LookupPage;

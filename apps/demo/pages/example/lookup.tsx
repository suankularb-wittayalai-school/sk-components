// External libraries
import Head from "next/head";

// SK Components
import {
  AssistChip,
  Avatar,
  Card,
  CardHeader,
  ChipSet,
  ContentLayout,
  Header,
  MaterialIcon,
  Section,
  SplitLayout,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const LookupPage: CustomPage = () => (
  <>
    <Head>
      <title>Split Layout demo - SK Components</title>
    </Head>
    <SplitLayout ratio="list-detail">
      <aside className="flex flex-col gap-6">
        <div className="bg-surface-3 h-14 rounded-full" />
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
              avatar={<Avatar>SP</Avatar>}
              title="Sirawish Sukkee"
              subtitle="M.504"
            />
          </Card>
        </div>
      </aside>
      <main>
        <Card appearance="outlined" className="h-full overflow-y-auto">
          <div className="bg-surface-2 flex flex-col gap-6 px-5 py-4 md:flex-row">
            <div>
              <Avatar className="!h-14 !w-14" />
            </div>
            <div className="flex grow flex-col gap-2">
              <h2 className="skc-display-small">Siravit Phokeed</h2>
              <ChipSet>
                <AssistChip icon={<MaterialIcon icon="chat" />}>
                  Chat with
                </AssistChip>
                <AssistChip icon={<MaterialIcon icon="groups" />}>
                  See class
                </AssistChip>
                <AssistChip icon={<MaterialIcon icon="dashboard" />}>
                  See schedule
                </AssistChip>
                <AssistChip icon={<MaterialIcon icon="share" />}>
                  Share
                </AssistChip>
              </ChipSet>
            </div>
          </div>
          <ContentLayout>
            <Section>
              <Header level={3}>Contacts</Header>
            </Section>
          </ContentLayout>
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

export default LookupPage;

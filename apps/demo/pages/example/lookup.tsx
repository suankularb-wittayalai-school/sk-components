// External libraries
import Head from "next/head";
import Image from "next/image";

// SK Components
import {
  AssistChip,
  Avatar,
  Card,
  CardHeader,
  ChipSet,
  Columns,
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
      {/* List side */}
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

      {/* Details side */}
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

          {/* Details content */}
          <ContentLayout>
            {/* Contacts section */}
            <Section>
              <Header level={3}>Contacts</Header>

              {/* Not free notice */}
              <div
                className="text-secondary flex flex-row items-center gap-2 px-2
                  font-medium"
              >
                <MaterialIcon icon="info" />
                <p>
                  According to their schedule, Siravit is not free right now.
                </p>
              </div>

              <Columns columns={2}>
                {/* Facebook */}
                <Card
                  appearance="outlined"
                  direction="row"
                  stateLayerEffect
                  href="https://www.facebook.com/SKTechDev" // :)
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <Image
                          src="/images/social/facebook.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </Avatar>
                    }
                    title="Siravit Phokeed"
                    subtitle="Facebook"
                  />
                </Card>

                {/* Line */}
                <Card
                  appearance="outlined"
                  direction="row"
                  stateLayerEffect
                  href="https://line.me/ti/p/EXAMPLE1234"
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <Image
                          src="/images/social/line.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </Avatar>
                    }
                    title="model-siravit-phokeed"
                    subtitle="Line"
                  />
                </Card>

                {/* E-mail */}
                <Card
                  appearance="outlined"
                  direction="row"
                  stateLayerEffect
                  href="mailto:siravit.pho@student.sk.ac.th"
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <MaterialIcon icon="email" />
                      </Avatar>
                    }
                    title="siravit.pho@student.sk.ac.th"
                    subtitle="E-mail"
                  />
                </Card>

                {/* Telephone */}
                <Card
                  appearance="outlined"
                  direction="row"
                  stateLayerEffect
                  href="tel:0123456789"
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <MaterialIcon icon="phone" />
                      </Avatar>
                    }
                    title="012 345 6789"
                    subtitle="Telephone"
                  />
                </Card>
              </Columns>
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

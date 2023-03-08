// External libraries
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

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

// List side

const ListSide: FC = () => (
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
          avatar={<Avatar className="!bg-primary !text-on-primary">SP</Avatar>}
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

// Details side

const StudentDetailsHeader: FC = () => (
  <div className="bg-surface-2 flex flex-col gap-6 px-5 py-4 md:flex-row">
    <div>
      <Avatar className="!h-14 !w-14" />
    </div>
    <div className="flex grow flex-col gap-2">
      <h2 className="skc-display-small">Siravit Phokeed</h2>
      <ChipSet>
        <AssistChip icon={<MaterialIcon icon="chat" />}>Chat with</AssistChip>
        <AssistChip icon={<MaterialIcon icon="groups" />}>See class</AssistChip>
        <AssistChip icon={<MaterialIcon icon="dashboard" />}>
          See schedule
        </AssistChip>
        <AssistChip icon={<MaterialIcon icon="share" />}>Share</AssistChip>
      </ChipSet>
    </div>
  </div>
);

/**
 * A contact Card.
 * 
 * @param type The medium in which you can contact this person, i.e. Facebook, e-mail, etc. 
 * @param label The text label on this contact.
 * @param href The link to this contact.
 */
const ContactCard: FC<{
  type: "facebook" | "line" | "email" | "tel";
  label: string;
  href: string;
}> = ({ type, label, href }) => {
  const avatarMap = {
    facebook: (
      <Image src="/images/social/facebook.svg" width={40} height={40} alt="" />
    ),
    line: <Image src="/images/social/line.svg" width={40} height={40} alt="" />,
    email: <MaterialIcon icon="email" />,
    tel: <MaterialIcon icon="phone" />,
  };

  const subtitleMap = {
    facebook: "Facebook",
    line: "Line",
    email: "E-mail",
    tel: "Telephone",
  };

  return (
    <Card appearance="outlined" direction="row" stateLayerEffect href={href}>
      <CardHeader
        avatar={<Avatar>{avatarMap[type]}</Avatar>}
        title={label}
        subtitle={subtitleMap[type]}
      />
    </Card>
  );
};

const StudentDetails: FC = () => (
  <Card appearance="outlined" className="h-full overflow-y-auto">
    <StudentDetailsHeader />

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
          <p>According to their schedule, Siravit is not free right now.</p>
        </div>

        <Columns columns={2}>
          {/* Facebook */}
          <ContactCard
            type="facebook"
            label="Siravit Phokeed"
            href="https://www.facebook.com/SKTechDev" // :)
          />

          {/* Line */}
          <ContactCard
            type="line"
            label="model-siravit-phokeed"
            href="https://line.me/ti/p/EXAMPLE1234"
          />

          {/* E-mail */}
          <ContactCard
            type="email"
            label="siravit.pho@student.sk.ac.th"
            href="mailto:siravit.pho@student.sk.ac.th"
          />

          {/* Telephone */}
          <ContactCard type="tel" label="012 345 6789" href="tel:0123456789" />
        </Columns>
      </Section>
    </ContentLayout>
  </Card>
);

const LookupPage: CustomPage = () => (
  <>
    <Head>
      <title>Split Layout demo - SK Components</title>
    </Head>

    <SplitLayout ratio="list-detail">
      <ListSide />
      <main>
        <StudentDetails />
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

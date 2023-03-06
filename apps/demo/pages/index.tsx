// External libraries
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

// SK Components
import {
  Card,
  CardContent,
  CardHeader,
  Columns,
  ContentLayout,
  Header,
  MaterialIcon,
  Section,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const AboutSection: FC = () => (
  <Section>
    <Header>What is SKCom?</Header>
    <p>
      <strong>SK Components (“SKCom”) is a design system</strong> consisting of
      tokens and components created with the goal of a{" "}
      <strong>
        consistent and harmonious experience across all Suankularb features
      </strong>{" "}
      and applications.
    </p>
    <p>
      There are currently 2 official SKCom libraries:{" "}
      <strong>SK Component Styles</strong> (
      <code
        className="bg-surface-variant text-on-surface-variant 
        rounded-xs px-1 font-mono"
      >
        @suankularb-components/css
      </code>
      ) and <strong>React SK Components</strong> (
      <code
        className="bg-surface-variant text-on-surface-variant 
        rounded-xs px-1 font-mono"
      >
        @suankularb-components/react
      </code>
      ).
    </p>
  </Section>
);

const ResourcesSection: FC = () => (
  // <Columns columns={4} className="mx-4 sm:mx-0">
  <Columns columns={4}>
    {/* Left side: text */}
    <Section className="mb-2 sm:col-span-2 md:mb-0">
      <Header>Resources</Header>
      <p>
        <strong>
          In addition to the demo website (which you’re on right now!), we also
          have a{" "}
          <a
            className="text-primary font-bold underline"
            href="https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            full API reference
          </a>{" "}
          on all components in ReSKCom.
        </strong>{" "}
        You can interact with all the examples shown in the reference on this
        demo, and the interactive code on the “demo” app in{" "}
        <a
          className="text-primary font-bold underline"
          href="https://github.com/suankularb-wittayalai-school/sk-components"
          target="_blank"
          rel="noreferrer"
        >
          this repository
        </a>
        .
      </p>
    </Section>

    {/* Right side: links */}
    <Card
      appearance="filled"
      stateLayerEffect
      href="https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing"
      className="mx-4 justify-end self-stretch"
    >
      <CardContent>
        <MaterialIcon icon="description" size={48} className="text-primary" />
        <h3 className="skc-headline-small !leading-none">API reference</h3>
      </CardContent>
    </Card>
    <Card
      appearance="filled"
      stateLayerEffect
      href="https://github.com/suankularb-wittayalai-school/sk-components"
      className="mx-4 justify-end self-stretch"
    >
      <CardContent>
        <MaterialIcon icon="code" size={48} className="text-primary" />
        <h3 className="skc-headline-small !leading-none">Demo repository</h3>
      </CardContent>
    </Card>
  </Columns>
);

const DemoSection: FC = () => (
  <Section sectionAttr={{ "aria-label": "Let’s start! Choose a page:" }}>
    <Columns columns={4}>
      <Card
        appearance="outlined"
        stateLayerEffect
        href="/actions"
        element={Link}
      >
        <CardHeader
          icon={<MaterialIcon icon="touch_app" />}
          title="Actions"
          subtitle="Buttons, chips"
        />
      </Card>
      <Card appearance="outlined" stateLayerEffect href="/input" element={Link}>
        <CardHeader
          icon={<MaterialIcon icon="input" />}
          title="Input"
          subtitle="Form elements"
        />
      </Card>
      <Card
        appearance="outlined"
        stateLayerEffect
        href="/navigation"
        element={Link}
      >
        <CardHeader
          icon={<MaterialIcon icon="subdirectory_arrow_right" />}
          title="Navigation"
          subtitle="Nav bar/drawer, tabs"
        />
      </Card>
      <Card
        appearance="outlined"
        stateLayerEffect
        href="/containers"
        element={Link}
      >
        <CardHeader
          icon={<MaterialIcon icon="dashboard" />}
          title="Containers"
          subtitle="Cards, misc"
        />
      </Card>
    </Columns>
  </Section>
);

const AboutPage: CustomPage = () => (
  <>
    <Head>
      <title>About - SK Components</title>
    </Head>
    <ContentLayout key="about-page">
      <AboutSection />
      <ResourcesSection />
      <DemoSection />
    </ContentLayout>
  </>
);

AboutPage.pageHeader = {
  title: "About",
  icon: <MaterialIcon icon="info" />,
};

AboutPage.childURLs = ["/actions", "/input", "/navigation", "/containers"];

export default AboutPage;

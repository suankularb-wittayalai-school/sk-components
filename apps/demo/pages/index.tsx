// External libraries
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FC, forwardRef } from "react";

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
  Text,
} from "@suankularb-components/react";

// Internal components
import PageHeader from "@/components/PageHeader";

// Utilities
import { CustomPage } from "@/utils/types";

const AboutSection: FC = () => (
  <Columns columns={6}>
    {/* Left side: logo (not shown on mobile) */}
    <Image
      src="/images/logo.svg"
      width={48}
      height={48}
      alt="SK Components logo: blue square with text “SKC” with decorations"
      className="drop-shadow-5 hidden w-full sm:block"
    />

    {/* Right side: text */}
    <Section className="col-span-2 sm:col-span-3 md:col-span-5">
      <Header>What is SKCom?</Header>
      <p>
        <strong>SK Components (“SKCom”) is a design system</strong> consisting
        of tokens and components created with the goal of a{" "}
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
  </Columns>
);

const ResourcesSection: FC = () => (
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
            href="https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing"
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
      href="https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing"
      // eslint-disable-next-line react/display-name
      element={forwardRef((props, ref) => (
        <a ref={ref} {...props} target="_blank" rel="noreferrer" />
      ))}
      className="mx-4 justify-end self-stretch sm:mx-0"
    >
      <CardContent>
        <MaterialIcon icon="description" size={48} className="text-primary" />
        <Text type="headline-small" element="h3" className="!leading-none">
          API reference
        </Text>
      </CardContent>
    </Card>
    <Card
      appearance="filled"
      stateLayerEffect
      href="https://github.com/suankularb-wittayalai-school/sk-components"
      // eslint-disable-next-line react/display-name
      element={forwardRef((props, ref) => (
        <a ref={ref} {...props} target="_blank" />
      ))}
      className="mx-4 justify-end self-stretch sm:mx-0"
    >
      <CardContent>
        <MaterialIcon icon="code" size={48} className="text-primary" />
        <Text type="headline-small" element="h3" className="!leading-none">
          Demo repository
        </Text>
      </CardContent>
    </Card>
  </Columns>
);

const DemoSection: FC = () => (
  <Section>
    <Header className="sr-only">Let’s start! Choose a page:</Header>
    <Columns columns={4}>
      <Card
        appearance="outlined"
        stateLayerEffect
        href="/components/actions"
        element={Link}
      >
        <CardHeader
          icon={<MaterialIcon icon="touch_app" />}
          title="Actions"
          subtitle="Buttons, chips"
        />
      </Card>
      <Card
        appearance="outlined"
        stateLayerEffect
        href="/components/input"
        element={Link}
      >
        <CardHeader
          icon={<MaterialIcon icon="input" />}
          title="Input"
          subtitle="Form elements"
        />
      </Card>
      <Card
        appearance="outlined"
        stateLayerEffect
        href="/components/communication"
        element={Link}
      >
        <CardHeader
          icon={<MaterialIcon icon="swap_horiz" />}
          title="Communication"
          subtitle="Dialog, snackbar"
        />
      </Card>
      <Card
        appearance="outlined"
        stateLayerEffect
        href="/components/containers"
        element={Link}
      >
        <CardHeader
          icon={<MaterialIcon icon="dashboard" />}
          title="Containers"
          subtitle="Cards, layouts"
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
    <PageHeader>About</PageHeader>
    <ContentLayout key="about-page">
      <AboutSection />
      <ResourcesSection />
      <DemoSection />
    </ContentLayout>
  </>
);

AboutPage.childURLs = [
  "/components/actions",
  "/components/input",
  "/components/communication",
  "/components/containers",
];

export default AboutPage;

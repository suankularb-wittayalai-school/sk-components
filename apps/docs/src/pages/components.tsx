// Modules
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactHtmlParser from "react-html-parser";

import { db } from "@utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// SK Components
import {
  Button,
  Card,
  CardHeader,
  CardList,
  CardSupportingText,
  ChipRadioGroup,
  Header,
  LinkButton,
  ListLayout,
  ListSection,
  MainSection,
  MaterialIcon,
  Search,
  Section,
  Table,
  Title,
} from "@suankularb-components/react";

// Types
import {
  ComponentDetails,
  ComponentList,
  ComponentListItem,
} from "@utils/types";

// Guidelines section
const GuidelinesSection = ({
  component,
}: {
  component: ComponentDetails;
}): JSX.Element => {
  const { t } = useTranslation("components");
  const locale = useRouter().locale == "th" ? "th" : "en-US";

  return (
    <Section className="flex flex-col gap-3">
      <Header
        icon={<MaterialIcon icon="design_services" allowCustomSize />}
        text={t("main.guidelines.title")}
      />

      {/* Body */}
      <div className="markdown">
        <ReactMarkdown>
          {component.guidelines.body[locale] ||
            component.guidelines.body["en-US"]}
        </ReactMarkdown>
      </div>

      {/* Check Material */}
      {component.guidelines.resources?.material && (
        <Card type="stacked" appearance="outlined">
          <CardSupportingText>
            <div className="flex flex-row items-center gap-4">
              <p className="grow">
                <Trans i18nKey="main.guidelines.checkMaterial" ns="components">
                  <span className="font-display text-lg font-bold">
                    For more details,
                  </span>{" "}
                  check out Material Design 3’s{" "}
                  {{
                    materialEquiv:
                      component.guidelines.resources?.material?.equiv,
                  }}
                  , which {{ componentName: component.name }} is based off of.
                </Trans>
              </p>
              <LinkButton
                name="Go to Material Design"
                type="text"
                iconOnly
                icon={<MaterialIcon icon="open_in_new" />}
                url={component.guidelines.resources?.material?.url}
                attr={{
                  target: "_blank",
                  rel: "noreferrer",
                }}
              />
            </div>
          </CardSupportingText>
        </Card>
      )}
    </Section>
  );
};

// Implementation section
const ImplementationSection = ({
  component,
  language,
  setLanguage,
}: {
  component: ComponentDetails;
  language: "html" | "react";
  setLanguage: Function;
}): JSX.Element => {
  const { t } = useTranslation("components");
  const locale = useRouter().locale == "th" ? "th" : "en-US";

  return (
    <Section className="flex flex-col gap-3">
      <Header
        icon={<MaterialIcon icon="code" allowCustomSize />}
        text={t("main.implementation.title")}
      />

      {/* Select language */}
      <ChipRadioGroup
        choices={[
          {
            id: "html",
            name: t("main.implementation.language.html"),
          },
          {
            id: "react",
            name: t("main.implementation.language.react"),
          },
        ]}
        onChange={(e: "html" | "react") => setLanguage(e)}
        value="html"
        required
      />

      {/* Code Card */}
      <div className="grid aspect-[2/3] grid-rows-2 overflow-hidden rounded-lg shadow sm:aspect-[2/1] sm:grid-cols-2 sm:grid-rows-1">
        {/* Preview */}
        <div className="overflow-auto bg-surface">
          <div className="flex min-h-full min-w-full flex-col items-center justify-center gap-2">
            {ReactHtmlParser(component.implementation.html)}
          </div>
        </div>

        {/* Code */}
        <div className="overflow-y-scroll bg-surface-1">
          <code>
            <pre className="whitespace-pre-wrap p-4 font-mono">
              {component.implementation[language]}
            </pre>
          </code>
        </div>
      </div>
    </Section>
  );
};

// Properties section
const PropertiesSection = ({
  component,
}: {
  component: ComponentDetails;
}): JSX.Element => {
  const { t } = useTranslation("components");
  const locale = useRouter().locale == "th" ? "th" : "en-US";

  return (
    <Section className="flex flex-col gap-3">
      <div className="layout-grid-cols-2 sm:items-end">
        <Header
          icon={<MaterialIcon icon="settings" allowCustomSize />}
          text={t("main.properties.title")}
        />
        <Search placeholder={t("main.properties.search")} />
      </div>
      <Table type="outlined" width={920}>
        <thead>
          <tr>
            <th className="w-2/12">{t("main.properties.table.name")}</th>
            <th className="w-2/12">{t("main.properties.table.type")}</th>
            <th className="w-2/12">{t("main.properties.table.default")}</th>
            <th className="w-6/12">{t("main.properties.table.desc")}</th>
          </tr>
        </thead>
        <tbody>
          {component.properties.map((property) => (
            <tr
              key={property.id}
              className={property.required ? "container-tertiary" : undefined}
            >
              <td className="font-mono" title={property.name}>
                {property.name}
              </td>
              <td className="font-mono" title={property.type}>
                <span className="max-lines-2">{property.type}</span>
              </td>
              <td className="font-mono" title={property.defaultValue}>
                <span className="max-lines-2">{property.defaultValue}</span>
              </td>
              <td className="!text-left">
                {property.desc[locale] || property.desc["en-US"]}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="flex flex-row items-center justify-start gap-2">
        <Trans i18nKey="main.properties.requiredFootnote" ns="components">
          <div className="h-6 w-6 rounded bg-tertiary-container" />
          <span>means required.</span>
        </Trans>
      </div>
    </Section>
  );
};

// Page
const Components: NextPage<{ componentList: ComponentList }> = ({
  componentList,
}) => {
  const { t } = useTranslation(["components", "common"]);
  const locale = useRouter().locale == "th" ? "th" : "en-US";

  // List Layout control
  const [showMain, setShowMain] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState<number | undefined>();

  // Main content control
  const [selectedComponent, setSelectedComponent] = useState<
    ComponentDetails | undefined
  >({
    id: 0,
    name: "Button",
    subtitle: {
      "en-US": "Take action with Button.",
      th: "เริ่มการกระทำด้วย Button",
    },
    guidelines: {
      body: {
        "en-US":
          "Buttons help people **initiate actions**, from sending an email, to sharing a document, to liking a post.\n\nChoose the **type of button** based on the importance of the action. The more important the action is, the more emphasis its button should have.",
        th:
          "ปุ่มช่วยให้ผู้ใช้**เริ่มต้นการกระทำ**ตั้งแต่การส่งอีเมล ไปจนถึงการแชร์เอกสาร ไปจนถึงการกดถูกใจโพสต์\n\nเลือก**ประเภทของปุ่ม**ตามความสำคัญของการกระทำ การกระทำยิ่งสำคัญคือยิ่งปุ่มเน้นย้ำมากขึ้นเท่านั้น",
      },
      resources: {
        material: {
          equiv: "Button",
          url: "https://m3.material.io/components/buttons/overview",
        },
      },
    },
    implementation: {
      html:
        '<button\n  aria-label="button"\n  class="btn--filled"\n>\n  <span>Filled button</span>\n</button>\n<button\n  aria-label="button"\n  class="btn--tonal"\n>\n  <span>Tonal button</span>\n</button>\n<button\n  aria-label="button"\n  class="btn--outlined"\n>\n  <span>Outlined button</span>\n</button>\n<button\n  aria-label="button"\n  class="btn--text"\n>\n  <span>Text button</span>\n</button>',
      react:
        '<Button\n  name="button"\n  label="Filled button"\n  type="filled"\n/>\n<Button\n  name="button"\n  label="Tonal button"\n  type="tonal"\n/>\n<Button\n  name="button"\n  label="Outlined button"\n  type="outlined"\n/>\n<Button\n  name="button"\n  label="Text button"\n  type="text"\n/>',
    },
    properties: [
      {
        id: 0,
        name: "name",
        type: "string",
        defaultValue: '""',
        desc: {
          "en-US": "The text label for screenreaders",
        },
      },
      {
        id: 1,
        name: "label",
        type: "string",
        defaultValue: '""',
        desc: {
          "en-US": "The text in the button",
        },
      },
      {
        id: 2,
        name: "type",
        type: '"filled" | "outlined" | "text"',
        required: true,
        desc: {
          "en-US": "The type of the button",
        },
      },
      {
        id: 3,
        name: "iconOnly",
        type: "boolean",
        defaultValue: "false",
        desc: {
          "en-US": "Has only icon",
        },
      },
      {
        id: 4,
        name: "icon",
        type: "JSX.Element",
        required: false,
        desc: {
          "en-US":
            "An icon in the form of a JSX Element, will be placed in front of the text",
        },
      },
      {
        id: 5,
        name: "isDangerous",
        type: "boolean",
        defaultValue: "false",
        desc: {
          "en-US":
            "If the button triggers some dangerous action, makes Button have danger color",
        },
      },
      {
        id: 6,
        name: "onClick",
        type: "() => void",
        required: false,
        desc: {
          "en-US": "Triggered on click",
        },
      },
    ],
  });

  // Form controls
  const [language, setLanguage] = useState<"html" | "react">("html");

  return (
    <>
      <Head>
        <title>
          {selectedComponent ? selectedComponent.name : t("title")}
          {" - "}
          {t("brand.name", { ns: "common" })}
        </title>
      </Head>
      <ListLayout
        Title={
          <Title
            name={{ title: t("title") }}
            pageIcon={<MaterialIcon icon="widgets" />}
            backGoesTo={showMain ? () => setShowMain(false) : "/"}
            LinkElement={Link}
          />
        }
        show={showMain}
      >
        <ListSection>
          <CardList
            listGroups={componentList.map((componentGroup) => ({
              ...componentGroup,
              groupName:
                componentGroup.groupName[locale] ||
                componentGroup.groupName["en-US"],
            }))}
            ListItem={({
              content,
              className,
              onClick,
            }: {
              content: ComponentListItem["content"];
              className: string;
              onClick: () => void;
            }) => (
              <button
                className="w-full"
                onClick={() => {
                  onClick();
                  setShowMain(true);
                }}
              >
                <Card
                  type="horizontal"
                  appearance="tonal"
                  className={className}
                  hasAction
                >
                  <div className="card__media" />
                  <CardHeader
                    title={
                      <h3 className="text-lg font-bold">{content.name}</h3>
                    }
                    label={
                      content.subtitle[locale] || content.subtitle["en-US"]
                    }
                    className="font-display"
                  />
                </Card>
              </button>
            )}
            onChange={(id) => setSelectedID(id)}
          />
        </ListSection>

        <MainSection>
          {selectedComponent && (
            <>
              {/* Title */}
              <Section className="leading-snug">
                <h2 className="font-display text-4xl font-bold">
                  {selectedComponent.name}
                </h2>
                <p className="font-display text-xl text-on-surface-variant">
                  {selectedComponent.subtitle[locale] ||
                    selectedComponent.subtitle["en-US"]}
                </p>
              </Section>

              {/* Guidelines */}
              <GuidelinesSection component={selectedComponent} />

              {/* Implementation */}
              <ImplementationSection
                component={selectedComponent}
                language={language}
                setLanguage={setLanguage}
              />

              {/* Properties */}
              <PropertiesSection component={selectedComponent} />
            </>
          )}

          <Section>
            <Card type="stacked" appearance="outlined">
              <CardSupportingText>
                <div className="flex flex-row items-center gap-4">
                  <p className="grow">
                    <Trans i18nKey="main.report.text" ns="components">
                      <span className="font-display text-lg font-bold">
                        Found an issue?
                      </span>{" "}
                      Check out our GitHub and create an issue, if you wish.
                      Thank you for your contribution!
                    </Trans>
                  </p>
                  <LinkButton
                    name={t("main.report.buttonAlt")}
                    type="text"
                    iconOnly
                    icon={<MaterialIcon icon="open_in_new" />}
                    url="https://github.com/suankularb-wittayalai-school/sk-components-docs/issues/new/choose"
                    attr={{
                      target: "_blank",
                      rel: "noreferrer",
                    }}
                  />
                </div>
              </CardSupportingText>
            </Card>
          </Section>
        </MainSection>
      </ListLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  // const groupRef = collection(db, "component_group");

  // const componentGroups = await getDocs(groupRef);
  // // console.log(await componentGroups.data());
  // const componentGroupData = componentGroups.docs.map((group) => group.data());
  // console.log(componentGroupData);

  const componentList: ComponentList = [
    {
      groupName: { "en-US": "Button", th: "ปุ่ม" },
      content: [
        {
          id: 0,
          content: {
            name: "Button",
            subtitle: {
              "en-US": "Take action with Button.",
              th: "เริ่มการกระทำด้วย Button",
            },
          },
        },
        {
          id: 1,
          content: {
            name: "Link Button",
            subtitle: {
              "en-US": "This user is going places.",
              th: "พาผู้ใช้ไปหน้าต่างๆ",
            },
          },
        },
        {
          id: 2,
          content: {
            name: "FAB",
            subtitle: {
              "en-US": "A Page’s main action.",
              th: "การกระทำหลักของหน้า",
            },
          },
        },
      ],
    },
    {
      groupName: { "en-US": "Chip", th: "ชิป" },
      content: [
        {
          id: 3,
          content: {
            name: "Chip",
            subtitle: {
              "en-US": "Small buttons often together.",
              th: "ปุ่มน้อยๆ มักอยู่เป็นกลุ่ม",
            },
          },
        },
        {
          id: 4,
          content: {
            name: "Input Chip",
            subtitle: {
              "en-US": "Displayed user input.",
              th: "ชิปข้อมูลจากผู้ใช้",
            },
          },
        },
        {
          id: 5,
          content: {
            name: "Chip List",
            subtitle: {
              "en-US": "Chips together, at last.",
              th: "ชิปหลายๆ ภายใน Chip List",
            },
          },
        },
        {
          id: 6,
          content: {
            name: "Chip Radio Group",
            subtitle: {
              "en-US": "Choose your Chip.",
              th: "เลือกชิปที่ใช่",
            },
          },
        },
      ],
    },
  ];

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "components"])),
      componentList,
    },
  };
};

export default Components;

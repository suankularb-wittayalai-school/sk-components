// Modules
import { NextPage } from "next";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useState } from "react";

// SK Components
import {
  CardList,
  ListLayout,
  ListSection,
  MainSection,
  MaterialIcon,
  Title,
} from "@suankularb-components/react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

// Page
const Layouts: NextPage = () => {
  const { t } = useTranslation(["layouts", "common"]);
  const [showMain, setShowMain] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState<number>();

  return (
    <>
      <Head>
        <title>
          {t("title")} - {t("brand.name", { ns: "common" })}
        </title>
      </Head>
      <ListLayout
        Title={
          <Title
            name={{ title: t("title") }}
            pageIcon={<MaterialIcon icon="vertical_split" />}
            backGoesTo={showMain ? () => setShowMain(false) : "/"}
            LinkElement={Link}
          />
        }
        show={showMain}
      >
        <ListSection>
          <CardList
            listGroups={[]}
            ListItem={({ content, className }) => (
              <div className={className}></div>
            )}
            onChange={(id) => setSelectedID(id)}
          />
        </ListSection>
        <MainSection>
          <p>Layout</p>
        </MainSection>
      </ListLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "layouts"])),
  },
});

export default Layouts;

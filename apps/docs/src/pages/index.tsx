// Modules
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
  Header,
  MaterialIcon,
  RegularLayout,
  Section,
  Title,
} from "@suankularb-components/react";

// Page
const Index: NextPage = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <RegularLayout
        Title={
          <Title
            name={{ title: t("title") }}
            pageIcon={<MaterialIcon icon="home" />}
            backGoesTo="/"
            className="sm:!hidden"
          />
        }
      >
        <Section>
          <Header
            icon={<MaterialIcon icon="waving_hand" allowCustomSize />}
            text={t("welcome.title")}
          />
          <p className="font-display text-xl text-on-surface-variant">
            {t("welcome.subtitle")}
          </p>
          <div className="layout-grid-cols-2">
            <Link href="/layouts">
              <a
                className="container-secondary has-action--secondary flex aspect-[3/1] items-center justify-center gap-2 rounded-3xl
                  font-display text-3xl font-bold before:rounded-3xl"
              >
                <div className="text-6xl text-secondary">
                  <MaterialIcon icon="vertical_split" allowCustomSize />
                </div>
                <span>{t("welcome.menu.layouts")}</span>
              </a>
            </Link>
            <Link href="/components">
              <a
                className="container-tertiary has-action--tertiary flex aspect-[3/1] items-center justify-center gap-2 rounded-3xl
                  font-display text-3xl font-bold before:rounded-3xl"
              >
                <div className="text-6xl text-tertiary">
                  <MaterialIcon icon="widgets" allowCustomSize />
                </div>
                <span>{t("welcome.menu.components")}</span>
              </a>
            </Link>
          </div>
        </Section>
        <Section>
          <Header
            icon={<MaterialIcon icon="download" allowCustomSize />}
            text={t("installation.title")}
          />
        </Section>
      </RegularLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Index;

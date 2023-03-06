// External libraries
import { NextPage } from "next";
import { AppProps } from "next/app";

// SK Components
import { PageHeaderProps } from "@suankularb-components/react";

export type CustomPage = NextPage & {
  fab?: JSX.Element;
  pageHeader?: Partial<PageHeaderProps>;
  childURLs?: string[];
};

export type CustomAppProps = {
  Component: CustomPage;
  pageProps: AppProps["pageProps"];
};

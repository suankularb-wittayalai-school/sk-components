// External libraries
import { NextPage } from "next";
import { AppProps } from "next/app";

// SK Components
import { PageHeaderProps } from "@suankularb-components/react";

/**
 * The {@link NextPage} type extended with properties for SKCom.
 */
export type CustomPage = NextPage & {
  /**
   * A FAB to place in Navigation Rail for or fixed on this page only.
   *
   * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.v2ft1p7l7f8a SKCom documentation on FAB}
   */
  fab?: JSX.Element;

  /**
   * Additional props for the Page Header component, applied specifically to
   * this page only.
   *
   * `title` is required.
   *
   * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.5w06ou3fwzsd SKCom documentation on Page Header}
   */
  pageHeader?: Pick<PageHeaderProps, "title"> &
    Partial<Omit<PageHeaderProps, "title">>;

  /**
   * A list of child URLs of the current page.
   */
  childURLs?: string[];
};

/**
 * The {@link AppProps} type extended with properties for SKCom.
 */
export type CustomAppProps = {
  Component: CustomPage;
  pageProps: AppProps["pageProps"];
};

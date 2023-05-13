// External libraries
import { NextPage } from "next";
import { AppProps } from "next/app";

/**
 * The {@link NextPage} type extended with properties for SKCom.
 */
export type CustomPage = NextPage & {
  /**
   * A FAB to place in Navigation Rail for or fixed on this page only.
   *
   * @see {@link https://docs.google.com/document/d/1ks5DrzfC_xLg48EFtZALoVQpJpxhsK2It3GDhAhZCcE/edit?usp=sharing#heading=h.v2ft1p7l7f8a SKCom documentation on FAB}
   */
  fab?: JSX.Element;

  /**
   * The parent URL of the current page.
   */
  parentURL?: string;

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

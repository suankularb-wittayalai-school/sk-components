// External libraries
import PreviousRouteContext from "@/contexts/PreviousRouteContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

/**
 * Get the route of the previous page the user was in. This only tracks pages
 * inside this app, and doesn’t include external pages.
 *
 * @returns `previousPath` — The path name of the previous in-app page the user was in.
 */
export function usePreviousPath() {
  // Note: directly copied from https://stackoverflow.com/a/73326889/10462121.
  // Such is the life of a developer!

  const { asPath } = useRouter();
  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return { previousPath: ref.current };
}

/**
 * Watches for page load.
 *
 * @returns `pageIsLoading` — A boolean representing if a new page is being loaded or not.
 */
export function usePageIsLoading() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));

    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  });

  return { pageIsLoading: loading };
}

type PageRelation = "parent" | "child" | "unrelated";

/**
 * Get how the previous and destination pages relate to the current page. This
 * is useful for creating a spatially coherent system of page transitions.
 *
 * @param parentURL The URL of the parent page of the current.
 * @param childURLs A list of child URLs of the current page.
 *
 * @returns
 * `previous` — How the previous page relates to the current;
 * `destination` — How the destination relates to the current.
 */
export function usePageRelation(parentURL: string, childURLs: string[]) {
  const router = useRouter();

  // Previous page relation
  const [previous, setPrevious] = useState<PageRelation>("unrelated");
  const previousURL = useContext(PreviousRouteContext);
  useEffect(() => {
    setPrevious(
      parentURL === previousURL
        ? "parent"
        : previousURL && childURLs.includes(previousURL)
        ? "child"
        : "unrelated"
    );
  }, []);

  // Destination page relation
  const [destination, setDestination] = useState<PageRelation>("unrelated");
  useEffect(() => {
    const handlePageChange = (destinationURL: string) =>
      setDestination(
        parentURL === destinationURL
          ? "parent"
          : childURLs.includes(destinationURL)
          ? "child"
          : "unrelated"
      );
    router.events.on("routeChangeStart", handlePageChange);
    return () => {
      router.events.off("routeChangeStart", handlePageChange);
    };
  }, []);

  return {
    /**
     * How the previous page relates to the current.
     */
    previous,

    /**
     * How the destination relates to the current.
     */
    destination,
  };
}

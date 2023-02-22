// External libraries
import { GetServerSideProps } from "next";

// Utilities
import { CustomPage } from "@/utils/types";

const ActionsRedirect: CustomPage = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: "/actions", permanent: true } };
};

export default ActionsRedirect;

// External libraries
import { FC, useState } from "react";
import Head from "next/head";

// SK Components
import {
  ContentLayout,
  Header,
  MaterialIcon,
  Section,
  TextField,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const TextFieldSection: FC = () => {
  const [name, setName] = useState<string>("");
  const [partyList, setPartyList] = useState<string>("");
  const [policies, setPolicies] = useState<string>("");

  return (
    <Section>
      <Header>Text Field</Header>
      <div className="flex flex-col gap-8 pb-8">
        <TextField
          appearance="outlined"
          label="Candidate name"
          behavior="single-line"
          leading={<MaterialIcon icon="person" />}
          helperMsg="Full name and surname of candidate"
          value={name}
          onChange={setName}
        />
        <TextField
          appearance="outlined"
          label="Party list"
          behavior="multi-line"
          leading={<MaterialIcon icon="groups" />}
          helperMsg="Full name and surname of Kornor candidates"
          value={partyList}
          onChange={setPartyList}
        />
        <TextField
          appearance="outlined"
          label="Policies"
          behavior="textarea"
          helperMsg="A full list of this party’s policies"
          value={policies}
          onChange={setPolicies}
        />
      </div>
    </Section>
  );
};

const InputPage: CustomPage = () => (
  <>
    <Head>
      <title>Input - SK Components</title>
    </Head>
    <ContentLayout>
      <TextFieldSection />
    </ContentLayout>
  </>
);

InputPage.pageHeader = {
  title: "Input",
  icon: <MaterialIcon icon="input" />,
  parentURL: "/",
};

export default InputPage;

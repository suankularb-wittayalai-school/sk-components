// External libraries
import Head from "next/head";
import { FC, useEffect, useState } from "react";

// SK Components
import {
  ChipField,
  ChipSet,
  Columns,
  ContentLayout,
  Header,
  InputChip,
  MaterialIcon,
  Section,
  Switch,
  TextField,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const ChipFieldSection: FC = () => {
  const [value, setValue] = useState<string>("");
  const [classes, setClasses] = useState<number[]>([501, 502, 504]);

  return (
    <Section>
      <Header>Chip Field</Header>
      <ChipField
        label="Classes learning this subject"
        value={value}
        onChange={setValue}
        onNewEntry={(value) => {
          if (/[1-6](0[1-9]|1[0-9])/.test(value))
            setClasses([...classes, Number(value)]);
        }}
        onDeleteLast={() => setClasses(classes.slice(0, -1))}
        placeholder="Enter class number"
      >
        <ChipSet>
          {classes.map((classItem) => (
            <InputChip
              key={classItem}
              onDelete={() =>
                setClasses(classes.filter((item) => classItem !== item))
              }
            >
              {`M.${classItem}`}
            </InputChip>
          ))}
        </ChipSet>
      </ChipField>
    </Section>
  );
};

const TextFieldSection: FC = () => {
  const [name, setName] = useState<string>("");
  const [partyList, setPartyList] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [policies, setPolicies] = useState<string>("");

  useEffect(() => setEmail(email.split("@student.sk.ac.th")[0]), [email]);

  return (
    <Section>
      <Header>Text Field</Header>
      <div className="flex flex-col gap-8 pb-8">
        <Columns columns={3} className="!gap-y-8">
          <TextField
            appearance="outlined"
            label="Candidate name"
            behavior="single-line"
            leading={<MaterialIcon icon="person" />}
            helperMsg="Full name and surname of candidate"
            required
            value={name}
            onChange={setName}
          />
          <TextField
            appearance="outlined"
            label="Email"
            behavior="single-line"
            align="right"
            leading={<MaterialIcon icon="email" />}
            trailing="@student.sk.ac.th"
            required
            error={email.includes("@")}
            value={email}
            onChange={setEmail}
            inputAttr={{ autoCorrect: "off", autoCapitalize: "none" }}
          />
          <TextField
            appearance="outlined"
            label="Tel."
            behavior="single-line"
            leading={<MaterialIcon icon="phone" />}
            canClear
            value={phone}
            onChange={setPhone}
            inputAttr={{ type: "tel" }}
          />
          <TextField
            appearance="outlined"
            label="Facebook"
            behavior="single-line"
            leading={<MaterialIcon icon="forum" />}
            canClear
            disabled
          />
          <TextField
            appearance="outlined"
            label="Candidate weight"
            behavior="single-line"
            leading={<MaterialIcon icon="monitor_weight" />}
            trailing="kg"
            error={Number.isNaN(Number(weight)) || Number(weight) < 0}
            value={weight}
            onChange={setWeight}
            inputAttr={{ type: "number", step: 0.5, min: 0 }}
          />
          <TextField
            appearance="outlined"
            label="Birthdate"
            behavior="single-line"
            leading={<MaterialIcon icon="cake" />}
            value={birthdate}
            onChange={setBirthdate}
            inputAttr={{ type: "date" }}
          />
        </Columns>
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

const SwitchSection: FC = () => {
  const [switchOn, setSwitchOn] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(true);

  return (
    <Section>
      <Header>Switch</Header>
      <div className="flex flex-row flex-wrap gap-2">
        <Switch value={switchOn} onChange={setSwitchOn} />
        <Switch disabled />
        <Switch
          value={done}
          onChange={setDone}
          onIcon={<MaterialIcon icon="done" />}
        />
        <Switch
          value={darkMode}
          onChange={setDarkMode}
          offIcon={<MaterialIcon icon="light_mode" />}
          onIcon={<MaterialIcon icon="dark_mode" />}
        />
        <Switch value={true} onIcon={<MaterialIcon icon="edit" />} disabled />
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
      <ChipFieldSection />
      <TextFieldSection />
      <SwitchSection />
    </ContentLayout>
  </>
);

InputPage.pageHeader = {
  title: "Input",
  icon: <MaterialIcon icon="input" />,
  parentURL: "/",
};

export default InputPage;

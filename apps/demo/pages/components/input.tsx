// External libraries
import Head from "next/head";
import { FC, useEffect, useState } from "react";

// SK Components
import {
  Avatar,
  Checkbox,
  ChipField,
  ChipSet,
  Columns,
  ContentLayout,
  FormGroup,
  FormItem,
  Header,
  InputChip,
  List,
  ListItem,
  ListItemContent,
  MaterialIcon,
  MenuItem,
  Radio,
  Search,
  Section,
  Select,
  Switch,
  TextField,
} from "@suankularb-components/react";

// Utilities
import { CustomPage } from "@/utils/types";

const CheckboxSection: FC = () => {
  const [termsAgreed, setTermsAgreed] = useState<boolean>(false);

  const [checked, setChecked] = useState<boolean>(false);
  const [tristateChecked, setTristateChecked] = useState<boolean | null>(null);

  return (
    <Section>
      <Header>Checkbox</Header>
      <FormItem label="I agree to the terms and conditions">
        <Checkbox value={termsAgreed} onChange={setTermsAgreed} />
      </FormItem>
      <div className="flex flex-row flex-wrap gap-4">
        <Checkbox value={checked} onChange={setChecked} />
        <Checkbox
          value={tristateChecked}
          onChange={setTristateChecked}
          tristate
        />
        <Checkbox value={false} disabled />
        <Checkbox value={true} disabled />
      </div>
    </Section>
  );
};

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

const RadioSection: FC = () => {
  const [atkResult, setATKResult] = useState<"negative" | "positive">();

  return (
    <Section>
      <Header>Radio</Header>
      <FormGroup label="ATK result">
        <FormItem label="Negative">
          <Radio
            value={atkResult === "negative"}
            onChange={() => setATKResult("negative")}
          />
        </FormItem>
        <FormItem label="Positive">
          <Radio
            value={atkResult === "positive"}
            onChange={() => setATKResult("positive")}
          />
        </FormItem>
      </FormGroup>
      <div className="flex flex-row flex-wrap gap-4">
        <Radio value={false} disabled />
        <Radio value={true} disabled />
      </div>
    </Section>
  );
};

const SearchSection: FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Section>
      <Header>Search</Header>
      <Columns columns={3}>
        <Search alt="Search students" value={value} onChange={setValue}>
          {value.toLowerCase() === "sira" && (
            <List>
              <ListItem align="center" lines={2} stateLayerEffect>
                <Avatar>SP</Avatar>
                <ListItemContent title="Sirapop Prateeppavameta" desc="M.505" />
              </ListItem>
              <ListItem align="center" lines={2} stateLayerEffect>
                <Avatar>SP</Avatar>
                <ListItemContent title="Siravit Phokeed" desc="M.504" />
              </ListItem>
              <ListItem align="center" lines={2} stateLayerEffect>
                <Avatar>SS</Avatar>
                <ListItemContent title="Sirawish Sukee" desc="M.505" />
              </ListItem>
            </List>
          )}
        </Search>
      </Columns>
    </Section>
  );
};

const SelectSection: FC = () => {
  const [frequency, setFrequency] = useState<
    "one-off" | "daily" | "weekly" | "monthly" | "annually"
  >();

  return (
    <Section>
      <Header>Select</Header>
      <Columns columns={3}>
        <Select
          appearance="outlined"
          label="Frequency"
          helperMsg="How often students must do this form"
          value={frequency}
          onChange={setFrequency}
        >
          <MenuItem value="one-off">One-off</MenuItem>
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="annually">Annually</MenuItem>
        </Select>
      </Columns>
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
    <ContentLayout key="input-page">
      <CheckboxSection />
      <ChipFieldSection />
      <SearchSection />
      <SelectSection />
      <TextFieldSection />
      <RadioSection />
      <SwitchSection />
    </ContentLayout>
  </>
);

InputPage.pageHeader = {
  title: "Input",
  icon: <MaterialIcon icon="input" />,
  parentURL: "/components",
};

export default InputPage;

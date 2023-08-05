// External libraries
import { FC, useState } from "react";

// SK Components
import {
  Actions,
  Button,
  Columns,
  ContentLayout,
  Header,
  MaterialIcon,
  Section,
  Text,
} from "@suankularb-components/react";

// Components
import ContactCard from "@/components/example/lookup/ContactCard";
import MultilingualText from "@/components/example/lookup/MultilingualText";
import RequestPrivInfoDialog from "@/components/example/lookup/RequestPrivInfoDialog";

const StudentDetails: FC = () => {
  const [showRequestPriv, setShowRequestPriv] = useState<boolean>(false);

  return (
    <ContentLayout>
      {/* General information section */}
      <Section sectionAttr={{ "aria-label": "General information" }}>
        <Header level={3} className="sr-only">
          General information
        </Header>
        <Columns columns={4}>
          {/* Full name */}
          <section aria-labelledby="info-full-name" className="sm:col-span-2">
            <Text
              type="title-medium"
              element={(props) => <h4 id="info-full-name" {...props} />}
            >
              Full name
            </Text>
            <MultilingualText
              text={{
                th: "นายศิรวิทย์ โพธิ์ขีด",
                "en-US": "Mr. Siravit Phokeed",
              }}
            />
          </section>

          {/* Nickname */}
          <section aria-labelledby="info-nickname">
            <Text
              type="title-medium"
              element={(props) => <h4 id="info-nickname" {...props} />}
            >
              Nickname
            </Text>
            <MultilingualText text={{ th: "โมเดล", "en-US": "Model" }} />
          </section>

          {/* Class */}
          <section aria-labelledby="info-class">
            <Text
              type="title-medium"
              element={(props) => <h4 id="info-class" {...props} />}
            >
              Class
            </Text>
            <Text type="body-medium">M.504</Text>
            <Text type="body-medium">No.12</Text>
          </section>

          {/* Gender */}
          <section aria-labelledby="info-gender">
            <Text
              type="title-medium"
              element={(props) => <h4 id="info-gender" {...props} />}
            >
              Gender
            </Text>
            <Text type="body-medium">Chose not to respond</Text>
          </section>

          {/* Birthdate */}
          <section aria-labelledby="info-birthdate">
            <Text
              type="title-medium"
              element={(props) => <h4 id="info-birthdate" {...props} />}
            >
              Birthdate
            </Text>
            <Text type="body-medium">Feb 1</Text>
          </section>
        </Columns>
      </Section>

      {/* Contacts section */}
      <Section>
        <Header level={3}>Contacts</Header>

        {/* Not free notice */}
        <div
          className="text-secondary flex flex-row items-center gap-2 px-2
          font-medium"
        >
          <MaterialIcon icon="info" />
          <Text type="body-medium" className="!font-medium">
            According to their schedule, Siravit is not free right now.
          </Text>
        </div>

        <Columns columns={2}>
          {/* Facebook */}
          <ContactCard
            type="facebook"
            label="Siravit Phokeed"
            href="https://www.facebook.com/SKTechDev" // :)
          />

          {/* Line */}
          <ContactCard
            type="line"
            label="model-siravit-phokeed"
            href="https://line.me/ti/p/EXAMPLE1234"
          />

          {/* E-mail */}
          <ContactCard
            type="email"
            label="siravit.pho@student.sk.ac.th"
            href="mailto:siravit.pho@student.sk.ac.th"
          />

          {/* Telephone */}
          <ContactCard type="tel" label="012 345 6789" href="tel:0123456789" />
        </Columns>
      </Section>

      <Section sectionAttr={{ "aria-label": "Request private info" }}>
        <Text type="body-medium">
          As a teacher, you can request access to various private information of
          a student, from their citizen ID to their vaccination history.
        </Text>
        <Actions>
          <Button
            appearance="outlined"
            icon={<MaterialIcon icon="lock" />}
            onClick={() => setShowRequestPriv(true)}
            className="w-full"
          >
            Request private info
          </Button>
          <RequestPrivInfoDialog
            open={showRequestPriv}
            onClose={() => setShowRequestPriv(false)}
          />
        </Actions>
      </Section>
    </ContentLayout>
  );
};

export default StudentDetails;

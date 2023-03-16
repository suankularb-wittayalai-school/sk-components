// External libraries
import { FC, useState } from "react";

// SK Components
import {
  Actions,
  ContentLayout,
  Section,
  Header,
  Columns,
  MaterialIcon,
  Button,
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
            <h4 id="info-full-name" className="skc-title-medium">
              Full name
            </h4>
            <MultilingualText
              text={{
                th: "นายศิรวิทย์ โพธิ์ขีด",
                "en-US": "Mr. Siravit Phokeed",
              }}
            />
          </section>

          {/* Nickname */}
          <section aria-labelledby="info-nickname">
            <h4 id="info-nickname" className="skc-title-medium">
              Nickname
            </h4>
            <MultilingualText text={{ th: "โมเดล", "en-US": "Model" }} />
          </section>

          {/* Class */}
          <section aria-labelledby="info-class">
            <h4 id="info-class" className="skc-title-medium">
              Class
            </h4>
            <p>M.504</p>
            <p>No.12</p>
          </section>

          {/* Gender */}
          <section aria-labelledby="info-gender">
            <h4 id="info-gender" className="skc-title-medium">
              Gender
            </h4>
            <p>Chose not to respond</p>
          </section>

          {/* Birthdate */}
          <section aria-labelledby="info-birthdate">
            <h4 id="info-birthdate" className="skc-title-medium">
              Birthdate
            </h4>
            <p>Feb 1</p>
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
          <p>According to their schedule, Siravit is not free right now.</p>
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
        <p>
          As a teacher, you can request access to various private information of
          a student, from their citizen ID to their vaccination history.
        </p>
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

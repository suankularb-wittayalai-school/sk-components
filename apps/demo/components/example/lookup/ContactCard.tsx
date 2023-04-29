// External libraries
import Image from "next/image";
import { FC } from "react";

// SK Components
import {
  MaterialIcon,
  Card,
  CardHeader,
  Avatar,
} from "@suankularb-components/react";

/**
 * A contact Card.
 *
 * @param type The medium in which you can contact this person, i.e. Facebook, e-mail, etc.
 * @param label The text label on this contact.
 * @param href The link to this contact.
 */
const ContactCard: FC<{
  type: "facebook" | "line" | "email" | "tel";
  label: string;
  href: string;
}> = ({ type, label, href }) => {
  const avatarMap = {
    facebook: (
      <Image src="/images/social/facebook.svg" width={40} height={40} alt="" />
    ),
    line: <Image src="/images/social/line.svg" width={40} height={40} alt="" />,
    email: <MaterialIcon icon="email" />,
    tel: <MaterialIcon icon="phone" />,
  };

  const subtitleMap = {
    facebook: "Facebook",
    line: "Line",
    email: "E-mail",
    tel: "Telephone",
  };

  return (
    <Card
      appearance="outlined"
      direction="row"
      stateLayerEffect
      href={href}
      aAttr={{ target: "_blank", rel: "noreferrer" }}
    >
      <CardHeader
        avatar={<Avatar>{avatarMap[type]}</Avatar>}
        title={label}
        subtitle={subtitleMap[type]}
      />
    </Card>
  );
};

export default ContactCard;

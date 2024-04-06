import { ComponentProps, FC } from "react";
import PageHeader from ".";
import Button from "../Button";
import MaterialIcon from "../MaterialIcon";

const PageHeaderAction: FC<
  Pick<
    ComponentProps<typeof PageHeader>,
    "parentURL" | "locale" | "buttonElement" | "onBack" | "onNavToggle"
  >
> = ({ parentURL, locale = "en-US", buttonElement, onBack, onNavToggle }) =>
  parentURL || onBack ? (
    // Back Button
    <Button
      appearance="text"
      icon={<MaterialIcon icon="arrow_backward" />}
      alt={{ "en-US": "Navigate up", th: "กลับ" }[locale]}
      onClick={onBack}
      href={parentURL}
      element={buttonElement}
    />
  ) : (
    // Navigation Toggle
    <Button
      appearance="text"
      icon={<MaterialIcon icon="menu" />}
      alt={{ "en-US": "Open navigation", th: "เปิดเมนู" }[locale]}
      onClick={onNavToggle}
      className="skc-page-header__nav-toggle"
    />
  );

export default PageHeaderAction;

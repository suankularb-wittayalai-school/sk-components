// Internal components
import { PageHeaderProps } from ".";
import { Button } from "../Button";
import { MaterialIcon } from "../MaterialIcon";

export default function PageHeaderAction({
  parentURL,
  locale,
  buttonElement,
  onBack,
  onNavToggle,
}: Pick<
  PageHeaderProps,
  "parentURL" | "locale" | "buttonElement" | "onBack" | "onNavToggle"
>) {
  return parentURL || onBack ? (
    // Back Button
    <Button
      appearance="text"
      icon={<MaterialIcon icon="arrow_backward" />}
      alt={locale === "th" ? "กลับ" : "Navigate up"}
      onClick={onBack}
      href={parentURL}
      element={buttonElement}
    />
  ) : (
    // Navigation Toggle
    <Button
      appearance="text"
      icon={<MaterialIcon icon="menu" />}
      alt={locale === "th" ? "เปิดเมนู" : "Open navigation"}
      onClick={onNavToggle}
      className="skc-page-header__nav-toggle"
    />
  );
}

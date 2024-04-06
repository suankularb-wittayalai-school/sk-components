import "@suankularb-components/css/dist/css/components/search.css";
import { AnimatePresence, motion } from "framer-motion";
import { dash } from "radash";
import {
  Children,
  ComponentProps,
  ReactNode,
  Ref,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { LangCode, StylableFC } from "../../types";
import { transition, useAnimationConfig } from "../../utils/animation";
import { cn } from "../../utils/className";
import { matchDisplayName } from "../../utils/displayName";
import Button from "../Button";
import List from "../List";
import MaterialIcon from "../MaterialIcon";

/**
 * Search allows the user to quickly find something using a query. It can also
 * immediately show some useful results as the user is typing, utilizing List.
 *
 * @param children Some useful search results that appear underneath the field.
 * @param alt A description of the Search for screen readers, similar to `alt` on `<img>`.
 * @param value The value inside the field. This is useful if you want a controlled input.
 * @param locale Allows for translation of the default placeholder message.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param onSearch This function triggers when the search button is clicked.
 * @param placeholder A faint text displayed inside the field guiding the user.
 * @param disabled Turns the Search gray and block any action associated with it.
 * @param inputAttr Attributes for the underlying `<input>` element.
 */
const Search: StylableFC<{
  /**
   * Some useful search results that appear underneath the field.
   *
   * - You are encouraged to use {@link List} here.
   * - Optional.
   */
  children?: ReactNode;

  /**
   * A description of the Search for screen readers, similar to `alt` on
   * `<img>`.
   *
   * - Always required.
   */
  alt: string;

  /**
   * The value inside the field. This is useful if you want a controlled input.
   *
   * - Optional.
   *
   * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
   */
  value?: string;

  /**
   * Allows for translation of the default placeholder message.
   *
   * - Must be `th` or `en-US`, as SKCom currently only support those 2
   *   languages.
   * - Optional.
   */
  locale?: LangCode;

  /**
   * This function triggers when the user make changes to the field value. The
   * value is passed in via the function.
   *
   * - Optional.
   */
  onChange?: (value: string) => any;

  /**
   * This function triggers when the search button is clicked.
   *
   * - Optional.
   */
  onSearch?: () => any;

  /**
   * A faint text displayed inside the field guiding the user.
   *
   * - Optional.
   */
  placeholder?: string;

  /**
   * Turns the Search gray and block any action associated with it. The user
   * will not be able to type in the field or click the search button.
   *
   * - Optional.
   */
  disabled?: boolean;

  /**
   * Attributes for the underlying `<input>` element.
   *
   * - Optional.
   */
  inputAttr?: ComponentProps<"input">;
}> = ({
  children,
  alt,
  value,
  locale = "en-US",
  onChange,
  onSearch,
  placeholder,
  disabled,
  inputAttr,
  element: Element = "div",
  style,
  className,
}) => {
  const { duration, easing } = useAnimationConfig();

  const inputRef: Ref<HTMLInputElement> = useRef(null);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [exitComplete, setExitComplete] = useState(true);
  useEffect(() => {
    if (showSuggestions) setExitComplete(false);
  }, [showSuggestions]);

  const searchID = `search-${dash(alt)}`;

  return (
    <Element
      style={{
        ...style,
        ...(showSuggestions
          ? {
              borderBottom: "1px solid var(--outline)",
              marginBottom: "-0.75px",
            }
          : { borderBottom: "none", marginBottom: 0 }),
        ...(exitComplete
          ? { borderRadius: "var(--rounded-xl)" }
          : { borderRadius: "var(--rounded-xl) var(--rounded-xl) 0 0" }),
      }}
      className={cn("skc-search", className)}
    >
      {/* Search button */}
      <Button
        appearance="text"
        alt={{ "en-US": "Search", th: "ค้นหา" }[locale]}
        icon={<MaterialIcon icon="search" />}
        onClick={() => {
          if (!showSuggestions && exitComplete) inputRef.current?.focus();
          else {
            setShowSuggestions(false);
            if (onSearch) onSearch();
          }
        }}
      />

      {/* Search field */}
      <input
        ref={inputRef}
        aria-controls={`${searchID}-list`}
        aria-label={alt}
        aria-disabled={disabled}
        type="search"
        id={searchID}
        name={searchID}
        enterKeyHint="search"
        placeholder={placeholder || { "en-US": "Search", th: "ค้นหา" }[locale]}
        className="skc-search__input"
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            setShowSuggestions(false);
            inputRef.current?.blur();
            if (onSearch) onSearch();
          }
        }}
        {...inputAttr}
      />

      {/* Search */}
      <AnimatePresence onExitComplete={() => setExitComplete(true)}>
        {showSuggestions && (
          <>
            <motion.div
              initial={{ y: "-50%", scaleY: 0, opacity: 0 }}
              animate={{ y: "0%", scaleY: 1, opacity: 1 }}
              exit={{
                y: "-50%",
                scaleY: 0,
                opacity: 0,
                transition: transition(
                  duration.short3,
                  easing.standardAccelerate,
                ),
              }}
              transition={transition(
                duration.medium2,
                easing.standardDecelerate,
              )}
              className="skc-search__list"
              onClick={() => setShowSuggestions(false)}
            >
              {/* If `children` is a List, inject List Items to close
                  suggestions on click */}
              {children &&
              Children.count(children) === 1 &&
              matchDisplayName(Children.only(children), "List") ? (
                <List {...(children as JSX.Element).props}>
                  {Children.map(
                    (children as JSX.Element).props.children,
                    (child) =>
                      cloneElement(child, {
                        onClick: () => {
                          const { onClick } = (child as JSX.Element).props;
                          if (onClick) onClick();
                          setShowSuggestions(false);
                        },
                      }),
                  )}
                </List>
              ) : (
                children
              )}
            </motion.div>

            {/* Blur capture */}
            <div
              className="skc-search__blur-capture"
              onClick={() => setShowSuggestions(false)}
            />
          </>
        )}
      </AnimatePresence>
    </Element>
  );
};

Search.displayName = "Search";

export default Search;

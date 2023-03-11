import * as React from 'react';
import React__default from 'react';
import { BezierDefinition, Tween, AnimationControls, MotionStyle } from 'framer-motion';

/**
 * Global attributes for all SK Components.
 */
interface SKComponent {
    /**
     * `className` on the most relevant underlying attribute.
     */
    className?: string;
    /**
     * `style` on the most relevant underlying attribute.
     */
    style?: React__default.CSSProperties;
}

/**
 * Props for {@link Actions}.
 */
interface ActionsProps extends SKComponent {
    /**
     * Actions contains Buttons. You can put as many Buttons inside Actions as
     * needed, but the recommended limit is 3.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * How the Buttons should be positioned. It can be aligned to the left, the
     * center, the right (default), or fill the entire width.
     *
     * - Must be `left`, `center`, `right`, `full`.
     * - Optional.
     */
    align?: "left" | "center" | "right" | "full";
}
/**
 * A row of Buttons. Actions handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children Actions contains Buttons; the recommended limit is 3.
 * @param align How the Buttons should be positioned.
 */
declare function Actions({ children, align, style, className }: ActionsProps): JSX.Element;
declare namespace Actions {
    var displayName: string;
}

/**
 * Props for {@link Avatar}.
 */
interface AvatarProps extends SKComponent {
    /**
     * A user’s initials or their profile image.
     *
     * - The value has 3 meanings:
     *   - If the value is a string, it is displayed as the user’s initials. The
     *     string should be no more that 2 characters long.
     *   - If the value is a JSX Element, it is displayed as the user’s profile
     *     picture. Note that the picture is cropped to a circle.
     *   - If not defined, a placeholder avatar is displayed.
     * - Optional.
     */
    children?: React.ReactNode;
}
/**
 * An avatar represents the user, whether by their initials or their picture.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children A user’s initials or their profile image.
 */
declare function Avatar({ children, style, className }: AvatarProps): JSX.Element;
declare namespace Avatar {
    var displayName: string;
}

/**
 * Props for {@link Button}.
 */
interface ButtonProps extends SKComponent {
    /**
     * The text displayed inside the Button.
     *
     * - Must be a string or a JSX Element.
     * - Required if `icon` is undefined, as a Button cannot be empty.
     */
    children?: React.ReactNode;
    /**
     * The appearance of the Button.
     *
     * Each appearance has a priority. For example, in a log in page, the log in
     * button has higher priority than the password recovery button. In this
     * case, the log in button is “filled,” and the password recovery is “text.”
     *
     * - Must be `filled`, `tonal`, `outlined`, or `text`, from highest to lowest
     *   priority.
     * - Always required.
     */
    appearance: "filled" | "tonal" | "outlined" | "text";
    /**
     * An icon can appear before the text (`children`) in a Button. In a page
     * with many buttons, icons can quickly orient users.
     *
     * - You are encouraged to use {@link MaterialIcon Material Icons} as the value for `icon`.
     * - Normally optional but required if `children` is undefined, as a Button
     *   cannot be empty.
     */
    icon?: JSX.Element;
    /**
     * A description of the Button for screen readers, similar to `alt` on
     * `<img>`.
     *
     * - Required if the Button just includes `icon`, because an icon has no
     *   significance for screen readers.
     */
    alt?: string;
    /**
     * A message shown in a tooltip when the user hovers over the Button.
     *
     * - Optional.
     */
    tooltip?: string;
    /**
     * If the Button is selected. `icon` is replaced with a checkmark if this is
     * true.
     *
     * - **Important**: this is intended to be used only when the Button is
     *   inside a Segmented Button. This prop will still be functional otherwise,
     *   but it is against Material guidelines.
     * - Required when inside a Segmented Button.
     */
    selected?: boolean;
    /**
     * If the action the Button accomplishes is dangerous, like deleting your
     * account. If it is, the Button turns red (defined as `error` in the
     * palette).
     *
     * - Optional.
     */
    dangerous?: boolean;
    /**
     * {@link disabled Disable} the Button and add a Progress spinner in front of
     * the text to signify loading status. `onClick` and `href` will have no
     * effect.
     *
     * - Optional.
     */
    loading?: boolean | number;
    /**
     * Turns the Button gray and block any action associated with it. `onClick`
     * and `href` will have no effect.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * Allows for translation of the accessibility labels.
     *
     * - Must be `th` or `en-US`, as SKCom currently only support those 2
     *   languages.
     * - Optional.
     */
    locale?: "en-US" | "th";
    /**
     * The function called when the user interacts with the Button, similar to
     * `onClick` on `<button>`.
     *
     * - Incompatible with `href`.
     */
    onClick?: () => any;
    /**
     * The URL of the page this Button leads to, similar to `href` on `<a>`.
     *
     * - Incompatible with `onClick`.
     */
    href?: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing.
     * An example is `next/link` from Next.js.
     *
     * - Incompatible with `onClick`.
     */
    element?: ({ children, ref, title, style, className, href, onClick, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onClick: (event: React.MouseEvent) => void;
        onTouchStart: (event: React.TouchEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * Button helps users take action, whether it’s logging in, liking a post, or going to a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.48e8htvs5p0g SKCom documentation}
 *
 * @param children The text displayed inside the Button.
 * @param appearance The appearance of the Button.
 * @param icon An icon can appear before the text (`children`) in a Button.
 * @param alt A description of the Button for screen readers, similar to `alt`on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Button.
 * @param selected If the Button is selected. `icon` is replaced with a checkmark if this is true.
 * @param dangerous If the action the Button accomplishes is dangerous, like deleting your account.
 * @param loading Disable the Button and add a Progress spinner in front of the text to signify loading status.
 * @param disabled Turns the Button gray and block any action associated with it.
 * @param locale Allows for translation of the accessibility labels.
 * @param onClick The function called when the user interacts with the Button.
 * @param href The URL of the page this Button leads to.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function Button({ children, appearance, icon, alt, tooltip, selected, dangerous, loading, disabled, locale, onClick, href, element: Element, style, className, }: ButtonProps): JSX.Element;
declare namespace Button {
    var displayName: string;
}

/**
 * Props for {@link SegmentedButton Segmented Button}.
 */
interface SegmentedButtonProps extends SKComponent {
    /**
     * 2-5 Buttons.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * A description of the Segmented Button for screen readers, similar to `alt`
     * on `<img>`.
     *
     * - Always required
     */
    alt: string;
    /**
     * A lower number means a more dense interface. In this case, less height.
     *
     * - Must be an integer: 0, -1, -2, or -3.
     * - Optional.
     */
    density?: 0 | -1 | -2 | -3;
    /**
     * Each Button will be equal in width.
     *
     * - Optional.
     */
    full?: boolean;
}
/**
 * Segmented Button combines multiple related Buttons together. Each Button in a Segmented Button can be toggled on and off.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.c0vieg8cftmq SKCom documentation}
 *
 * @param children 2-5 Buttons.
 * @param alt A description of the Segmented Button for screen readers, similar to `alt` on `<img>`.
 * @param density A lower number means a more dense interface. In this case, less height.
 * @param full Each Button will be equal in width.
 */
declare function SegmentedButton({ children, alt, density, full, style, className, }: SegmentedButtonProps): JSX.Element;
declare namespace SegmentedButton {
    var displayName: string;
}

/**
 * Props for {@link ToggleButton Toggle Button}.
 */
interface ToggleButtonProps extends SKComponent {
    /**
     * The appearance of the Toggle Button.
     *
     * Each appearance has a priority.  For example, in a video conference
     * application, the end call button has higher priority than the raise hand
     * button. In this case, the end call is “filled,” and the raise hand is
     * “outlined.”
     *
     * - Must be `filled`, `tonal`, `outlined`, or `standard`, from highest to lowest
     *   priority.
     * - Always required.
     */
    appearance: "filled" | "tonal" | "outlined" | "standard";
    /**
     * A Toggle Button’s action is only communicated via its icon, so keep the
     * icon clear.
     *
     * - You are encouraged to use {@link MaterialIcon Material Icons} as the value for `icon`.
     * - Always required, as a Toggle Button cannot be empty.
     */
    icon: JSX.Element;
    /**
     * A description of the Toggle Button for screen readers, similar to `alt` on
     * `<img>`.
     *
     * - Always required, as an icon has no significance for screen readers.
     */
    alt: string;
    /**
     * A message shown in a tooltip when the user hovers over the Toggle Button.
     *
     * - Always required, just in case the icon is not clear enough for the use
     *   to infer its action.
     */
    tooltip: string;
    /**
     * If the action the Toggle Button accomplishes is dangerous, like unmuting.
     * If it is, the Toggle Button turns red (defined as `error` in the palette).
     *
     * - Optional.
     */
    dangerous?: boolean;
    /**
     * Turns the Toggle Button gray and block any action associated with it.
     * `onChange` will have no effect.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * Whether the Toggle Button is toggled on or off. This is useful if you want
     * a controlled input.
     *
     * - Optional.
     *
     * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
     */
    value?: boolean;
    /**
     * This function triggers when the user toggles the Toggle Button.
     *
     * - Optional.
     *
     * @param state Whether the Toggle Button is toggled on or off.
     */
    onChange?: (state: boolean) => void;
}
/**
 * A Button with just an icon that can be toggled on and off.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3rmzxf2aqo3r SKCom documentation}
 *
 * @param appearance The appearance of the Toggle Button.
 * @param icon A Toggle Button’s action is only communicated via its icon, so keep the icon clear.
 * @param alt A description of the Toggle Button for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Toggle Button.
 * @param dangerous If the action the Toggle Button accomplishes is dangerous, like unmuting.
 * @param disabled Turns the Toggle Button gray and block any action associated with it.
 * @param value Whether the Toggle Button is toggled on or off.
 * @param onChange This function triggers when the user toggles the Toggle Button.
 */
declare function ToggleButton({ appearance, icon, alt, tooltip, dangerous, disabled, value, onChange, style, className, }: ToggleButtonProps): JSX.Element;
declare namespace ToggleButton {
    var displayName: string;
}

/**
 * Props for {@link Card}.
 */
interface CardProps extends SKComponent {
    /**
     * Card must contain at least 1 JSX element; here is a list of SKCom
     * components that work well with Card: Card Header, Card Media, Card
     * Content, Chip List, Actions.
     *
     * - Required.
     */
    children: React.ReactNode;
    /**
     * The appearance of the Card.
     *
     * - Each appearance puts different amounts of emphasis on the subject. From
     *   most to least emphasis, a Card can be outlined, elevated, and filled.
     * - Must be `outlined`, `elevated`, or `filled`, from highest to lowest
     *   emphasis.
     * - Always required.
     */
    appearance: "outlined" | "elevated" | "filled";
    /**
     * The flow of the Card’s content, like the CSS property `flex-direction`.
     * The default is `column`.
     *
     * - Must be `row` or `column`.
     * - Optional.
     */
    direction?: "row" | "column";
    /**
     * In interactive components like Button, the state layer reacts to changes
     * to the state to signify its interactivity. For example, a Button’s state
     * layer turns up its opacity on hover.
     *
     * - This effect can be enabled on Card as well, letting the user know that
     *   this Card is interactive.
     * - Optional.
     */
    stateLayerEffect?: boolean;
    /**
     * Elevates Card on hover and focus to signify its interactivity.
     *
     * - Optional.
     */
    shadowEffect?: boolean;
    /**
     * An ID for transitioning to and from this Card. See Framer Motion’s
     * documentation on
     * {@link https://www.framer.com/docs/layout-group/ LayoutGroup}
     * for more details.
     *
     * - Must be unique within the page.
     * - Optional.
     */
    layoutID?: any;
    /**
     * The function called when the user interacts with the Card, similar to
     * `onClick` on `<button>`.
     *
     * - Incompatible with `href`.
     */
    onClick?: () => any;
    /**
     * The URL of the page this Card leads to, similar to `href` on `<a>`.
     *
     * - Incompatible with `onClick`.
     */
    href?: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing. An
     * example is `next/link` from Next.js.
     *
     * - Incompatible with `onClick`.
     */
    element?: ({ children, ref, style, className, href, onClick, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref?: React.MutableRefObject<any>;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onClick?: (event: React.MouseEvent) => void;
        onTouchStart?: (event: React.TouchEvent) => void;
        onMouseDown?: (event: React.MouseEvent) => void;
        onKeyDown?: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * Card is a container for information and actions about a subject. It can be
 * in a list, on its own, or as a link to another page; Card is extremely versatile.
 *
 * To quote Material Design 3, there is no right way to make a Card. However,
 * we have provided some useful props and components to get you started.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.699tcnx6hbn3 SKCom documentation}
 *
 * @param children Card must contain at least 1 JSX element
 * @param appearance The appearance of the Card. Each appearance puts different amounts of emphasis on the subject.
 * @param direction The flow of the Card’s content, like the CSS property `flex-direction`.
 * @param stateLayerEffect The state layer reacts to changes to the state to signify its interactivity. This effect can be enabled on Card as well.
 * @param shadowEffect Elevates Card on hover and focus to signify its interactivity.
 * @param layoutID An ID for transitioning to and from this Card.
 * @param onClick The function called when the user interacts with the Card, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Card leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function Card({ children, style, appearance, direction, stateLayerEffect, shadowEffect, layoutID, onClick, href, element: Element, className, }: CardProps): JSX.Element;
declare namespace Card {
    var displayName: string;
}

/**
 * Props for {@link CardHeader Card Header}.
 */
interface CardHeaderProps extends SKComponent {
    /**
     * An avatar is placed before all content in a Card Header. A use case would
     * be the profile picture of a user.
     *
     * - You are encouraged to use Avatar as the value for `avatar`.
     * - Incompatible with `icon`.
     * - Optional.
     */
    avatar?: JSX.Element;
    /**
     * An icon can appear before all content in a Card Header. In a page with
     * many cards, icons can quickly orient users.
     *
     * - You are encouraged to use Material Icons as the value for `icon`.
     * - Incompatible with `avatar`.
     * - Optional.
     */
    icon?: JSX.Element;
    /**
     * The most predominant text inside a Card.
     *
     * - Always required.
     */
    title: string | JSX.Element;
    /**
     * A short text complementing the title text.
     *
     * - Optional.
     */
    subtitle?: string | JSX.Element;
    /**
     * The overflow Menu of this Card. If defined, an overflow icon appears on
     * the right. The value of `overflow` is shown on click.
     *
     * - Must be a Menu.
     * - Optional.
     */
    overflow?: JSX.Element;
}
/**
 * The header of a Card. Sometimes all a Card needs is a Card Header.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.5y6ktiqu5rba SKCom documentation}
 *
 * @param avatar An avatar is placed before all content in a Card Header.
 * @param icon An icon can appear before all content in a Card Header.
 * @param title The most predominant text inside a Card.
 * @param subtitle A short text complementing the title text.
 * @param overflow The overflow Menu of this Card. If defined, an overflow icon appears on the right.
 */
declare function CardHeader({ avatar, icon, title, subtitle, overflow, style, className, }: CardHeaderProps): JSX.Element;
declare namespace CardHeader {
    var displayName: string;
}

/**
 * Props for {@link CardContent Card Content}.
 */
interface CardContentProps extends SKComponent {
    /**
     * Card Content can contain anything, from supporting text to Actions.
     *
     * - Always required.
     */
    children: React.ReactNode;
}
/**
 * A section of content inside Card.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.anun9n3ld6tj SKCom documentation}
 *
 * @param children Card Content can contain anything, from supporting text to Actions.
 */
declare function CardContent({ children, style, className }: CardContentProps): JSX.Element;
declare namespace CardContent {
    var displayName: string;
}

/**
 * Props for {@link Columns}.
 */
interface ColumnsProps extends SKComponent {
    /**
     * The content to be divided.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * Number of columns.
     *
     * - Must be an integer from 2, 3, 4, 6, or 12.
     * - Always required.
     */
    columns: 2 | 3 | 4 | 6 | 12;
}
/**
 * Columns break up content in larger screens into multiple columns, so as to
 * make the content easier to read. On smaller screens, Columns automatically
 * collapse columns into one column.
 *
 * The columns inside of Columns are based on the layout grid, which is a grid
 * system that keeps elements of a page aligned to a common grid
 * ({@link https://m3.material.io/foundations/adaptive-design/large-screens/overview#55fc0118-1fa3-48a3-b805-169bb58e6e78 M3 reference};
 * {@link https://m2.material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins M2 reference}).
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.j3ziatuuxd12 SKCom documentation}
 *
 * @param children The content to be divided.
 * @param columns Number of columns.
 */
declare function Columns({ children, columns, style, className }: ColumnsProps): JSX.Element;
declare namespace Columns {
    var displayName: string;
}

/**
 * Props for {@link Checkbox}.
 */
interface CheckboxProps extends SKComponent {
    /**
     * The state of the Checkbox. This is useful if you want a controlled input.
     *
     * - If `tristate` is `true`, a `value` of `null` means indeterminate, which
     *   displays a dash. If not, `value` cannot be `null`.
     * - Optional.
     *
     * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
     */
    value?: boolean | null;
    /**
     * This function triggers when the user toggles the Checkbox. The state is
     * passed in via the function as a boolean.
     *
     * - Optional.
     */
    onChange?: (value: boolean) => any;
    /**
     * Turns the Checkbox gray and block any action associated with it.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * Allows the Checkbox to have 3 states: off, on, and indeterminate.
     *
     * - Optional.
     */
    tristate?: boolean;
    /**
     * Attributes for the underlying `<input>` element.
     *
     * - Optional.
     */
    inputAttr?: JSX.IntrinsicElements["input"];
}
/**
 * A choice from a multi-select set of choices. When alone, a Checkbox is
 * usually used for acknowledgement of or agreement to something, like a terms
 * and conditions.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.cy04od1b0wro SKCom documentation}
 *
 * @param value The state of the Checkbox. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user toggles the Checkbox.
 * @param disabled Turns the Checkbox gray and block any action associated with it.
 * @param tristate Allows the Checkbox to have 3 states: off, on, and indeterminate.
 * @param inputAttr Attributes for the underlying `<input>` element.
 */
declare function Checkbox({ value, onChange, tristate, disabled, inputAttr, style, className, }: CheckboxProps): JSX.Element;
declare namespace Checkbox {
    var displayName: string;
}

/**
 * Props for {@link InputChip Input Chip}.
 */
interface InputChipProps extends SKComponent {
    /**
     * The text displayed inside the chip.
     *
     * - Must be a string or a JSX Element.
     * - Always required.
     */
    children: string | JSX.Element;
    /**
     * An avatar is placed before all content in an Input Chip. A use case would
     * be the profile picture of a user.
     *
     * - You are encouraged to use Avatar as the value for `avatar`.
     * - Incompatible with `icon`.
     * - Optional.
     */
    avatar?: JSX.Element;
    /**
     * An icon can appear before all content in an Input Chip. In a page with
     * many chips, icons can quickly orient users.
     *
     * - You are encouraged to use {@link MaterialIcon Material Icons} as the
     *   value for `icon`.
     * - Incompatible with `avatar`.
     * - Optional.
     */
    icon?: JSX.Element;
    /**
     * If the Input Chip is selected. `avatar` is replaced with a checkmark if
     * this is `true`.
     *
     * - Material Guidelines and the
     *   {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?pli=1#heading=h.szjgl74eta6e guidelines on Chip Field}
     *   recommend selecting the Input Chip set to be deleted via backspace,
     *   requiring another backspace to confirm.
     * - Optional.
     */
    selected?: boolean;
    /**
     * An ID for transitioning to and from this Input Chip. See Framer Motion’s
     * documentation on LayoutGroup for more details.
     *
     * - Must be unique within the page.
     * - Optional.
     */
    layoutID?: any;
    /**
     * Triggers when the user click anywhere in the Input Chip except the delete button.
     *
     * - This is useful if there’s more information on the chip that can be
     *   displayed on click,
     *  {@link https://m3.material.io/components/chips/guidelines#4ebdaf13-08c1-4959-a481-1fc2be2fa1f2 as seen here}.
     * - Optional.
     */
    onClick?: () => any;
    /**
     * Triggers when the user click the delete button.
     *
     * - Optional.
     */
    onDelete?: () => any;
    /**
     * If the Input Chip can be edited, clicking on it revert it back to the
     * original text, which can be edited normally.
     *
     * - Optional.
     */
    editable?: boolean;
    /**
     * The value inside the field that appears after entering edit mode. This is
     * useful if you want a controlled input.
     *
     * - Only available if `editable` is `true`.
     * - Only functional after entering edit mode.
     * - Optional.
     *
     * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
     */
    value?: string;
    /**
     * This function triggers when the user make changes to the field value. The
     * value is passed in via the function.
     *
     * - Only available if `editable` is `true`.
     * - Only functional after entering edit mode.
     * - Optional.
     *
     * @param value The value of the text field.
     */
    onChange?: (value: string) => any;
    /**
     * Triggers when the user exit edit mode.
     *
     * - Optional.
     */
    onEditExit?: () => any;
}
/**
 * A Chip displaying a piece of information entered by the user is an Input
 * Chip. This type of Chip can be added, edited, and deleted by the user.
 *
 * Like all Chips, an Input Chip appears alongside other Input Chips, but these
 * can also appear inside a text field like in Chip Field.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.qr7x5m70pqd SKCom documentation}
 *
 * @param children The text displayed inside the chip.
 * @param avatar An avatar is placed before all content in an Input Chip.
 * @param icon An icon can appear before all content in an Input Chip. In a page with many chips, icons can quickly orient users.
 * @param selected If the Input Chip is selected. `avatar` is replaced with a checkmark if this is `true`.
 * @param layoutID An ID for transitioning to and from this Input Chip.
 * @param onClick Triggers when the user click anywhere in the Input Chip except the delete button.
 * @param onDelete Triggers when the user click the delete button.
 * @param editable If the Input Chip can be edited, clicking on it revert it back to the original text, which can be edited normally.
 * @param value The value inside the field that appears after entering edit mode. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param onEditExit Triggers when the user exit edit mode.
 */
declare function InputChip({ children, avatar, icon, selected, layoutID, onClick, onDelete, editable, value, onChange, onEditExit, style, className, }: InputChipProps): JSX.Element;
declare namespace InputChip {
    var displayName: string;
}

/**
 * Props for {@link AssistChip}.
 */
interface AssistChipProps extends SKComponent {
    /**
     * The text shown inside the Assist Chip.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * An icon can appear before the text (`children`) in an Assist Chip. In a
     * Chip Set with many chips, an icon can help the user find the right one
     * more quickly.
     *
     * - You are encouraged to use Material Icons as the value for `icon`.
     * - Favicons and branded icons can also be used here.
     * - Optional.
     */
    icon?: JSX.Element;
    /**
     * A message shown in a tooltip when the user hovers over the Assist Chip.
     *
     * - Optional.
     */
    tooltip?: string;
    /**
     * Use elevation instead of an outline to signify the Assist Chip’s boundary.
     *
     * - **Important**: do not use this prop if you don’t have to. Only elevate
     *   an Assist Chip when its placement requires visual protection, such as on
     *   top of an image.
     * - Optional.
     */
    elevated?: boolean;
    /**
     * If the action the Assist Chip accomplishes is dangerous, like deleting
     * your account. If it is, the Assist Chip turns red (defined as `error` in
     * the palette).
     *
     * - Optional.
     */
    dangerous?: boolean;
    /**
     * Disable the Assist Chip and add a Progress spinner in front of the text to
     * signify loading status. `onClick` and `href` will have no effect.
     *
     * - Optional.
     */
    loading?: boolean;
    /**
     * Turns the Assist Chip gray and block any action associated with it.
     * `onClick` and `href` will have no effect.
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * The function called when the user interacts with the Assist Chip, similar
     * to `onClick` on `<button>`.
     *
     * - Incompatible with `href`.
     */
    onClick?: () => any;
    /**
     * The URL of the page this FAB leads to, similar to `href` on `<a>`.
     *
     * - Incompatible with `onClick`.
     */
    href?: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing.
     * An example is `next/link` from Next.js.
     *
     * - Incompatible with `onClick`.
     */
    element?: ({ children, ref, style, className, href, onClick, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onClick: (event: React.MouseEvent) => void;
        onTouchStart: (event: React.TouchEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * Assist Chips are similar to Buttons in that it helps users take action. The
 * difference is a Button is persistent (doesn’t change) and an Assist Chip is
 * dynamic and contextual (changes according to the context).
 *
 * The label of an Assist Chip should start with a verb, i.e. “**Turn on**
 * lights” or “**Save** to favorites”.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.6b3bv92d22u9 SKCom documentation}
 *
 * @param children The text shown inside the Assist Chip.
 * @param icon An icon can appear before the text (`children`) in an Assist Chip.
 * @param tooltip A message shown in a tooltip when the user hovers over the Assist Chip.
 * @param elevated Use elevation instead of an outline to signify the Assist Chip’s boundary.
 * @param dangerous If the action the Assist Chip accomplishes is dangerous, like deleting your account.
 * @param loading Disable the Assist Chip and add a Progress spinner in front of the text to signify loading status.
 * @param disabled Turns the Assist Chip gray and block any action associated with it.
 * @param onClick The function called when the user interacts with the Assist Chip, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Assist Chip leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function AssistChip({ children, icon, tooltip, elevated, dangerous, loading, disabled, onClick, href, element: Element, style, className, }: AssistChipProps): JSX.Element;
declare namespace AssistChip {
    var displayName: string;
}

/**
 * Props for {@link ChipField Chip Field}.
 */
interface ChipFieldProps extends SKComponent {
    /**
     * The Input Chips that the user have already entered.
     *
     * - Must be a Chip Set with only Input Chips.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The placeholder text (if no placeholder specified or when not focused and
     * no value) and the label text (when focused or has value).
     *
     * - Always required.
     */
    label: string | JSX.Element;
    /**
     * A description of the Chip Field for screen readers, similar to `alt` on
     * `<img>`.
     *
     * - Required if `label` is a JSX Element, as it is used to generate the ID
     *   crucial for accessibility.
     */
    alt?: string;
    /**
     * The value inside the field that is used to create Input Chips. This is
     * useful if you want a controlled input.
     *
     * - Optional.
     */
    value?: string;
    /**
     * This function triggers when the user make changes to the field value. The value is passed in via the function.
     *
     * - Optional.
     */
    onChange?: (value: string) => any;
    /**
     * This function triggers when the user hits the spacebar while in the field.
     *
     * - The behavior expected to be implemented by the developer is that a new
     *   Input Chip is created in the preceding Chip Set with the data passed
     *   through this function.
     * - Optional.
     */
    onNewEntry?: (value: string) => any;
    /**
     * This function triggers when the user hits backspace twice while in the field.
     *
     * - The behavior expected to be implemented by the developer is that the
     *   last Chip in the preceding Chip Set should be removed.
     * - Optional.
     */
    onDeleteLast?: () => any;
    /**
     * The field can have some faint text guiding the user about what to write to create an Input Chip. For example, a Chip Field for entering students into a class by student code could have a placeholder say “Enter student code.”
     *
     * - Optional.
     */
    placeholder?: string;
    /**
     * The field cannot be edited.
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * Attributes for the underlying `<input>` element used as the field.
     *
     * - Optional.
     */
    inputAttr?: JSX.IntrinsicElements["input"];
}
/**
 * A combination of Input Chips and a Text Field. Users can simply start typing
 * into the Chip Field; their input is converted into an Input Chip on spacebar
 * press.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.szjgl74eta6e SKCom documentation}
 *
 * @param children The Input Chips that the user have already entered.
 * @param label The placeholder text (if no placeholder specified or when not focused and no value) and the label text (when focused or has value).
 * @param alt A description of the Chip Field for screen readers, similar to `alt` on `<img>`.
 * @param value The value inside the field that is used to create Input Chips. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value. The value is passed in via the function.
 * @param onNewEntry This function triggers when the user hits the spacebar while in the field.
 * @param onDeleteLast This function triggers when the user hits backspace twice while in the field.
 * @param placeholder The field can have some faint text guiding the user about what to write to create an Input Chip.
 * @param disabled The field cannot be edited.
 * @param inputAttr Attributes for the underlying `<input>` element used as the field.
 */
declare function ChipField({ children, label, alt, value, onChange, onNewEntry, onDeleteLast, placeholder, disabled, inputAttr, style, className, }: ChipFieldProps): JSX.Element;
declare namespace ChipField {
    var displayName: string;
}

/**
 * Props for {@link ChipSet Chip Set}.
 */
interface ChipSetProps extends SKComponent {
    /**
     * Chips.
     *
     * - Must include ≥2 Chips.
     * - Must be the same type of Chips.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * If the parent element is not wide enough for all Chips to be visible, the
     * Chip Set can be scrolled horizontally.
     *
     * - Optional.
     */
    scrollable?: boolean;
    /**
     * Attributes for the underlying `<div>` element used as the field.
     *
     * - Optional.
     */
    divAttr?: JSX.IntrinsicElements["div"];
}
/**
 * Chips are normally alongside each other. A Chip Set is a container for
 * Chips, handling gaps, wrap, etc.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.vu5fu2ylc51e SKCom documentation}
 *
 * @param children Chips.
 * @param scrollable If the parent element is not wide enough for all Chips to be visible, the Chip Set can be scrolled horizontally.
 * @param divAttr Attributes for the underlying `<div>` element used as the field.
 */
declare function ChipSet({ children, scrollable, divAttr, style, className, }: ChipSetProps): JSX.Element;
declare namespace ChipSet {
    var displayName: string;
}

/**
 * Props for {@link Dialog}.
 */
interface DialogProps extends SKComponent {
    /**
     * Parts of a Dialog.
     *
     * - Dialog Header and Actions are required components and must appear in the
     *   said order.
     * - If present, Dialog Content must appear between Dialog Header and
     *   Actions.
     */
    children: React.ReactNode;
    /**
     * If the Dialog is open and shown.
     *
     * - Optional.
     */
    open?: boolean;
    /**
     * The width of the Dialog. This is useful when you want to fit more content
     * into a Dialog, or when you have many overlapping Dialogs.
     *
     * - Optional.
     */
    width?: React.CSSProperties["width"];
    /**
     * The function triggered when the scrim is clicked.
     */
    onClose: () => any;
}
/**
 * A Dialog interrupts the user to have them make an immediately significant
 * decision or prompts a user to enter important information.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children Parts of a Dialog.
 * @param open If the Dialog is open and shown.
 * @param width The width of the Dialog.
 * @param onClose The function triggered when the scrim is clicked.
 */
declare function Dialog({ children, open, width, onClose, style, className, }: DialogProps): JSX.Element;
declare namespace Dialog {
    var displayName: string;
}

/**
 * Props for {@link DialogHeader Dialog Header}.
 */
interface DialogHeaderProps extends SKComponent {
    /**
     * The hero icon shown above the title text (`title`).
     *
     * - You are encouraged to use Material Icons as the value for `icon`.
     * - Optional.
     */
    icon?: JSX.Element;
    /**
     * The title text. This is useful when the supporting text is long and needs
     * a summary.
     *
     * - Optional.
     */
    title?: string | JSX.Element;
    /**
     * With a title (`title`), the supporting text complements the title text
     * with more details.
     *
     * On its own, it succinctly presents the purpose of the Dialog, like
     * “Discard draft?,” for a confirmation on exiting a page without saving.
     *
     * - Always required.
     */
    desc: string | JSX.Element;
    /**
     * A description of the Dialog Header for screen readers, similar to
     * `alt` on `<img>`.
     *
     * - Required if:
     *   - `title` is defined and is a JSX Element, or;
     *   - `desc` is a JSX Element and title is undefined.
     */
    alt?: string;
}
/**
 * A row of Buttons. DialogHeader handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param icon The hero icon shown above the title text (`title`).
 * @param title The title text.
 * @param desc Complements the title text or succinctly presents the purpose of the Dialog.
 * @param alt A description of the Dialog Header for screen readers, similar to `alt` on `<img>`.
 */
declare function DialogHeader({ icon, title, desc, alt, style, className, }: DialogHeaderProps): JSX.Element;
declare namespace DialogHeader {
    var displayName: string;
}

/**
 * Props for {@link DialogContent Dialog Header}.
 */
interface DialogContentProps extends SKComponent {
    /**
     * A Dialog Content can include anything. A common use case is List.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The height of this component. If its content is taller than this value,
     * Dialog Content scrolls.
     *
     * - Setting a height will show Dividers on top of and below the component.
     * - Optional.
     */
    height?: number;
}
/**
 * Additional content that supplements the Dialog Header. This is where the
 * user can see more details about a decision or a space for the user to enter
 * information.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.vcs7cvubpd7l SKCom documentation}
 *
 * @param children A Dialog Content can include anything. A common use case is List.
 * @param height The height of this component. If its content is taller than this value, Dialog Content scrolls.
 */
declare function DialogContent({ children, height, style, className, }: DialogContentProps): JSX.Element;
declare namespace DialogContent {
    var displayName: string;
}

/**
 * Props for {@link FullscreenDialog Full-screen Dialog}.
 */
interface FullscreenDialogProps extends SKComponent {
    /**
     * The content.
     *
     * - Always required.
     */
    children?: React.ReactNode;
    /**
     * If the Full-screen Dialog is open and shown.
     *
     * - Optional.
     */
    open?: boolean;
    /**
     * The title text.
     *
     * - Always required.
     */
    title: string | JSX.Element;
    /**
     * The submission Button.
     *
     * - Should be a Button.
     * - Always required.
     */
    action: JSX.Element;
    /**
     * Full-screen Dialog transforms into a basic Dialog on larger screens. The
     * width of the Dialog can be set here.
     *
     * - Optional.
     */
    width?: React.CSSProperties["width"];
    /**
     * A description of the Full-screen Dialog for screen readers, similar to
     * `alt` on `<img>`.
     *
     * - Required if `title` is a JSX Element, as it is used to generate the ID
     *   crucial for accessibility.
     */
    alt?: string;
    /**
     * Allows for translation of the accessibility labels.
     *
     * - Must be `th` or `en-US`, as SKCom currently only support those 2
     *   languages.
     * - Optional.
     */
    locale?: "en-US" | "th";
    /**
     * The function triggered when the scrim is clicked.
     */
    onClose: () => any;
}
/**
 * A Full-screen Dialog fills the entire screen containing a series of tasks
 * required to complete.
 *
 * A Full-screen Dialog only fills the screen on mobile and turns into a Dialog
 * on larger screens. A Dialog can appear above a Full-screen Dialog.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.n92froio6418 SKCom documentation}
 *
 * @param children The content.
 * @param open If the Full-screen Dialog is open and shown.
 * @param title The title text.
 * @param action The submission Button.
 * @param width The width of the Dialog this Full-screen Dialog transforms into can be set here.
 * @param locale Allows for translation of the accessibility labels.
 * @param onClose The function triggered when the scrim is clicked.
 */
declare function FullscreenDialog({ children, open, title, action, width, alt, locale, onClose, style, className, }: FullscreenDialogProps): JSX.Element;
declare namespace FullscreenDialog {
    var displayName: string;
}

/**
 * Props for {@link Divider}.
 */
interface DividerProps extends SKComponent {
}
/**
 * A Divider separates items in a list with a thin line. This is used when
 * separation cannot be accomplished with Cards or white space.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.v0rwfas9jvl0 SKCom documentation}
 */
declare function Divider({ style, className }: DividerProps): JSX.Element;
declare namespace Divider {
    var displayName: string;
}

/**
 * Props for {@link FormGroup Form Group}.
 */
interface FormGroupProps extends SKComponent {
    /**
     * Form Items within this group, be it a set of options to choose from or
     * related settings in a preferences page.
     *
     * - Must only be Form Items.
     * - Always required.
     */
    children?: React.ReactNode;
    /**
     * The legend for the entire group.
     *
     * - Must be a string or JSX Element.
     * - Always required.
     */
    label: string | JSX.Element;
    /**
     * A description of the Form Group for screen readers, similar to `alt` on
     * `<img>`.
     *
     * - Optional.
     */
    alt?: string;
    /**
     * Attributes for the underlying `<legend>` element used as the field.
     *
     * - Optional.
     */
    legendAttr?: JSX.IntrinsicElements["legend"];
}
/**
 * A group of related form items, like options in a radio group.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children Form Items within this group, be it a set of options to choose from or related settings in a preferences page.
 * @param label The legend for the entire field.
 * @param alt A description of the Form Group for screen readers, similar to `alt` on `<img>`.
 * @param legendAttr Attributes for the underlying `<legend>` element used as the field.
 */
declare function FormGroup({ children, label, alt, legendAttr, style, className, }: FormGroupProps): JSX.Element;
declare namespace FormGroup {
    var displayName: string;
}

/**
 * Props for {@link FormItem Form Item}.
 */
interface FormItemProps extends SKComponent {
    /**
     * The input.
     *
     * - Must be a Checkbox, Radio, or Switch.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The label for the input.
     *
     * - Must be a string or JSX Element.
     * - Always required.
     */
    label: string | JSX.Element;
    /**
     * A description of the Form Item for screen readers, similar to `alt` on
     * `<img>`.
     *
     * - Required if `label` is a JSX Element, as it is used to generate the ID
     *   crucial for accessibility.
     */
    alt?: string;
    /**
     * Attributes for the underlying `<label>` element used as the field.
     *
     * - Optional.
     */
    labelAttr?: JSX.IntrinsicElements["label"];
}
/**
 * A wrapper for form control components like Checkbox, Radio, and Switch with
 * a label.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.pbls6bx1frn0 SKCom documentation}
 *
 * @param children The input.
 * @param label The label for the input.
 * @param alt A description of the Form Item for screen readers, similar to `alt` on `<img>`.
 * @param labelAttr Attributes for the underlying `<label>` element used as the field.
 */
declare function FormItem({ children, label, alt, labelAttr, style, className, }: FormItemProps): JSX.Element;
declare namespace FormItem {
    var displayName: string;
}

/**
 * Props for {@link Header}.
 */
interface HeaderProps extends SKComponent {
    /**
     * Header contains Buttons. You can put as many Buttons inside Header as
     * needed, but the recommended limit is 3.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The level of the Header. The number corresponds to an HTML header element,
     * i.e., `3` corresponds to `<h3>`.
     *
     * - `2` by default.
     * - Must be a number from 2-6. `1` is not allowed as `<h1>` is reserved for Page Header.
     * - Optional.
     */
    level?: 2 | 3 | 4 | 5 | 6;
    /**
     * An icon can appear before the text (`children`) in a Header. In a page
     * with many headers, icons can quickly orient users.
     *
     * - You are encouraged to use Material Icons as the value for `icon`.
     * - Optional.
     */
    icon?: JSX.Element;
    /**
     * Attributes for the underlying `<h2>`-`<h6>` element.
     *
     * - Optional.
     */
    hAttr?: React.HTMLAttributes<HTMLHeadingElement>;
}
/**
 * A row of Buttons. Header handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.eq5d681m3fpe SKCom documentation}
 *
 * @param children The text of the Header.
 * @param level The level of the Header. The number corresponds to an HTML header element.
 * @param icon An icon can appear before the text (`children`) in a Header.
 * @param hAttr Attributes for the underlying `<h2>`-`<h6>` element.
 */
declare function Header({ children, level, icon, hAttr, style, className, }: HeaderProps): JSX.Element;
declare namespace Header {
    var displayName: string;
}

/**
 * Props for {@link List}.
 */
interface ListProps extends SKComponent {
    /**
     * List contains Buttons. You can put as many Buttons inside List as
     * needed, but the recommended limit is 3.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * Uses Columns under the hood. Number of columns.
     *
     * - Must be an integer from 2, 3, 4, 6, or 12.
     * - Optional.
     */
    columns?: ColumnsProps["columns"];
    /**
     * Puts a Divider between List Items.
     *
     * - Optional.
     */
    divided?: boolean;
}
/**
 * A vertical index of texts or images.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.iyg4spbf5pwr SKCom documentation}
 *
 * @param children Items inside the List.
 * @param columns Uses Columns under the hood. Number of columns.
 * @param divided Puts a Divider between List Items.
 */
declare function List({ children, columns, divided, style, className, }: ListProps): JSX.Element;
declare namespace List {
    var displayName: string;
}

/**
 * The number of lines a List Item can contain.
 */
type ListItemLines = 1 | 2 | 3;
/**
 * Props for {@link ListItem List Item}.
 */
interface ListItemProps extends SKComponent {
    /**
     * The content of a List Item consists of the leading section, the content
     * section, and the trailing section.
     *
     * - Any components placed before List Item Content is put into the leading
     *   section, and any after is put into the trailing section.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The vertical alignment of the List Item’s content.
     *
     * - Must be `top`, `center`, or `bottom`.
     * - Always required.
     */
    align: "top" | "center" | "bottom";
    /**
     * The number of lines contained by the List Item. The height is set from this prop.
     *
     * - Must be an integer (or a list of 4 integers, each corresponding to a breakpoint) from 1 to 3.
     * - Always required.
     */
    lines: ListItemLines | [ListItemLines, ListItemLines, ListItemLines, ListItemLines];
    /**
     * In interactive components like Button, the state layer reacts to changes
     * to the state to signify its interactivity. For example, a Button’s state
     * layer turns up its opacity on hover.
     *
     * - This effect can be enabled on List Item as well, letting the user know
     *   that this List Item is interactive.
     * - Optional.
     */
    stateLayerEffect?: boolean;
    /**
     * The function called when the user interacts with the List Item, similar to `onClick` on `<button>`.
     *
     * - If this is defined, a state layer is added.
     * - Incompatible with `href`.
     * - Optional.
     */
    onClick?: () => any;
    /**
     * The URL of the page this List Item leads to, similar to `href` on `<a>`.
     *
     * - If this is defined, a state layer is added.
     * - Incompatible with `onClick`.
     * - Optional.
     */
    href?: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is useful when a framework you’re using has a Link component for routing. An example is `next/link` from Next.js.
     *
     * - Incompatible with `onClick`.
     * - Optional.
     */
    element?: ({ children, ref, style, className, href, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref?: React.MutableRefObject<any>;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onTouchStart?: (event: React.TouchEvent) => void;
        onMouseDown?: (event: React.MouseEvent) => void;
        onKeyDown?: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * An item inside a List.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.33dks77m5ey9 SKCom documentation}
 *
 * @param children The content of a List Item consists of the leading section, the content section, and the trailing section.
 * @param align The vertical alignment of the List Item’s content.
 * @param lines The number of lines contained by the List Item.
 * @param stateLayerEffect The state layer reacts to changes to the state to signify its interactivity. This effect can be enabled on List item as well.
 * @param onClick The function called when the user interacts with the List Item, similar to `onClick` on `<button>`.
 * @param href The URL of the page this List Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function ListItem({ children, align, lines, stateLayerEffect, onClick, href, element: Element, style, className, }: ListItemProps): JSX.Element;
declare namespace ListItem {
    var displayName: string;
}

/**
 * Props for {@link ListItemContent List Item Content}.
 */
interface ListItemContentProps extends SKComponent {
    /**
     * Small text on top of the title text.
     *
     * - Optional.
     */
    overline?: string | JSX.Element;
    /**
     * The main text of the List Item Content.
     *
     * - Always required.
     */
    title: string | JSX.Element;
    /**
     * A description supplementing the title text.
     *
     * - Optional.
     */
    desc?: string | JSX.Element;
    /**
     * A description of the List Item Content for screen readers, similar to
     * `alt` on `<img>`.
     *
     * - Required if `title` is a JSX Element, as it is used to generate the ID
     *   crucial for accessibility.
     */
    alt?: string;
}
/**
 * A row of Buttons. ListItemContent handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param overline Small text on top of the title text.
 * @param title The main text of the List Item Content.
 * @param desc A description supplementing the title text.
 * @param alt A description of the List Item Content for screen readers, similar to `alt` on `<img>`.
 */
declare function ListItemContent({ overline, title, desc, alt, style, className, }: ListItemContentProps): JSX.Element;
declare namespace ListItemContent {
    var displayName: string;
}

/**
 * Props for {@link MaterialIcon Material Icon}.
 */
interface MaterialIconProps extends SKComponent {
    /**
     * Material Icon uses the “Material Symbol” font, where each icon has its own
     * corresponding text string. You can find the list of all icons at
     * {@link https://fonts.google.com/icons Google Fonts}.
     *
     * - Always required.
     */
    icon: string;
    /**
     * If the icon is filled or not.
     *
     * - An icon should be outlined by default, filling it should have a specific
     *   meaning, like if a Navigation Bar Item is selected.
     * - Uses the `FILL` font variation setting on the Material Symbol font.
     * - Optional.
     */
    fill?: boolean;
    /**
     * How thick the strokes are.
     *
     * - Keep the weight consistent throughout an application. Hovering/focusing
     *   can affect the weight, however.
     * - Uses the `wght` font variation setting on the Material Symbol font.
     * - Optional.
     */
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    /**
     * `grade` also adjusts the icon’s thickness, but more subtly.
     *
     * - A lower grade is used in light icons on a dark background. A higher
     *   grade is used to emphasize an icon.
     * - Uses the `GRAD` font variation setting on the Material Symbol font.
     * - Optional.
     */
    grade?: -25 | 0 | 200;
    /**
     * How large/small the icon is.
     *
     * - Uses the `opsz` font variation setting on the Material Symbol font.
     * - Optional.
     */
    size?: 20 | 24 | 40 | 48;
}
/**
 * Icons are essential to any web design. They orient the users, help user navigate, save space.
 * Material Icon uses the “Material Symbol” icon font from Google.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.17kwuu4el5al SKCom documentation}
 *
 * @param icon Material Icon uses the “Material Symbol” font, where each icon has its own corresponding text string. You can find the list of all icons at {@link https://fonts.google.com/icons Google Fonts}.
 * @param fill If the icon is filled or not.
 * @param weight How thick the strokes are.
 * @param grade `grade` also adjusts the icon’s thickness, but more subtly.
 * @param size How large/small the icon is.
 */
declare function MaterialIcon({ icon, fill, weight, grade, size, style, className, }: MaterialIconProps): JSX.Element;
declare namespace MaterialIcon {
    var displayName: string;
}

/**
 * Props for {@link NavBar Navigation Bar}.
 */
interface NavBarProps extends SKComponent {
    /**
     * A Navigation Bar contains Navigation Bar Items, each leading to a different
     * top-level page. These pages should only be navigated to from the Navigation
     * Bar and the Navigation Drawer.
     *
     * - Must include at least 3 Navigation Bar Items.
     * - Must not include more than 5 Navigation Bar Items visible on mobile.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * A small image of your brand can be put on the Navigation Rail to constantly
     * remind your users that they are, in fact, in your app.
     *
     * - Not displayed on mobile.
     * - Ensure the image is simple and undistracting.
     * - Optional but recommended.
     */
    brand?: JSX.Element;
    /**
     * If a page includes a FAB, it is moved to the Navigation Rail in larger
     * screens to assert its dominance.
     *
     * - Ensure that the FAB is both in Page Layout and Navigation Bar’s `fab`
     *   prop for both to work properly. The FAB in Page Layout disappears on
     *   larger screens, and the one in `fab` disappears on smaller screens.
     * - Optional.
     */
    fab?: JSX.Element;
    /**
     * More Navigation Items can be placed on the bottom of the Navigation Rail
     * in larger screens. Use cases are settings and log out.
     *
     * - Optional.
     */
    end?: JSX.Element;
    /**
     * Allows for translation of the accessibility labels.
     *
     * - Must be `th` or `en-US`, as SKCom currently only support those 2 languages.
     * - Optional.
     */
    locale?: "en-US" | "th";
    /**
     * The function called when the user clicks on the navigation Button.
     *
     * - Always required.
     */
    onNavToggle: () => any;
}
/**
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.17kwuu4el5al SKCom documentation}
 *
 * @param children A Navigation Bar contains Navigation Bar Items, each leading to a different top-level page.
 * @param brand A small image of your brand can be put on the Navigation Rail.
 * @param fab If a page includes a FAB, it is moved to the Navigation Rail in larger screens.
 * @param end More Navigation Items can be placed on the bottom of the Navigation Rail in larger screens.
 * @param onNavToggle The function called when the user clicks on the navigation Button.
 * @param locale Allows for translation of the accessibility labels.
 */
declare function NavBar({ children, brand, fab, end, onNavToggle, locale, style, className, }: NavBarProps): JSX.Element;
declare namespace NavBar {
    var displayName: string;
}

/**
 * Props for {@link NavBarItem Navigation Bar Item}.
 */
interface NavBarItemProps extends SKComponent {
    /**
     * Icons help users identify pages more quickly, which is crucial for
     * frequent destinations like those from the Navigation Bar/Rail.
     *
     * - If the icon is sufficiently representative of the page, a label isn’t
     *   needed.
     * - Always required.
     */
    icon: JSX.Element;
    /**
     * An additional text label underneath the icon. This is useful if the icon
     * isn’t sufficiently representative of the page.
     *
     * - Optional.
     */
    label?: string | JSX.Element;
    /**
     * A description of the Navigation Bar Item for screen readers, similar to `alt` on `<img>`.
     *
     * - Required if the Navigation Bar Item just includes `icon`, because an
     *   icon has no significance for screen readers.
     */
    alt?: string;
    /**
     * A message shown in a tooltip when the user hovers over the Navigation Bar
     * Item.
     *
     * - Optional.
     */
    tooltip?: string;
    /**
     * The number in the notification badge of this Navigation Bar Item.
     *
     * - Must be a positive integer or `null`. `null` displays a small red circle
     *   instead of a large one with numbers.
     * - Optional.
     */
    badge?: number | null;
    /**
     * Highlights the Navigation Bar Item. If the user is currently on this page,
     * the Navigation Bar Item should be highlighted.
     *
     * - Optional.
     */
    selected?: boolean;
    /**
     * This Navigation Bar Item will only show on the Navigation Rail visible on
     * larger screens and disappears on smaller screens. Since there can only be
     * a maximum of 5 destinations on a Navigation Bar, other destinations must
     * be hidden with `railOnly`.
     *
     * - Optional.
     */
    railOnly?: boolean;
    /**
     * The URL of the page this Navigation Bar Item leads to, similar to `href`
     * on `<a>`.
     *
     * - Always required.
     */
    href: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing. An
     * example is `next/link` from Next.js.
     *
     * - Optional.
     */
    element?: ({ children, title, style, className, href, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onTouchStart: (event: React.TouchEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.s8z7t3ulnwdb SKCom documentation}
 *
 * @param icon Icons help users identify pages more quickly, which is crucial for frequent destinations like those from the Navigation Bar/Rail.
 * @param label An additional text label underneath the icon.
 * @param alt A description of the Navigation Bar Item for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Navigation Bar Item.
 * @param badge The number in the notification badge of this Navigation Bar Item.
 * @param selected Highlights the Navigation Bar Item. If the user is currently on this page, the Navigation Bar Item should be highlighted.
 * @param railOnly This Navigation Bar Item will only show on the Navigation Rail visible on larger screens and disappears on smaller screens.
 * @param href The URL of the page this Navigation Bar Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function NavBarItem({ icon, label, alt, tooltip, badge, selected, railOnly, href, element: Element, style, className, }: NavBarItemProps): JSX.Element;
declare namespace NavBarItem {
    var displayName: string;
}

/**
 * Props for {@link NavDrawer}.
 */
interface NavDrawerProps extends SKComponent {
    /**
     * All destinations within an app. Destinations can be grouped with the help
     * of Navigation Drawer Sections.
     *
     * - Must consist of Navigation Drawer Sections.
     * - The first should consist of top-level pages.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * If true, the Navigation Drawer will slide in to the screen, otherwise it
     * would slide out of view.
     *
     * - Optional.
     */
    open?: boolean;
    /**
     * The function triggered when the scrim is clicked.
     */
    onClose: () => any;
}
/**
 * A list of all destinations within an app.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.2czacyab5zgs SKCom documentation}
 *
 * @param children All destinations within an app. Destinations can be grouped with the help of Navigation Drawer Sections.
 * @param open If true, the Navigation Drawer will slide in to the screen, otherwise it would slide out of view.
 * @param onClose The function triggered when the scrim is clicked.
 */
declare function NavDrawer({ children, open, onClose, style, className, }: NavDrawerProps): JSX.Element;
declare namespace NavDrawer {
    var displayName: string;
}

/**
 * Props for {@link NavDrawerSection Navigation Drawer Section}.
 */
interface NavDrawerSectionProps extends SKComponent {
    /**
     * Destinations grouped into this section.
     *
     * - Must consist of Navigation Drawer Item(s).
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The header of the section.
     *
     * - Normally optional but required if this is the first Navigation Drawer
     *   Section in a Navigation Drawer. In this case, it’d be the name of the app.
     */
    header?: string | JSX.Element;
    /**
     * A description of the Navigation Drawer Section for screen readers,
     * similar to `alt` on `<img>`.
     *
     * - Required if `header` is a JSX Element, as it is used to generate the ID
     *   crucial for accessibility.
     */
    alt?: string;
}
/**
 * A row of Buttons. NavDrawerSection handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children Destinations grouped into this section.
 * @param header The header of the section.
 * @param alt A description of the Navigation Drawer Section for screen readers, similar to `alt` on `<img>`.
 */
declare function NavDrawerSection({ children, header, alt, style, className, }: NavDrawerSectionProps): JSX.Element;
declare namespace NavDrawerSection {
    var displayName: string;
}

/**
 * Props for {@link NavDrawerItem Navigation Drawer Item}.
 */
interface NavDrawerItemProps extends SKComponent {
    /**
     * Icons help users identify pages more quickly.
     *
     * - Always required.
     */
    icon: JSX.Element;
    /**
     * The title of the destination page.
     *
     * - Always required.
     */
    label?: string | JSX.Element;
    /**
     * Some text aligned to the right of a Navigation Drawer Item. This is useful
     * for, for instance, displaying the number of new messages.
     *
     * - Optional.
     */
    metadata?: string | JSX.Element;
    /**
     * A message shown in a tooltip when the user hovers over the Navigation
     * Drawer Item.
     *
     * - Optional.
     */
    tooltip?: string;
    /**
     * Highlights the Navigation Drawer Item. If the user is currently on this
     * page, the Navigation Drawer Item should be highlighted.
     *
     * - Optional.
     */
    selected?: boolean;
    /**
     * @private
     */
    onClick?: () => any;
    /**
     * The URL of the page this Navigation Drawer Item leads to, similar to
     * `href` on `<a>`.
     *
     * - Always required.
     */
    href: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing. An
     * example is `next/link` from Next.js.
     *
     * - Optional.
     */
    element?: ({ children, ref, title, style, className, href, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onTouchStart: (event: React.TouchEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * A row of Buttons. NavDrawerItem handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.sacv3at35zp6 SKCom documentation}
 *
 * @param icon Icons help users identify pages more quickly.
 * @param label The title of the destination page.
 * @param metadata Some text aligned to the right of a Navigation Drawer Item.
 * @param tooltip A message shown in a tooltip when the user hovers over the Navigation Drawer Item.
 * @param selected Highlights the Navigation Drawer Item.
 * @param href The URL of the page this Navigation Drawer Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function NavDrawerItem({ icon, label, metadata, tooltip, selected, onClick, href, element: Element, style, className, }: NavDrawerItemProps): JSX.Element;
declare namespace NavDrawerItem {
    var displayName: string;
}

/**
 * Props for {@link FAB}.
 */
interface FABProps extends SKComponent {
    /**
     * The text displayed inside the FAB.
     *
     * - Must be a string or a JSX Element.
     * - Incompatible with `size`.
     * - Normally optional but required if `icon` is undefined, as a FAB cannot
     *   be empty.
     */
    children?: React.ReactNode;
    /**
     * The color of the FAB.
     *
     * - Must be `surface`, `primary`, `secondary`, or `tertiary`. These colors
     *   are defined in the palette.
     * - Always required.
     */
    color: "surface" | "primary" | "secondary" | "tertiary";
    /**
     * How large/small the FAB is.
     *
     * - Must be `small`, `standard`, or `large`.
     * - Defaults to `standard`.
     * - Incompatible with `children`.
     */
    size?: "small" | "standard" | "large";
    /**
     * The icon displayed inside the FAB or alongside the label.
     *
     * - You are encouraged to use Material Icons as the value for `icon`.
     * - Required if `children` is undefined, as a FAB cannot be empty.
     */
    icon?: JSX.Element;
    /**
     * A description of the FAB for screen readers, similar to `alt` on `<img>`.
     *
     * - Required if the FAB just includes `icon`, because an icon has no
     *   significance for screen readers.
     */
    alt?: string;
    /**
     * A message shown in a tooltip when the user hovers over the FAB.
     *
     * - Optional.
     */
    tooltip?: string;
    /**
     * The FAB can disappear or minimize when the user starts scrolling down to
     * keep the focus on the page’s content.
     *
     * - Can be `disappear` or `minimize`. `minimize` is only functional if
     *   `children` is defined.
     * - If set to `disappear`, the FAB completely disappears on scroll.
     * - If set to `minimize`, the text label (`children`) disappears on scroll,
     *   leaving just the icon in the FAB.
     * - Optional.
     */
    stateOnScroll?: "disappear" | "minimize";
    /**
     * The function called when the user interacts with the FAB, similar to
     * `onClick` on `<button>`.
     *
     * - Incompatible with `href`.
     */
    onClick?: () => any;
    /**
     * The URL of the page this FAB leads to, similar to `href` on `<a>`.
     *
     * - Incompatible with `onClick`.
     */
    href?: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing.
     * An example is `next/link` from Next.js.
     *
     * - Incompatible with `onClick`.
     */
    element?: ({ children, className, href, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        className: string;
        href: string;
        onTouchStart: (event: React.TouchEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * The Floating Action Button or FAB is the main action of a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.v2ft1p7l7f8a SKCom documentation}
 *
 * @param children The text displayed inside the FAB.
 * @param color The color of the FAB.
 * @param size How large/small the FAB is.
 * @param icon The icon displayed inside the FAB or alongside the label.
 * @param alt A description of the FAB for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the FAB.
 * @param stateOnScroll The FAB can disappear or minimize when the user starts scrolling down.
 * @param onClick The function called when the user interacts with the FAB.
 * @param href The URL of the page this FAB leads to.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function FAB({ children, color, size, icon, alt, tooltip, stateOnScroll, onClick, href, element: Element, style, className, }: FABProps): JSX.Element;
declare namespace FAB {
    var displayName: string;
}

/**
 * Props for {@link ContentLayout Content Layout}.
 */
interface ContentLayoutProps extends SKComponent {
    /**
     * The main content of a page is grouped into Sections inside of a Content
     * Layout.
     *
     * - Must only have Sections.
     * - Always required.
     */
    children: React.ReactNode;
}
/**
 * A simple width-clamped vertical flow of content with minimal default styling.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.gxd7ps11kchv SKCom documentation}
 *
 * @param children The main content of a page is grouped into Sections inside of a Content Layout.
 */
declare function ContentLayout({ children, style, className, }: ContentLayoutProps): JSX.Element;
declare namespace ContentLayout {
    var displayName: string;
}

/**
 * Props for {@link SplitLayout Split Layout}.
 */
interface SplitLayoutProps extends SKComponent {
    /**
     * The content should have 2 sides; each element entered corresponds to a
     * side.
     *
     * - Must have 2 elements.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * Choose from 2 presets or create your own. This uses the same grid system
     * as Columns, so ensure each side of the ratio adds up to 12.
     *
     * - If you choose to use a preset: must be `list-detail` or
     *   `supporting-panel`. Learn more about these Material Design’s
     *   documentation.
     * - If you choose to create a custom ratio: must be an array with 2
     *   numbers, the first being the left and the last being the right.
     * - Always required.
     */
    ratio: "list-detail" | "supporting-panel" | [number, number];
    /**
     * On mobile, there is not enough space 2 have to columns on screen at once,
     * so the right side disappears by default. Enabling `showRightOnMobile`
     * will show the right side below the left side.
     *
     * - Optional.
     */
    showRightOnMobile?: boolean;
}
/**
 * List-detail views and supporting panel layouts can be created with Vertical
 * Split Layout.
 *
 * In a list-detail view, the left side is a list and the right is the list’s
 * detail. In a supporting panel layout, the main content takes focus with a
 * small column set aside for supporting content.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.iv2gnmudjnme SKCom documentation}
 *
 * @param children The content should have 2 sides; each element entered corresponds to a side.
 * @param ratio Choose from 2 presets or create your own. This uses the same grid system as Columns, so ensure each side of the ratio adds up to 12.
 * @param showRightOnMobile Show the right side below the left side instead of hiding it on mobile.
 */
declare function SplitLayout({ children, ratio, showRightOnMobile, style, className, }: SplitLayoutProps): JSX.Element;
declare namespace SplitLayout {
    var displayName: string;
}

/**
 * Props for {@link RootLayout Root Layout}.
 */
interface RootLayoutProps extends SKComponent {
    /**
     * Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can
     * contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content
     * Layout, and Vertical Split Layout only.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The definition of `transitionEvent` will cause the current page to
     * immediately animate out and the next to animate in. The style in which
     * this animation is according to the next page’s relation to the current
     * according to the page hierarchy, which is passed in via this property.
     *
     * - Defined when an animation to the next page is needed immediately.
     * - How the next page is related to this page is passed in via this property.
     *   - i.e. If the user is on the `/lookup` page and just clicked a link to
     *     `/lookup/students`—a child page of `/lookup`—then `child` must
     *     immediately passed in to `transitionEvent` to start the animation.
     *
     * - If you are using
     *   {@link https://github.com/suankularb-wittayalai-school/sk-nextjs-template Suankularb Next.js Template},
     *   you can use the return value of `useTransitionEvent` hook (found in
     *   `@/utils/routing.ts`) in combination with `CustomPage.childURLs` here.
     *   - Find an example of `useTransitionEvent` in the Layout component of the
     *     demo app.
     *   - Find an example of `CustomPage.childURLs` in the index page of the
     *     demo app.
     *   - JSDoc available on all symbols referred to here.
     *
     * - Must be a type of page relation: `parent`, `child`, `sibling`, or `unrelated`.
     * - Optional.
     */
    transitionEvent?: "parent" | "child" | "sibling" | "unrelated";
}
/**
 * The container of everything inside an application. Components which must
 * appear only once in like Navigation Drawer, Navigation Bar, FAB, and Page
 * Header only work optimally as direct descendants of Root Layout.
 *
 * Root Layout handles positioning of components and responsiveness.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.q72flzs8g2k1 SKCom documentation}
 *
 * @param children Root Layout positions Navigation Drawer, Navigation Bar, and FAB. It can contain Navigation Drawer, Navigation Bar, FAB, Page Header, Content Layout, and Vertical Split Layout only.
 * @param transitionEvent The definition of `transitionEvent` will cause the current page to immediately animate out and the next to animate in. The style in which this animation is according to the next page’s relation to the current according to the page hierarchy, which is passed in via this property.
 */
declare function RootLayout({ children, transitionEvent, className, style, }: RootLayoutProps): JSX.Element;
declare namespace RootLayout {
    var displayName: string;
}

/**
 * Props for {@link Menu}.
 */
interface MenuProps extends SKComponent {
    /**
     * Actions/options inside a Menu.
     *
     * - Must consist of Menu Item(s).
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * If the Menu is open and shown.
     *
     * - Optional.
     */
    open?: boolean;
    /**
     * A lower number means a more dense interface. In this case, less height.
     *
     * - Must be an integer: 0, -2, or -4.
     * - Optional.
     */
    density?: 0 | -2 | -4;
    /**
     * Triggers when the Menu loses focus (as in the user clicking/tapping
     * outside the Menu)
     *
     * - Optional.
     */
    onBlur?: () => any;
    /**
     * Attributes for the underlying `<ul>` element.
     *
     * - Optional.
     */
    ulAttr?: JSX.IntrinsicElements["ul"];
}
/**
 * A list of actions/options on a temporary surface.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.s1l0jijrvyiu SKCom documentation}
 *
 * @param children Actions/options inside a Menu.
 * @param open If the Menu is open and shown.
 * @param density A lower number means a more dense interface. In this case, less height.
 * @param onBlur Triggers when the Menu loses focus.
 * @param ulAttr Attributes for the underlying `<ul>` element.
 */
declare function Menu({ children, open, density, onBlur, ulAttr, style, className, }: MenuProps): JSX.Element;
declare namespace Menu {
    var displayName: string;
}

/**
 * Props for {@link MenuItem Menu Item}.
 */
interface MenuItemProps extends SKComponent {
    /**
     * The text displayed inside the Menu Item.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * An icon can appear before the text (`children`) in a Menu Item. In a long
     * Menu, icons can quickly orient users.
     *
     * - If one Menu Item in a Menu has an icon, the rest should have one too.
     * - You are encouraged to use Material Icons as the value for `icon`.
     * - Optional.
     */
    icon?: JSX.Element;
    /**
     * A message shown in a tooltip when the user hovers over the Menu Item.
     *
     * - Optional.
     */
    metadata?: string | JSX.Element;
    /**
     * If this Menu Item is selected in a dropdown Menu.
     *
     * - Optional.
     */
    selected?: boolean;
    /**
     * Turns the Menu Item text gray and block any action associated with it.
     * `onClick` and `href` will have no effect.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * The value of a Select item, similar to `value` on `<option>`.
     *
     * - **Important**: this is intended to be used only when the Menu Item is
     *   inside a Select. This prop is not functional otherwise.
     * - Optional.
     */
    value?: any;
    /**
     * The function called when the user interacts with the Menu Item, similar
     * to `onClick` on `<button>`.
     *
     * - Incompatible with `href`.
     */
    onClick?: () => any;
    /**
     * The URL of the page this Menu Item leads to, similar to `href` on `<a>`.
     *
     * - Incompatible with `onClick`.
     */
    href?: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing. An
     * example is `next/link` from Next.js.
     *
     * - Incompatible with `onClick`.
     */
    element?: ({ children, ref, title, style, className, href, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onTouchStart: (event: React.TouchEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * An action/option inside a temporary list.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.kvecy6esdzke SKCom documentation}
 *
 * @param children The text displayed inside the Menu Item.
 * @param icon An icon can appear before the text (`children`) in a Menu Item.
 * @param metadata A message shown in a tooltip when the user hovers over the Menu Item.
 * @param selected If this Menu Item is selected in a dropdown Menu.
 * @param disabled Turns the Menu Item text gray and block any action associated with it.
 * @param value The value of a Select item, similar to `value` on `<option>`.
 * @param onClick The function called when the user interacts with the Menu Item, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Menu Item leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function MenuItem({ children, icon, metadata, selected, disabled, onClick, href, element: Element, style, className, }: MenuItemProps): JSX.Element;
declare namespace MenuItem {
    var displayName: string;
}

/**
 * Props for {@link PageHeader Page Header}.
 */
interface PageHeaderProps extends SKComponent {
    /**
     * Some additional components inside the Page Header area.
     *
     * - Ensure that these components are highly related to the title itself.
     * - Examples are:
     *   - A Search field in a lookup page (Search is highly related to “School
     *     lookup”).
     *   - A TL;DR section and tags in a news article (a summary of an article
     *     is highly related to the headline).
     *   - etc.
     * - Optional.
     */
    children?: React.ReactNode;
    /**
     * The title text: the biggest text in a page and the only within a `<h1>`
     * tag.
     *
     * - Always required.
     */
    title: string | JSX.Element;
    /**
     * An icon representative of this page of the application.
     *
     * - Incompatible with `children`.
     */
    icon?: JSX.Element;
    /**
     * A small image of your brand can be put on the Page Header to constantly
     * remind your users that they are, in fact, in your app.
     *
     * - Replaces the home Button icon.
     * - Not displayed on desktop.
     * - Ensure the image is simple and undistracting.
     * - Optional but recommended.
     */
    brand?: JSX.Element;
    /**
     * The link the back Button navigates to.
     *
     * - Important: the Back button is not for going back, but for going up a
     *   hierarchy in the sitemap. As a page can sometimes be navigated to from
     *   many places, this ensures that the Back button of a page always goes to
     *   the same place.
     *   {@link https://m2.material.io/design/navigation/understanding-navigation.html Learn more about navigation.}
     * - Required if `onBack` is not defined, as the back Button cannot have no
     *   functionality.
     * - Incompatible with `onBack`.
     */
    parentURL?: string;
    /**
     * The link to the home page of this application.
     *
     * - Optional.
     */
    homeURL?: string;
    /**
     * Allows for translation of the accessibility labels.
     *
     * - Must be `th` or `en-US`, as SKCom currently only support those 2
     *   languages.
     * - Optional.
     */
    locale?: "en-US" | "th";
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing. An
     * example is `next/link` from Next.js.
     *
     * - Optional.
     * - Incompatible with `onBack`.
     */
    element?: ButtonProps["element"];
    /**
     * The function triggered when the back Button is clicked.
     *
     * - Required if `parentURL` is not defined, as the back Button cannot have
     *   no functionality.
     * - Incompatible with `parentURL`.
     */
    onBack?: () => any;
    /**
     * The function called when the user clicks on the navigation Button.
     *
     * - Always required.
     */
    onNavToggle: () => any;
    /**
     * Props for the underlying Button component the back Button uses.
     *
     * - Optional.
     */
    backAttr?: ButtonProps;
}
/**
 * There’s exactly one Page Header on every page. It displays the title (in
 * the only `<h1>` in the page), the back Button for navigating up, and
 * additional components very closely related to the title.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.5w06ou3fwzsd SKCom documentation}
 *
 * @param children Some additional components inside the Page Header area.
 * @param title The title text: the biggest text in a page and the only within a `<h1>` tag.
 * @param icon The icon representative of this page.
 * @param brand A small image of your brand can be put on the Page Header.
 * @param parentURL The link the back Button navigates to.
 * @param homeURL The link to the home page of this application.
 * @param locale Allows for translation of the accessibility labels.
 * @param element Change the underlying element from `<a>` to a custom element.
 * @param onBack The function triggered when the back Button is clicked.
 * @param onNavToggle The function called when the user clicks on the navigation Button.
 * @param backAttr Props for the underlying Button component the back Button uses.
 */
declare function PageHeader({ children, title, icon, brand, parentURL, homeURL, locale, element, onBack, onNavToggle, backAttr, style, className, }: PageHeaderProps): JSX.Element;
declare namespace PageHeader {
    var displayName: string;
}

/**
 * Props for {@link Progress}.
 */
interface ProgressProps extends SKComponent {
    /**
     * Progress can be either a loading spinner or a linear loading bar.
     *
     * - Must be `linear` or `circular`.
     * - Keep the appearance consistent for the same actions. For example, if
     *   loading a post uses `linear` in one place, the same action should always
     *   use `linear` elsewhere.
     * - Always required.
     */
    appearance: "linear" | "circular";
    /**
     * A description of the Progress for screen readers, similar to `alt` on
     * `<img>`.
     *
     * - Always required, because a Progress has no significance to screenreaders.
     */
    alt: string;
    /**
     * The progress percentage (out of 100) of an activity.
     *
     * - If undefined, the Progress will be in an indeterminate state.
     * - Optional.
     */
    value?: number;
    /**
     * If this Progress is visible.
     *
     * - Optional.
     */
    visible?: boolean;
}
/**
 * A Progress indicates that something is ongoing. It can also indicate how
 * much of that something has been done.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.12x5jav7hhzm SKCom documentation}
 *
 * @param appearance Progress can be either a loading spinner or a linear loading bar.
 * @param alt A description of the Progress for screen readers, similar to `alt` on `<img>`.
 * @param value The progress percentage (out of 100) of an activity.
 * @param visible If this Progress is visible.
 */
declare function Progress({ appearance, alt, value, visible, style, className, }: ProgressProps): JSX.Element;
declare namespace Progress {
    var displayName: string;
}

/**
 * Props for {@link Radio}.
 */
interface RadioProps extends SKComponent {
    /**
     * The state of the Radio. This is useful if you want a controlled input.
     *
     * - Optional.
     *
     * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
     */
    value?: boolean;
    /**
     * This function triggers when the user toggles the Radio. The state is
     * passed in via the function as a boolean.
     *
     * - Optional.
     *
     * @param value Whether the Radio is toggled to on or off.
     */
    onChange?: (value: boolean) => any;
    /**
     * Turns the Radio gray and block any action associated with it.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * Attributes for the underlying `<input>` element.
     *
     * - Optional.
     */
    inputAttr?: JSX.IntrinsicElements["input"];
}
/**
 * A choice from a single-select set of choices. Unlike Checkbox and Switch,
 * Radio always appear in a group.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.ilewd6wmow42 SKCom documentation}
 *
 * @param value The state of the Radio. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user toggles the Radio.
 * @param disabled Turns the Radio gray and block any action associated with it.
 * @param inputAttr Attributes for the underlying `<input>` element.
 */
declare function Radio({ value, onChange, disabled, inputAttr, style, className, }: RadioProps): JSX.Element;
declare namespace Radio {
    var displayName: string;
}

/**
 * Props for {@link Section}.
 */
interface SectionProps extends SKComponent {
    /**
     * Section must have exactly 1 Header as the first direct descendent. After
     * that, it can include anything.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * Attributes for the underlying `<section>` element.
     *
     * - Optional.
     */
    sectionAttr?: React.HTMLAttributes<HTMLElement>;
}
/**
 * Section is a way to group content under one Header.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.cpfnymlipawc SKCom documentation}
 *
 * @param children Section must have exactly 1 Header as the first direct descendent. After that, it can include anything.
 * @param sectionAttr Attributes for the underlying `<section>` element.
 */
declare function Section({ children, sectionAttr, style, className, }: SectionProps): JSX.Element;
declare namespace Section {
    var displayName: string;
}

/**
 * Props for {@link TextField Text Field}.
 */
interface TextFieldProps extends SKComponent {
    /**
     * How the Text Field looks. An outlined Text Field has a lower emphasis than
     * filled, so it is great for a form with many fields.
     *
     * - Keep the appearance consistent across Text Fields. Separate different
     *   appearances by region.
     * - Must be `outlined` or `filled`.
     * - Always required.
     */
    appearance: "outlined" | "filled";
    /**
     * The placeholder text (when not focused and no value) and the label text
     * (when focused or has value).
     *
     * - Always required.
     */
    label: string | JSX.Element;
    /**
     * How the Text Field behaves if the field value exceeds the visual space.
     *
     * - Must be `single-line`, `multi-line`, or `textarea`.
     * - A single line Text Field can only accompany 1 line of text. Field value
     *   never wraps and instead scrolls.
     * - A multi-line Text Field starts with just accompanying 1 line but
     *   vertically extends to fit the field value as needed.
     * - A text area Text Field has a fixed height and wraps text.
     * - Optional.
     */
    behavior?: "single-line" | "multi-line" | "textarea";
    /**
     * The alignment of the input field.
     *
     * - This is useful if the input value should come immediately before the
     *   trailing text, like the start of an email.
     * - Optional.
     */
    align?: "left" | "right";
    /**
     * The leading text or icon, aligned to the left.
     *
     * - Optional.
     */
    leading?: string | JSX.Element;
    /**
     * The trailing text or icon, aligned to the right.
     *
     * - Incompatible with `canClear`, as that requires the space of the trailing
     *   icon for the clear button.
     * - Optional.
     */
    trailing?: string | JSX.Element;
    /**
     * A description of the Text Field for screen readers, similar to `alt` on `<img>`.
     *
     * - Required if `label` is a JSX Element, as it is used to generate the ID
     *   crucial for accessibility.
     */
    alt?: string;
    /**
     * A short description of the Text Field, or an error message during an error state.
     *
     * - Optional but recommended during an error state.
     */
    helperMsg?: string | JSX.Element;
    /**
     * If the user has to enter text in this field for the form to be valid.
     *
     * - Activates the error state after the user exits the Text Field without
     *   entering anything, even if `error` is false.
     * - Optional.
     */
    required?: boolean;
    /**
     * Turns the Text Field gray and block user input. `onChange` will not fire.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * Allows the user to clear the field value with the clear button.
     *
     * - The clear button only appears if this is defined.
     * - Incompatible with `trailing`, as that uses the space of the clear button
     *   for the trailing icon.
     * - Optional.
     */
    canClear?: boolean;
    /**
     * Tells Text Field that it contains an invalid value and activates the error
     * state.
     *
     * - Optional.
     */
    error?: boolean;
    /**
     * The value inside the field. This is useful if you want a controlled input.
     *
     * - Optional.
     *
     * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
     */
    value?: string;
    /**
     * This function triggers when the user make changes to the field value. The
     * value is passed in via the function.
     *
     * - Optional.
     *
     * @param value
     */
    onChange?: (value: string) => any;
    /**
     * Attributes for the underlying `<input>` element used as the field.
     *
     * - Optional.
     */
    inputAttr?: JSX.IntrinsicElements["input"];
}
/**
 * A place for users to enter text.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.9oc937dbw2xq SKCom documentation}
 *
 * @param appearance How the Text Field looks.
 * @param label The placeholder text and the label text.
 * @param behavior How the Text Field behaves if the field value exceeds the visual space.
 * @param align The alignment of the input field.
 * @param leading The leading text or icon, aligned to the left.
 * @param trailing The trailing text or icon, aligned to the right.
 * @param alt A description of the Text Field for screen readers, similar to `alt` on `<img>`.
 * @param helperMsg A short description of the Text Field, or an error message during an error state.
 * @param required If the user has to enter text in this field for the form to be valid.
 * @param disabled Turns the Text Field gray and block user input.
 * @param canClear Allows the user to clear the field value with the clear button.
 * @param error Tells Text Field that it contains an invalid value and activates the error state.
 * @param value The value inside the field. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user make changes to the field value.
 * @param inputAttr Attributes for the underlying `<input>` element used as the field.
 */
declare function TextField({ appearance, label, behavior, align, leading, trailing, alt, helperMsg, required, disabled, canClear, error: incError, value, onChange, inputAttr, style, className, }: TextFieldProps): JSX.Element;
declare namespace TextField {
    var displayName: string;
}

/**
 * Props for {@link Select}.
 */
interface SelectProps extends Pick<TextFieldProps, "appearance" | "label" | "alt" | "leading" | "helperMsg" | "required" | "error" | "className" | "style"> {
    children?: React.ReactNode;
    locale?: "en-US" | "th";
    value?: any;
    onChange?: (value: any) => any;
    menuAttr?: Partial<MenuProps>;
}
/**
 * Sometimes it’s impractical to show all options at a time with a radio group.
 * Select allows the user to choose from options shown on a temporary surface.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.hh9ts22t8gjy SKCom documentation}
 *
 * @param children
 * @param appearance
 * @param label
 * @param alt
 * @param leading
 * @param helperMsg
 * @param locale
 * @param required
 * @param error
 * @param value
 * @param onChange
 * @param menuAttr
 */
declare function Select({ children, appearance, label, alt, leading, helperMsg, locale, required, error, value, onChange, menuAttr, style, className, }: SelectProps): JSX.Element;
declare namespace Select {
    var displayName: string;
}

/**
 * Props for {@link Snackbar}.
 */
interface SnackbarProps extends SKComponent {
    /**
     * The message inside the Snackbar.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * A Snackbar can contain 1 action. Pressing this action closes the Snackbar.
     *
     * - Must contain 1 Button with text appearance.
     * - Optional.
     */
    action?: JSX.Element;
    /**
     * Put the message (`children`) above the action (`action`).
     *
     * - This is useful if the action text is long.
     * - Optional.
     */
    stacked?: boolean;
    /**
     * If the Snackbar is open and visible.
     *
     * - Optional.
     */
    open?: Boolean;
    /**
     * Triggers when the close Button is pressed.
     *
     * - `onClose` is not triggered when the Snackbar dismisses itself.
     */
    onClose?: () => any;
    /**
     * Triggers after the Snackbar has completely exited the screen.
     *
     * - Snackbar does not close on its own. This function triggers a few moments
     *   after `open` is set to false when the exit animation ends.
     * - Optional.
     */
    onExitComplete?: () => any;
}
/**
 * Snackbar briefly shows low priority information that does not require
 * action, as opposed to Dialog. It can inform the user about ongoing processes
 * or an event that has just been completed.
 *
 * Note that Snackbar, as per SKCom’s principles, does not do state management
 * on its own. Use the `children`, `open`, `onClose`, and `onExitComplete`
 * props with your own state management solution.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.56t1qg46v0rl SKCom documentation}
 *
 * @param children The message inside the Snackbar.
 * @param action A Snackbar can contain 1 action. Pressing this action closes the Snackbar.
 * @param stacked Put the message (`children`) above the action (`action`).
 * @param open If the Snackbar is open and visible.
 * @param onClose Triggers when the close Button is pressed.
 * @param onExitComplete Triggers after the Snackbar has completely exited the screen.
 */
declare function Snackbar({ children, action, stacked, open, onClose, onExitComplete, style, className, }: SnackbarProps): JSX.Element;
declare namespace Snackbar {
    var displayName: string;
}

/**
 * Props for {@link Switch}.
 */
interface SwitchProps extends SKComponent {
    /**
     * The state of the Switch. This is useful if you want a controlled input.
     *
     * - Optional.
     *
     * @see {@link https://reactjs.org/docs/forms.html#controlled-components React documention on controlled input}
     */
    value?: boolean;
    /**
     * This function triggers when the user toggles the switch. The state is
     * passed in via the function as a boolean.
     *
     * - Optional.
     */
    onChange?: (value: boolean) => any;
    /**
     * An icon inside the Thumb when the switch is off.
     *
     * - You are encouraged to use Material Icons as the value for `offIcon`.
     * - Optional.
     */
    offIcon?: JSX.Element;
    /**
     * An icon inside the Thumb when the switch is on.
     *
     * - You are encouraged to use Material Icons as the value for `onIcon`.
     * - Optional.
     */
    onIcon?: JSX.Element;
    /**
     * Turns the Switch gray and block any action associated with it.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
    /**
     * Attributes for the underlying `<button>` element.
     *
     * - Optional.
     */
    buttonAttr?: JSX.IntrinsicElements["button"];
}
/**
 * A Switch toggles something on and off. It is usually in a Form Item. Unlike
 * Checkbox and Radio, a Switch is independent.
 * {@link https://m3.material.io/components/switch/guidelines#4f51b236-583e-4caa-9ae6-c8079325ef6b Learn the differences.}
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.ab4q1pg880wv SKCom documentation}
 *
 * @param value The state of the Switch. This is useful if you want a controlled input.
 * @param onChange This function triggers when the user toggles the switch. The state is passed in via the function as a boolean.
 * @param offIcon An icon inside the Thumb when the switch is off.
 * @param onIcon An icon inside the Thumb when the switch is on.
 * @param disabled Turns the Switch gray and block any action associated with it.
 * @param buttonAttr Attributes for the underlying `<button>` element.
 */
declare function Switch({ value, onChange, offIcon, onIcon, disabled, buttonAttr, style, className, }: SwitchProps): JSX.Element;
declare namespace Switch {
    var displayName: string;
}

/**
 * Props for {@link Table}.
 */
interface TableProps extends SKComponent {
    /**
     * The content of the Table.
     *
     * - Must include Table Head and Table Body.
     * - Can include Table Foot in addition to the 2 required components.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * The minimum width of the content. When the Table’s width is lower than
     * this value, it becomes scrollable. Otherwise, the content fills the width
     * of the Table.
     *
     * - Optional.
     */
    contentWidth?: number;
    /**
     * The maximum height of the Table. The Table uses the content’s height until
     * it exceeds this value.
     *
     * - Optional.
     */
    height?: number;
}
/**
 * A row of Buttons. Table handles spacing and overflow.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.3ypdzg62wg53 SKCom documentation}
 *
 * @param children The content of the Table.
 * @param contentWidth The minimum width of the content.
 * @param height The maximum height of the Table.
 */
declare function Table({ children, contentWidth, height, style, className, }: TableProps): JSX.Element;
declare namespace Table {
    var displayName: string;
}

/**
 * Props for {@link TableHead Table Head}.
 */
interface TableHeadProps extends SKComponent {
    /**
     * Table Head has the same behaviour as `<thead>`.
     *
     * - Must consist of Table Row(s), which must consist of Table Cells with the
     *   `header` enabled.
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * If the Table Head stays put on scroll.
     *
     * - Table Head will be fixed to the top of the parent Table, not the screen.
     * - Only effective if `height` is set on the parent Table.
     * - Optional.
     */
    fixed?: boolean;
}
/**
 * The head area of a Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.7y7xcyou1za9 SKCom documentation}
 *
 * @param children Table Head has the same behaviour as `<thead>`.
 * @param fixed If the Table Head stays put on scroll.
 */
declare function TableHead({ children, fixed, style, className, }: TableHeadProps): JSX.Element;
declare namespace TableHead {
    var displayName: string;
}

/**
 * Props for {@link TableBody Table Body}.
 */
interface TableBodyProps extends SKComponent {
    /**
     * Table Body has the same behaviour as `<tbody>`.
     *
     * - Must consist of Table Rows, which must consist of Table Cells.
     * - Always required.
     */
    children: React.ReactNode;
}
/**
 * The body area of a Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.56t1qg46v0rl SKCom documentation}
 *
 * @param children Table Body has the same behaviour as `<tbody>`.
 */
declare function TableBody({ children, style, className }: TableBodyProps): JSX.Element;
declare namespace TableBody {
    var displayName: string;
}

/**
 * Props for {@link TableFoot Table Foot}.
 */
interface TableFootProps extends SKComponent {
    /**
     * Table Foot has the same behaviour as `<tfoot>`.
     *
     * - Must consist of Table Rows, which must consist of Table Cells.
     * - Always required.
     */
    children: React.ReactNode;
}
/**
 * The foot area of a Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.5lm5awdc1t9l SKCom documentation}
 *
 * @param children Table Foot has the same behaviour as `<tfoot>`.
 */
declare function TableFoot({ children, style, className }: TableFootProps): JSX.Element;
declare namespace TableFoot {
    var displayName: string;
}

/**
 * Props for {@link TableRow Table Row}.
 */
interface TableRowProps extends SKComponent {
    /**
     * Table Row has the same behaviour as `<tr>`.
     *
     * - Must consist of Table Cells.
     * - Always required.
     */
    children: React.ReactNode;
}
/**
 * A row of a Table, must be within a table area (Table Head, Table Body, or
 * Table Foot).
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.lxbokeuz0g5q SKCom documentation}
 *
 * @param children Table Row has the same behaviour as `<tr>`.
 */
declare function TableRow({ children, style, className }: TableRowProps): JSX.Element;
declare namespace TableRow {
    var displayName: string;
}

/**
 * Props for {@link TableCell Table Body}.
 */
interface TableCellProps extends SKComponent {
    /**
     * The content of the cell.
     *
     * - Always required.
     */
    children: React.ReactNode;
    /**
     * If the cell is a header cell, Table Cell will use `<th>` instead of `<td>`.
     *
     * - Optional.
     */
    header?: boolean;
    /**
     * How the Buttons should be positioned. It can be aligned to the left, the
     * center (default), or the right.
     *
     * - Must be `left`, `center`, `right`.
     * - Optional.
     */
    align?: "left" | "center" | "right";
    /**
     * An inline menu. This is useful for editable tables.
     *
     * - Optional.
     */
    menu?: JSX.Element;
    /**
     * Triggers on click if defined.
     * - If this is defined, a dropdown button appears.
     * - Optional.
     */
    onMenuToggle?: () => any;
    /**
     * Attributes for the underlying `<td>` element.
     *
     * - Optional.
     */
    tdAttr?: JSX.IntrinsicElements["td" | "th"];
}
/**
 * A cell of a Table.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.l8x24yc18c9b SKCom documentation}
 *
 * @param children The content of the cell.
 * @param header If the cell is a header cell, Table Cell will use `<th>` instead of `<td>`.
 * @param align How the Buttons should be positioned. It can be aligned to the left, the center (default), or the right.
 * @param menu An inline menu. This is useful for editable tables.
 * @param onMenuToggle Triggers on click if defined.
 * @param tdAttr Attributes for the underlying `<td>` element.
 */
declare function TableCell({ children, header, align, menu, onMenuToggle, tdAttr, style, className, }: TableCellProps): JSX.Element;
declare namespace TableCell {
    var displayName: string;
}

/**
 * Props for {@link Tab}.
 */
interface TabProps extends SKComponent {
    /**
     * An icon appears before or above the label. Icons help users identify pages more quickly.
     *
     * - If the icon is sufficiently representative of the page, a label isn’t
     *   needed.
     * - Normally optional but required if `label` is not defined as a Tab cannot
     *   be empty.
     */
    icon?: JSX.Element;
    /**
     * An additional text label next to or underneath the icon.
     *
     * - Required if `icon` is not defined as a Tab cannot be empty.
     */
    label?: string | JSX.Element;
    /**
     * A description of the Tab for screen readers, similar to `alt` on `<img>`.
     *
     * - Required if the Tab just includes `icon`, because an icon has no
     *   significance for screen readers.
     */
    alt?: string;
    /**
     * @private
     */
    containerID?: string;
    /**
     * A message shown in a tooltip when the user hovers over the Tab.
     *
     * - Optional.
     */
    tooltip?: string;
    /**
     * Highlights the Tab. If the user is currently on this page, the Tab should
     * be highlighted.
     *
     * - Optional.
     */
    selected?: boolean;
    /**
     * The function called when the user interacts with the Tab, similar to
     * `onClick` on `<button>`.
     *
     * - Incompatible with `href`.
     */
    onClick?: () => any;
    /**
     * The URL of the page this Tab leads to, similar to `href` on `<a>`.
     *
     * - Incompatible with `onClick`.
     */
    href?: string;
    /**
     * Change the underlying element from `<a>` to a custom element. This is
     * useful when a framework you’re using has a Link component for routing. An
     * example is `next/link` from Next.js.
     *
     * - Optional.
     */
    element?: ({ children, ref, title, style, className, href, onTouchStart, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onTouchStart: (event: React.TouchEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element | null;
}
/**
 * Tabs allow the user to switch between pages on the same level of a page
 * hierarchy. For example, an Overview, Students, and Teachers page of a class.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.g56fs6ts5kqq SKCom documentation}
 *
 * @param icon An icon appears before or above the label. Icons help users identify pages more quickly.
 * @param label An additional text label next to or underneath the icon.
 * @param alt A description of the Tab for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Tab.
 * @param selected Highlights the Tab. If the user is currently on this page, the Tab should be highlighted.
 * @param onClick The function called when the user interacts with the Tab, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Tab leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function Tab({ icon, label, alt, containerID, tooltip, selected, onClick, href, element: Element, style, className, }: TabProps): JSX.Element;
declare namespace Tab {
    var displayName: string;
}

/**
 * Props for {@link TabsContainer Tabs Container}.
 */
interface TabsContainerProps extends SKComponent {
    /**
     * Tabs to select from.
     */
    children: React.ReactNode;
    /**
     * Where Tabs Container is placed affects its appearance. A Tabs Container
     * responsible for the entire content pane (`primary`) has a different
     * appearance as that for only a section (`secondary`).
     *
     * - Must be `primary` or `secondary`.
     * - Always required.
     */
    appearance: "primary" | "secondary";
    /**
     * A description of the Tabs Container for screen readers, similar to `alt`
     * on `<img>`.
     *
     * - Always required.
     */
    alt: string;
}
/**
 * A group of Tabs. Tabs allow the user to switch between pages on the same
 * level of a page hierarchy. For example, an Overview, Students, and Teachers
 * page of a class.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.pfftt8s0sg20 SKCom documentation}
 *
 * @param children Tabs to select from.
 * @param type Where Tabs Container is placed affects its appearance. A Tabs Container responsible for the entire content pane (`primary`) has a different appearance as that for only a section (`secondary`).
 * @param alt A description of the Tabs Container for screen readers, similar to `alt` on `<img>`.
 */
declare function TabsContainer({ children, appearance, alt, style, className, }: TabsContainerProps): JSX.Element;
declare namespace TabsContainer {
    var displayName: string;
}

/**
 * Props for {@link ThemeProvider}.
 */
interface ThemeProviderProps {
    /**
     * Content that uses this theme.
     */
    children: React.ReactNode;
}
/**
 * Provides default variables for SK Components.
 *
 * @param children Content that uses this theme.
 */
declare function ThemeProvider({ children }: ThemeProviderProps): JSX.Element;
declare namespace ThemeProvider {
    var displayName: string;
}

/**
 * A hook with duration and easing definitions for use with Framer Motion.
 * The definitions can be used with {@link transition}.
 *
 * @returns An object with durations in `duration` and easing definitions in `easing`.
 */
declare function useAnimationConfig(): {
    /**
     * Duration: how long the transition takes.
     */
    duration: {
        short1: number;
        short2: number;
        short3: number;
        short4: number;
        medium1: number;
        medium2: number;
        medium3: number;
        medium4: number;
        long1: number;
        long2: number;
        long3: number;
        long4: number;
        extraLong1: number;
        extraLong2: number;
        extraLong3: number;
        extraLong4: number;
    };
    /**
     * Easing: the easing definition.
     */
    easing: {
        linear: BezierDefinition;
        standard: BezierDefinition;
        standardAccelerate: BezierDefinition;
        standardDecelerate: BezierDefinition;
        emphasized: BezierDefinition;
        emphasizedAccelerate: BezierDefinition;
        emphasizedDecelerate: BezierDefinition;
    };
};
/**
 * Create a Framer Motion Tween object from a duration and an easing.
 *
 * @see {@link https://www.framer.com/motion/transition/#tween Framer Motion documentation}
 *
 * @param duration How long the transition takes. Use the `duration` key from {@link useAnimationConfig}.
 * @param easing The easing definition. Use the `easing` key from {@link useAnimationConfig}.
 *
 * @returns A Framer Motion Tween object.
 */
declare function transition(duration: Tween["duration"], easing: Tween["ease"]): Tween;
/**
 * A hook to control a ripple element within a parent element.
 *
 * Example:
 * ```tsx
 * const { rippleHandles, rippleControls, rippleStyle }
 *   = useRipple(buttonRef);
 *
 * return (
 *   <button {...rippleHandles}>
 *     <span>Button</button>
 *     <motion.span
 *       initial={{ scale: 0, opacity: 0.36 }}
 *       animate={rippleControls}
 *       className="skc-button__ripple"
 *       style={rippleStyle}
 *     />
 *   </button>
 * );
 * ```
 *
 * @param parentRef The React Reference Object pointing to the parent element of the ripple.
 * @returns Event listeners, animation controls, and styles to put on the ripple `motion` element.
 */
declare function useRipple(parentRef: React__default.MutableRefObject<any>): {
    rippleListeners: {
        onTouchStart: (event: React__default.TouchEvent) => void;
        onMouseDown: (event: React__default.MouseEvent) => void;
        onKeyDown: (event: React__default.KeyboardEvent) => void;
    };
    rippleControls: AnimationControls;
    rippleStyle: MotionStyle;
};

declare const breakpoints: {
    base: number;
    sm: number;
    md: number;
    lg: number;
};
/**
 * Watches the window for a change in breakpoint.
 * @returns `atBreakpoint` — The largest breakpoint the user window is at.
 */
declare function useBreakpoint(): {
    atBreakpoint: keyof typeof breakpoints;
};

export { Actions, ActionsProps, AssistChip, AssistChipProps, Avatar, AvatarProps, Button, ButtonProps, Card, CardContent, CardContentProps, CardHeader, CardHeaderProps, CardProps, Checkbox, CheckboxProps, ChipField, ChipFieldProps, ChipSet, ChipSetProps, Columns, ColumnsProps, ContentLayout, ContentLayoutProps, Dialog, DialogContent, DialogContentProps, DialogHeader, DialogHeaderProps, DialogProps, Divider, DividerProps, FAB, FABProps, FormGroup, FormGroupProps, FormItem, FormItemProps, FullscreenDialog, FullscreenDialogProps, Header, HeaderProps, InputChip, InputChipProps, List, ListItem, ListItemContent, ListItemContentProps, ListItemProps, ListProps, MaterialIcon, MaterialIconProps, Menu, MenuItem, MenuItemProps, MenuProps, NavBar, NavBarItem, NavBarItemProps, NavBarProps, NavDrawer, NavDrawerItem, NavDrawerItemProps, NavDrawerProps, NavDrawerSection, NavDrawerSectionProps, PageHeader, PageHeaderProps, Progress, ProgressProps, Radio, RadioProps, RootLayout, RootLayoutProps, Section, SectionProps, SegmentedButton, SegmentedButtonProps, Select, SelectProps, Snackbar, SnackbarProps, SplitLayout, SplitLayoutProps, Switch, SwitchProps, Tab, TabProps, Table, TableBody, TableBodyProps, TableCell, TableCellProps, TableFoot, TableFootProps, TableHead, TableHeadProps, TableProps, TableRow, TableRowProps, TabsContainer, TabsContainerProps, TextField, TextFieldProps, ThemeProvider, ThemeProviderProps, ToggleButton, ToggleButtonProps, transition, useAnimationConfig, useBreakpoint, useRipple };

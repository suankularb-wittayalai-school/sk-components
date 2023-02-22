import * as React from 'react';
import React__default from 'react';
import { BezierDefinition } from 'framer-motion';

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
    loading?: boolean;
    /**
     * Turns the Button gray and block any action associated with it. `onClick`
     * and `href` will have no effect.
     * {@link https://codium.one/index.php/en/blog/77-disabled-buttons-don-t-have-to-suck Learn when to disable something.}
     *
     * - Optional.
     */
    disabled?: boolean;
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
    element?: ({ children, ref, title, style, className, href, onClick, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onClick: (event: React.MouseEvent) => void;
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
 * @param onClick The function called when the user interacts with the Button.
 * @param href The URL of the page this Button leads to.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function Button({ children, appearance, icon, alt, tooltip, selected, dangerous, loading, disabled, onClick, href, element: Element, style, className, }: ButtonProps): JSX.Element;
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
    element?: ({ children, ref, style, className, href, onClick, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onClick: (event: React.MouseEvent) => void;
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
    element?: ({ children, title, style, className, href, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
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
    element?: ({ children, ref, title, style, className, href, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
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
    element?: ({ children, className, href, onMouseDown, onKeyDown, }: {
        children: React.ReactNode;
        className: string;
        href: string;
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
 */
declare function RootLayout({ children, className, style }: RootLayoutProps): JSX.Element;
declare namespace RootLayout {
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
 * @param element Change the underlying element from `<a>` to a custom element.
 * @param onBack The function triggered when the back Button is clicked.
 * @param onNavToggle The function called when the user clicks on the navigation Button.
 * @param backAttr Props for the underlying Button component the back Button uses.
 */
declare function PageHeader({ children, title, icon, brand, parentURL, homeURL, element, onBack, onNavToggle, backAttr, style, className, }: PageHeaderProps): JSX.Element;
declare namespace PageHeader {
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

export { Actions, ActionsProps, AssistChip, AssistChipProps, Button, ButtonProps, Columns, ColumnsProps, ContentLayout, ContentLayoutProps, Divider, FAB, FABProps, MaterialIcon, MaterialIconProps, NavBar, NavBarItem, NavBarItemProps, NavBarProps, NavDrawer, NavDrawerItem, NavDrawerItemProps, NavDrawerProps, NavDrawerSection, NavDrawerSectionProps, PageHeader, PageHeaderProps, RootLayout, RootLayoutProps, SegmentedButton, SegmentedButtonProps, ThemeProvider, ThemeProviderProps, ToggleButton, ToggleButtonProps, useAnimationConfig };

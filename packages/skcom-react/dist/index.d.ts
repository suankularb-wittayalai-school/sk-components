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
    element?: ({ children, ref, title, style, className, href, onClick, onMouseDown, onTouchStart, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onClick: (event: React.MouseEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onTouchStart: (event: React.TouchEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element;
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
declare function Button({ children, appearance, icon, alt, tooltip, selected, dangerous, loading, disabled, onClick, href, element, style, className, }: ButtonProps): JSX.Element;
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
    element?: ({ children, ref, title, style, className, href, onClick, onMouseDown, onTouchStart, onKeyDown, }: {
        children: React.ReactNode;
        ref: React.MutableRefObject<any>;
        title?: string;
        style?: React.CSSProperties;
        className: any;
        href: string;
        onClick: (event: React.MouseEvent) => void;
        onMouseDown: (event: React.MouseEvent) => void;
        onTouchStart: (event: React.TouchEvent) => void;
        onKeyDown: (event: React.KeyboardEvent) => void;
    }) => JSX.Element;
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
declare function FAB({ children, color, size, icon, alt, tooltip, stateOnScroll, onClick, href, element, style, className, }: FABProps): false | JSX.Element;
declare namespace FAB {
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

export { Actions, ActionsProps, Button, ButtonProps, FAB, FABProps, MaterialIcon, MaterialIconProps, SegmentedButton, SegmentedButtonProps, ToggleButton, ToggleButtonProps, useAnimationConfig };

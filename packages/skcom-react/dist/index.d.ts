import * as React from 'react';
import React__default from 'react';
import { BezierDefinition } from 'framer-motion';

interface SKComponent {
    className?: string;
    style?: React__default.CSSProperties;
}

interface ButtonProps extends SKComponent {
    children?: React.ReactNode;
    appearance: "filled" | "tonal" | "outlined" | "text";
    icon?: JSX.Element;
    alt?: string;
    tooltip?: string;
    selected?: boolean;
    dangerous?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => any;
    href?: string;
    element?: ({ children, href, className, }: {
        children: React.ReactNode;
        href: string;
        className: string;
    }) => any;
}
/**
 * Button helps users take action, whether it’s logging in, liking a post, or going to a page.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.48e8htvs5p0g SKCom documentation}
 *
 * @param children The text displayed inside the Button.
 * @param appearance The appearance of the Button.
 * @param icon An icon can appear before the text (`children`) in a Button. In a page with many buttons, icons can quickly orient users.
 * @param alt A description of the Button for screen readers, similar to `alt` on `<img>`.
 * @param tooltip A message shown in a tooltip when the user hovers over the Button.
 * @param selected If the Button is selected. `icon` is replaced with a checkmark if this is true.
 * @param dangerous If the action the Button accomplishes is dangerous, like deleting your account.
 * @param loading Disable the Button and add a Progress spinner in front of the text to signify loading status.
 * @param disabled Turns the Button gray and block any action associated with it.
 * @param onClick The function called when the user interacts with the Button, similar to `onClick` on `<button>`.
 * @param href The URL of the page this Button leads to, similar to `href` on `<a>`.
 * @param element Change the underlying element from `<a>` to a custom element.
 */
declare function Button({ children, appearance, icon, alt, tooltip, selected, dangerous, loading, disabled, onClick, href, element, style, className, }: ButtonProps): any;
declare namespace Button {
    var displayName: string;
}

interface SegmentedButtonProps extends SKComponent {
    children: React.ReactNode;
    alt: string;
    density?: 0 | -1 | -2 | -3;
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

interface MaterialIconProps extends SKComponent {
    icon: string;
    fill?: boolean;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    grade?: -25 | 0 | 200;
    size?: 20 | 24 | 40 | 48;
}
/**
 * Icons are essential to any web design. They orient the users, help user navigate, save space.
 * Material Icon uses the “Material Symbol” icon font from Google.
 *
 * @see {@link https://docs.google.com/document/d/1UJeTpXcB2MBL9Df4GUUeZ78xb-RshNIC_-LCIKmCo-8/edit?usp=sharing#heading=h.17kwuu4el5al SKCom documentation}
 *
 * @param icon Material Icon uses the “Material Symbol” font, where each icon has its own corresponding text string. You can find the list of all icons at [Google Fonts](https://fonts.google.com/icons).
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

export { Button, ButtonProps, MaterialIcon, MaterialIconProps, SegmentedButton, SegmentedButtonProps, useAnimationConfig };

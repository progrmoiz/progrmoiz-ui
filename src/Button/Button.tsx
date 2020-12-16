import React, { useContext } from "react";
import classnames from 'classnames';
import { ThemeContext } from '../context/ThemeContext';

type ButtonTypes = HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement;
type IconType = React.ReactElement<React.HTMLProps<HTMLOrSVGElement>>

/**
 * TODO: Add styles to button i.e. primary, secondary, gray, black, white
 */

export interface Props {
    children?: React.ReactNode;
    className?: string;
    /**
     * Display outlined style button, can be use as secondary button.
     */
    outlined?: boolean;
    /**
     * Display linked style button.
     */
    linked?: boolean;
    /**
    * Defines if the button is disabled.
    */
    disabled?: boolean;
    /**
    * Remove all the styling except colors, useful for links or setting page
    */
    unstyled?: boolean;
    /**
    * Use by ButtonGroup to pass, if this is children of ButtonGroup. Don't worry about it.
    */
    group?: boolean;
    /**
    * Use by ButtonGroup to pass, if this is first child of ButtonGroup. Don't worry about it.
    */
    first?: boolean;
    /**
    * Use by ButtonGroup to pass, if this is last last of ButtonGroup. Don't worry about it.
    */
    last?: boolean;
    /**
    * When using ButtonGroup, use this attr to seperate button like '...', [<,1,2,...,3,4>]
    */
    sep?: boolean;
    /**
     * Display a round button, default large.
     */
    rounded?: 'none' | 'small' | 'medium' | 'large' | 'full';
    /**
     * Define the size for button.
     */
    size?: 'smaller' | 'small' | 'regular' | 'large' | 'larger';
    /**
     * Define if the button should be anchor or button.
     */
    href?: string;
    /**
     * To add icon on left side of children.
     */
    icon?: IconType;
    /**
     * To add icon on right side of children.
     */
    trailingIcon?: IconType;
}

export interface ButtonAsAnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface ButtonAsButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ButtonAsSpanProps extends Props, React.ButtonHTMLAttributes<HTMLSpanElement> {}

export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps | ButtonAsSpanProps

type RefType = ButtonTypes

const Button = React.forwardRef<RefType, ButtonProps>(({
    className = '',
    outlined = false,
    linked = false,
    disabled = false,
    unstyled = false,
    group,
    first,
    last,
    sep,
    rounded = 'large',
    size = 'regular',
    children,
    href,
    icon,
    trailingIcon,
    ...otherProps
}, ref) => {
    const { theme: { button } } = useContext(ThemeContext)

    let roundClass = '';
    if (!unstyled) if (!group) switch (rounded) {
        case 'none': roundClass = 'rounded-none'; break;
        case 'small': roundClass = 'rounded-sm'; break;
        case 'medium': roundClass = 'rounded-md'; break;
        case 'large': default: roundClass = 'rounded-lg'; break;
        case 'full': roundClass = 'rounded-full'; break;
    }
    else switch (rounded) {
        case 'none': roundClass = 'rounded-none'; break;
        case 'small': 
            if (first) roundClass = 'rounded-l-sm';
            if (last) roundClass = 'rounded-r-sm';
            break;
        case 'medium': 
            if (first) roundClass = 'rounded-l-md';
            if (last) roundClass = 'rounded-r-md';
            break;
        case 'large': default: 
            if (first) roundClass = 'rounded-l-lg';
            if (last) roundClass = 'rounded-r-lg';
            break;
        case 'full': 
            if (first) roundClass = 'rounded-l-full';
            if (last) roundClass = 'rounded-r-full';
            break;
    }

    const props = {
        className: classnames(className, {
            [button.base]: !group,
            [button.withIcon]: !!children && (!!icon || !!trailingIcon),
            [button.active]: !unstyled && !group,
            [button.group.base]: !unstyled && group,
            [button.unstyled.base]: unstyled,
            [button.primary.base]: !unstyled && !outlined && !linked,
            [button.outlined.base]: !unstyled && outlined && !linked,
            [button.linked.base]: !unstyled && !outlined && linked,
            [button.unstyled.active]: unstyled,
            [button.primary.active]: !unstyled && !sep && !outlined && !linked && !disabled,
            [button.outlined.active]: !unstyled && !sep && outlined && !linked && !disabled,
            [button.linked.active]: !unstyled && !sep && !outlined && linked && !disabled,
            [button.unstyled.disabled]: unstyled && disabled,
            [button.primary.disabled]: !unstyled && !outlined && !linked && disabled,
            [button.outlined.disabled]: !unstyled && outlined && !linked && disabled,
            [button.linked.disabled]: !unstyled && !outlined && linked && disabled,
            [button.size[size]]: !unstyled && !!children,
            [button.size.noText[size]]: !unstyled && !children,
        }, roundClass),
        disabled,
        ref,
        ...otherProps
    }

    const iconStyles = classnames(button.size.icon[size], {
        '-ml-1 mr-2': !!children && !trailingIcon,
        '-mr-1 ml-2': !!children && trailingIcon,
    });

    if (href) {
        return <a {...(props as React.HTMLProps<HTMLAnchorElement>)} href={href}>
            {!trailingIcon ? renderIcon(icon, iconStyles) : null}
            {children ? <span>{children}</span> : null}
            {trailingIcon ? renderIcon(trailingIcon, iconStyles) : null}
        </a>
    }

    if (sep) {
        return <span {...(props as React.HTMLProps<HTMLSpanElement>)}>
            {!trailingIcon ? renderIcon(icon, iconStyles) : null}
            {children ? <span>{children}</span> : null}
            {trailingIcon ? renderIcon(trailingIcon, iconStyles) : null}
        </span>
    }

    return <button {...(props as React.HTMLProps<HTMLButtonElement>)} type="button">
        {!trailingIcon ? renderIcon(icon, iconStyles) : null}
        {children ? <span>{children}</span> : null}
        {trailingIcon ? renderIcon(trailingIcon, iconStyles) : null}
    </button>
})

const renderIcon = (
    icon?: IconType,
    className?: String,
) =>
    icon
        ? React.cloneElement(icon, {
            className: classnames(className, icon.props.className),
        })
        : null;

export default Button;

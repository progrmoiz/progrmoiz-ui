import React, { useContext } from "react";
import classnames from 'classnames';
import { ThemeContext } from '../context/ThemeContext';
import { Button } from '..';

type ColorType = 'primary' | 'secondary' | 'gray' | 'danger' | 'success' | 'warning' | 'info' | 'black' | 'white' | 'nocolor';

export interface Props {
  /**
   * Text for primary badge
   */
  text?: React.ReactNode;
  /**
   * Text for secondary badge
   */
  secondaryText?: React.ReactNode;
  /**
   * Classes for the root element
   */
  className?: string;
  /**
   * Classes for dot element
   */
  dotClassName?: string;
  /**
   * Button to badge. To add a close button `<Button icon={closeIconSvgHere} />`
   */
  button?: React.ReactElement;
  /**
   * Rounded corner for badge
   */
  rounded?: 'none' | 'basic' | 'small' | 'medium' | 'large' | 'full';
  /**
   * Size for badge
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Color for primary badge
   */
  color?: ColorType;
  /**
   * Color for secondary badge
   */
  secondaryColor?: ColorType;
  /**
   * Dark mode for primary badge
   */
  dark?: boolean;
  /**
   * Dark mode for secondary badge
   */
  secondaryDark?: boolean;
  /**
   * Add dot to badge
   */
  dot?: boolean;
  /**
   * Tag for the root element
   */
  tag?: string;
}

type RefType = React.ReactNode | HTMLElement | string

const Badge = React.forwardRef<RefType, Props>(({
  className = '',
  dotClassName = '',
  text,
  secondaryText,
  rounded = 'full',
  size = 'small',
  color = 'primary',
  secondaryColor = 'secondary',
  dark = false,
  secondaryDark = false,
  dot = false,
  button = null,
  tag: Tag = 'span',
  ...otherProps
}, ref) => {
  const { theme: { badge } } = useContext(ThemeContext)

  const renderDot = () => dot ? <span className={classnames(badge.dot.base, dotClassName, badge.dot.size[size], {
    [badge.dot.color[color]]: !dark,
    [badge.dot.color.dark[color]]: dark
  })}></span> : null

  if (secondaryText) return (
    // https://github.com/Microsoft/TypeScript/issues/28892
    // @ts-ignore
    <Tag
      className={classnames(className, badge.base)}
      ref={ref}
      {...otherProps}
    >
      <span className={classnames('inline-flex items-center', badge.size.primary[size], {
        [badge.color[color]]: !dark,
        [badge.color.dark[color]]: dark,
      }, badge.rounded.left[rounded])}>
        { renderDot() }
        {text}
      </span>
      <span className={classnames('inline-flex items-center', badge.size.secondary[size], {
        [badge.color[secondaryColor]]: !secondaryDark,
        [badge.color.dark[secondaryColor]]: secondaryDark,
      }, badge.rounded.right[rounded])}>
        {!!button ? <span className="mr-1">{secondaryText}</span> : secondaryText}
        { renderButton(button)}
      </span>
    </Tag>
  )

  return (
    // https://github.com/Microsoft/TypeScript/issues/28892
    // @ts-ignore
    <Tag
      className={classnames(className, badge.base, badge.size[size], badge.rounded[rounded], {
        [badge.color[color]]: !dark,
        [badge.color.dark[color]]: dark
      })}
      ref={ref}
      {...otherProps}
    >
      { renderDot() }
      {!!button ? <span className="mr-1">{text}</span> : text}
      { renderButton(button)}
    </Tag>
  )
})

const renderButton = (
  button?: React.ReactElement | null,
) =>
  button ? React.cloneElement(button, {
    className: classnames(button.props.className),
    ...(button.type == Button) && { unstyled: true, size: 'smaller' }
  }) : null;

export default Badge;

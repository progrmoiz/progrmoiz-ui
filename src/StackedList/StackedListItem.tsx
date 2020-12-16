import React, { useContext } from "react";
import classnames from 'classnames';
import {StackedListItemContext, StackedListItemContextShape} from './StackedList';
import { ThemeContext } from '../context/ThemeContext';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  tag?: string;
  twoLine?: boolean,
  dense?: boolean,
  flush?: boolean,
}

type RefType = HTMLDivElement

const StackedListItemBase = React.forwardRef<RefType, Props>(({
    className = '',
    children,
    twoLine,
    dense,
    flush,
    tag: Tag = 'div',
    ...otherProps
}, ref) => {
  const { theme : { stackedList } } = useContext(ThemeContext)

  return (
    // https://github.com/Microsoft/TypeScript/issues/28892
    // @ts-ignore
    <Tag 
      className={classnames(className, {
        [stackedList.item.notFlush]: !flush,
      }, stackedList.item.base)}
      ref={ref}
      {...otherProps}
    >
      {children} 
    </Tag>
  )
})

const StackedListItem: React.FunctionComponent<Props> & { Left: typeof Left, Right: typeof Right } = (props) => {
  return (
    <StackedListItemContext.Consumer>
      {(context) => <StackedListItemBase {...context} {...props} />}
    </StackedListItemContext.Consumer>
  );
};

export interface LeftProps {
  children?: React.ReactNode;
  className?: string;
  tag?: string;
}

export interface RightProps {
  children?: React.ReactNode;
  className?: string;
  tag?: string;
}

const Left = React.forwardRef<RefType, LeftProps>(({
  className = '',
  children,
  tag: Tag = 'div',
  ...otherProps
}, ref) => {
const { flush } = useContext<StackedListItemContextShape>(StackedListItemContext);
const { theme : { stackedList } } = useContext(ThemeContext)

return (
  // https://github.com/Microsoft/TypeScript/issues/28892
  // @ts-ignore
  <Tag 
    className={classnames(className, {
      [stackedList.item.left.notFlush]: !flush
    }, stackedList.item.left.base)}
    ref={ref}
    {...otherProps}
  >
    {children} 
  </Tag>
)
});
StackedListItem.Left = Left;

const Right = React.forwardRef<RefType, RightProps>(({
  className = '',
  children,
  tag: Tag = 'div',
  ...otherProps
}, ref) => {
const { theme : { stackedList } } = useContext(ThemeContext)

return (
  // https://github.com/Microsoft/TypeScript/issues/28892
  // @ts-ignore
  <Tag 
    className={classnames(className, stackedList.item.right.base)}
    ref={ref}
    {...otherProps}
  >
    {children} 
  </Tag>
)
});
StackedListItem.Right = Right;

export default StackedListItem;

import React from "react";
import classnames from 'classnames';
// @ts-ignore @types cannot be used on dist files
import memoizeOne from 'memoize-one/dist/memoize-one.cjs.js';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * TODO: Add check & radio support
 */

export interface Props {
  children?: React.ReactNode;
  className?: string;
  twoLine?: boolean;
  dense?: boolean;
  flush?: boolean;
  tag?: string;
}

type RefType = HTMLDivElement

export interface StackedListItemContextShape {
  tabIndex?: number;
  twoLine?: boolean;
  dense?: boolean;
  flush?: boolean;
}

export const defaultStackedListItemContext: StackedListItemContextShape = {
};
export const StackedListItemContext = React.createContext(defaultStackedListItemContext);

const StackedList = React.forwardRef<RefType, Props>(({
    className = '',
    children,
    twoLine = false,
    dense = false,
    flush = false,
    tag: Tag = 'div',
    ...otherProps
}, ref) => {

  const getListProps = (twoLine?: false, dense?: false, flush?: false) => ({
    twoLine: Boolean(twoLine),
    dense: Boolean(dense),
    flush: Boolean(flush),
  });

  // decreases rerenders
  // https://overreacted.io/writing-resilient-components/#dont-stop-the-data-flow-in-rendering
  const getListPropsMemoized = memoizeOne(getListProps);
  const { theme : { stackedList } } = useContext(ThemeContext)

  return (
    // https://github.com/Microsoft/TypeScript/issues/28892
    // @ts-ignore
    <Tag
      className={classnames(className, {
        [stackedList.notFlush]: !flush, 
      }, stackedList.base)}
      ref={ref}
      {...otherProps}
    >
      <StackedListItemContext.Provider
        value={getListPropsMemoized(twoLine, dense, flush)}
      >
        {children}
      </StackedListItemContext.Provider>
  </Tag>
  )
})

export default StackedList;

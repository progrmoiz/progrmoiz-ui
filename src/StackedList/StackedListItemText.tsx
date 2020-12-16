import React, { useContext } from "react";
import classnames from 'classnames';
import { StackedListItemContextShape, StackedListItemContext } from './StackedList';
import { ThemeContext } from '../context/ThemeContext';

export interface Props {
  tabIndex?: number;
  className?: string;
  primaryText?: React.ReactNode;
  secondaryText?: React.ReactNode;
  childrenTabIndex?: number;
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/14064
function isReactElement(element: any): element is React.ReactElement<any> {
  return element !== null && element.props !== undefined;
}

type RefType = HTMLSpanElement

const StackedListItemText = React.forwardRef<RefType, Props>(({
  primaryText = '',
  secondaryText = '',
  className = '',
  tabIndex = -1,
  ...otherProps
}, ref) => {
  const { dense, twoLine } = useContext<StackedListItemContextShape>(StackedListItemContext);
  const { theme : { stackedList } } = useContext(ThemeContext)

  const renderText = (text: React.ReactNode, className: string) => {
    if (text === undefined) return null;
    if (typeof text === 'string' || typeof text === 'number') {
      return (
        <span
          ref={ref}
          className={className}
          tabIndex={tabIndex !== undefined ? tabIndex : -1}
        >
          {text}
        </span>
      );
    }
    if (!isReactElement(text)) return null;

    const { className: textClassName, ...otherProps } = text.props;
    const props = { ...otherProps, className: textClassName, ref };

    return (
      <span
          ref={ref}
          className={className}
          tabIndex={tabIndex !== undefined ? tabIndex : -1}
        >
        { React.cloneElement(text, props) }
      </span>
    );
  };

  const primaryBaseStyles = classnames(stackedList.text.primary.base)

  if (!secondaryText || (!twoLine && secondaryText)) {
    return renderText(
      primaryText,
      classnames(primaryBaseStyles, stackedList.text.base, className)
    );
  }


  return (
    <span
      ref={ref}
      className={classnames(stackedList.text.base, className)}
      tabIndex={tabIndex !== undefined ? tabIndex : -1}
      {...otherProps}
    >
      {renderText(primaryText, classnames(primaryBaseStyles, 'block', { 
        [stackedList.text.primary.notDense]: !dense,
        [stackedList.text.primary.text]: typeof primaryText === 'string' || typeof primaryText === 'number'
      }
      ))}
      {renderText(secondaryText, classnames(stackedList.text.secondary.base, {
        [stackedList.text.secondary.text]: typeof secondaryText === 'string' || typeof secondaryText === 'number'
      }))}
    </span>
  )
})

export default StackedListItemText;

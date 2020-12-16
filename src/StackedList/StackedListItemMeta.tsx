import React, { useContext } from 'react';
import classnames from 'classnames';
import { ThemeContext } from '../context/ThemeContext';

export interface Props {
  className?: string;
  tabIndex?: number;
  meta: string | React.ReactElement<any>;
  childrenTabIndex?: number;
}

const StackedListItemMeta: React.FunctionComponent<Props> & { Separator: typeof Separator } = ({
  tabIndex, // eslint-disable-line @typescript-eslint/no-unused-vars
  meta,
  className = '',
  ...otherProps
}) => {
  let metaElement: React.ReactElement<any>;
  if (typeof meta === 'string') {
    metaElement = <span>{meta}</span>;
  } else {
    metaElement = meta;
  }
  const { theme : { stackedList } } = useContext(ThemeContext);

  const metaProps = {
    className: classnames(
      stackedList.meta.base,
      className,
      metaElement.props.className
    ),
    tabIndex: tabIndex !== undefined ? tabIndex : -1,
    ...otherProps,
  };
  return React.cloneElement(metaElement, metaProps);
};

export interface SeparatorProps {
  sep?: React.ReactNode;
  className?: string;
  tag?: string;
}

const Separator: React.FunctionComponent<SeparatorProps> = ({
  className = '',
  sep = '|',
  tag: Tag = 'span',
  ...otherProps
}) => {
  const { theme : { stackedList } } = useContext(ThemeContext);

return (
  // https://github.com/Microsoft/TypeScript/issues/28892
  // @ts-ignore
  <Tag 
    className={classnames(className, stackedList.meta.sep.base)}
    {...otherProps}
  >
    {sep} 
  </Tag>
)
};
StackedListItemMeta.Separator = Separator;

export default StackedListItemMeta;

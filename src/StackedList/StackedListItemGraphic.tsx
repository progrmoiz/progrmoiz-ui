import React from 'react';
import classnames from 'classnames';
import { useContext } from 'react';
import { StackedListItemContext, StackedListItemContextShape } from './StackedList';
import { ThemeContext } from '../context/ThemeContext';

export interface ListItemGraphicProps {
  className?: string;
  tabIndex?: number;
  graphic: React.ReactElement<any>;
  childrenTabIndex?: number;
}

const ListItemGraphic: React.FunctionComponent<ListItemGraphicProps> = ({
  tabIndex = -1, // eslint-disable-line @typescript-eslint/no-unused-vars
  graphic,
  className = '',
  ...otherProps
}) => {
  const { theme : { stackedList } } = useContext(ThemeContext)
  const { flush, twoLine, dense } = useContext<StackedListItemContextShape>(StackedListItemContext);

  const graphicProps = {
    className: classnames({
      'h-5 w-5 rounded-full text-gray-400 mr-2': !twoLine && !dense,
      'h-10 w-10 rounded-full mr-3': twoLine && !dense,
      'h-9 w-9 rounded-full mr-3': twoLine && dense,
      'h-5 w-5 rounded-full text-gray-400 mr-2 ': !twoLine && dense,
      [stackedList.graphic.notFlush]: !flush,
    }, stackedList.graphic.base, className),
    tabIndex: tabIndex !== undefined ? tabIndex : -1,
    ...otherProps,
  };
  return React.cloneElement(graphic, graphicProps);
};

export default ListItemGraphic;
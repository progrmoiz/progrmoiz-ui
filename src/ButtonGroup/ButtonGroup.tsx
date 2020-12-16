import React from "react";
import classnames from 'classnames';

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

type RefType = HTMLDivElement

const ButtonGroup = React.forwardRef<RefType, Props>(({
    className = '',
    children,
    ...otherProps
}, ref) => {
  const props = {
    className: classnames(className, 'relative z-0 inline-flex -space-x-px'),
    ref,
    ...otherProps
  }

  return <div {...(props as React.HTMLProps<HTMLDivElement>)}>
    {React.Children.map(children, (child, i) => 
      React.cloneElement(child as React.ReactElement<any>, {
        group: true,
        ...(i === 0) && {first:true},
        ...(React.Children.count(children)-1 === i) && {last:true},
        key: i,
      })
    )}
  </div>
})

export default ButtonGroup;

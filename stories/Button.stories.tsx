import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      name: 'text',
      table: {
        category: 'Content'
      },
      defaultValue: {
        summary: "",
      },
      control: {
        type: 'text',
      },
    },
    outlined: {
      description: 'Outline design i.e. `<Button outline />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    linked: {
      description: 'Linked design i.e. `<Button linked />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Disabled button i.e. `<Button disabled />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      description: 'Button size i.e. `<Button size=[size] />`',
      table: {
        category: 'Sizes'
      },
      defaultValue: {
        summary: 'regular'
      },
      control: {
        type: 'select',
      },
    },
    rounded: {
      description: 'Button roundness i.e. `<Button rounded=[rounded] />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: 'large'
      },
      control: {
        type: 'select',
        options: [
          'none', 
          'small', 
          'medium', 
          'large', 
          'full',
        ],
      },
    },
    className: {
      table: {
        category: 'Designs'
      },
    },
    href: {
      table: {
        category: 'Content'
      },
    },
    icon: {
      table: {
        category: 'Content'
      },
    },
    trailingIcon: {
      table: {
        category: 'Content'
      },
    },
    group: {
      table: {
        category: 'ButtonGroup'
      }
    },
    first: {
      table: {
        category: 'ButtonGroup'
      }
    },
    last: {
      table: {
        category: 'ButtonGroup'
      }
    },
    sep: {
      table: {
        category: 'ButtonGroup'
      }
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
</svg>

const Template = ({children, ...args}) => <Button {...args}>{ children }</Button>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: "Get started",
  outlined: false,
  linked: false,
  disabled: false,
  size: "regular",
  rounded: "large",
  icon: null,
  trailingIcon: null,
  group: undefined,
  first: undefined,
  last: undefined,
  sep: undefined,
};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  ...Default.args,
  children: "Get started",
  size: "small",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  children: "Get started",
  icon: icon
};

export const WithIconSmall = Template.bind({});
WithIconSmall.args = {
  ...Default.args,
  children: "Get started",
  icon: icon,
  size: "small",
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  ...Default.args,  
  children: "Get started",
  trailingIcon: icon
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args, 
  disabled: true,
  children: "Get started"
};

export const Outlined = Template.bind({});
Outlined.args = {
    ...Default.args, 
  outlined: true,
  children: "Get started"
};

export const OutlinedSmall = Template.bind({});
OutlinedSmall.args = {
    ...Default.args, 
  outlined: true,
  size: "small",
  children: "Get started"
};

export const Linked = Template.bind({});
Linked.args = {
    ...Default.args, 
  linked: true,
  children: "Get started"
};


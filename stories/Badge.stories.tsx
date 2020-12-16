import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Badge, Button } from '../src';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    text: {
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
    secondaryText: {
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
    color: {
      description: 'Add color i.e. `<Badge color=[color] />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: 'primary'
      },
    },
    secondaryColor: {
      description: 'Secondary color i.e. `<Badge secondaryColor=[secondaryColor] />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: 'secondary'
      },
    },
    rounded: {
      description: 'Roundness of badge i.e. `<Badge rounded=[rounded] />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: 'full'
      },
    },
    dark: {
      description: 'Dark primary text',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: false
      },
    },
    secondaryDark: {
      description: 'Dark secondary text',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: false
      },
    },
    dot: {
      description: 'Add dot i.e. `<Badge dot />`',
      table: {
        category: 'Designs'
      },
      defaultValue: {
        summary: 'small'
      },
    },
    className: {
      table: {
        category: 'Designs'
      },
    },
    dotClassName: {
      table: {
        category: 'Designs'
      },
    },
    size: {
      description: 'Badge size i.e. `<Badge size=[size] />`',
      table: {
        category: 'Sizes'
      },
      defaultValue: {
        summary: 'small'
      },
    },
    button: {
      description: 'Add button i.e. `<Badge button=[button] />`',
      table: {
        category: 'Content'
      },
      defaultValue: {
        summary: ''
      },
    },
    tag: {
      description: 'Badge tag i.e. `<[tag] />`',
      table: {
        category: 'Content'
      },
      defaultValue: {
        summary: 'span'
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = ({text, ...args}) => <Badge {...args} text={text} />

const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>

const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  secondaryColor: "secondary",
  text: 'Badge',
  secondaryText: '',
  dark: false,
  secondaryDark: false,
  size: "small",
  dot: false,
  button: null,
  tag: 'span',
  rounded: "full",
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: "large",
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  color: "success",
  text: 'Ranked #1'
};

export const Dot = Template.bind({});
Dot.args = {
  ...Default.args,
  dot: true,
  color: "danger",
  text: 'Offline'
};

export const DotMedium = Template.bind({});
DotMedium.args = {
  ...Dot.args,
  size: "medium",
};

const badgeTexts = [
  'Technology', 'Startup', 'Open source', 'Documentation', 'AI'
]

const Template1 = ({text, ...args}) => badgeTexts.map((e, i) => (
  <Badge {...args} text={ text ? text : e } />
));

export const CloseButton = Template1.bind({});
CloseButton.args = {
  ...Default.args,
  color: "primary",
  className: "mr-2",
  text: '',
  button: <Button icon={icon} />
};

export const Rounded = Template.bind({});
Rounded.args = {
  ...Default.args,
  rounded: 'basic',
  color: "info",
  text: 'Coming up',
};

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  rounded: 'basic',
  color: "primary",
  dark: true,
  text: 'Dark primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  color: 'gray',
  secondaryColor: "warning",
  dark: true,
  secondaryDark: true,
  text: 'requirement',
  secondaryText: "up to date",
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
  ...Default.args,
  size: 'medium',
  rounded: 'basic',
  color: 'gray',
  secondaryColor: 'gray',
  secondaryDark: true,
  text: 'Package',
  secondaryText: "progrmoiz-ui",
  button: <Button icon={downloadIcon} />
};
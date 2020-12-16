import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonGroup } from '../src';

const meta: Meta = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    outlined: {
      description: 'Outline design for children i.e. `<Button outline />`',
      table: {
        category: 'Button Design'
      },
      defaultValue: {
        summary: true
      },
      control: {
        type: 'boolean',
      },
    },
    linked: {
      description: 'Linked design for children i.e. `<Button linked />`',
      table: {
        category: 'Button Design'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      description: 'Size for children i.e. `<Button size=[size] />`',
      table: {
        category: 'Button Design'
      },
      defaultValue: {
        summary: 'regular'
      },
      control: {
        type: 'select',
        options: [
          'small',
          'regular',
          'large',
          'larger',
        ],
      },
    },
    rounded: {
      description: 'Roundness for children i.e. `<Button rounded=[rounded] />`',
      table: {
        category: 'Button Design'
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
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const chevronLeftIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>

const chevronRightIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>

const Template = ({ ...args }) => <ButtonGroup>
  <Button {...args} icon={chevronLeftIcon} />
  <Button {...args}>1</Button>
  <Button {...args}>2</Button>
  <Button {...args}>3</Button>
  <Button {...args} sep>...</Button>
  <Button {...args}>8</Button>
  <Button {...args}>9</Button>
  <Button {...args}>10</Button>
  <Button {...args} icon={chevronRightIcon} />
</ButtonGroup>;

const TemplateExample = ({ ...args }) => <>
  <ButtonGroup>
    <Button {...args}>Left</Button>
    <Button {...args}>Middle</Button>
    <Button {...args}>Right</Button>
  </ButtonGroup><br /><br />
  <ButtonGroup>
    <Button {...args}>1</Button>
    <Button {...args}>2</Button>
    <Button {...args}>3</Button>
    <Button {...args}>4</Button>
  </ButtonGroup><br /><br />
  <ButtonGroup>
    <Button {...args} icon={chevronLeftIcon} />
    <Button {...args} icon={chevronRightIcon} />
  </ButtonGroup><br /><br />
  <ButtonGroup>
    <Button {...args} icon={chevronLeftIcon}>Prev</Button>
    <Button {...args} trailingIcon={chevronRightIcon}>Next</Button>
  </ButtonGroup><br /><br />
  <ButtonGroup>
    <Button {...args} icon={chevronLeftIcon} />
    <Button {...args} sep>...</Button>
    <Button {...args} icon={chevronRightIcon} />
  </ButtonGroup><br /><br />
  <ButtonGroup>
    <Button {...args} icon={chevronLeftIcon} />
    <Button {...args}>1</Button>
    <Button {...args}>2</Button>
    <Button {...args}>3</Button>
    <Button {...args} sep>...</Button>
    <Button {...args}>8</Button>
    <Button {...args}>9</Button>
    <Button {...args}>10</Button>
    <Button {...args} icon={chevronRightIcon} />
  </ButtonGroup><br /><br />
  <ButtonGroup>
    <Button {...args}>Previous</Button>
    <Button {...args}>1</Button>
    <Button {...args}>2</Button>
    <Button {...args}>3</Button>
    <Button {...args} sep>...</Button>
    <Button {...args}>8</Button>
    <Button {...args}>9</Button>
    <Button {...args}>10</Button>
    <Button {...args}>Next</Button>
  </ButtonGroup><br /><br />
  <ButtonGroup>
    <Button {...args} icon={chevronLeftIcon} disabled>Previous</Button>
    <Button {...args}>1</Button>
    <Button {...args}>2</Button>
    <Button {...args}>3</Button>
    <Button {...args} sep>...</Button>
    <Button {...args}>8</Button>
    <Button {...args}>9</Button>
    <Button {...args}>10</Button>
    <Button {...args} trailingIcon={chevronRightIcon}>Next</Button>
  </ButtonGroup><br /><br />
</>;

export const Default = Template.bind({});
Default.args = {
  outlined: true,
  linked: false,
  size: 'regular',
  rounded: 'large',
};

export const Example = TemplateExample.bind({});
Example.args = {
  outlined: true,
  linked: false,
  size: 'regular',
  rounded: 'large',
};

export const DefaultSmall = Template.bind({});
DefaultSmall.args = {
  outlined: true,
  linked: false,
  size: 'small',
  rounded: 'large',
};

export const DefaultLarge = Template.bind({});
DefaultLarge.args = {
  outlined: true,
  linked: false,
  size: 'large',
  rounded: 'large',
};

export const DefaultNoRound = Template.bind({});
DefaultNoRound.args = {
  outlined: true,
  linked: false,
  size: 'regular',
  rounded: 'none'
};

export const DefaultRoundMedium = Template.bind({});
DefaultRoundMedium.args = {
  outlined: true,
  linked: false,
  size: 'regular',
  rounded: 'medium'
};

export const DefaultRoundMediumSmall = Template.bind({});
DefaultRoundMediumSmall.args = {
  outlined: true,
  linked: false,
  size: 'small',
  rounded: 'medium'
};

export const DefaultRoundFull = Template.bind({});
DefaultRoundFull.args = {
  outlined: true,
  linked: false,
  size: 'regular',
  rounded: 'full',
};

export const DefaultRoundFullSmall = Template.bind({});
DefaultRoundFullSmall.args = {
  outlined: true,
  linked: false,
  size: 'small',
  rounded: 'full',
};

export const Primary = Template.bind({});
Primary.args = {
  outlined: false,
  linked: false,
  size: 'regular',
  rounded: 'large',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  outlined: false,
  linked: false,
  size: 'small',
  rounded: 'large',
};

export const Linked = Template.bind({});
Linked.args = {
  outlined: false,
  linked: true,
  size: 'regular',
  rounded: 'large',
};

export const LinkedSmall = Template.bind({});
LinkedSmall.args = {
  outlined: false,
  linked: true,
  size: 'small',
  rounded: 'large',
};
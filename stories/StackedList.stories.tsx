import React from 'react';
import range from 'lodash.range'
import { Story, Meta } from '@storybook/react';
import { StackedList, StackedListItem, StackedListItemText, StackedListItemMeta, StackedListItemGraphic, Button, Badge } from '../src';

const meta: Meta = {
  title: 'StackedList',
  component: StackedList,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    count: {
      name: 'Grow list item',
      defaultValue: {
        summary: "2"
      },
      control: {
        type: 'range',
        min: 1,
        max: 10,
      },
      table: {
        category: 'Playground'
      }
    },
    metaBtns: {
      name: 'Meta Button',
      description: 'Action button play field, you can add as many button',
      control: {
        type: 'inline-check',
        options: ['Review', 'Upload', 'Download', 'Remove']
      },
      table: {
        category: 'Playground'
      }
    },
    hideGraphic: {
      description: 'Show/hide graphics',
      table: {
        category: 'Playground'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    showSecondText: {
      description: 'Show/hide second text',
      table: {
        category: 'Playground'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    showIconMetaBtn: {
      description: 'Show/hide meta icon btn',
      table: {
        category: 'Playground'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    showTextMeta: {
      description: 'Show/hide text meta',
      table: {
        category: 'Playground'
      },
      defaultValue: {
        summary: false
      },
      control: {
        type: 'boolean',
      },
    },
    primaryText: {
      description: 'Primary text for the list item',
      defaultValue: {
        summary: "",
      },
      control: {
        type: 'text',
      },
      table: {
        category: 'Content'
      }
    },
    secondaryText: {
      description: 'Secondary text for the list item',
      defaultValue: {
        summary: "",
      },
      control: {
        type: 'text',
      },
      table: {
        category: 'Content'
      }
    },
    twoLine: {
      description: 'Styles the list with two lines',
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
    flush: {
      description: 'Remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).',
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
    dense: {
      description: 'Styles the density of the list, making it appear more compact',
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
    className: {
      table: {
        category: 'Designs'
      },
    },
    tag: {
      description: 'Primary text for the list item',
      defaultValue: {
        summary: "",
      },
      control: {
        type: 'text',
      },
      table: {
        category: 'Content'
      }
    },
  }
};

export default meta;

const primaryTexts = [
  'fullstack_john_resume.pdf',
  'fullstack_john_cover_letter.pdf'
]

const oPrimaryTexts = [
  'Elliana Palacios',
  'Larry Lin',
  'Makiyah Yeager',
  "Kaya Pryor",
  "Korbyn Colon",
  "Janely Kelley"
]

const secondaryTexts = [
  'elliana.palacios@example.com',
  'larry.lin@example.com',
  'makiyah.yeager@example.com',
  "kaya.pryor@example.com",
  "korbyn.colon@example.com",
  "janely.kelley@example.com"
]

const avatars = [
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1542131596-dea5384842c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=592&q=80",
  "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
]

const paperClipIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
</svg>;

const chevronRightIcon = <svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg>

const xIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>

const Avatar = ({ src, ...props }) =>
  <img src={src} alt="" {...props} />;

const Template = ({
  primaryText,
  secondaryText,
  twoLine,
  flush,
  dense,
  tag,
  count,
  metaBtns,
  hideGraphic,
  showSecondText,
  showIconMetaBtn,
  showTextMeta
}) => {
  let meta = null;

  if (showIconMetaBtn) 
    meta = <StackedListItemMeta meta={<Button rounded="full" linked={twoLine} unstyled={!twoLine} trailingIcon={chevronRightIcon} />} />
  else if (showTextMeta)
    meta = twoLine ?
    <StackedListItemText primaryText={<Badge text="Full-text" secondaryText="Online" rounded="large" dot button={<Button icon={xIcon} />} />} secondaryText="Closing on Dec, 7 2020" /> :
    <StackedListItemText primaryText="Uploaded on Dec, 7 2020" />
  else
    meta = metaBtns && metaBtns.map((e, i) => {
      return <>
        <StackedListItemMeta meta={<Button unstyled>{e}</Button>} />
        {i < (metaBtns.length - 1) ? <StackedListItemMeta.Separator /> : ''}
      </>;
    })

  const btns = !showIconMetaBtn ? metaBtns && metaBtns.map((e, i) => {
    return <>
      <StackedListItemMeta meta={<Button unstyled>{e}</Button>} />
      {i < (metaBtns.length - 1) ? <StackedListItemMeta.Separator /> : ''}
    </>;
  }) : <StackedListItemMeta meta={<Button rounded="full" linked icon={chevronRightIcon} />} />;
  return <StackedList twoLine={twoLine} flush={flush} dense={dense} tag={tag}>
    {range(count).map((i) => {
      const pText = primaryText === "" ? twoLine ? oPrimaryTexts[i % oPrimaryTexts.length] : primaryTexts[i % primaryTexts.length] : `${primaryText}.${i + 1}`;
      const sText = secondaryText === "" ? secondaryTexts[i % secondaryTexts.length] : `${secondaryText}.${i + 1}`;
      const graphic = !hideGraphic ? twoLine ? <Avatar src={avatars[i % avatars.length]} /> : paperClipIcon : <></>;
      const secondText = twoLine ?
        <StackedListItemText primaryText={<span>Applied on Dec, 7 2020</span>} secondaryText="Complete test passed" /> :
        <StackedListItemText primaryText="Uploaded on Dec, 7 2020" />

      return <StackedListItem key={i}>
        <StackedListItem.Left>
          <StackedListItemGraphic graphic={graphic} />
          <StackedListItemText primaryText={pText} secondaryText={sText} />
          {showSecondText ? secondText : null}
        </StackedListItem.Left>
        <StackedListItem.Right>{ meta }</StackedListItem.Right>
      </StackedListItem>
    })}
  </StackedList>
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  primaryText: "",
  secondaryText: "",
  twoLine: false,
  flush: false,
  dense: false,
  tag: "nav",
  count: 5,
  showIconMetaBtn: false,
  showTextMeta: false,
  showSecondText: false,
  hideGraphic: false,
  metaBtns: ["Download"],
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Default.args,
  hideGraphic: true,
};

export const MulitpleMeta = Template.bind({});
MulitpleMeta.args = {
  ...Default.args,
  metaBtns: ["Review", "Upload"]
};

export const IconMeta = Template.bind({});
IconMeta.args = {
  ...Default.args,
  metaBtns: [],
  showIconMetaBtn: true
};

export const TwoLine = Template.bind({});
TwoLine.args = {
  ...Default.args,
  twoLine: true,
};

export const TwoLineNoIcon = Template.bind({});
TwoLineNoIcon.args = {
  ...Default.args,
  twoLine: true,
  hideGraphic: true,
  metaBtns: ["Review", "Upload"]
};

export const TwoLineFlushed = Template.bind({});
TwoLineFlushed.args = {
  ...Default.args,
  twoLine: true,
  flush: true
};

export const TwoLineDense = Template.bind({});
TwoLineDense.args = {
  ...Default.args,
  twoLine: true,
  dense: true
};

export const TwoLineMulti = Template.bind({});
TwoLineMulti.args = {
  ...Default.args,
  twoLine: true,
  showSecondText: true,
};

export const TwoLineMetaIcon = Template.bind({});
TwoLineMetaIcon.args = {
  ...Default.args,
  twoLine: true,
  showSecondText: true,
  showIconMetaBtn: true
};

export const TwoLineMetaText = Template.bind({});
TwoLineMetaText.args = {
  ...Default.args,
  twoLine: true,
  showTextMeta: true
};
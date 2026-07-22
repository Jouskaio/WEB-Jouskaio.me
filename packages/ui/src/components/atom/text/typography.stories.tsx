import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';
import Citation from './Citation';
import Tag from './tag';
import TextDefault from './TextDefault';
import TextH1 from './textH1';
import TextH2 from './textH2';
import TextH3 from './textH3';
import TextH4 from './textH4';
import TextH5 from './textH5';
import TextH6 from './textH6';
import TextLink from './textLink';
import TextMarked from './textMarked';
import TextSpanXS from './textSpanXS';

const meta = {
    title: 'Atom/Typography',
    component: TextH1, // Use H1 as a reference component for global props
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Complete typographic system: titles, paragraphs, citations, and labels.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const wrapperStyle = {
    display: 'grid',
    gap: '32px',
    padding: '24px',
};

const labelStyle = {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
    borderBottom: '1px solid #eee',
    paddingBottom: '4px',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
};

export const Overview: Story = {
    render: () => (
        <div style={wrapperStyle}>
            <section style={{ display: 'grid', gap: '8px' }}>
                <div>
                    <div style={labelStyle}>TextH1</div>
                    <TextH1>Level 1 Title</TextH1>
                </div>
                <div>
                    <div style={labelStyle}>TextH2</div>
                    <TextH2>Level 2 Title</TextH2>
                </div>
                <div>
                    <div style={labelStyle}>TextH3</div>
                    <TextH3>Level 3 Title</TextH3>
                </div>
                <div>
                    <div style={labelStyle}>TextH4</div>
                    <TextH4>Level 4 Title</TextH4>
                </div>
                <div>
                    <div style={labelStyle}>TextH5</div>
                    <TextH5>Level 5 Title</TextH5>
                </div>
                <div>
                    <div style={labelStyle}>TextH6</div>
                    <TextH6>Level 6 Title</TextH6>
                </div>
            </section>

            <section style={{ display: 'grid', gap: '24px' }}>
                <div>
                    <div style={labelStyle}>TextDefault (Paragraph)</div>
                    <TextDefault>
                        Default text used for paragraphs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </TextDefault>
                </div>
                <div>
                    <div style={labelStyle}>TextMarked</div>
                    <TextMarked>
                        Marked text to highlight content.
                    </TextMarked>
                </div>
                <div>
                    <div style={labelStyle}>Citation</div>
                    <Citation>
                        “Typography immediately sets the tone of an interface.”
                    </Citation>
                </div>
                <div>
                    <div style={labelStyle}>TextSpanXS</div>
                    <TextSpanXS>Small Span XS text (60% opacity)</TextSpanXS>
                </div>
            </section>
        </div>
    ),
};

export const TagComponent: StoryObj<typeof Tag> = {
    render: (args) => <Tag {...args}>Development</Tag>,
    args: {
        color: '#7c3aed',
        slug: 'dev',
    },
    argTypes: {
        color: { control: 'color' },
    },
};

export const LinkComponent: StoryObj<typeof TextLink> = {
    render: (args) => <TextLink {...args}>Click here</TextLink>,
    args: {
        src: 'https://jouskaio.me',
    },
};
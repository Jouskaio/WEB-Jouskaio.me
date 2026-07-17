// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
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
    tags: ['!autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Vue d’ensemble des variantes typographiques du projet.',
            },
        },
    },
} satisfies Meta;

export default meta;

type Story = StoryObj;

const sectionStyle = {
    display: 'grid',
    gap: '12px',
    marginBottom: '32px',
};

const wrapperStyle = {
    display: 'grid',
    gap: '40px',
    padding: '24px',
};

export const All: Story = {
    render: () => (
        <div style={wrapperStyle}>
            <section style={sectionStyle}>
                <TextH1>Titre H1</TextH1>
                <TextH2>Titre H2</TextH2>
                <TextH3>Titre H3</TextH3>
                <TextH4>Titre H4</TextH4>
                <TextH5>Titre H5</TextH5>
                <TextH6>Titre H6</TextH6>
            </section>

            <section style={sectionStyle}>
                <TextDefault>
                    Ceci est un texte par défaut utilisé pour afficher un paragraphe
                    standard dans l’interface.
                </TextDefault>

                <TextMarked>
                    Ceci est un texte marqué, utile pour mettre un contenu en avant.
                </TextMarked>

                <Citation>
                    “La typographie donne immédiatement le ton d’une interface.”
                </Citation>
            </section>

            <section style={sectionStyle}>
                <TextSpanXS>Span XS</TextSpanXS>
            </section>

            <section style={sectionStyle}>
                <TextLink src="/">Texte lien</TextLink>
                <Tag color="#7c3aed" slug="design-system">
                    Tag
                </Tag>
            </section>
        </div>
    ),
};

export const Headings: Story = {
    render: () => (
        <div style={wrapperStyle}>
            <TextH1>Titre H1</TextH1>
            <TextH2>Titre H2</TextH2>
            <TextH3>Titre H3</TextH3>
            <TextH4>Titre H4</TextH4>
            <TextH5>Titre H5</TextH5>
            <TextH6>Titre H6</TextH6>
        </div>
    ),
};

export const BodyAndInline: Story = {
    render: () => (
        <div style={wrapperStyle}>
            <TextDefault>
                Ceci est un paragraphe de texte par défaut pour tester la lisibilité.
            </TextDefault>

            <TextMarked>
                Ceci est un texte mis en évidence dans le flux de lecture.
            </TextMarked>

            <TextSpanXS>Span XS</TextSpanXS>

            <TextLink src="/">Texte lien</TextLink>
            <Tag color="#2563eb" slug="frontend">
                Tag
            </Tag>
            <Citation>“Une citation de démonstration.”</Citation>
        </div>
    ),
};

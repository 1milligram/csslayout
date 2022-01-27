import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Triangle from '../../placeholders/Triangle';

interface ItemProps {
    index: number;
    title: React.ReactNode;
}

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'accordion';

    const [activeItem, setActiveItem] = React.useState(1);

    const Item: React.FC<ItemProps> = ({ index, title, children }) => {
        const isOpened = index === activeItem;
        const click = () => setActiveItem(isOpened ? -1 : index);
        return (
            <>
                <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            cursor: 'pointer',
                            display: 'flex',
                            padding: '16px',
                        }}
                        onClick={click}
                    >
                        <div style={{ marginRight: '12px' }}>
                            <Triangle size={8} corner={isOpened ? 'b' : 'r'} />
                        </div>
                        <div style={{ flex: 1 }}>{title}</div>
                    </div>
                    <div
                        style={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                            display: isOpened ? 'block' : 'none',
                            padding: '16px',
                        }}
                    >
                        {children}
                    </div>
                </div>
            </>
        );
    };

    return (
        <PatternLayout pattern={Pattern.Accordion}>
            <Head>
                <meta name="description" content="Create an accordion with CSS flexbox" />
                <meta name="og:description" content="Create an accordion with CSS flexbox" />
                <meta name="twitter:description" content="Create an accordion with CSS flexbox" />
                <meta name="keywords" content="css accordion, css flexbox" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<!-- Container -->
<div class="${prefix}${container}">
    <!-- Each accordion item -->
    <div class="${prefix}${container}__item">
        <!-- Heading -->
        <div class="${prefix}${container}__header">
            <!-- The toggle icon -->
            <div class="${prefix}${container}__toggle">...</div>

            <!-- The title -->
            <div class="${prefix}${container}__title">
                ...
            </div>
        </div>

        <!-- The content -->
        <div class="${prefix}${container}__content">
            ...
        </div>
    </div>

    <!-- Repeat other item -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom-color: transparent;
    border-radius: 4px;
}

.${prefix}${container}__item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.${prefix}${container}__header {
    /* Center the content horizontally */
    align-items: center;
    display: flex;

    cursor: pointer;
    padding: 16px;
}

.${prefix}${container}__toggle {
    margin-right: 12px;
}

.${prefix}${container}__title {
    /* Take remaining width */
    flex: 1;
}

.${prefix}${container}__content {
    /* For not selected item */
    display: none;

    border-top: 1px solid rgba(0, 0, 0, 0.3);
    padding: 16px;
}

.${prefix}${container}__content--selected {
    /* For selected item */
    display: block;
}
                `
                }
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderBottomColor: 'transparent',
                            borderRadius: '4px',
                            width: '60%',
                        }}
                    >
                        <Item
                            index={0}
                            title={
                                <div style={{ width: '40%' }}>
                                    <Rectangle />
                                </div>
                            }
                        >
                            <div style={{ marginBottom: '16px' }}>
                                <Block numberOfBlocks={10} />
                            </div>
                        </Item>
                        <Item
                            index={1}
                            title={
                                <div style={{ width: '80%' }}>
                                    <Rectangle />
                                </div>
                            }
                        >
                            <div style={{ marginBottom: '16px' }}>
                                <Block numberOfBlocks={15} />
                            </div>
                        </Item>
                        <Item
                            index={2}
                            title={
                                <div style={{ width: '60%' }}>
                                    <Rectangle />
                                </div>
                            }
                        >
                            <div style={{ marginBottom: '16px' }}>
                                <Block numberOfBlocks={10} />
                            </div>
                        </Item>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <RelatedPatterns patterns={[Pattern.QuestionsAndAnswers]} />
        </PatternLayout>
    );
};

export default Details;

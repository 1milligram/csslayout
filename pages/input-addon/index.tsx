import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.InputAddon}>
            <Head>
                <meta name="description" content="Create an input add-on with CSS flexbox" />
                <meta name="og:description" content="Create an input add-on with CSS flexbox" />
                <meta name="twitter:description" content="Create an input add-on with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css input add-on" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<!-- Add-on prepended -->
<div class="${prefix}${container}">
    <!-- Add-on -->
    <div class="${prefix}${container}__addon">
        ...
    </div>

    <!-- Input -->
    <input type="text" class="${prefix}${container}__input" />
</div>

<!-- Add-on appended -->
<div class="${prefix}${container}">
    <!-- Input -->
    <input type="text" class="${prefix}${container}__input" />

    <!-- Add-on -->
    <div class="${prefix}${container}__addon">
        ...
    </div>
</div>

<!-- Appended and prepended add-ons -->
<div class="${prefix}${container}">
    <!-- Add-on -->
    <div class="${prefix}${container}__addon">
        ...
    </div>

    <!-- Input -->
    <input type="text" class="${prefix}${container}__input" />

    <!-- Add-on -->
    <div class="${prefix}${container}__addon">
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    display: flex;

    /* Take full size */
    width: 100%;
}

.${prefix}${container}__input {
    /* Take the remaining width */
    flex: 1;
}

.${prefix}${container}__addon {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;
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
                    <div style={{ width: '256px' }}>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                display: 'flex',
                                height: '32px',
                                marginBottom: '16px',
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '8px',
                                    width: '30%',
                                }}
                            >
                                <Rectangle />
                            </div>
                            <input
                                type="text"
                                style={{
                                    borderColor: 'transparent',
                                    flex: 1,
                                    marginRight: '1px',
                                    padding: '4px',
                                }}
                            />
                        </div>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                display: 'flex',
                                height: '32px',
                                marginBottom: '16px',
                                width: '100%',
                            }}
                        >
                            <input
                                type="text"
                                style={{
                                    borderColor: 'transparent',
                                    flex: 1,
                                    marginLeft: '1px',
                                    padding: '8px',
                                }}
                            />
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '8px',
                                    width: '40%',
                                }}
                            >
                                <Rectangle />
                            </div>
                        </div>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                display: 'flex',
                                height: '32px',
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '8px',
                                    width: '20%',
                                }}
                            >
                                <Rectangle />
                            </div>
                            <input
                                type="text"
                                style={{
                                    borderColor: 'transparent',
                                    flex: 1,
                                    padding: '8px',
                                }}
                            />
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '8px',
                                    width: '30%',
                                }}
                            >
                                <Rectangle />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

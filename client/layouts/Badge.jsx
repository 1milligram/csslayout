import React from 'react';

import DetailsLayout from '../DetailsLayout';
import BrowserFrame from '../placeholders/BrowserFrame';
import Dot from '../placeholders/Dot';
import Rectangle from '../placeholders/Rectangle';
import SampleCode from '../SampleCode';
import useDocumentTitle from '../useDocumentTitle';

const Badge = () => {
    useDocumentTitle('CSS Layout ∙ Badge');

    return (
        <DetailsLayout>
            <h1 className="f1 tc">Badge</h1>
            <BrowserFrame
                content={
                    <div className="h-100 flex flex-column items-center justify-center">
                        <div className="flex flex-column items-center justify-center white bg-black-30 br-pill w2 h2 f4">
                            1
                        </div>
                    </div>
                }
                source={
<SampleCode
lang="html"
code={`
<div style="
    /* Content is centered */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: rgba(0, 0, 0, .3);
    color: #FFF;

    /* Rounded border */
    border-radius: 9999px;
    height: 32px;
    width: 32px;
">
    1
</div>
`}
/>
                }
            />
        </DetailsLayout>
    );
};

export default Badge;

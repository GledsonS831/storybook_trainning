import React from 'react';

import * as St from './style';

interface Props {
    text: string;
    type?: string;
}

export const Buttom: React.FC<Props>= ({text}) =>{
    return (
        <St.Container>
            <St.Content>
                {text}
            </St.Content>
        </St.Container>
    )
}
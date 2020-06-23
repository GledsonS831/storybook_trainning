import React from 'react';

import * as St from './style';

interface Props {
    text: string;
    type: number;
}

export const Buttom: React.FC<Props>= ({text}, {type}) =>{
    
    return (
        <St.Container>
            <St.Content>
                {text}
            </St.Content>
        </St.Container>
    )
}
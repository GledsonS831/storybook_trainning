import React from 'react';

import * as St from './style';

interface Props {
    text: string;
}

export const Buttom: React.FC<Props>= ({text}) =>{
    return (
        <St.Container>
            <St.Content>
                botao 1
            </St.Content>
        </St.Container>
    )
}
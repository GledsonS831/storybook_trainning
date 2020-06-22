import styled from 'styled-components';

export const container = styled.ul`
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    transition: 0ms.5s;
    width: 100px;
    height: 50px;
    :hover{
        width: 200px;
        height: 100px;
    }
`

export const content = styled.li`
    :hover{
        background-color: rgb(110, 150, 100);
    }
`

export const info = styled.p`
    color: rgb(110,100,100);

`
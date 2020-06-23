import styled from 'styled-components';



export const Container = styled.div`
    background-color: rgb(20, 100, 40);
    width: 80px;
    height: 40;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    :hover{
        width: 160px;
        height: 80px;
        background-color: rgb(60, 150, 30);
    }
`

export const Content = styled.p`
    font-size: 16px;
    transition: 1s;
    :hover{
        color: white;
        font-size: 24px;
    }
`
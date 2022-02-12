import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(-45deg, #080f28, #650161);

    header {
        padding: 20px;
    }

`;

export const ProductDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 10px;
    height: 100%;
`;
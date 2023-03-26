import styled from 'styled-components';
export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: flex-end;
    align-self: flex-end;
    width: 65vw;
    max-width: 75vw;
    border-right: 1px solid gray;

    @media (max-width: 720px) {
        width: 100%;
        max-width: 100vw;
        border-right: none;
    }
`;

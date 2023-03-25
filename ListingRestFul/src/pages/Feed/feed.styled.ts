import styled from 'styled-components';
import { Post } from './post';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    justify-self: flex-end;
    align-self: flex-end;
    width: 65vw;
    border-right: 1px solid gray;
    background-color: #e5ffff;
`;
export const StyledPost = styled(Post)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    text-align: justify;
    border-bottom: 1px solid gray;
    width: 50vw;
    height: 20rem;
    max-height: 30vh;
    background-color: #fff;
    border: 1px solid gray;
    padding: 0.5rem;

    &&:hover {
        background-color: #cce9f4;
        cursor: pointer;
    }

    h3 {
        border-top: 1px solid #99bddd;
    }

    p {
        margin-bottom: 0.5rem;
    }
`;

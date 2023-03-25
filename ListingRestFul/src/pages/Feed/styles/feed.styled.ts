import styled from 'styled-components';
import { Post } from '../post';

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
    }

    h3 {
        border-top: 1px solid #99bddd;
    }

    p {
        margin-bottom: 0.5rem;
    }
    &&:nth-child(1) {
        margin-top: 1rem;
    }

    a {
        text-decoration: none;
        color: #2a86ed;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 400;
    }
`;

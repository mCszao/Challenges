import styled from 'styled-components';

export const StyledSideBar = styled.div`
    width: 30vw;
    height: 90vh;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #f7f9f9;
    border-radius: 1rem;
    transition: all 0.5s;
    margin: 10px 10px 0 0;
    &&:hover {
        box-shadow: 30px 30px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(-1%);
    }

    @media (max-width: 720px) {
        display: none;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;

    label {
        margin-top: 1.7rem;
        margin-left: -1rem;
    }
`;

export const SearchInput = styled.input`
    width: 20vw;
    height: 2.5rem;
    border: none;
    background-color: #cce9f4;
    border-radius: 0.5rem;
    margin: 1.5rem;

    &&:focus {
        background-color: white;
    }
`;

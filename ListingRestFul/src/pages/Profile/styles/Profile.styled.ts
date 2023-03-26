import styled from 'styled-components';
import { GeneralInfos } from '../generalInfos';
export const ProfileInfos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    width: 70%;
    height: 100vh;
`;

export const StyledGeneralInfos = styled(GeneralInfos)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

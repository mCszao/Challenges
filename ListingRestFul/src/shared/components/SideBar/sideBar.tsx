import { InputContainer, SearchInput, StyledSideBar } from './SideBar.styled';
import { FcSearch } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { IUser } from '../../interface/IUser';
import { useApi } from '../../hooks/useApi';
export const SideBar = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');
    const api = useApi();
    const handleChange = () => {
        console.log('Você está digitando');
    };
    useEffect(() => {}, []);
    return (
        <StyledSideBar>
            <InputContainer>
                <SearchInput
                    type='text'
                    name='search'
                    id='search'
                    value={search}
                    onChange={handleChange}
                />
                <label htmlFor='search'>
                    <FcSearch size={'2rem'} />
                </label>
            </InputContainer>
            <ul>
                {users.map((user) => (
                    <li>{user.name}</li>
                ))}
            </ul>
        </StyledSideBar>
    );
};

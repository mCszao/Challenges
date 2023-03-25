import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBackHome } from '../../shared/components/ButtonBackHome/buttonBackHome';
import { FlexContainer } from '../../shared/components/FlexContainer/flexContainer.styled';
import { useApi } from '../../shared/hooks/useApi';
import { IUser } from '../../shared/interface/IUser';

export const Profile = () => {
    const params = useParams();
    const api = useApi();
    const [user, setUser] = useState<IUser>();

    const loadInfo = async () => {
        const json = await api.getUserById(params.slug!);
        setUser(json);
    };
    useEffect(() => {
        loadInfo();
    }, []);

    return (
        <FlexContainer>
            <ButtonBackHome />
            <h2>Esse é o profile do {user?.name}</h2>
        </FlexContainer>
    );
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonBackHome } from '../../shared/components/ButtonBackHome/buttonBackHome';
import { FlexContainer } from '../../shared/components/FlexContainer/flexContainer.styled';
import { useApi } from '../../shared/hooks/useApi';
import { IUser } from '../../shared/interface/IUser';
import { ProfileInfos, StyledGeneralInfos } from './styles/Profile.styled';

export const Profile = () => {
    const params = useParams();
    const api = useApi();
    const [user, setUser] = useState<IUser>();

    const loadInfo = async () => {
        const actualUser = await api.getUserById(params.slug!);
        setUser(actualUser);
    };
    useEffect(() => {
        loadInfo();
    }, []);

    return (
        <FlexContainer>
            <ButtonBackHome />
            <ProfileInfos>
                {user && (
                    <StyledGeneralInfos
                        name={user?.name}
                        username={user?.username}
                        email={user?.email}
                    />
                )}
                <div>localization info</div>
                <div>contact infos</div>
                <div>enterprise infos</div>
            </ProfileInfos>
        </FlexContainer>
    );
};

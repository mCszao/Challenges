import { GeneralInfosProps } from './types/GeneralInfosProp';

export const GeneralInfos = ({ name, username, email }: GeneralInfosProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <i>@{username}</i>
            <p>{email}</p>
        </div>
    );
};

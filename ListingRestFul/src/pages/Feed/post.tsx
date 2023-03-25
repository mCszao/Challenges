import { PostProps } from './types/PostProps';
export const Post = ({ username, title, body, className }: PostProps) => {
    return (
        <div className={className}>
            <h2>{username}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

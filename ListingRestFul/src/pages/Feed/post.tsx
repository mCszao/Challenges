import { PostProps } from './types/PostProps';
import { useNavigate } from 'react-router-dom';
export const Post = ({
    userId,
    postId,
    username,
    title,
    body,
    className,
}: PostProps) => {
    const navigate = useNavigate();
    return (
        <div className={className}>
            <a
                onClick={() => {
                    navigate(`profile/${userId}`);
                }}
            >
                {username}
            </a>
            <h3>{title}</h3>
            <p>{body}</p>
            <a
                onClick={() => {
                    navigate(`post/${postId}`);
                }}
            >
                Comentários
            </a>
        </div>
    );
};

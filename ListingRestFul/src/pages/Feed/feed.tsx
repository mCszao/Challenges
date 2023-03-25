import { useEffect, useState } from 'react';
import { useApi } from '../../shared/hooks/useApi';
import { IPost } from '../../shared/interface/IPost';
import { IUser } from '../../shared/interface/IUser';
import { filteredPost } from '../../shared/services/FilteredPost';
import { StyledPost } from './styles/feed.styled';
import { FlexContainer } from '../../shared/components/FlexContainer/flexContainer.styled';

export const Feed = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        loadInformation();
    }, []);
    const api = useApi();

    const loadInformation = async () => {
        const allPosts = await api.getAllPosts();
        const allUsers = await api.getAllUsers();
        setPosts(allPosts);
        setUsers(allUsers);
    };

    const filteredPosts = filteredPost(users, posts);

    return (
        <FlexContainer>
            {filteredPosts.map((post, index) => (
                <StyledPost
                    key={index}
                    username={post.name}
                    title={post.title}
                    body={post.body}
                    userId={post.userId}
                    postId={post.postId}
                />
            ))}
        </FlexContainer>
    );
};

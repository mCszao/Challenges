import { Fragment, useEffect, useState } from 'react';
import { useApi } from '../../shared/hooks/useApi';
import { IPost } from '../../shared/interface/IPost';
import { StyledPost, FlexContainer } from './feed.styled';

export const Feed = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const api = useApi();
    const loadInformation = async () => {
        const json = await api.getAllPosts();
        setPosts(json);
    };
    useEffect(() => {
        loadInformation();
    }, []);

    return (
        <FlexContainer>
            {posts.map((post) => (
                <StyledPost
                    username={`${post.userId}`}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </FlexContainer>
    );
};

import { Route, Routes } from 'react-router-dom';
import { Feed } from '../pages/Feed/feed';
export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Feed />} />
        </Routes>
    );
};

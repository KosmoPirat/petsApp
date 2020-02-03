import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import Document from '../../helpers/documentHelper';

const MainLayout = () => {
    useEffect(() => {
        Document.setTitle('Главная');
    }, []);

    return <div>MainLayout</div>;
};

export default MainLayout;

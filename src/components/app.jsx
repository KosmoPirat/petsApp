import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import { Router } from 'preact-router';
import 'bulma/css/bulma.min.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

// Code-splitting is automated for routes
import routes from '../routes';

const App = () => {
    const [currentUrl, changeCurrentUrl] = useState('');

    const handleRoute = useCallback(e => {
        changeCurrentUrl(e.url);
    }, []);

    return (
        <div id="app">
            <Header />
            <main className="main">
                <div>Текущая страница: {currentUrl}</div>
                <Router onChange={handleRoute} default="/">
                    {routes.map(route => (
                        <route.component key={route.path} path={route.path} />
                    ))}
                </Router>
            </main>
            <Footer />
        </div>
    );
};

export default App;

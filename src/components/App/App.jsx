import { h } from 'preact';
import { Router } from 'preact-router';
import 'bulma/css/bulma.min.css';

import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';

import style from './App.css';

// Code-splitting is automated for routes
import routes from '../../routes';

const App = () => {
    return (
        <>
            <Header />
            <main className={`container ${style['app-wrapper']}`}>
                <Router>
                    {routes.map(route => (
                        <route.component key={route.path} path={route.path} />
                    ))}
                    <PageNotFound default />
                </Router>
            </main>
        </>
    );
};

export default App;

import { h } from 'preact';
import { Router } from 'preact-router';
import 'bulma/css/bulma.min.css';

import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';

// Code-splitting is automated for routes
import routes from '../../routes';

const App = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <Router>
                    {routes.map(route => (
                        <route.component key={route.path} path={route.path} />
                    ))}
                    <PageNotFound default />
                </Router>
            </main>
        </div>
    );
};

export default App;

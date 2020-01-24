import { h } from 'preact';
import { Router } from 'preact-router';
import 'bulma/css/bulma.min.css';
import style from './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

// Code-splitting is automated for routes
import routes from '../../routes';

const App = () => {
    return (
        <div className={style.app}>
            <Header />
            <main className={style.app__main}>
                <Router>
                    {routes.map(route => (
                        <route.component key={route.path} path={route.path} />
                    ))}
                    <PageNotFound default />
                </Router>
            </main>
            <Footer />
        </div>
    );
};

export default App;

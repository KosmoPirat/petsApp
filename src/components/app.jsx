import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import { Router } from 'preact-router';
import 'bulma/css/bulma.min.css';

// Code-splitting is automated for routes
import PetsGrid from '../routes/PetsGrid/index';

const App = () => {
    const [currentUrl, changeCurrentUrl] = useState('');

    const handleRoute = useCallback(e => {
        changeCurrentUrl(e.url);
    }, []);

    return (
        <div id="app">
            {/* временно оставим, чтобы был пример как доставать текущий урл в preact-router */}
            <div>Текущая страница: {currentUrl}</div>
            <Router onChange={handleRoute}>
                <PetsGrid path="/" />
            </Router>
        </div>
    );
};

export default App;

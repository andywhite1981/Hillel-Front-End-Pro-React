import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';

const router = createBrowserRouter([
    {
        element: <Nav />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'popular',
                element: <Popular />,
            },
            {
                path: 'battle',
                element: <Battle />,
            },
            {
                path: '*',
                element: <h1>Error</h1>,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;

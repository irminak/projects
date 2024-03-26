import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home.js';
import ProjectsPage from './pages/Projects.js';
import RootLayout from './pages/Root.js';
import ErrorPage from './pages/Error.js';
import ProductDetailPage from './pages/ProductDetail.js';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                { path: '/', element: <HomePage /> },
                { path: '/projects', element: <ProjectsPage /> },
                {
                    path: '/projects/:productId',
                    element: <ProductDetailPage />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

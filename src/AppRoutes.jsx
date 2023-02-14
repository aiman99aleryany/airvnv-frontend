import { Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import LazyLoading from 'shared/components/lazyLoading/LazyLoading';
import Layout from 'shared/components/layout/Layout';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import About from 'pages/About';
import NoPage from 'pages/NoPage';

const AppRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <LazyLoading element={<Home />} fallback={<>...</>} />
                    }
                />

                <Route
                    path="contact"
                    element={
                        <LazyLoading
                            element={<Contact />}
                            fallback={<>...</>}
                        />
                    }
                />
            </Route>
            <Route
                path="about"
                element={
                    <LazyLoading element={<About />} fallback={<>...</>} />
                }
            />
            <Route path="*" element={<NoPage />} />
        </Route>
    )
);

export default AppRoutes;

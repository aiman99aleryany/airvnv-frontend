import { Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import LazyLoading from 'utils/components/lazyLoading/LazyLoading';
import MainLayout from 'app/layouts/main/MainLayout';
import Home from 'app/pages/Home';
import Contact from 'app/pages/Contact';
import About from 'app/pages/About';
import ViewAll from 'app/features/viewAll/pages/ViewAll';
import NoPage from 'app/pages/NoPage';

// mocks for loaders ... later will be replaced with services.
import propertiesMocks from 'utils/mocks/propertiesMocks';

const AppRoutes = createBrowserRouter(
    // this function used to update to Router 6.4
    // so I can use "loader" prop
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<MainLayout />}>
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
            <Route
                path="viewall"
                element={
                    <LazyLoading element={<ViewAll />} fallback={<>...</>} />
                }
                loader={() => propertiesMocks}
            />
            <Route path="*" element={<NoPage />} />
        </Route>
    )
);

export default AppRoutes;

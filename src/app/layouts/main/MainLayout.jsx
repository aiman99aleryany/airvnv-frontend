import { Outlet } from 'react-router-dom';
import ScrollToTop from 'utils/components/scrollToTop/ScrollToTop';
import NavBar from '../navbar/NavBar';

function MainLayout() {
    return (
        <>
            <ScrollToTop />
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;

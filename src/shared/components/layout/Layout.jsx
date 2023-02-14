import { Outlet } from 'react-router-dom';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import NavBar from '../navbar/NavBar';

function Layout() {
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

export default Layout;

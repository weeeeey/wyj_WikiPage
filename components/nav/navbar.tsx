import { NavLogo } from './nav-logo';
import { NavUser } from './nav-user';

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-3 shadow-md ">
            <NavLogo />
            <NavUser />
        </nav>
    );
};

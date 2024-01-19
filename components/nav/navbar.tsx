import { NavLogo } from './nav-logo';
import { NavUser } from './nav-user';

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-3 shadow-md ">
            <NavLogo />
            <input
                className=" rounded-lg px-4 py-1 w-60 mr-5"
                placeholder="search title"
                type="text"
            />
            <NavUser />
        </nav>
    );
};

import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="border-bottom">
            <nav className="container py-3 d-flex gap-3">
                <NavLink to="/" className="text-decoration-none">
                    Home
                </NavLink>
                <NavLink to="/movies" className="text-decoration-none">
                    Movies
                </NavLink>
            </nav>
        </header>
    );
}

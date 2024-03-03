import { Link } from "react-router-dom";
import MobileNav from './MobileNav';
import MainNav from './MainNav';
import logo from '../assets/logos/logo.png'

const Header = () => {
  return (
    <div className="border-b-4 border-b-red-600 pt-2">
        <div className="container mx-auto flex justify-between items-center">
            <Link
                to="/"
                className="text-3xl font-bold tracking-tight text-red-500"
            >
            <div className="max-w-36">
              <a href="/" className="inline-block">
                <img src={logo} alt="Doceria Tentação Logo" />
              </a>
            </div>
            </Link>
            <div className="md:hidden">
              <MobileNav />
            </div>
            <div className="hidden md:block">
              <MainNav />
            </div>
        </div>
    </div>
  )
}

export default Header;

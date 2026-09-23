// export default Navbar;
import { Link, NavLink } from "react-router";
import { useThemeStore } from "../Store/useThemeStore";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-primary hover:-translate-y-0.5"
    }`;
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          Ahmed Osama
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/skills" className={navLinkClass}>
            Skills
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/01124912367"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-green-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="https://instagram.com/ahmedosama_official_"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-pink-500"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="transition-all duration-300 hover:scale-110"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-300 hover:scale-110 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="border-t bg-background p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/skills"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>

            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

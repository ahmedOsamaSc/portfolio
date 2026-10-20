import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, Moon, Sun } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import { useThemeStore } from "../Store/useThemeStore";
import { Button } from "./ui/button";

const Navbar = () => {
  // 1. التحكم في الثيم
  const { theme, toggleTheme } = useThemeStore();

  // 2. التحكم في قائمة الموبايل
  const [isOpen, setIsOpen] = useState(false);

  // 3. روابط أقسام الصفحة
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // 4. التنسيق المشترك للروابط
  const linkClass =
    "text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5";

  // 5. دالة التنقل السلس بين الأقسام

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (!section) return;

    const navbarHeight = 64;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.history.replaceState(null, "", href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          Ahmed Osama
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClass}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Links and Controls */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/201124912367"
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

          {/* Dark Mode */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="transition-all duration-300 hover:scale-110 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t bg-background p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

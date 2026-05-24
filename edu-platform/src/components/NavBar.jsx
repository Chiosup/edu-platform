import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "О платформе" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#courses", label: "Курсы" },
  { href: "#program", label: "Программа" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#hero" onClick={handleClose}>
          EduPlatform
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label="Открыть меню"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          id="site-navigation"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          aria-label="Основная навигация"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleClose}>
              {link.label}
            </a>
          ))}

          <a className="btn btn-primary nav-cta" href="#cta" onClick={handleClose}>
            Начать обучение
          </a>
        </nav>
      </div>
    </header>
  );
}

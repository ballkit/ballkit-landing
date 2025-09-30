import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { BRAND_NAME } from "@/lib/consts";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "py-3 glassmorphism" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-centered flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-primary">{BRAND_NAME}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#problem"
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Проблема
          </a>
          <a
            href="#how-it-works"
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Как это работает
          </a>
          {/* <a
              href="#who-we-are"
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
              Кто мы
              </a> */}
          <Button
            size="sm"
            asChild
            className="ml-4 bg-primary hover:bg-primary-dark transition-colors"
          >
            <a href="#cta">Забронировать демо</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-slide-in-bottom">
          <div className="container-centered py-4 flex flex-col gap-4">
            <a
              href="#problem"
              className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Проблема
            </a>
            <a
              href="#how-it-works"
              className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Как это работает
            </a>
            <a
              href="#audience"
              className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Для кого
            </a>
            <Button
              className="mt-2 bg-primary hover:bg-primary-dark transition-colors w-full"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <a href="#cta">Забронировать демо</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

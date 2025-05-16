import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakPoint";
import Logo from "../assets/Logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#Products" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#Portfolio" },
  { label: "Growth Allies", href: "#Allies" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const breakpoint = useBreakpoint();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-4 md:px-16 z-50 border-t-4 border-[#FF9494] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home">
          <img
            src={Logo}
            alt="LendNav Logo"
            className="max-w-[150px] min-w-[150px]  mr-4"
          />
        </a>

        {/* Desktop Nav */}
        {window.innerWidth > 1100 && (
          <>
            <nav className="flex items-center gap-6 max-w-[700px] min-w-[700px]">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-900 hover:text-lendnow-600 transition-colors duration-200 text-[10px] md:text-sm lg:text-sm"
                >
                  {label}
                </a>
              ))}
            </nav>

            <Button className="hidden md:flex bg-[#FF9494] hover:bg-lendnow-400 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Get Started
            </Button>
          </>
        )}

        {/* Mobile Menu Icon */}
        {window.innerWidth <= 1100 && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col px-6 pt-24 gap-6 items-center">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-lg font-medium text-gray-900 hover:text-lendnow-600"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button className="w-full bg-lendnow-gradient text-white py-2 px-4 rounded-lg font-medium">
            Apply Now
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

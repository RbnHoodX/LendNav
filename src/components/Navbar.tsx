import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "../assets/Logo.png";
import { Menu } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#Products" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#Portfolio" },
    { label: "Growth Allies", href: "#Allies" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#Testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-t-4 border-[#FF9494] ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-40 lg:w-48" />
        </div>

        {!isMobile ? (
          <div className="relative flex items-center space-x-6 mx-auto">
            <div className="hidden md:flex space-x-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 hover:text-lendnow-600 sm:text-[10px] md:text-[12px] lg:text-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <button
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        )}
        {!isMobile && (
          <Button className="bg-[#FF9494] hover:bg-lendnow-400 px-3 py-1 text-[1vw]">
            Get Started
          </Button>
        )}
      </div>
      {isMobile && open && (
        <div className="absolute md:hidden px-4 pb-4 bg-white w-full h-[100vh]">
          <div className="flex flex-col gap-4 mt-16 justify-center items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 bg-lendnow-gradient">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

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
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {!isMobile ? (
          <div className="relative flex items-center space-x-6 mx-auto">
            <div className="hidden md:flex space-x-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 hover:text-lendnow-600 text-[1vw]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col justify-center gap-4 mt-8">
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
              </SheetContent>
            </Sheet>
          </div>
        )}
        {!isMobile && (
          <Button className="bg-[#FF9494] hover:bg-lendnow-400 px-3 py-1 text-[1vw]">
            Get Started
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

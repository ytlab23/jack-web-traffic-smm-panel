"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#Features" },
  { name: "Services", href: "/#Services" },
  { name: "Pricing", href: "/#Pricing" },
  { name: "Testimonial", href: "/#Testimonial" },
  { name: "FAQ", href: "/#FAQ" },
  { name: "Contact", href: "/contact" },
];

const StandaloneHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky-header ${
        !isVisible ? "sticky-header--hidden" : ""
      } py-3`}
    >
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start">
            <Link
              href="/"
              className="md:text-xl lg:text-3xl font-extrabold text-primary text-slate-700 items-center flex"
            >
              <img
                src="/website traffic smm panel.svg"
                alt=""
                className="me-4 w-10 lg:w-50"
              />
              Web Traffic SMM Panel
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu}>
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="cursor-pointer hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="https://app.websitetrafficsmmpanel.com">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-purple-600"
                key={index}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <a href="https://app.websitetrafficsmmpanel.com">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default StandaloneHeader;

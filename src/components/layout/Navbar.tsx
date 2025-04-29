
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-portfolio-black/90 backdrop-blur-md py-3 shadow-lg shadow-portfolio-purple/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-portfolio-purple text-xl font-bold">
          Malaiarasu G
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-8 mr-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.href}
                className="relative text-portfolio-purple-light hover:text-portfolio-purple transition-colors"
                whileHover={{
                  scale: 1.05,
                }}
              >
                {link.title}
              </motion.a>
            ))}
          </nav>
          <motion.a 
            href="https://www.linkedin.com/in/malaiarasu-g-raj-38b695252/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-purple hover:text-portfolio-purple-light transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-portfolio-purple focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-portfolio-black/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="text-portfolio-purple-light hover:text-portfolio-purple py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.title}
                </motion.a>
              ))}
              <motion.a 
                href="https://www.linkedin.com/in/malaiarasu-g-raj-38b695252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-purple hover:text-portfolio-purple-light py-2 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

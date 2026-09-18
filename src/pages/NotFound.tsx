import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-portfolio-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center section-padding text-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">Oops! This page doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-portfolio-purple hover:text-portfolio-purple-light transition-colors font-semibold"
          >
            <ArrowLeft size={18} />
            Return to Home
          </Link>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default NotFound;

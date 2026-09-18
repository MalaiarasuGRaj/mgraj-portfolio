
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./components/layout/ScrollToTop";
import { AuroraBackground } from "./components/layout/AuroraBackground";
import AnimatedRoutes from "./components/layout/AnimatedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Sonner />
      <ScrollToTop />
      <AuroraBackground />
      <Analytics />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;

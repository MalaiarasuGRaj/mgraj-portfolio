
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./components/layout/ScrollToTop";
import { AuroraBackground } from "./components/layout/AuroraBackground";
import AnimatedRoutes from "./components/layout/AnimatedRoutes";

const App = () => {
  // Create a client instance that persists during component lifecycle
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AuroraBackground />
          <Analytics />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

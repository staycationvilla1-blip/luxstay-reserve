import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import Index from "./pages/Index";
import Suites from "./pages/Suites";
import VirtualTourPage from "./pages/VirtualTourPage";
import Amenities from "./pages/Amenities";
import About from "./pages/About";
import Reserve from "./pages/Reserve";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/virtual-tour" element={<VirtualTourPage />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/about" element={<About />} />
          <Route path="/reserve" element={<Reserve />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

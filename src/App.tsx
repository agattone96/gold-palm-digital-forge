import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TreeRemoval from "./pages/services/TreeRemoval";
import StumpGrinding from "./pages/services/StumpGrinding";
import LimbReductions from "./pages/services/LimbReductions";
import LawnMaintenance from "./pages/services/LawnMaintenance";
import JunkRemoval from "./pages/services/JunkRemoval";
import ConcreteWork from "./pages/services/ConcreteWork";
import PaverDriveways from "./pages/services/PaverDriveways";
import GravelDriveways from "./pages/services/GravelDriveways";
import LandClearing from "./pages/services/LandClearing";
import Grading from "./pages/services/Grading";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/tree-removal" element={<TreeRemoval />} />
          <Route path="/services/stump-grinding" element={<StumpGrinding />} />
          <Route path="/services/limb-reductions" element={<LimbReductions />} />
          <Route path="/services/lawn-maintenance" element={<LawnMaintenance />} />
          <Route path="/services/junk-removal" element={<JunkRemoval />} />
          <Route path="/services/concrete-work" element={<ConcreteWork />} />
          <Route path="/services/paver-driveways" element={<PaverDriveways />} />
          <Route path="/services/gravel-driveways" element={<GravelDriveways />} />
          <Route path="/services/land-clearing" element={<LandClearing />} />
          <Route path="/services/grading" element={<Grading />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

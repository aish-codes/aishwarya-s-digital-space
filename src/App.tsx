import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import GalleryPost from "./pages/GalleryPost";
import NotFound from "./pages/NotFound";
import { galleries } from "@/data/galleries";

// One /blog/:id route serves both markdown articles and photo galleries; this picks
// the right renderer by id so galleries and posts can share the /blog/ namespace.
const BlogRoute = () => {
  const { id } = useParams();
  if (galleries.some((g) => g.id === id)) return <GalleryPost id={id!} />;
  return <BlogPost />;
};

const queryClient = new QueryClient();

// The router lives in the entry points, not here: the browser mounts this under a
// BrowserRouter, the prerender step under a StaticRouter.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog/:id" element={<BlogRoute />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

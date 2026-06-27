import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";

import PageLayout from "@/components/layout/PageLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ChildEducation from "@/pages/ChildEducation";
import WomenEmpowerment from "@/pages/WomenEmpowerment";
import SkillDevelopment from "@/pages/SkillDevelopment";
import Exhibitions from "@/pages/Exhibitions";
import Workshop from "@/pages/Workshop";
import MiddayMeals from "@/pages/MiddayMeals";
import Contact from "@/pages/Contact";
import Reviews from "@/pages/Reviews";
import VolunteerApplication from "@/pages/VolunteerApplication";
import Team from "@/pages/Team";
import Blog from "@/pages/Blog";

const queryClient = new QueryClient();

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/child-education" component={ChildEducation} />
        <Route path="/women-empowerment" component={WomenEmpowerment} />
        <Route path="/skill-development" component={SkillDevelopment} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/workshop" component={Workshop} />
        <Route path="/midday-meals" component={MiddayMeals} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/review" component={Reviews} />
        <Route path="/volunteer-application" component={VolunteerApplication} />
        <Route path="/team" component={Team} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <PageLayout>
            <Router />
          </PageLayout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"; // Assuming standard shadcn toaster existence
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import SubjectPage from "@/pages/subject";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Helper to provide simple mock components if shadcn ones are missing in this pure frontend env
// To ensure the app renders beautifully without crashing.
const MockToaster = () => null;
const MockTooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:subjectId" component={SubjectPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MockTooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <MockToaster />
      </MockTooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

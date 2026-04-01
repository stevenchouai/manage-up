import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PrinciplesSection } from "./components/PrinciplesSection";
import { ForbiddenWordsSection } from "./components/ForbiddenWordsSection";
import { TemplatesSection } from "./components/TemplatesSection";
import { CompanyStylesSection } from "./components/CompanyStylesSection";
import { AudienceSection } from "./components/AudienceSection";
import { WorkflowSection } from "./components/WorkflowSection";
import { ChecklistSection } from "./components/ChecklistSection";
import { ResourcesSection } from "./components/ResourcesSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <HeroSection />
                <PrinciplesSection />
                <ForbiddenWordsSection />
                <TemplatesSection />
                <CompanyStylesSection />
                <AudienceSection />
                <WorkflowSection />
                <ChecklistSection />
                <ResourcesSection />
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Header } from './components/Header';
import HeroSection from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import { BlogSection } from './components/BlogSection';
import ContactSection from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
export function App() {
  return <ThemeProvider>
      <div className="transition-colors duration-300 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 min-h-screen w-full">
        <Header />
        <main className="w-full">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}
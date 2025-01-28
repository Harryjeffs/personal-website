import { ProjectCarousel } from './components/ProjectCarousel';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="relative">
        <Hero />
        <div className="container mx-auto px-6">
          <ProjectCarousel />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
}
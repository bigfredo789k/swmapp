import { HeroSection } from './components/HeroSection';
import { MissionSection } from './components/MissionSection';
import { VisionSection } from './components/VisionSection';
import { DonationSection } from './components/DonationSection';
import { EventsSection } from './components/EventsSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <MissionSection />
        <VisionSection />
        <DonationSection />
        <EventsSection />
        <SocialMediaSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

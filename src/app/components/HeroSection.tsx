import { ArrowDown } from 'lucide-react';
import heroImage from '../../assets/hero-hands-nobg.png';
import { FloatingDots } from './FloatingDots';

export function HeroSection() {
  const scrollToNext = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#6B21A8]" // Using a solid purple base similar to the image
    >
      {/* Gradient Overlay to match the depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7E22CE] via-[#6B21A8] to-[#581C87]"></div>

      {/* Animated Floating Dots */}
      <FloatingDots count={40} color="rgba(255, 255, 255, 0.15)" />

      {/* Background Image with animation */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Hands raising hope"
          className="w-full h-full object-contain md:object-cover opacity-100 animate-hero-zoom"
          style={{ animationDelay: '0.2s' }}
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-violet-950/60 z-[1] animate-fade-in"></div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer hover:scale-110 transition-transform group"
        aria-label="Scroll to next section"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/20 transition-colors border border-white/20">
          <ArrowDown className="text-white drop-shadow-lg" size={32} />
        </div>
      </button>
    </section>
  );
}
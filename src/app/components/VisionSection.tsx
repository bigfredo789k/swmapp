import visionImage from '../../assets/vision-susan.png';
import { FloatingDots } from './FloatingDots';

export function VisionSection() {
  return (
    <section id="vision" className="relative py-24 bg-gradient-to-br from-[#7B7FDB] to-[#A58FE5] overflow-hidden">
      {/* Animated Floating Dots */}
      <FloatingDots count={30} color="rgba(255, 255, 255, 0.4)" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - on left for desktop, circular */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden shadow-2xl">
              <img
                src={visionImage}
                alt="Community leader"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - on right for desktop */}
          <div className="text-white order-1 md:order-2">
            <h2 className="text-5xl font-bold mb-8">Vision</h2>
            <p className="text-xl leading-relaxed">
              "We envision a <span className="font-semibold">connected and compassionate community</span> where every individual—regardless of age—has the opportunity to live with dignity, maintain independence, and thrive. Through collaboration and care, we aim to inspire lasting change and build a healthier future for all."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

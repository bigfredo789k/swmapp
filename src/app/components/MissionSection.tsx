import boys1 from '../../assets/boys1.png';
import boys2 from '../../assets/boys2.png';
import kid1 from '../../assets/kid1.png';
import kid2 from '../../assets/kid2.png';
import women1 from '../../assets/women1.png';
import women2 from '../../assets/women2.png';
import { FloatingDots } from './FloatingDots';

export function MissionSection() {
  return (
    <section id="mission" className="relative py-24 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
      {/* Animated Floating Dots */}
      <FloatingDots count={25} color="rgba(255, 255, 255, 0.3)" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6 mt-12">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={boys1} alt="Community youth" className="w-full h-48 md:h-64 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={women1} alt="Community members" className="w-full h-40 md:h-56 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={kid2} alt="Happy child playing" className="w-full h-32 md:h-48 object-cover" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={kid1} alt="Happy child" className="w-full h-40 md:h-56 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={women2} alt="Community gathering" className="w-full h-48 md:h-64 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={boys2} alt="Youth activities" className="w-full h-32 md:h-48 object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium tracking-wider uppercase">Our Purpose</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Mission
            </h2>
            <p className="text-xl leading-relaxed text-indigo-50 mb-8">
              Our mission is to <span className="font-semibold text-white">inspire hope</span> within the
              community by <span className="font-semibold text-white">supporting both seniors and youth</span>,
              guiding them toward a positive path while enhancing the beauty of our neighborhoods and
              fostering unity.
            </p>
            <p className="text-lg leading-relaxed text-indigo-100">
              We offer a wide range of resources, along with activities and support
              for every holiday. As an organization, we are committed to spreading hope and love
              throughout our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">SWM Raising Hope Inc</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Inspiring hope and fostering unity in our community through compassion, care, and collaboration.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>© {currentYear} SWM Raising Hope Inc. Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>for our community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

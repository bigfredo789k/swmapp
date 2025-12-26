import { Facebook, Instagram, Twitter } from 'lucide-react';
import fam1 from '../../assets/fam1.png';
import fam2 from '../../assets/fam2.png';
import fam3 from '../../assets/fam3.png';
import kids1 from '../../assets/kids1.png';

export function SocialMediaSection() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'hover:bg-[#6B21A8]',
      description: 'Follow us on Facebook',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:bg-[#6B21A8]',
      description: 'See our photos on Instagram',
    },
    {
      name: 'X',
      icon: Twitter, // Lucide doesn't have an X icon yet, usually Twitter icon is used or a custom SVG
      url: '#',
      color: 'hover:bg-[#6B21A8]',
      description: 'Follow our updates on X',
    },
  ];

  const images = [fam1, fam2, fam3, kids1];

  return (
    <section id="social" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events, stories, and community highlights
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {images.map((img, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-96 group">
              <img 
                src={img} 
                alt={`Community moment ${index + 1}`} 
                className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ${index === 0 ? 'object-[center_25%]' : 'object-center'}`}
              />
            </div>
          ))}
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.description}
                className={`group flex flex-col items-center justify-center gap-2 md:gap-4 p-2 md:p-8 rounded-xl md:rounded-2xl bg-gray-100 transition-all duration-300 hover:scale-105 ${social.color} hover:text-white h-32 md:h-64 w-full shadow-lg hover:shadow-xl`}
              >
                <Icon className="w-8 h-8 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span className="text-xs md:text-2xl font-bold">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

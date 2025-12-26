import React, { useState, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../components/ui/carousel';

// Import images
import event2 from '../../assets/event2.png';
import fam4 from '../../assets/fam4.png';
import fam5 from '../../assets/fam5.png';
import fam6 from '../../assets/fam6.png';
import fam7 from '../../assets/fam7.png';
import fam8 from '../../assets/fam8.png';
import lady1 from '../../assets/lady1.png';
import purpleladies from '../../assets/purpleladies.png';

export function GallerySection() {
  const images = [
    { src: event2, alt: 'Community Gathering', zoom: true },
    { src: fam4, alt: 'Family Moment' },
    { src: fam5, alt: 'Family Celebration', zoom: true },
    { src: fam6, alt: 'Community Smiles' },
    { src: fam7, alt: 'Togetherness' },
    { src: fam8, alt: 'Joyful Moments' },
    { src: lady1, alt: 'Community Leader' },
    { src: purpleladies, alt: 'Support Group', zoom: true },
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing the moments that define our community
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="h-full">
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-full object-cover ${image.zoom ? "scale-125" : ""}`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#6B21A8] w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MessageCircle } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1520366498724-709889c0c685?auto=format&fit=crop&q=80',
    alt: 'Colorful Guppy Fish'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?auto=format&fit=crop&q=80',
    alt: 'Tropical Aquarium'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80',
    alt: 'Premium Guppy Collection'
  }
];

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918879045747', '_blank');
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: index === 0 ? 1 : 0,
              animation: `fade 15s ${index * 5}s infinite`
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div
        ref={ref}
        className={`relative container mx-auto px-4 h-full flex items-center transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Perfect Guppy Today!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Premium Guppy Fish Collection | Direct WhatsApp Support
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-bounce"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Shop via WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// TypeScript interfaces
interface SlideData {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  features: string[];
}

interface ProductSliderProps {
  onSlideChanged?: (splide: any, newIndex: number) => void;
  onSlideClicked?: (slide: SlideData, index: number) => void;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  onSlideChanged,
  onSlideClicked,
}) => {
  const splideRef = useRef<any>(null);

  const slides: SlideData[] = [
    {
      title: "Global Shipping",
      description:
        "Worldwide shipping solutions with real-time tracking and secure delivery systems.",
      icon: "🚢",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      features: [
        "Express Delivery",
        "Global Network",
        "Real-time Tracking",
        "Secure Packaging",
      ],
    },
    {
      title: "Premium Food",
      description:
        "High-quality food products sourced from trusted suppliers around the globe.",
      icon: "🍽️",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      features: [
        "Organic Options",
        "Fresh Quality",
        "International Cuisine",
        "Safe Processing",
      ],
    },
    {
      title: "Luxury Cosmetics",
      description:
        "Premium beauty products and cosmetics from leading international brands.",
      icon: "💄",
      bgColor: "bg-gradient-to-br from-pink-500 to-red-500",
      features: [
        "Premium Brands",
        "Natural Ingredients",
        "Dermatologist Tested",
        "Cruelty Free",
      ],
    },
    {
      title: "Supply Chain",
      description:
        "Comprehensive supply chain management for efficient global operations.",
      icon: "📦",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      features: [
        "End-to-end Solutions",
        "Cost Optimization",
        "Risk Management",
        "Digital Integration",
      ],
    },
    {
      title: "Quality Control",
      description:
        "Rigorous quality assurance processes ensuring the highest standards.",
      icon: "✅",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      features: [
        "ISO Certified",
        "Regular Audits",
        "Quality Metrics",
        "Continuous Improvement",
      ],
    },
    {
      title: "Customer Support",
      description:
        "24/7 customer service with multilingual support for global clients.",
      icon: "🎧",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      features: [
        "24/7 Available",
        "Multilingual",
        "Expert Team",
        "Quick Resolution",
      ],
    },
  ];

  // Splide options
  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    focus: "center",
    gap: "1rem",
    padding: "2rem",
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    pagination: true,
    drag: true,
    keyboard: true,
    speed: 600,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    breakpoints: {
      768: {
        perPage: 1,
        gap: "0.5rem",
        padding: "1rem",
      },
      640: {
        perPage: 1,
        gap: "0.25rem",
        padding: "0.5rem",
      },
    },
  };

  // Event handlers
  const handleMoved = (splide: any, newIndex: number) => {
    onSlideChanged?.(splide, newIndex);
  };

  const handleSlideClick = (slide: SlideData, index: number) => {
    onSlideClicked?.(slide, index);
  };

  // Public methods for external control
  const goToSlide = (index: number) => {
    splideRef.current?.splide?.go(index);
  };

  const nextSlide = () => {
    splideRef.current?.splide?.go("+1");
  };

  const prevSlide = () => {
    splideRef.current?.splide?.go("-1");
  };

  const play = () => {
    splideRef.current?.splide?.Components?.Autoplay?.play();
  };

  const pause = () => {
    splideRef.current?.splide?.Components?.Autoplay?.pause();
  };

  // Expose methods via ref (optional)
  React.useImperativeHandle(splideRef, () => ({
    goToSlide,
    nextSlide,
    prevSlide,
    play,
    pause,
  }));

  return (
    <div className="splide-container h-[700px]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Featured Services
        </h2>

        <Splide
          ref={splideRef}
          options={splideOptions}
          onMoved={handleMoved}
          className="custom-splide"
        >
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div
                className={`slide-content rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl mx-4 ${slide.bgColor}`}
                onClick={() => handleSlideClick(slide, index)}
              >
                {/* Image/Icon Area */}
                <div className="h-48 flex items-center justify-center">
                  <div className="text-6xl">{slide.icon}</div>
                </div>

                {/* Content Area */}
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">{slide.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-4 space-y-1">
                    {slide.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs opacity-80">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Custom Splide Styling */
        .custom-splide .splide__slide {
          opacity: 0.4;
          transform: scale(0.75);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .custom-splide .splide__slide.is-active {
          opacity: 1;
          transform: scale(1.2);
          z-index: 10;
        }

        .custom-splide .splide__slide.is-prev,
        .custom-splide .splide__slide.is-next {
          opacity: 0.7;
          transform: scale(0.85);
        }

        /* Arrow Styling */
        .custom-splide .splide__arrow {
          background: rgba(255, 255, 255, 0.5);
          border: none;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          width: 3rem;
          height: 3rem;
          transition: all 0.3s ease;
        }

        .custom-splide .splide__arrow:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        .custom-splide .splide__arrow svg {
          fill: grey;
          width: 1.5rem;
          height: 1.5rem;
        }

        /* Pagination Styling */
        .custom-splide .splide__pagination {
          bottom: 1rem;
        }

        .custom-splide .splide__pagination__page {
          background: #d1d5db;
          border: none;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .custom-splide .splide__pagination__page.is-active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .custom-splide .splide__pagination__page:hover {
          background: #9ca3af;
        }

        /* Track padding for better spacing */
        .custom-splide .splide__track {
          padding: 2rem 0;
        }

        /* Slide content styling */
        .slide-content {
          height: 90%;
          display: flex;
          flex-direction: column;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .custom-splide .splide__arrow {
            width: 2.5rem;
            height: 2.5rem;
          }

          .custom-splide .splide__arrow svg {
            width: 1.25rem;
            height: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;

// Example usage component
export const ProductSliderExample: React.FC = () => {
  const splideRef = useRef<any>(null);

  const handleSlideChanged = (splide: any, newIndex: number) => {
    console.log("Slide changed to:", newIndex);
  };

  const handleSlideClicked = (slide: SlideData, index: number) => {
    console.log("Slide clicked:", slide.title, "at index:", index);
  };


  return (
    <div ref={splideRef}>
      <ProductSlider
        onSlideChanged={handleSlideChanged}
        onSlideClicked={handleSlideClicked}
      />
    </div>
  );
};

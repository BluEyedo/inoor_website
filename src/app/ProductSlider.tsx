"use client";

import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import food from "@/../public/inoor-food.png";
import care from "@/../public/inoor-care.png";
import Image from "next/image";

// TypeScript interfaces
interface SlideData {
  title: string;
  src: any;
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
      title: "Beauty Products",
      src: care,
      bgColor: "bg-gradient-to-br from-gold-100 to-rose-100",
      features: [
        "Skin care creams",
        "Serums and treatments",
        "Natural makeup",
        "Cruelty-free certified products",
      ],
    },
    {
      title: "Food & Nutrition",
      src: food,
      bgColor: "bg-gradient-to-br from-rose-100 to-gold-100",
      features: ["Healthy snacks supplements", "Beauty-enhancing drinks"],
    },
  ];

  // Splide options
  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    focus: "center",
    gap: "2rem",
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
        <h2 className="text-3xl font-bold text-center mb-12 text-charcoal-500">
          Our Products
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
                className={`slide-content rounded-xl shadow-lg  cursor-pointer transform transition-all duration-300  mx-4 ${slide.bgColor}`}
                onClick={() => handleSlideClick(slide, index)}
              >
                {/* Image/Icon Area */}
                <div className="h-48 flex items-center justify-center slide-image duration-300 ">
                  <Image src={slide.src} alt="" />
                </div>

                {/* Content Area */}
                <div className="p-6 text-charcoal-500">
                  <h3 className="text-2xl font-bold mb-3 border-b-2 border-b-gold-300">
                    {slide.title}
                  </h3>

                  {/* Features List */}
                  <ul className="mt-4 space-y-1 ">
                    {slide.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=" opacity-80">
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
          transform: scale(1.1);
          z-index: 10;
        }

        .custom-splide .splide__slide.is-active .slide-image {
          transform: scale(1.3);
          padding-bottom: 20px;
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
          height: 95%;
          margin-top: 20px;
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

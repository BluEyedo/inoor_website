"use client";

import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import food from "@/../public/inoor-food.png";
import care from "@/../public/inoor-care.png";
import Image from "next/image";
import { motion } from "motion/react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

// TypeScript interfaces

interface ProductSliderProps {
  onSlideChanged?: (splide: any, newIndex: number) => void;
  onSlideClicked?: (slide: any, index: number) => void;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  onSlideChanged,
  onSlideClicked,
}) => {
  const splideRef = useRef<any>(null);

  const slides = [
    {
      title: "Beauty Products",
      titleAr: "مستحضرات التجميل",
      src: care,
      bgColor: "bg-gradient-to-br from-gold-100 to-rose-100",
      features: [
        "Skin care creams",
        "Serums and treatments",
        "Natural makeup",
        "Cruelty-free certified products",
      ],
      featuresAr: [
        "كريمات العناية بالبشرة",
        "أمصال وسيرومات",
        "مستحضرات التجميل",
        "منتجات خالية من القسوة",
      ],
    },
    {
      title: "Food & Nutrition",
      titleAr: "المنتجات الغذائية",
      src: food,
      bgColor: "bg-gradient-to-br from-rose-100 to-gold-100",
      features: ["Healthy snacks supplements", "Beauty-enhancing drinks"],
      featuresAr: ["أغذية صحية ومكمّلات نباتية", "مشروبات جمالي وطبيعية"],
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
      1024: {
        perPage: 2,
        gap: "1.5rem",
        padding: "2rem",
      },
      768: {
        perPage: 1,
        gap: "1rem",
        padding: "1.5rem",
        arrows: false,
      },
      640: {
        perPage: 1,
        gap: "0.5rem",
        padding: "1rem",
        arrows: false,
      },
      480: {
        perPage: 1,
        gap: "0.25rem",
        padding: "0.5rem",
        arrows: false,
      },
    },
  };

  // Event handlers
  const handleMoved = (splide: any, newIndex: number) => {
    onSlideChanged?.(splide, newIndex);
  };

  const handleSlideClick = (slide: any, index: number) => {
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

  const lang = useSelector((state: any) => state.lang.value);

  return (
    <div className="splide-container h-auto min-h-[500px] sm:min-h-[600px] lg:h-[700px] py-8 sm:py-12 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-16 md:mb-6 mb-8 text-charcoal-500 "
        >
          <div className="flex flex-row ">
            <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
            <p className="sm:w-[30%]">
              {lang == "en" && "Our Products"}
              {lang == "ar" && "منتجاتنا"}
            </p>
            <div className="sm:w-[35%] border-b-2 border-charcoal-500" />
          </div>
        </motion.div>

        {/* Mobile/Tablet Simple Cards */}
        <div className="block md:hidden">
          <div className="space-y-6">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide-content rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 ${slide.bgColor}`}
                onClick={() => handleSlideClick(slide, index)}
              >
                {/* Image/Icon Area */}
                <div className="h-32 sm:h-40 flex items-center justify-center slide-image duration-300 p-4">
                  <Image
                    src={slide.src}
                    alt=""
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                {/* Content Area */}
                <div className="p-4 sm:p-6 text-charcoal-500">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 border-b-2 border-b-gold-300 pb-2">
                    {lang == "en" && slide.title}
                    {lang == "ar" && slide.titleAr}
                  </h3>

                  {/* Features List */}
                  <ul className="mt-4 space-y-1 text-sm sm:text-base">
                    {lang == "en" &&
                      slide.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="opacity-80">
                          • {feature}
                        </li>
                      ))}

                    {lang == "ar" &&
                      slide.featuresAr.map((feature, featureIndex) => (
                        <li key={featureIndex} className="opacity-80">
                          • {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Splide */}
        <div className="hidden md:block ">
          <Splide
            ref={splideRef}
            options={splideOptions}
            onMoved={handleMoved}
            className="custom-splide"
          >
            {slides.map((slide, index) => (
              <SplideSlide key={index}>
                <div
                  className={`slide-content rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 mx-2 lg:mx-4 ${slide.bgColor}`}
                  onClick={() => handleSlideClick(slide, index)}
                >
                  {/* Image/Icon Area */}
                  <div className="h-36 md:h-40 lg:h-48 flex items-center justify-center slide-image duration-300 p-4">
                    <Image
                      src={slide.src}
                      alt=""
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-4 md:p-5 lg:p-6 text-charcoal-500">
                    <h3
                      className={`text-lg md:text-xl lg:text-2xl font-bold mb-3 border-b-2 border-b-gold-300 pb-2 ${
                        lang == "ar" && "text-end"
                      }`}
                    >
                      {lang == "en" && slide.title}
                      {lang == "ar" && slide.titleAr}
                    </h3>

                    {/* Features List */}
                    <ul className="mt-4 space-y-1 text-sm md:text-base">
                      {lang == "en" &&
                        slide.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="opacity-80">
                            • {feature}
                          </li>
                        ))}
                      {lang == "ar" &&
                        slide.featuresAr.map((feature, featureIndex) => (
                          <div dir="rtl" key={featureIndex}>
                            <li className="opacity-80 text-right">
                              • {feature}
                            </li>
                          </div>
                        ))}
                    </ul>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
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
          transform: scale(1.05);
          z-index: 10;
        }

        .custom-splide .splide__slide.is-active .slide-image {
          transform: scale(1.1);
          padding-bottom: 10px;
        }

        .custom-splide .splide__slide.is-prev,
        .custom-splide .splide__slide.is-next {
          opacity: 0.7;
          transform: scale(0.85);
        }

        /* Arrow Styling */
        .custom-splide .splide__arrow {
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          width: 2.5rem;
          height: 2.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .custom-splide .splide__arrow:hover {
          background: rgba(255, 255, 255, 0.9);
        }

        .custom-splide .splide__arrow svg {
          fill: #6b7280;
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Pagination Styling */
        .custom-splide .splide__pagination {
          bottom: 0.5rem;
        }

        .custom-splide .splide__pagination__page {
          background: #d1d5db;
          border: none;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          margin: 0 3px;
          transition: all 0.3s ease;
        }

        .custom-splide .splide__pagination__page.is-active {
          background: #3b82f6;
          transform: scale(1.3);
        }

        .custom-splide .splide__pagination__page:hover {
          background: #9ca3af;
        }

        /* Track padding for better spacing */
        .custom-splide .splide__track {
          padding: 1rem 0 2rem 0;
        }

        /* Slide content styling */
        .slide-content {
          margin-top: 30px;
          height: auto;
          min-height: 300px;
          display: flex;
          flex-direction: column;
        }

        /* Responsive adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .custom-splide .splide__slide.is-active {
            transform: scale(1.02);
          }

          .custom-splide .splide__slide.is-active .slide-image {
            transform: scale(1.05);
          }
        }

        @media (min-width: 1024px) {
          .custom-splide .splide__slide.is-active {
            transform: scale(1.1);
          }

          .custom-splide .splide__slide.is-active .slide-image {
            transform: scale(1.7);
            padding-bottom: 30px;
          }
        }

        @media (max-width: 767px) {
          .custom-splide .splide__arrow {
            width: 2rem;
            height: 2rem;
          }

          .custom-splide .splide__arrow svg {
            width: 1rem;
            height: 1rem;
          }

          .custom-splide .splide__pagination__page {
            width: 6px;
            height: 6px;
            margin: 0 2px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;

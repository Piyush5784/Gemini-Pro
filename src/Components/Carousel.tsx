import { useState } from "react";

export const Carousel = () => {
  const slides = [
    "https://as2.ftcdn.net/v2/jpg/06/10/26/15/1000_F_610261529_vk9kf4ooTP5eSsQdOEyB4miRHn1YWCD1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/The_future_%28Unsplash%29.jpg",
    "https://images.unsplash.com/photo-1624949216539-cd17ef0a1a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {slides.map((slide: string, index: number) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 ${
                index === currentSlide ? "" : "hidden"
              }`}
            >
              <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4 py-2">
        <button
          className="text-white bg-gray-800 rounded-full focus:outline-none"
          onClick={previousSlide}
        >
          Prev
        </button>
        <button
          className="text-white bg-gray-800 rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

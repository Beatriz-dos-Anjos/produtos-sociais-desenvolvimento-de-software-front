"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Carousel2Props {
  images: string[]
}

export function Carousel2({ images }: Carousel2Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === currentIndex ? "active" : ""}
          >
            <img
              src={image || "/placeholder.svg"}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover:bg-white/80 shadow-md transition-all duration-300 ease-in-out group-hover:shadow-lg group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <ChevronLeft className="w-6 h-6 text-[#6672FA]" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover:bg-white/80 shadow-md transition-all duration-300 ease-in-out group-hover:shadow-lg group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <ChevronRight className="w-6 h-6 text-[#6672FA]" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}


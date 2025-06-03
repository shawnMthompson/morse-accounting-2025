"use client";

/**
 * For the most part, this component is complete aside from filling in the actual testimonials.
 * It still needs to be made responsive for mobile devices. Currently, the buttons are essentially unusable on mobile devices.
 * So, I'll need to find a good workaround before saying this component is fully implemented.
 */

import { useState } from "react";
import Image from "next/image";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "1",
    review: "Highly recommend for all your tax needs.",
    img: "/person-one.jpg",
  },
  {
    name: "2",
    review: "Highly recommend for all your tax needs.",
    img: "/person-two.jpg",
  },
  {
    name: "3",
    review: "Highly recommend for all your tax needs.",
    img: "/person-three.jpg",
  },
  {
    name: "4",
    review: "Highly recommend for all your tax needs.",
    img: "/person-three.jpg",
  },
  {
    name: "5",
    review: "Highly recommend for all your tax needs.",
    img: "/person-three.jpg",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  // Get indices for left, center, right
  const getIndices = () => {
    const len = testimonials.length;
    const left = (current - 1 + len) % len;
    const center = current;
    const right = (current + 1) % len;
    return [left, center, right];
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const [leftIdx, centerIdx, rightIdx] = getIndices();
  return (
    <div className="w-full max-w-5xl m-auto">
      <div className="mt-20">
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={prevTestimonial}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-400 hover:bg-gray-500 text-white transition"
            aria-label="Previous testimonials"
          >
            <FaRegArrowAltCircleLeft className="text-2xl" />
          </button>
          <div className="relative flex justify-center items-center w-full h-[480px]">
            {[leftIdx, centerIdx, rightIdx].map((idx, pos) => {
              // pos: 0 = left, 1 = center, 2 = right
              const isCenter = pos === 1;
              const baseClasses =
                "absolute transition-all duration-500 flex flex-col items-center";
              const cardClasses = isCenter
                ? "z-20 scale-110 shadow-2xl left-1/2 -translate-x-1/2"
                : pos === 0
                ? "z-10 scale-90 left-1/4 -translate-x-1/2"
                : "z-10 scale-90 left-3/4 -translate-x-1/2";
              return (
                <div
                  key={idx}
                  className={`${baseClasses} ${cardClasses} bg-gray-700 h-[420px] w-80 text-white rounded-xl shadow-lg`}
                  style={{
                    top: isCenter ? "0" : "30px",
                  }}
                >
                  <div
                    className={`h-56 rounded-t-xl bg-gray-400 flex justify-center items-center w-full`}
                  >
                    <Image
                      src={testimonials[idx].img}
                      width={isCenter ? 180 : 120}
                      height={isCenter ? 180 : 120}
                      alt={testimonials[idx].name}
                      className={`rounded-full object-cover ${
                        isCenter ? "h-44 w-44" : "h-28 w-28"
                      }`}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 p-4 flex-1">
                    <p className="text-lg font-semibold">
                      {testimonials[idx].name}
                    </p>
                    <p className="text-center">{testimonials[idx].review}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={nextTestimonial}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-400 hover:bg-gray-500 text-white transition"
            aria-label="Next testimonials"
          >
            <FaRegArrowAltCircleRight className="text-2xl" />
          </button>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === current ? "bg-indigo-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

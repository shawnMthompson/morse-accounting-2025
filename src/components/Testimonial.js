"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "...",
    review:
      "Working with Deanna has completely changed the way I approach tax season. She’s knowledgeable, efficient, and truly takes the time to explain everything in a way that makes sense. I wouldn’t trust anyone else with my finances!",
    img: "/person-one.jpg",
  },
  {
    name: "...",
    review:
      "Deanna is more than just a tax accountant — she's a partner in my business success. Her attention to detail and proactive advice helped me identify deductions I never knew I qualified for. She’s the real deal.",
    img: "/person-two.jpg",
  },
  {
    name: "...",
    review:
      "As someone who absolutely dreads taxes, I can’t express just how grateful I am to have found Deanna. She’s approachable, responsive, and takes the stress out of every step. It’s clear she genuinely cares about her clients.",
    img: "/person-three.jpg",
  },
  {
    name: "...",
    review:
      "Deanna's expertise saved me thousands and helped streamline my bookkeeping for the entire year. She’s incredibly professional and down-to-earth — I recommend her to anyone looking for reliable and personalized tax support.",
    img: "/person-three.jpg",
  },
  {
    name: "...",
    review:
      "I’ve been getting my taxes done with Deanna for nearly three years now, and I can honestly say she’s the best accountant I’ve ever worked with. She’s smart, trustworthy, and always ahead of the curve when it comes to new tax laws. I couldn’t ask for better service.",
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-10 md:mt-20">
        {/* Mobile: Single card view */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <div className="bg-secondary w-full max-w-sm h-[400px] text-surface rounded-xl">
              <div className="h-48 rounded-t-xl bg-accent flex justify-center items-center">
                <Image
                  src={testimonials[current].img}
                  width={120}
                  height={120}
                  alt={testimonials[current].name}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 p-4 flex-1">
                <p className="text-lg font-semibold">
                  {testimonials[current].name}
                </p>
                <p className="text-center text-md">
                  {testimonials[current].review}
                </p>
              </div>
            </div>
            {/* Mobile navigation buttons */}
            <div className="flex space-x-6 justify-center mt-6">
              <button
                onClick={prevTestimonial}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-secondary text-surface transition"
                aria-label="Previous testimonial"
              >
                <FaRegArrowAltCircleLeft className="text-xl" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-secondary text-surface transition"
                aria-label="Next testimonial"
              >
                <FaRegArrowAltCircleRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop: Three card carousel */}
        <div className="hidden md:flex justify-center items-center gap-6">
          <button
            onClick={prevTestimonial}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-secondary text-surface transition"
            aria-label="Previous testimonials"
          >
            <FaRegArrowAltCircleLeft className="text-2xl" />
          </button>
          <div className="relative flex justify-center items-center w-full h-[480px] overflow-visible">
            {[leftIdx, centerIdx, rightIdx].map((idx, pos) => {
              const isCenter = pos === 1;
              const baseClasses =
                "absolute transition-all duration-500 flex flex-col items-center";
              const cardClasses = isCenter
                ? "z-20 scale-110 left-1/2 -translate-x-1/2"
                : pos === 0
                ? "z-10 scale-90 left-1/4 -translate-x-1/2 pointer-events-none"
                : "z-10 scale-90 left-3/4 -translate-x-1/2 pointer-events-none";
              const cardBg = isCenter ? "bg-secondary" : "bg-secondary/60";
              const cardHeight = isCenter ? "h-[420px]" : "h-[340px]";

              return (
                <div
                  key={idx}
                  className={`${baseClasses} ${cardClasses} ${cardHeight} w-80 ${cardBg} text-surface rounded-xl`}
                  style={{
                    top: isCenter ? "0" : "60px",
                  }}
                >
                  <div className="h-56 rounded-t-xl bg-accent flex justify-center items-center w-full">
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
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-secondary text-surface transition"
            aria-label="Next testimonials"
          >
            <FaRegArrowAltCircleRight className="text-2xl" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === current ? "bg-accent" : "bg-neutral"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

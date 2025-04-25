"use client";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1745287248481.json";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full pt-32 bg-slate-200 rounded-2xl dark:bg-zinc-900 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white">
            The Ultimate Product With Pleasure
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg lg:text-base">
            Explore a world of carefully curated products designed to elevate
            your lifestyle. From tech to fashion, we bring you quality, style,
            and unbeatable deals — all in one beautiful, seamless shopping
            experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-center md:justify-start">
            <Button className="px-6 py-2 text-white bg-violet-600 hover:bg-violet-700 transition rounded-md">
              Get Started
            </Button>
            <Link href={"/products"}>
              <button className="text-violet-600 hover:underline font-medium text-sm sm:text-base">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Animation */}
        <div className="w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

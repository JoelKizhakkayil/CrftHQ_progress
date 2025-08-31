"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  // ✅ Use React’s ref typing instead of raw HTMLDivElement
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (imageElement) {
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full pt-28 md:pt-40 pb-16 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] rounded-full bg-gray-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[10%] w-[400px] h-[400px] rounded-full bg-gray-500/20 blur-3xl animate-pulse" />
      </div>

      <div className="space-y-8 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient"
        >
          Your Career Coach for
          <br />
          Professional Success
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"
        >
          Level up your Career with personalized guidance, interview prep, and
          AI-powered tools for job success at the cost of NOTHING.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/mrbeast">
            <Button
              size="lg"
              variant="outline"
              className="px-8 hover:bg-accent/30 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hero-image-wrapper mt-8 md:mt-12 bounce"
        >
          <motion.div
            className="hero-image"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src={"/resume.png"}
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl border mx-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

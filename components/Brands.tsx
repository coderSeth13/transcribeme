"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/utils/images";
import { motion } from "framer-motion";

const Brands = () => {
  const logos = [
    images.logos.bcg,
    images.logos.bnsf,
    images.logos.cisco,
    images.logos.deliotte,
    images.logos.fb,
    images.logos.genesys,
    images.logos.gfk,
    images.logos.harvard,
    images.logos.ipsos,
    images.logos.kaplan,
    images.logos.kmr,
    images.logos.medallia,
    images.logos.oracle,
    images.logos.pandora,
    images.logos.partners,
    images.logos.salesforce,
  ];

  // Duplicate logos for seamless animation
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="py-16 bg-light-white overflow-hidden">
      <div className="wrapper">
        {/* Section Title */}
        <h2 className="heading-2 text-center mb-8">
          Join the 2,500+ leaders in legal, medical, tech and more that trust
          TranscribeMe
        </h2>

        {/* Continuous Animation */}
        <motion.div
          className="flex items-center space-x-12"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          style={{
            display: "flex",
            willChange: "transform",
          }}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[100px] h-16 sm:h-20 lg:h-24"
            >
              <Image
                src={logo}
                alt={`Brand logo ${index + 1}`}
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;

import React from "react";
import Image from "next/image";

interface SectionStyle1Props {
  heading: string;
  paragraph: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; 
}

const SectionStyle1: React.FC<SectionStyle1Props> = ({
  heading,
  paragraph,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div className="wrapper py-12">
      <div
        className={`flex flex-col lg:flex-row items-center gap-8 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">{paragraph}</p>
          <a
            href={ctaLink}
            className="text-primary hover:underline font-medium"
          >
            {ctaText}
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 300px, 
                   (max-width: 1024px) 500px, 
                   800px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SectionStyle1;

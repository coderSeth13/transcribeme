import Image from "next/image";
import { Button } from "./ui/button";

import { images } from "@/utils/images";

const Hero = () => {
  return (
    <div className="bg-section rounded-xl p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Text Side */}
        <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <h1 className="heading-1">
            <span className="bg-pen-brush bg-no-repeat bg-cover block">
              The Gold Standard
            </span>
            <span className="font-normal block">in transcription services</span>
          </h1>
          <p className="text-base md:text-lg mt-4">
            Get the most accurate and affordable transcription of your audio and
            video through TranscribeMe’s AI + human-powered technology.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="#">
              <Button className="bg-accent-1" size="lg">
                Order Now
              </Button>
            </a>
            <a href="#">
              <Button size="lg">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="md:col-span-2 flex justify-center">
          <Image
            src={images.heroImages.large}
            alt="Hero Image"
            width={1200}
            height={800}
            className="w-full h-auto md:w-3/4 lg:w-full"
            sizes="(max-width: 640px) 300px, 
                   (max-width: 768px) 768px, 
                   (max-width: 1024px) 1024px, 
                   1200px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

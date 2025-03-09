import React from "react";
import { Button } from "@/components/ui/button";
import { images } from "@/utils/images";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <div className="py-16">
      <div className="wrapper">
        {/* Section Title */}
        <h2 className="heading-2 text-center mb-8">
          What customers say about us
        </h2>

        {/* Carousel Section */}
        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            {/* Slide 1 */}
            <CarouselItem>
              <div className="bg-section rounded-2xl py-5 md:px-12 text-center">
                <div className="flex items-center justify-center h-full ">
                  <Image
                    className=""
                    src={images.icons.star}
                    width={100}
                    height={100}
                    alt="5 star rating"
                  />
                </div>
                <p className="font-medium text-lg mb-2">
                  Angel C | Datu Research
                </p>
                <blockquote className="text-base italic text-gray-700">
                  It&apos;s been a great experience working with TranscribeMe.
                  Their transcription is the best quality for the cheapest
                  price. They worked with us to create a business rate and the
                  quality was great.
                </blockquote>
              </div>
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem>
              <div className="bg-section rounded-2xl py-5 md:px-12 text-center">
                <div className="flex items-center justify-center h-full py-5">
                  <Image
                    className=""
                    src={images.icons.star}
                    width={100}
                    height={100}
                    alt="5 star rating"
                  />
                </div>
                <p className="font-medium text-lg mb-2">Limor H | UL</p>
                <blockquote className="text-base italic text-gray-700">
                  TranscribeMe has done a terrific job in helping us meet a
                  tight deadline for a demanding client. They helped us tailor
                  the transcripts to our particular needs, and were always
                  available, helpful, and patient.
                </blockquote>
              </div>
            </CarouselItem>

            {/* Slide 3 */}
            <CarouselItem>
              <div className="bg-section rounded-2xl py-5 md:px-12 text-center">
                <div className="flex items-center justify-center h-full py-5">
                  <Image
                    className=""
                    src={images.icons.star}
                    width={100}
                    height={100}
                    alt="5 star rating"
                  />
                </div>
                <p className="font-medium text-lg mb-2">Bart L | Ipsos</p>
                <blockquote className="text-base italic text-gray-700">
                  We used TranscribeMe for transcripts and the quality has been
                  great. Turnaround speed is fast and the process to upload
                  files is very simple. Very responsive.
                </blockquote>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="bg-white text-black hover:bg-gray-100">
            ❮
          </CarouselPrevious>
          <CarouselNext className="bg-white text-black hover:bg-gray-100">
            ❯
          </CarouselNext>
        </Carousel>

        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Are you ready to achieve more?
          </h3>
          <div className="flex justify-center gap-4">
            <Button variant="default" className="bg-accent-1">
              Order Now
            </Button>
            <Button variant="outline">Request a Quote</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

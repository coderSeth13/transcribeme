import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"; // Assuming you're using the same Button component.

const Faq = () => {
  return (
    <div className="bg-section py-16">
      <div className="wrapper">
        {/* Heading */}
        <h2 className="heading-2 text-center mb-8">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <Accordion
          className="max-w-2xl mx-auto space-y-4" // Added spacing between questions
          type="single"
          collapsible
        >
          {/* Question 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>What is TranscribeMe?</AccordionTrigger>
            <AccordionContent className="transition-all duration-300 ease-in-out">
              TranscribeMe is an online digital transcription company that uses
              crowd-sourced transcriptionists from around the world to
              transcribe your audio and video files into written transcripts. It
              is not a stand-alone program and does not require downloading a
              platform. Access to the customer portal can be achieved by going{" "}
              <a href="/order-now" className="text-primary hover:underline">
                here
              </a>{" "}
              or downloading our TranscribeMe app at the Apple Store or the Play
              store for Android.
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>Is TranscribeMe an AI app?</AccordionTrigger>
            <AccordionContent className="transition-all duration-300 ease-in-out">
              TranscribeMe uses a hybrid blend of Automatic Speech Recognition
              (ASR) and human transcriptionists to achieve the most accurate and
              useful transcripts for all types of audio and video.
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is TranscribeMe only for English audio or video?
            </AccordionTrigger>
            <AccordionContent className="transition-all duration-300 ease-in-out">
              TranscribeMe provides transcripts for multiple languages including
              Spanish, French, Italian, German, Portuguese, Chinese, and
              Japanese, to name just a few. If you have a language you don’t see
              listed here, contact our Sales team and we will provide you with a
              quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* "Need More Help?" Section */}
        <div className="text-center mt-12">
          <p className="text-base md:text-lg mb-4">Need more help?</p>
          <Button className="bg-accent-1" variant="default" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import SectionStyle1 from "@/components/SectionStyle1";
import { images } from "@/utils/images";
import TopHeader from "@/components/TopHeader";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <TopHeader />
      <div className="wrapper ">
        <Header />
        <Hero />
      </div>
      <Brands />
      <div className="wrapper">
        <SectionStyle1
          heading="The accuracy you need, easy and affordable"
          paragraph="At TranscribeMe, we don’t just deliver 99%+ accurate transcripts. We deliver the Gold Standard method of accuracy to ensure your transcripts properly capture the right context and true voice of the speakers."
          ctaText="Learn More"
          ctaLink="/learn-more"
          imageSrc={images.accuracy.large}
          imageAlt="Accuracy Illustration"
        />
        <SectionStyle1
          heading="High-volume pricing and fast delivery for enterprise projects"
          paragraph="Choose TranscribeMe for swift and precise transcriptions tailored to meet your deadlines. Our team specializes in fulfilling customized high-volume orders, ensuring a quick turnaround without compromising on quality. Benefit from our competitive pricing for efficient and high-quality transcription solutions."
          ctaText="Explore Transcription Services"
          ctaLink="/transcription-services"
          imageSrc={images.enterprise.large}
          imageAlt="Enterprise transcription solutions"
          reverse
        />
        <SectionStyle1
          heading="Transcripts customized to you and the needs of your team"
          paragraph="Everything we do can be customized. We can set up a solution for you and your team that meets any requirements, including transcription style and formatting, multiple languages, geofencing, team accounts, and much more."
          ctaText="Solutions for Custom Projects"
          ctaLink="/custom-projects"
          imageSrc={images.customize.large}
          imageAlt="Customized transcription solutions"
        />
        <Testimonial />
      </div>
      <Faq />
      <Footer />
    </main>
  );
}

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Section */}
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
        {/* Our Services */}
        <div>
          <h3 className="text-accent-2 text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#ai-transcription" className="hover:text-gray-400">
                AI Transcription
              </Link>
            </li>
            <li>
              <Link href="#human-transcription" className="hover:text-gray-400">
                Human Transcription
              </Link>
            </li>
            <li>
              <Link href="#audio-transcription" className="hover:text-gray-400">
                Audio Transcription
              </Link>
            </li>
            <li>
              <Link href="#video-transcription" className="hover:text-gray-400">
                Video Transcription
              </Link>
            </li>
            <li>
              <Link href="#translation" className="hover:text-gray-400">
                Translation
              </Link>
            </li>
            <li>
              <Link href="#custom-datasets" className="hover:text-gray-400">
                Custom AI Datasets
              </Link>
            </li>
            <li>
              <Link href="#data-annotation" className="hover:text-gray-400">
                Data Annotation
              </Link>
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-accent-2 text-lg font-semibold mb-4">
            Use Cases
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#legal-sector" className="hover:text-gray-400">
                Legal Sector
              </Link>
            </li>
            <li>
              <Link href="#medical-research" className="hover:text-gray-400">
                Medical & Research
              </Link>
            </li>
            <li>
              <Link href="#ai-ml" className="hover:text-gray-400">
                AI Machine Learning
              </Link>
            </li>
            <li>
              <Link href="#education" className="hover:text-gray-400">
                Education
              </Link>
            </li>
            <li>
              <Link href="#consulting" className="hover:text-gray-400">
                Consulting
              </Link>
            </li>
            <li>
              <Link href="#market-research" className="hover:text-gray-400">
                Market Research
              </Link>
            </li>
            <li>
              <Link href="#technology" className="hover:text-gray-400">
                Technology
              </Link>
            </li>
            <li>
              <Link href="#call-centers" className="hover:text-gray-400">
                Call Centers
              </Link>
            </li>
            <li>
              <Link href="#enterprise" className="hover:text-gray-400">
                Enterprise
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-accent-2 text-lg font-semibold mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#resources" className="hover:text-gray-400">
                Resources
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#mobile-app" className="hover:text-gray-400">
                Mobile App
              </Link>
            </li>
            <li>
              <Link href="#customer-support" className="hover:text-gray-400">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="#freelancers" className="hover:text-gray-400">
                Freelancers
              </Link>
            </li>
          </ul>
        </div>

        {/* Help & Contact */}
        <div>
          <h3 className="text-accent-2 text-lg font-semibold mb-4">
            Help & Connect
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#contact-us" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
            <li>
              <p className="hover:text-gray-400">sales@transcribeme.com</p>
            </li>
            <li>
              <p className="hover:text-gray-400">+1 (800) 275-5513</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-px bg-accent-1 my-6"></div>

      {/* Bottom Footer Section */}
      <div className="text-center text-sm space-y-4 px-4 py-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#client-terms" className="hover:text-gray-400">
            Client Terms
          </Link>
          <Link href="#freelancer-terms" className="hover:text-gray-400">
            Freelancer Terms
          </Link>
          <Link href="#client-privacy" className="hover:text-gray-400">
            Client Privacy
          </Link>
          <Link
            href="#freelancer-worker-privacy"
            className="hover:text-gray-400"
          >
            Freelancer Worker Privacy
          </Link>
          <Link href="#hipaa-compliance" className="hover:text-gray-400">
            HIPAA Compliance
          </Link>
          <Link href="#api" className="hover:text-gray-400">
            API
          </Link>
        </div>
        <p>© 2025 TranscribeMe. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

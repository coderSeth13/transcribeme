import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog"; 
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { images } from "@/utils/images";

const Header = () => {
  return (
    <header className="wrapper flex items-center justify-between py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold">
          <img src={images.logos.black} alt="Logo" className="object-contain" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="#services"
          className="text-sm font-medium hover:text-primary"
        >
          Services
        </Link>
        <Link
          href="#use-cases"
          className="text-sm font-medium hover:text-primary"
        >
          Use Cases
        </Link>
        <Link
          href="#freelancers"
          className="text-sm font-medium hover:text-primary"
        >
          Freelancers
        </Link>
        <Link
          href="#resources"
          className="text-sm font-medium hover:text-primary"
        >
          Resources
        </Link>
      </nav>

      {/* CTA Buttons - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Button variant="outline">Contact Us</Button>
        <Button>Order Now</Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4">
            {/* Add DialogTitle for Accessibility */}
            <DialogTitle>
              <VisuallyHidden>Menu</VisuallyHidden>
            </DialogTitle>
            <nav className="flex flex-col items-center gap-4">
              <Link
                href="#services"
                className="text-sm font-medium hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#use-cases"
                className="text-sm font-medium hover:text-primary"
              >
                Use Cases
              </Link>
              <Link
                href="#freelancers"
                className="text-sm font-medium hover:text-primary"
              >
                Freelancers
              </Link>
              <Link
                href="#resources"
                className="text-sm font-medium hover:text-primary"
              >
                Resources
              </Link>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
              <Button className="w-full">Order Now</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

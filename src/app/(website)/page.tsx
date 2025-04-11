import React from "react";
import Hero from "./_components/hero";
import ServicesCarousel from "./_components/services-carousel";
import HowItWorks from "./_components/how-it-works";
import DedicationForm from "./_components/dedication-form";
import Stats from "./_components/stats";
import AboutUs from "./_components/about-us";
import TestimonialsCarousel from "./_components/testomonial-carousel";
import Blog from "./_components/blog";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ServicesCarousel />
      <HowItWorks />
      <DedicationForm />
      <Stats />
      <AboutUs />
      <TestimonialsCarousel />
      <Blog />
    </main>
  );
};

export default page;

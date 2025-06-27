import React from 'react';
;
import Hero from '@/components/Hero';
import ServicesPage from '@/components/Services';
import AboutPage from '@/components/About';
import Testimonials from '@/components/Testimonials';

const page = () => {
  return (
<main>
      <Hero />
      <ServicesPage />
      <AboutPage />
      <Testimonials />
    </main>
  );
}

export default page;

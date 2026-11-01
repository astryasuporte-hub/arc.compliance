import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SolutionsSection } from './components/SolutionsSection.tsx';
import { DifferentiatorsSection } from './components/DifferentiatorsSection.tsx';
import { Approach } from './components/Approach.tsx';
import { About } from './components/About.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [selectedSolutionForContact, setSelectedSolutionForContact] = useState('');

  const handleOpenContact = (solutionName?: string) => {
    if (solutionName) {
      setSelectedSolutionForContact(solutionName);
    }
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#10243C] text-[#10243C] selection:bg-[#B69A6B]/30 selection:text-[#B69A6B] font-sans">
      {/* Top Fixed Luxury Navigation with White Logo */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main>
        {/* Modern & Objective Hero with Animated Numbers & Clean CTAs */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 6 Structured Corporate Solutions (Inspired by Wise Solution Architecture) */}
        <SolutionsSection onSelectSolution={(sol) => handleOpenContact(sol)} />

        {/* Strategic Differentiators with Rapid Rolling Numbers Banner */}
        <DifferentiatorsSection onOpenContact={() => handleOpenContact()} />

        {/* 5-Phase Structured Methodology */}
        <Approach />

        {/* About ARC Compliance & Senior Advisory */}
        <About onOpenContact={() => handleOpenContact()} />

        {/* Executive Proposal Form with Instant WhatsApp Message & Anti-XSS Protection */}
        <ContactSection initialSolution={selectedSolutionForContact} />
      </main>

      {/* Clean Footer with White Logo, Instagram Link and Zero Pricing Lists */}
      <Footer />
    </div>
  );
}

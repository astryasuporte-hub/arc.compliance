import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SolutionsSection } from './components/SolutionsSection.tsx';
import { DifferentiatorsSection } from './components/DifferentiatorsSection.tsx';
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
    <div className="min-h-screen bg-[#10243C] text-[#10243C] selection:bg-[#B69A6B]/30 selection:text-[#B69A6B] font-sans w-full max-w-full overflow-x-hidden relative">
      {/* Top Fixed Luxury Navigation with White Logo */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="w-full max-w-full overflow-x-hidden relative">
        {/* Modern & Objective Hero with Clean CTAs */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* Structured Corporate Solutions */}
        <SolutionsSection onSelectSolution={(sol) => handleOpenContact(sol)} />

        {/* Strategic Differentiators */}
        <DifferentiatorsSection onOpenContact={() => handleOpenContact()} />

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

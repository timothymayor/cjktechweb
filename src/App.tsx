import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { SocialProofStrip } from './components/proof/SocialProofStrip';
import { About } from './components/about/About';
import { Solutions } from './components/solutions/Solutions';
import { BusinessOutcomes } from './components/outcomes/BusinessOutcomes';
import { Projects } from './components/projects/Projects';
import { TechnologyEcosystem } from './components/ecosystem/TechnologyEcosystem';
import { Testimonials } from './components/testimonials/Testimonials';
import { Blog } from './components/blog/Blog';
import { ConsultingCTA } from './components/cta/ConsultingCTA';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { AssessmentModal } from './components/assessment/AssessmentModal';
import { solutions } from './data/solutions';

export default function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState('AI Customer Service & Support Agents');

  const handleSelectSolution = (solutionId: string) => {
    const found = solutions.find((s) => s.id === solutionId);
    if (found) {
      setPreSelectedService(found.title);
    }
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyAssessmentResults = (recommendedService: string) => {
    setPreSelectedService(recommendedService);
  };

  const handleConsultationClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenAssessment={() => setIsAssessmentOpen(true)} />

      <main id="main-content">
        {/* Hero Section with Carousel & AI Ecosystem Visual */}
        <Hero
          onSelectSolution={handleSelectSolution}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* Credibility & Trust Metrics Strip */}
        <SocialProofStrip />

        {/* About Section: Strategy & Lifecycle Pipeline */}
        <About />

        {/* 8 Core AI Solutions Grid & Modal */}
        <Solutions onPreSelectService={(service) => setPreSelectedService(service)} />

        {/* Measurable Enterprise Business Outcomes */}
        <BusinessOutcomes />

        {/* Selected AI Automation Projects & Case Studies Modal */}
        <Projects onPreSelectProject={(projectTitle) => setPreSelectedService(projectTitle)} />

        {/* Technology Ecosystem & Integration Stack */}
        <TechnologyEcosystem />

        {/* Client Testimonials Carousel */}
        <Testimonials />

        {/* Thought Leadership & Blog Insights */}
        <Blog onConsultationClick={handleConsultationClick} />

        {/* Distinct High-Impact Consulting CTA */}
        <ConsultingCTA onOpenAssessment={() => setIsAssessmentOpen(true)} />

        {/* Contact Form, Map, and Company Info */}
        <Contact preSelectedService={preSelectedService} />
      </main>

      {/* Multi-column Footer & Legal Modals */}
      <Footer
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onSelectSolution={handleSelectSolution}
      />

      {/* Interactive AI Readiness Assessment Diagnostic Modal */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onApplyResults={handleApplyAssessmentResults}
      />

    </div>
  );
}

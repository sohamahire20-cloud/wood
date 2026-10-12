import React, { useState, useEffect } from 'react';
import {
  PageRoute,
  INITIAL_PROJECTS,
  JOURNAL_ARTICLES,
  EnquirySubmission,
  ProjectCaseStudy,
} from './data/siteData';
import {
  HomeView,
  KitchensView,
  BespokeFurnitureView,
  ProjectsView,
  ProjectDetailView,
} from './views/PrimaryViews';
import {
  MaterialsView,
  CraftsmanshipView,
  OurStoryView,
  ProcessView,
  JournalView,
  JournalDetailView,
  ConsultationView,
  PolicyView,
} from './views/CraftAndContentViews';
import { LightboxModal } from './components/LightboxModal';
import { StudioWorkspaceModal } from './components/StudioWorkspaceModal';
import { Menu, X, MessageSquare, ArrowRight, SlidersHorizontal } from 'lucide-react';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [projectFilter, setProjectFilter] = useState<string>('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Context carried into the Consultation Enquiry Flow (Blueprint Section 09 & 10)
  const [originPageLabel, setOriginPageLabel] = useState<string>('Home Showroom');
  const [enquiryProjectRef, setEnquiryProjectRef] = useState<string>('');
  const [enquiryCategory, setEnquiryCategory] = useState<string>('Modular Kitchen');

  // Editable Projects & Enquiries Store (Blueprint Section 10, 11 & 14)
  const [projects, setProjects] = useState<ProjectCaseStudy[]>(() => {
    try {
      const saved = localStorage.getItem('wnw_projects_v1');
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>(() => {
    try {
      const saved = localStorage.getItem('wnw_enquiries_v1');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore storage errors
    }
    return [
      {
        id: 'WNW-84920',
        createdAt: '10 Oct 2026',
        originPage: 'Kitchens (/kitchens)',
        projectReference: 'The Gangapur Road Culinary Atelier',
        projectType: 'Modular Kitchen',
        cityArea: 'Nashik (Gangapur Rd / College Rd / Indiranagar)',
        propertyStage: 'Possession received / Ready for measurement',
        startWindow: 'Within 1–2 months',
        briefDescription: '13x11 ft L-shaped kitchen with utility balcony. Interested in BWP marine ply and fluted smoked oak base units.',
        name: 'Anjali & Vikram Deshpande',
        phone: '+91 98230 44112',
        email: 'vikram.deshpande@example.com',
        preferredContact: 'Phone call or WhatsApp between 10 AM – 7 PM',
        budgetBand: '₹4.5L – ₹8.5L (Premium Veneer/PU Kitchen or Multi-Room Joinery)',
        contactConsent: true,
        marketingConsent: false,
        status: 'Qualified',
      },
    ];
  });

  const [whatsappIntentCount, setWhatsappIntentCount] = useState<number>(3);
  const [whatsappDrawerMessage, setWhatsappDrawerMessage] = useState<string | null>(null);
  const [studioModalOpen, setStudioModalOpen] = useState<boolean>(false);

  // Accessible Lightbox State
  const [lightboxState, setLightboxState] = useState<{
    images: { url: string; caption: string }[];
    index: number;
    title: string;
  }>({ images: [], index: -1, title: '' });

  // Dynamic SEO Title & Description Sync per Route (Blueprint Section 13)
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'Wood N Work | Bespoke Modular Kitchens & Furniture in Nashik',
      kitchens: 'Custom Modular Kitchens in Nashik | Wood N Work',
      'bespoke-furniture': 'Bespoke Wardrobes & Custom Modular Furniture in Nashik | Wood N Work',
      projects: 'Installed Projects & Architectural Case Studies | Wood N Work Nashik',
      'project-detail': 'Project Case Study & Material Schedule | Wood N Work Nashik',
      materials: 'Approved Timber Substrates, Veneers & Hardware Library | Wood N Work',
      craftsmanship: 'Direct Manufacturing & Workshop Accountability | Wood N Work Nashik',
      'our-story': 'Our Story: 35+ Years of Timber Knowledge | Wood N Work by Siddham Bhandari',
      process: 'From Brief to Handover: Commissioning Process | Wood N Work Nashik',
      journal: 'Modular Kitchen & Material Planning Journal | Wood N Work',
      'journal-detail': 'Technical Buying & Material Guide | Wood N Work Journal',
      consultation: 'Discuss Your Project | Book a Consultation with Wood N Work Nashik',
      privacy: 'Privacy & Data Handling Policy | Wood N Work',
      terms: 'Terms of Engagement & Scope Boundaries | Wood N Work',
    };
    document.title = titles[currentRoute] || titles.home;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, activeSlug]);

  const handleNavigate = (
    targetRoute: PageRoute,
    slug?: string,
    enquiryContext?: { projectRef?: string; category?: string }
  ) => {
    setOriginPageLabel(`${currentRoute}${activeSlug ? ` (${activeSlug})` : ''}`);
    if (enquiryContext?.projectRef !== undefined) {
      setEnquiryProjectRef(enquiryContext.projectRef);
    } else if (targetRoute !== 'consultation') {
      setEnquiryProjectRef('');
    }
    if (enquiryContext?.category) {
      setEnquiryCategory(enquiryContext.category);
    }
    if (slug) {
      setActiveSlug(slug);
    }
    setCurrentRoute(targetRoute);
    setMobileMenuOpen(false);
  };

  const handleSaveEnquiry = (newEnquiry: EnquirySubmission) => {
    const updated = [newEnquiry, ...enquiries];
    setEnquiries(updated);
    try {
      localStorage.setItem('wnw_enquiries_v1', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleAddProject = (newProj: ProjectCaseStudy) => {
    const updated = [newProj, ...projects];
    setProjects(updated);
    try {
      localStorage.setItem('wnw_projects_v1', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleUpdateEnquiryStatus = (id: string, status: EnquirySubmission['status']) => {
    const updated = enquiries.map((item) => (item.id === id ? { ...item, status } : item));
    setEnquiries(updated);
    try {
      localStorage.setItem('wnw_enquiries_v1', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Track WhatsApp click as contact intent (Blueprint Section 10)
  const handleWhatsAppTrigger = (prefilledMessage: string) => {
    setWhatsappIntentCount((prev) => prev + 1);
    setWhatsappDrawerMessage(prefilledMessage);
  };

  const activeProject =
    projects.find((p) => p.slug === activeSlug) || projects[0];
  const activeArticle =
    JOURNAL_ARTICLES.find((a) => a.slug === activeSlug) || JOURNAL_ARTICLES[0];

  const isCraftRoute =
    currentRoute === 'materials' ||
    currentRoute === 'craftsmanship' ||
    currentRoute === 'process';

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E9] text-[#26231F] pb-16 md:pb-0">
      {/* =====================================================================
          TOP BAR CONTRACT (Strict 3-Zone Header: Brand | 5 Nav Links | 1 CTA)
          ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#F5F1E9]/95 backdrop-blur-xs border-b border-[#26231F]/12">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-8 px-4 sm:px-8 py-4">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('home');
            }}
            className="font-serif-display text-2xl font-semibold tracking-tight text-[#26231F] whitespace-nowrap shrink-0"
          >
            Wood N Work
          </a>

          {/* Zone 2: 5 concise single-line text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-xs font-medium text-[#26231F]/80"
          >
            <a
              href="#kitchens"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('kitchens');
              }}
              className={`hover:text-[#26231F] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentRoute === 'kitchens'
                  ? 'text-[#26231F] font-semibold underline underline-offset-8 decoration-[#61432F]'
                  : ''
              }`}
            >
              Kitchens
            </a>
            <a
              href="#bespoke-furniture"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('bespoke-furniture');
              }}
              className={`hover:text-[#26231F] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentRoute === 'bespoke-furniture'
                  ? 'text-[#26231F] font-semibold underline underline-offset-8 decoration-[#61432F]'
                  : ''
              }`}
            >
              Bespoke Furniture
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('projects');
              }}
              className={`hover:text-[#26231F] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentRoute === 'projects' || currentRoute === 'project-detail'
                  ? 'text-[#26231F] font-semibold underline underline-offset-8 decoration-[#61432F]'
                  : ''
              }`}
            >
              Projects
            </a>
            <a
              href="#our-craft"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('materials');
              }}
              className={`hover:text-[#26231F] transition-colors whitespace-nowrap shrink-0 py-1 ${
                isCraftRoute
                  ? 'text-[#26231F] font-semibold underline underline-offset-8 decoration-[#61432F]'
                  : ''
              }`}
            >
              Our Craft
            </a>
            <a
              href="#our-story"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('our-story');
              }}
              className={`hover:text-[#26231F] transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentRoute === 'our-story'
                  ? 'text-[#26231F] font-semibold underline underline-offset-8 decoration-[#61432F]'
                  : ''
              }`}
            >
              Our Story
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNavigate('consultation')}
              className="px-4 py-2.5 text-xs font-medium text-[#F5F1E9] bg-[#61432F] hover:bg-[#4d3525] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Discuss Your Project
            </button>
            <button
              type="button"
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-[#26231F] border border-[#26231F]/20 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Sub-navigation bar when inside "Our Craft" group (Blueprint Section 07: "Our Craft" groups materials, craftsmanship & process links) */}
        {isCraftRoute && (
          <div className="bg-[#EAE3D5]/80 border-t border-[#26231F]/10 px-4 sm:px-8 py-2.5">
            <div className="max-w-[1380px] mx-auto flex items-center gap-6 text-xs overflow-x-auto">
              <span className="text-[#61432F] font-semibold whitespace-nowrap">Our Craft:</span>
              <button
                type="button"
                onClick={() => handleNavigate('materials')}
                className={`whitespace-nowrap cursor-pointer ${
                  currentRoute === 'materials'
                    ? 'font-semibold text-[#26231F] underline underline-offset-4'
                    : 'text-[#26231F]/70 hover:text-[#26231F]'
                }`}
              >
                01. Material & Hardware Library
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('craftsmanship')}
                className={`whitespace-nowrap cursor-pointer ${
                  currentRoute === 'craftsmanship'
                    ? 'font-semibold text-[#26231F] underline underline-offset-4'
                    : 'text-[#26231F]/70 hover:text-[#26231F]'
                }`}
              >
                02. Direct Manufacturing & Quality Checks
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('process')}
                className={`whitespace-nowrap cursor-pointer ${
                  currentRoute === 'process'
                    ? 'font-semibold text-[#26231F] underline underline-offset-4'
                    : 'text-[#26231F]/70 hover:text-[#26231F]'
                }`}
              >
                03. Commissioning Process (Brief to Handover)
              </button>
            </div>
          </div>
        )}

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#26231F]/15 px-6 py-6 space-y-4 text-sm">
            <div className="flex flex-col space-y-3">
              <button
                type="button"
                onClick={() => handleNavigate('kitchens')}
                className="text-left font-medium py-1"
              >
                Kitchens
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('bespoke-furniture')}
                className="text-left font-medium py-1"
              >
                Bespoke Furniture
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('projects')}
                className="text-left font-medium py-1"
              >
                Projects ({projects.length})
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('materials')}
                className="text-left font-medium py-1"
              >
                Our Craft: Materials Library
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('craftsmanship')}
                className="text-left font-medium py-1"
              >
                Our Craft: Manufacturing Accountability
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('process')}
                className="text-left font-medium py-1"
              >
                Our Craft: 5-Stage Process
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('our-story')}
                className="text-left font-medium py-1"
              >
                Our Story (35+ Yrs Timber Lineage)
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('journal')}
                className="text-left font-medium py-1"
              >
                Journal & Buying Guides
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          MAIN VIEW ROUTER
          ===================================================================== */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            projects={projects}
            onOpenLightbox={(images, index, title) =>
              setLightboxState({ images, index, title })
            }
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'kitchens' && (
          <KitchensView
            onNavigate={handleNavigate}
            projects={projects}
            onOpenLightbox={(images, index, title) =>
              setLightboxState({ images, index, title })
            }
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'bespoke-furniture' && (
          <BespokeFurnitureView
            onNavigate={handleNavigate}
            projects={projects}
            onOpenLightbox={(images, index, title) =>
              setLightboxState({ images, index, title })
            }
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'projects' && (
          <ProjectsView
            onNavigate={handleNavigate}
            projects={projects}
            selectedFilter={projectFilter}
            onFilterChange={setProjectFilter}
            onOpenLightbox={(images, index, title) =>
              setLightboxState({ images, index, title })
            }
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'project-detail' && (
          <ProjectDetailView
            project={activeProject}
            onNavigate={handleNavigate}
            onOpenLightbox={(images, index, title) =>
              setLightboxState({ images, index, title })
            }
          />
        )}

        {currentRoute === 'materials' && (
          <MaterialsView
            onNavigate={handleNavigate}
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'craftsmanship' && (
          <CraftsmanshipView
            onNavigate={handleNavigate}
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'our-story' && (
          <OurStoryView
            onNavigate={handleNavigate}
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'process' && (
          <ProcessView
            onNavigate={handleNavigate}
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'journal' && (
          <JournalView
            onNavigate={handleNavigate}
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {currentRoute === 'journal-detail' && (
          <JournalDetailView
            article={activeArticle}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'consultation' && (
          <ConsultationView
            originPage={originPageLabel}
            initialProjectRef={enquiryProjectRef}
            initialCategory={enquiryCategory}
            onSaveEnquiry={handleSaveEnquiry}
            existingEnquiries={enquiries}
            onWhatsAppClick={handleWhatsAppTrigger}
          />
        )}

        {(currentRoute === 'privacy' || currentRoute === 'terms') && (
          <PolicyView type={currentRoute} onNavigate={handleNavigate} />
        )}
      </main>

      {/* =====================================================================
          QUIET ARCHITECTURAL FOOTER (All 18 Launch URLs Reachable)
          ===================================================================== */}
      <footer className="border-t border-[#26231F]/15 bg-[#EAE3D5]/70 text-[#26231F]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-xs">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif-display text-2xl font-semibold text-[#26231F] block">
              Wood N Work
            </span>
            <p className="text-[#26231F]/80 leading-relaxed max-w-sm">
              Bespoke modular kitchens and custom furniture for considered homes in Nashik, Maharashtra. Backed by 35+ years of family timber knowledge and a direct manufacturing relationship.
            </p>
            <div className="pt-2 space-y-1 font-mono-tabular text-[#26231F]/85">
              <div>By Siddham Bhandari · Nashik, Maharashtra</div>
              <div>
                Direct Line / WhatsApp:{' '}
                <a href="tel:+919090999916" className="underline underline-offset-4 font-semibold">
                  +91 9090 9999 16
                </a>
              </div>
              <div>Instagram: @woodnwork.in</div>
            </div>
          </div>

          {/* Core Showroom Links (3 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold uppercase tracking-wider text-[#61432F]">Showroom</h3>
            <ul className="space-y-2.5 text-[#26231F]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('home')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Home Showroom
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('kitchens')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Modular Kitchens
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('bespoke-furniture')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Bespoke Furniture
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('projects')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('consultation')}
                  className="hover:text-[#26231F] font-semibold text-[#61432F] cursor-pointer"
                >
                  Discuss Your Project
                </button>
              </li>
            </ul>
          </div>

          {/* Our Craft & Heritage (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-semibold uppercase tracking-wider text-[#61432F]">
              Our Craft & Story
            </h3>
            <ul className="space-y-2.5 text-[#26231F]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('materials')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Materials & Hardware Library
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('craftsmanship')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Craftsmanship & Factory-Direct Model
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('process')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Commissioning Process (5 Stages)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('our-story')}
                  className="hover:text-[#26231F] cursor-pointer"
                >
                  Our Story (35+ Yrs Timber Lineage)
                </button>
              </li>
            </ul>
          </div>

          {/* Journal Guides & Client CMS Access (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-semibold uppercase tracking-wider text-[#61432F]">
              Journal & Resources
            </h3>
            <ul className="space-y-2.5 text-[#26231F]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('journal')}
                  className="hover:text-[#26231F] font-medium cursor-pointer"
                >
                  All Buying & Planning Guides (3)
                </button>
              </li>
              {JOURNAL_ARTICLES.map((art) => (
                <li key={art.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate('journal-detail', art.slug)}
                    className="hover:text-[#26231F] text-left line-clamp-1 cursor-pointer"
                  >
                    · {art.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => setStudioModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#26231F]/25 bg-[#F5F1E9] text-[#26231F] font-medium hover:border-[#61432F] cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#61432F]" />
                  <span>Client CMS & Lead Desk ({enquiries.length})</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Policies Bar */}
        <div className="border-t border-[#26231F]/10 px-4 sm:px-8 py-6">
          <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#26231F]/65">
            <div>
              © {new Date().getFullYear()} Wood N Work (Nashik, Maharashtra). Material knowledge. Made personal.
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => handleNavigate('privacy')}
                className="hover:text-[#26231F] cursor-pointer"
              >
                Privacy & Data Policy
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('terms')}
                className="hover:text-[#26231F] cursor-pointer"
              >
                Terms & Scope Boundaries
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          DISCREET MOBILE LOWER CONTACT BAR (Blueprint Section 10 & <15% Sticky Cap)
          Hidden when already on Consultation form so it never obscures inputs
          ===================================================================== */}
      {currentRoute !== 'consultation' && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#F5F1E9]/95 backdrop-blur-xs border-t border-[#26231F]/15 px-4 py-2.5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => handleNavigate('consultation')}
            className="flex-1 py-2.5 px-4 bg-[#61432F] text-[#F5F1E9] text-xs font-medium text-center whitespace-nowrap cursor-pointer"
          >
            Discuss Your Project
          </button>
          <button
            type="button"
            onClick={() =>
              handleWhatsAppTrigger('I’d like to discuss a modular kitchen project.')
            }
            className="py-2.5 px-4 border border-[#26231F]/25 bg-[#FAF7F2] text-[#26231F] text-xs font-medium whitespace-nowrap cursor-pointer"
          >
            WhatsApp
          </button>
        </div>
      )}

      {/* =====================================================================
          WHATSAPP PREFILLED BRIEF HANDOFF DRAWER (Avoids window.open in iframe)
          ===================================================================== */}
      {whatsappDrawerMessage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Direct Contact Handoff"
          className="fixed inset-0 z-50 bg-[#26231F]/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-[#FAF7F2] border border-[#26231F]/20 max-w-md w-full p-6 md:p-8 space-y-5 text-[#26231F]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#61432F]">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direct Briefing (+91 9090 9999 16)</span>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappDrawerMessage(null)}
                className="p-1 text-[#26231F]/60 hover:text-[#26231F] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-display text-2xl font-semibold">
                Send your project note on WhatsApp
              </h3>
              <p className="text-xs text-[#26231F]/75 leading-relaxed">
                Your message is prefilled below so you can review or edit it before opening WhatsApp with Wood N Work in Nashik:
              </p>
            </div>

            <textarea
              rows={3}
              value={whatsappDrawerMessage}
              onChange={(e) => setWhatsappDrawerMessage(e.target.value)}
              className="w-full p-3 text-xs bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F]"
            />

            <div className="text-[11px] font-mono-tabular text-[#26231F]/65">
              Verified Public Contact: +91 9090 9999 16 · Logged as Contact Intent (Separate from CRM Form Lead)
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setWhatsappDrawerMessage(null)}
                className="px-4 py-2.5 text-xs font-medium text-[#26231F]/75 hover:text-[#26231F] cursor-pointer"
              >
                Cancel
              </button>
              <a
                href={`https://wa.me/919090999916?text=${encodeURIComponent(
                  whatsappDrawerMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setWhatsappDrawerMessage(null)}
                className="px-5 py-2.5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium inline-flex items-center gap-2 hover:bg-[#4d3525]"
              >
                <span>Continue to WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Accessible Image Lightbox */}
      <LightboxModal
        images={lightboxState.images}
        currentIndex={lightboxState.index}
        projectTitle={lightboxState.title}
        onClose={() => setLightboxState({ images: [], index: -1, title: '' })}
        onNavigate={(newIdx) =>
          setLightboxState((prev) => ({ ...prev, index: newIdx }))
        }
      />

      {/* Client CMS & Lead Handoff Desk Modal */}
      <StudioWorkspaceModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
        projects={projects}
        onAddProject={handleAddProject}
        enquiries={enquiries}
        onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
        whatsappIntentCount={whatsappIntentCount}
      />
    </div>
  );
}

export default App;

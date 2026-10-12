import React from 'react';
import {
  PageRoute,
  ProjectCaseStudy,
  IMAGES,
} from '../data/siteData';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { MaterialSelectorWidget } from '../components/MaterialSelectorWidget';
import { ArrowRight, Check, HelpCircle, Filter, X, SlidersHorizontal, Eye } from 'lucide-react';

interface PrimaryViewsProps {
  onNavigate: (route: PageRoute, slug?: string, enquiryContext?: { projectRef?: string; category?: string }) => void;
  projects: ProjectCaseStudy[];
  onOpenLightbox: (images: { url: string; caption: string }[], index: number, title: string) => void;
  onWhatsAppClick: (msg: string) => void;
}

export const HomeView: React.FC<PrimaryViewsProps> = ({
  onNavigate,
  projects,
  onOpenLightbox,
  onWhatsAppClick,
}) => {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. OPENING ROOM (Hero Section - Blueprint Section 08) */}
      <section className="pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between py-2 lg:py-6">
            <div className="space-y-6">
              <p className="text-xs tracking-[0.14em] uppercase text-[#61432F] font-semibold">
                BESPOKE MODULAR FURNITURE · NASHIK
              </p>
              <h1
                style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.75rem)' }}
                className="font-serif-display font-semibold text-[#26231F] leading-[1.08] tracking-tight"
              >
                Considered spaces. Crafted around you.
              </h1>
              <p className="text-base md:text-lg text-[#26231F]/80 leading-relaxed max-w-xl">
                Custom kitchens and furniture, shaped around your home, your routines and your choice of materials.
              </p>
            </div>

            <div className="pt-8 space-y-8">
              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate('consultation')}
                  className="px-6 py-3.5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#4d3525] transition-colors inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="text-xs font-semibold text-[#26231F] hover:text-[#61432F] underline underline-offset-8 transition-colors py-2 cursor-pointer whitespace-nowrap"
                >
                  Explore Our Work
                </button>
              </div>

              <div className="pt-6 border-t border-[#26231F]/12 grid grid-cols-2 gap-6 text-xs">
                <div>
                  <span className="font-mono-tabular font-semibold text-[#26231F] block">
                    35+ Years Timber Lineage
                  </span>
                  <span className="text-[#26231F]/70">
                    Deep wood & plywood selection heritage applied to modular precision.
                  </span>
                </div>
                <div>
                  <span className="font-mono-tabular font-semibold text-[#26231F] block">
                    Factory-Direct Build
                  </span>
                  <span className="text-[#26231F]/70">
                    Made to order in Nashik with documented core and hardware schedules.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ArchitecturalImage
              src={IMAGES.heroKitchen}
              alt="Bespoke warm walnut and matte ivory modular kitchen in Nashik with travertine island"
              aspectRatioClass="aspect-[16/10] lg:h-full"
              provenanceTag="Signature Modular Kitchen · Natural Walnut & Honed Stone"
              onClick={() =>
                onOpenLightbox(
                  [
                    {
                      url: IMAGES.heroKitchen,
                      caption:
                        'Signature bespoke kitchen combining crown-cut walnut tall cabinetry, handleless matte ivory overheads, and a custom travertine prep island.',
                    },
                  ],
                  0,
                  'Signature Kitchen Showcase'
                )
              }
            />
          </div>
        </div>
      </section>

      {/* 2. MATERIAL HERITAGE (Blueprint Section 08.2) */}
      <section className="px-4 sm:px-8 max-w-[1380px] mx-auto">
        <div className="border-y border-[#26231F]/12 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ArchitecturalImage
              src={IMAGES.craftTimber}
              alt="Marine-grade birch plywood cross-sections, walnut veneer sheets, and brass hardware in the Wood N Work atelier"
              aspectRatioClass="aspect-[4/3]"
              provenanceTag="Material Knowledge · Physical Core & Edge Inspection"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
              <span>Material Knowledge. Made Personal.</span>
              <span aria-hidden="true">·</span>
              <span>By Siddham Bhandari</span>
            </div>
            <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-[#26231F] leading-tight">
              A deep understanding of wood. A personal approach to your space.
            </h2>
            <p className="text-base text-[#26231F]/80 leading-relaxed max-w-2xl">
              Wood N Work brings material knowledge to the furniture you live with every day. Discover the story behind our move from timber and plywood expertise into custom modular creations—where what sits inside the cabinet box matters just as much as the outer finish.
            </p>
            <div className="p-4 bg-[#EAE3D5]/70 border border-[#26231F]/10 max-w-xl">
              <p className="text-xs font-medium text-[#26231F]">
                Backed by 35+ years of family timber-business experience in sourcing, grading, and understanding structural wood and plywood cores.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => onNavigate('our-story')}
                className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] inline-flex items-center gap-2 underline underline-offset-8 cursor-pointer"
              >
                <span>Read Our Timber-to-Modular Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('craftsmanship')}
                className="text-xs font-semibold text-[#26231F]/75 hover:text-[#26231F] underline underline-offset-8 cursor-pointer"
              >
                Explore Direct Manufacturing Accountability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPACES WE MAKE (Blueprint Section 08.3) */}
      <section className="px-4 sm:px-8 max-w-[1380px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-wider uppercase text-[#61432F] font-medium mb-2">
              01. Core Capabilities
            </p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-[#26231F]">
              Spaces we make to order
            </h2>
          </div>
          <p className="text-sm text-[#26231F]/75 max-w-md">
            Built around accurate site measurements, verified core grades, and practical daily storage rather than rigid standard-sized boxes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Primary Tile: Modular Kitchens (7 cols) */}
          <div className="lg:col-span-7 group border border-[#26231F]/12 bg-[#FAF7F2] flex flex-col justify-between">
            <ArchitecturalImage
              src={IMAGES.projectGangapur}
              alt="Custom L-shaped modular kitchen in fluted smoked oak and quartz"
              aspectRatioClass="aspect-[16/10]"
              onClick={() => onNavigate('kitchens')}
            />
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#61432F]">
                  <span>Lead Offer</span>
                  <span aria-hidden="true">·</span>
                  <span>L-Shape, Parallel, Island & U-Shape</span>
                </div>
                <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
                  Bespoke Modular Kitchens
                </h3>
                <p className="text-sm text-[#26231F]/80 leading-relaxed max-w-2xl">
                  Engineered for Indian cooking ergonomics: IS:710 BWP marine plywood wet zones, 65kg heavy grain & utensil tandem drawers, custom spice pull-outs, and easy-wipe matte acrylic or PU-sealed veneer shutters.
                </p>
              </div>
              <div className="pt-4 border-t border-[#26231F]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate('kitchens')}
                  className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Kitchen Layouts & Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('consultation', undefined, {
                      category: 'Modular Kitchen',
                    })
                  }
                  className="text-xs text-[#26231F]/70 hover:text-[#26231F] underline underline-offset-4 cursor-pointer"
                >
                  Plan your kitchen
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Tile: Bespoke Furniture & Wardrobes (5 cols) */}
          <div className="lg:col-span-5 group border border-[#26231F]/12 bg-[#FAF7F2] flex flex-col justify-between">
            <ArchitecturalImage
              src={IMAGES.projectCollegeRoad}
              alt="Floor-to-ceiling bespoke walk-in wardrobe in walnut and woven cane"
              aspectRatioClass="aspect-[4/3]"
              onClick={() => onNavigate('bespoke-furniture')}
            />
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#61432F]">
                  <span>Custom Joinery</span>
                  <span aria-hidden="true">·</span>
                  <span>Wardrobes, Media Walls, Vanities & Study</span>
                </div>
                <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
                  Bespoke Wardrobes & Furniture
                </h3>
                <p className="text-sm text-[#26231F]/80 leading-relaxed">
                  Floor-to-ceiling wardrobes scribed to eliminate ceiling dust gaps, architectural living room library walls with concealed cable cavities, crockery consoles, and solid-wood study tables tailored to exact room proportions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#26231F]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate('bespoke-furniture')}
                  className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Bespoke Categories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('consultation', undefined, {
                      category: 'Bespoke Wardrobes & Dressing',
                    })
                  }
                  className="text-xs text-[#26231F]/70 hover:text-[#26231F] underline underline-offset-4 cursor-pointer"
                >
                  Discuss a custom piece
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK & ADJACENT CLIENT EXPERIENCE (Blueprint Section 08.4 & 08.7) */}
      <section className="px-4 sm:px-8 max-w-[1380px] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-wider uppercase text-[#61432F] font-medium mb-2">
              02. Documented Portfolio & Design Studies
            </p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-[#26231F]">
              Selected work with inspectable material schedules
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] inline-flex items-center gap-2 underline underline-offset-8 cursor-pointer self-start md:self-auto"
          >
            <span>View All {projects.length} Projects & Filter by Room</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="border border-[#26231F]/12 bg-[#FAF7F2] flex flex-col justify-between"
            >
              <div>
                <ArchitecturalImage
                  src={project.heroImage}
                  alt={project.title}
                  aspectRatioClass="aspect-[4/3]"
                  provenanceTag={project.provenanceLabel}
                  onClick={() => onNavigate('project-detail', project.slug)}
                />
                <div className="p-6 space-y-3">
                  {/* Zero-pill clean metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-[#61432F]">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
                    <button
                      type="button"
                      onClick={() => onNavigate('project-detail', project.slug)}
                      className="text-left hover:text-[#61432F] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>
                  <p className="text-xs text-[#26231F]/75 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="pt-2 text-[11px] font-mono-tabular text-[#26231F]/65">
                    Core: {project.materialSchedule[0]?.specification}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-[#26231F]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate('project-detail', project.slug)}
                  className="text-xs font-semibold text-[#26231F] hover:text-[#61432F] inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inspect Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('consultation', undefined, {
                      projectRef: project.title,
                      category: project.category === 'Kitchens' ? 'Modular Kitchen' : 'Bespoke Wardrobes & Dressing',
                    })
                  }
                  className="text-xs text-[#61432F] hover:text-[#26231F] underline underline-offset-4 cursor-pointer"
                >
                  Enquire similar
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Client Experience & Proof Directly Adjacent to Projects (Section 08.7) */}
        <div className="border border-[#26231F]/12 bg-[#EAE3D5]/55 p-8 md:p-10">
          <div className="text-xs tracking-wider uppercase text-[#61432F] font-medium mb-6">
            Client & Collaborator Experience · Linked to Documented Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map(
              (proj) =>
                proj.testimonial && (
                  <div key={proj.id} className="flex flex-col justify-between space-y-4">
                    <p className="text-sm text-[#26231F]/90 leading-relaxed italic font-serif-display text-lg">
                      “{proj.testimonial.quote}”
                    </p>
                    <div className="pt-3 border-t border-[#26231F]/10 text-xs">
                      <p className="font-semibold text-[#26231F]">{proj.testimonial.clientName}</p>
                      <p className="text-[#26231F]/70">
                        {proj.testimonial.roleOrContext} · {proj.testimonial.location}
                      </p>
                      <button
                        type="button"
                        onClick={() => onNavigate('project-detail', proj.slug)}
                        className="mt-1.5 text-[11px] font-medium text-[#61432F] underline underline-offset-4 hover:text-[#26231F] cursor-pointer"
                      >
                        View linked project: {proj.title}
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      {/* 5. THE MATERIAL DIFFERENCE (Blueprint Section 08.5) */}
      <section className="px-4 sm:px-8 max-w-[1380px] mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-wider uppercase text-[#61432F] font-medium mb-2">
              03. The Material Difference
            </p>
            <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-[#26231F]">
              Quality you can see in the details.
            </h2>
            <p className="text-sm text-[#26231F]/75 mt-2 max-w-2xl">
              Explore the materials, finishes and construction choices behind each piece—and how they work in daily use.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('materials')}
            className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] inline-flex items-center gap-2 underline underline-offset-8 cursor-pointer self-start md:self-auto"
          >
            <span>Open Complete Material & Hardware Library</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <MaterialSelectorWidget
          compact={true}
          onSelectForEnquiry={(specSummary) =>
            onNavigate('consultation', undefined, {
              projectRef: specSummary,
              category: 'Modular Kitchen',
            })
          }
        />
      </section>

      {/* 6. FROM BRIEF TO BUILD (Blueprint Section 08.6) */}
      <section className="px-4 sm:px-8 max-w-[1380px] mx-auto">
        <div className="border border-[#26231F]/12 bg-[#FAF7F2] p-8 md:p-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-wider uppercase text-[#61432F] font-medium mb-2">
                04. Accountable Execution
              </p>
              <h2 className="font-serif-display text-3xl md:text-4xl font-semibold text-[#26231F]">
                From brief to build: five clear stages
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('process')}
              className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] inline-flex items-center gap-2 underline underline-offset-8 cursor-pointer"
            >
              <span>Read Full Process, Approvals & Scope Terms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4 border-t border-[#26231F]/10">
            {[
              {
                step: '01. Brief & Space Review',
                time: 'Week 1',
                desc: 'Share your floor plan, cooking habits or storage needs. We discuss practical options and provide an initial investment band.',
              },
              {
                step: '02. Measure & 3D Design',
                time: 'Week 1–2',
                desc: 'Our technician takes laser site dimensions in Nashik. We develop 2D ergonomic layouts, electrical markings, and 3D views.',
              },
              {
                step: '03. Specify & Approve',
                time: 'Week 2–3',
                desc: 'Inspect physical cross-sections of BWP plywood, HDHMR, veneers, and hardware. Sign off on the itemised bill of materials.',
              },
              {
                step: '04. Factory Manufacture',
                time: 'Week 3–6',
                desc: 'Precision panel sizing, 2mm PUR/ABS edge-banding, and PU curing take place in a controlled workshop—not in your living room.',
              },
              {
                step: '05. Install & Hand Over',
                time: 'Week 6–7',
                desc: 'Accountable on-site assembly, hinge alignment, load testing, and a documented walkthrough of care and hardware warranties.',
              },
            ].map((stage, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[#61432F]">
                  <span>Stage 0{idx + 1}</span>
                  <span>{stage.time}</span>
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-[#26231F]">
                  {stage.step.split('. ')[1]}
                </h3>
                <p className="text-xs text-[#26231F]/75 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL INVITATION (Blueprint Section 08.8) */}
      <section className="px-4 sm:px-8 max-w-[1380px] mx-auto">
        <div className="bg-[#26231F] text-[#F5F1E9] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs tracking-wider uppercase text-[#D9CDBD] font-medium">
              Start a Conversation · Nashik & Surrounding Region
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-semibold text-[#F5F1E9] leading-tight">
              Tell us about the space you have in mind.
            </h2>
            <p className="text-sm md:text-base text-[#D9CDBD] max-w-xl leading-relaxed">
              Share what you are planning. Our team will help you understand the next steps and the information needed to develop your brief.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => onNavigate('consultation')}
              className="px-6 py-4 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#78533b] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                onWhatsAppClick('I’d like to discuss a modular kitchen or custom furniture project.')
              }
              className="px-6 py-4 border border-[#F5F1E9]/30 text-[#F5F1E9] text-xs font-medium hover:bg-[#F5F1E9]/10 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>WhatsApp +91 9090 9999 16</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   PAGE 2: KITCHENS (/kitchens) - Blueprint Section 07 & 09
   ============================================================================ */
export const KitchensView: React.FC<PrimaryViewsProps> = ({
  onNavigate,
  projects,
  onOpenLightbox,
}) => {
  const kitchenProjects = projects.filter((p) => p.category === 'Kitchens');

  return (
    <div className="space-y-20 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-between py-2">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
              <span>Custom Modular Kitchens</span>
              <span aria-hidden="true">·</span>
              <span>Nashik, Maharashtra</span>
            </div>
            <h1
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
              className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
            >
              Engineered for daily Indian cooking, built on verified timber cores.
            </h1>
            <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
              Every Wood N Work kitchen begins with how your household cooks, cleans, and stores bulk provisions—pairing IS:710 BWP marine plywood in wet zones with precision full-extension hardware and tactile, durable surfaces.
            </p>
          </div>

          <div className="pt-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  onNavigate('consultation', undefined, {
                    category: 'Modular Kitchen',
                  })
                }
                className="px-6 py-3.5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#4d3525] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Plan Your Kitchen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('materials')}
                className="text-xs font-semibold text-[#26231F] hover:text-[#61432F] underline underline-offset-8 cursor-pointer"
              >
                Compare Carcass Substrates
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ArchitecturalImage
            src={IMAGES.projectGangapur}
            alt="L-shaped modular kitchen with fluted smoked oak base units and tall appliance bank"
            aspectRatioClass="aspect-[16/10] lg:h-full"
            provenanceTag="Installed Layout · L-Shape + Tall Appliance Bank"
            onClick={() =>
              onOpenLightbox(
                [
                  {
                    url: IMAGES.projectGangapur,
                    caption: 'L-Shaped modular kitchen in Gangapur Road, Nashik with integrated oven tower and quartz worktop.',
                  },
                  {
                    url: IMAGES.heroKitchen,
                    caption: 'Island kitchen layout showing travertine overhang and walnut pantry wall.',
                  },
                ],
                0,
                'Modular Kitchen Configurations'
              )
            }
          />
        </div>
      </div>

      {/* Supported Layouts & Room Fit */}
      <section className="space-y-8 border-t border-[#26231F]/12 pt-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-[#61432F] font-medium mb-2">
            01. Layouts & Room Suitability
          </p>
          <h2 className="font-serif-display text-3xl font-semibold text-[#26231F]">
            Four supported configurations adapted to your floor plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'L-Shaped Work Triangle',
              dim: 'Ideal for 10×11 ft to 14×12 ft rooms',
              desc: 'Separates the wet sink run from the dry cooking hob wall while leaving open floor circulation or space for a compact breakfast table.',
              feature: 'Includes articulated LeMans or Magic Corner pull-out for the 90° blind junction.',
            },
            {
              title: 'Parallel (Galley) Kitchen',
              dim: 'Ideal for 8.5×12 ft+ enclosed rooms',
              desc: 'The most efficient layout for serious two-person cooking: wet prep and dishwashing on one wall, cooking and tall grain storage directly opposite.',
              feature: 'Requires minimum 1050mm–1200mm central aisle so opposing drawers open simultaneously.',
            },
            {
              title: 'Open Island & Peninsula',
              dim: 'Ideal for open-plan living-dining spaces',
              desc: 'Anchors the social zone with a breakfast bar or prep sink island while keeping heavy frying and utility storage tucked along the rear wall.',
              feature: 'Custom waterfall stone cladding and concealed under-island electrical pop-ups.',
            },
            {
              title: 'U-Shaped Culinary Studio',
              dim: 'Ideal for 12×12 ft+ dedicated rooms',
              desc: 'Maximises continuous countertop landing area and lower drawer banks across three walls for large joint-family households.',
              feature: 'Engineered with symmetrical drawer banks and dedicated appliance garage corners.',
            },
          ].map((layout, i) => (
            <div key={i} className="p-6 border border-[#26231F]/12 bg-[#FAF7F2] flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="font-mono-tabular text-xs text-[#61432F]">{layout.dim}</span>
                <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
                  {layout.title}
                </h3>
                <p className="text-xs text-[#26231F]/80 leading-relaxed">{layout.desc}</p>
              </div>
              <div className="pt-4 border-t border-[#26231F]/10 text-xs font-medium text-[#26231F]">
                {layout.feature}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Indian Kitchen Storage & Ergonomics */}
      <section className="border border-[#26231F]/12 bg-[#FAF7F2] p-8 md:p-12 space-y-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-[#61432F] font-medium mb-2">
            02. Practical Storage & Daily Ergonomics
          </p>
          <h2 className="font-serif-display text-3xl font-semibold text-[#26231F]">
            Built around real utensils, spice jars, and cleaning routines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-serif-display text-xl font-semibold text-[#26231F]">
              Heavy Grain & Pressure-Cooker Drawers (65kg Rated)
            </h3>
            <p className="text-xs text-[#26231F]/80 leading-relaxed">
              Standard 30kg runners sag when loaded with steel atta drums and heavy-bottomed cookware. We specify 65kg synchronized full-extension tandem runners on lower drawers with 16mm calibrated ply drawer bases.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif-display text-xl font-semibold text-[#26231F]">
              Appliance Allowances & Heat Ventilation
            </h3>
            <p className="text-xs text-[#26231F]/80 leading-relaxed">
              Tall units housing built-in microwaves and OTG ovens are fabricated with a 50mm rear chimney flue gap and a front aluminium plinth vent so heat never warps the surrounding shutters.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif-display text-xl font-semibold text-[#26231F]">
              Wet-Zone Armour Under the Sink
            </h3>
            <p className="text-xs text-[#26231F]/80 leading-relaxed">
              The under-sink cabinet is built exclusively in IS:710 BWP Marine Plywood, lined with a dimpled aluminium drip mat on the base panel to protect against RO water purifier filter changes and detergent spills.
            </p>
          </div>
        </div>

        {/* Scope & Responsibility Matrix */}
        <div className="pt-8 border-t border-[#26231F]/12 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          <div className="space-y-3">
            <h4 className="font-semibold uppercase tracking-wider text-[#61432F]">
              What Wood N Work Specifies & Delivers
            </h4>
            <ul className="space-y-2 text-[#26231F]/85">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#61432F] shrink-0 mt-0.5" />
                <span>Laser site measurement, 2D ergonomic plan, 3D views, and civil electrical/plumbing marking drawings.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#61432F] shrink-0 mt-0.5" />
                <span>Factory-machined modular carcasses, PUR/ABS edge-banding, shutters, and branded hardware installation.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#61432F] shrink-0 mt-0.5" />
                <span>Precision cut-outs and integration for your hob, chimney duct, sink, dishwasher, and built-in oven.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold uppercase tracking-wider text-[#26231F]">
              Worktop, Appliances & Civil Coordination
            </h4>
            <p className="text-[#26231F]/80 leading-relaxed">
              <strong>How quotations are prepared:</strong> Our modular kitchen proposal itemises woodwork, finishes, and hardware transparently by module. Granite or quartz countertops and loose appliances can either be supplied by your preferred dealer to our technical drawings, or coordinated through our verified Nashik stone and appliance partners as a separate line item.
            </p>
          </div>
        </div>
      </section>

      {/* Linked Kitchen Case Study */}
      {kitchenProjects.length > 0 && (
        <section className="space-y-6">
          <h2 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
            Featured Kitchen Case Study
          </h2>
          {kitchenProjects.map((kp) => (
            <div
              key={kp.id}
              className="border border-[#26231F]/12 bg-[#FAF7F2] grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              <div className="lg:col-span-6">
                <ArchitecturalImage
                  src={kp.heroImage}
                  alt={kp.title}
                  aspectRatioClass="aspect-[16/10] lg:h-full"
                  provenanceTag={kp.provenanceLabel}
                />
              </div>
              <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs text-[#61432F]">
                    {kp.location} · {kp.dimensions}
                  </div>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
                    {kp.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#26231F]/80 leading-relaxed">
                    {kp.solution}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#26231F]/10">
                  <button
                    type="button"
                    onClick={() => onNavigate('project-detail', kp.slug)}
                    className="px-5 py-2.5 bg-[#26231F] text-[#F5F1E9] text-xs font-medium hover:bg-[#61432F] transition-colors cursor-pointer"
                  >
                    Read Full Material & Storage Schedule
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('consultation', undefined, {
                        projectRef: kp.title,
                        category: 'Modular Kitchen',
                      })
                    }
                    className="text-xs font-semibold text-[#61432F] underline underline-offset-4 cursor-pointer"
                  >
                    Discuss a similar kitchen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Short FAQs (Blueprint Section 09) */}
      <section className="border-t border-[#26231F]/12 pt-14 space-y-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#61432F] font-medium">
          <HelpCircle className="w-4 h-4" />
          <span>Kitchen Planning FAQs</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: 'When should we invite Wood N Work for site measurement?',
              a: 'Ideally before your kitchen wall plumbing and electrical points are plastered. This lets us issue an exact electrical/plumbing marking drawing aligned to your hob, chimney, RO purifier, and tall appliance tower.',
            },
            {
              q: 'Do you build over existing granite platforms or fully modular carcass bases?',
              a: 'We strongly recommend full modular carcasses supported on heavy-duty adjustable PVC/aluminium legs so drawers align smoothly and plumbing stays accessible. However, if you have a newly laid civil stone platform, we can inspect it to confirm whether modular under-frames can be scribed accurately.',
            },
            {
              q: 'How do design approval and revisions work before factory cutting?',
              a: 'Once site measurements are complete, we review 2D storage allocations and 3D views together. You can revise drawer arrangements, finishes, and hardware tiers freely during the design stage; manufacturing begins only after written sign-off on the final specification sheet.',
            },
            {
              q: 'Who handles aftercare or hinge adjustments after handover?',
              a: 'Our own Nashik installation technicians conduct a post-settlement hinge and runner alignment check after your family has loaded the kitchen with heavy cookware, backed by manufacturer hardware warranties.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="p-6 border border-[#26231F]/12 bg-[#FAF7F2] space-y-2">
              <h3 className="font-serif-display text-xl font-semibold text-[#26231F]">{faq.q}</h3>
              <p className="text-xs text-[#26231F]/80 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   PAGE 3: BESPOKE FURNITURE (/bespoke-furniture) - Blueprint Section 07 & 09
   ============================================================================ */
export const BespokeFurnitureView: React.FC<PrimaryViewsProps> = ({
  onNavigate,
}) => {
  const categories = [
    {
      id: 'wardrobes',
      title: 'Floor-to-Ceiling Wardrobes & Walk-In Suites',
      room: 'Master & Guest Bedrooms',
      image: IMAGES.projectCollegeRoad,
      exampleDimensions: 'Example: 2400mm – 3600mm Width × 2900mm Full Ceiling Height × 600mm Depth',
      customisable: 'Internal hanging-to-shelf ratio, velvet jewellery trays, breathable rattan cane or veneer doors, integrated loft scribing.',
      description:
        'Eliminate the dust-collecting gap above standard 7-foot cupboards. Built in calibrated hardwood plywood with HDHMR or solid-framed shutters engineered to stay flat across monsoon humidity shifts.',
    },
    {
      id: 'media-libraries',
      title: 'Architectural Media Consoles & Living Libraries',
      room: 'Living Rooms & Pavilions',
      image: IMAGES.projectDeolali,
      exampleDimensions: 'Example: 3200mm – 4800mm Wall Span × 36mm Reinforced Shelf Thickness × 420mm Base Depth',
      customisable: 'Screen recess dimensions, concealed rear cable service cavity, acoustic slat doors for amplifiers, open vs closed bay rhythm.',
      description:
        'Designed for homes where the living wall must house books, ceramics, and audio equipment without visible wiring or sagging shelves.',
    },
    {
      id: 'crockery-dining',
      title: 'Dining Crockery & Bar Consoles',
      room: 'Dining & Entertaining Areas',
      image: IMAGES.heroKitchen,
      exampleDimensions: 'Example: 1800mm Width × 2100mm Height (or 900mm Counter Credenza) × 450mm Depth',
      customisable: 'Fluted glass doors, warm 3000K internal shelf lighting, stone-topped serving counter for coffee machines, felt-lined cutlery drawers.',
      description:
        'Connects the visual language of your modular kitchen into the dining room using matched walnut or smoked oak veneers and brass hardware.',
    },
    {
      id: 'study-vanities',
      title: 'Executive Study Desks & Bathroom Vanities',
      room: 'Home Offices & Dressing Zones',
      image: IMAGES.craftTimber,
      exampleDimensions: 'Example: Cantilevered 1500mm × 650mm Study Desk / Floating 1200mm BWP Marine Ply Vanity',
      customisable: 'Solid timber desktop wire grommets, printer pull-outs, moisture-proof BWP under-basin drawers with U-cut siphon clearance.',
      description:
        'Built to exact wall-to-wall niche measurements where off-the-shelf retail furniture leaves awkward gaps.',
    },
  ];

  return (
    <div className="space-y-20 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      <div className="max-w-3xl space-y-5">
        <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
          <span>Bespoke Modular Creations</span>
          <span aria-hidden="true">·</span>
          <span>Made to Order in Nashik</span>
        </div>
        <h1
          style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
          className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
        >
          Custom-sized furniture that solves practical storage and architectural proportions.
        </h1>
        <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
          Unlike retail catalogue pieces with fixed sizes, every Wood N Work wardrobe, library unit, and console is engineered around your room’s ceiling height, skirting lines, and daily storage volume. Dimensions shown below are real installed examples—not rigid limits.
        </p>
      </div>

      {/* Category Cards */}
      <div className="space-y-12">
        {categories.map((cat, index) => (
          <section
            key={cat.id}
            className="border border-[#26231F]/12 bg-[#FAF7F2] grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <ArchitecturalImage
                src={cat.image}
                alt={cat.title}
                aspectRatioClass="aspect-[4/3] lg:h-full"
                provenanceTag={`Category 0${index + 1} · ${cat.room}`}
              />
            </div>
            <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs text-[#61432F] font-medium">
                  0{index + 1}. {cat.room}
                </div>
                <h2 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
                  {cat.title}
                </h2>
                <p className="text-xs md:text-sm text-[#26231F]/80 leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-4 space-y-3 text-xs border-t border-[#26231F]/10">
                  <div>
                    <span className="text-[#26231F]/60 block">Real Installed Dimension Example:</span>
                    <span className="font-mono-tabular font-medium text-[#26231F]">
                      {cat.exampleDimensions}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#26231F]/60 block">What You Can Customise:</span>
                    <span className="text-[#26231F]/90">{cat.customisable}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#26231F]/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('consultation', undefined, {
                      projectRef: `Bespoke Category: ${cat.title}`,
                      category:
                        cat.id === 'wardrobes'
                          ? 'Bespoke Wardrobes & Dressing'
                          : 'Living, Media Wall or Study Piece',
                    })
                  }
                  className="px-5 py-3 bg-[#61432F] text-[#F5F1E9] text-xs font-medium hover:bg-[#4d3525] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss This Custom Piece</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('materials')}
                  className="text-xs font-medium text-[#61432F] underline underline-offset-4 hover:text-[#26231F] cursor-pointer"
                >
                  Explore Veneer & Cane Finishes
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Explicit Scope Boundary Note (Blueprint Section 07 Conditional Categories) */}
      <div className="border border-[#26231F]/15 bg-[#EAE3D5]/60 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-3xl">
          <h3 className="font-serif-display text-xl font-semibold text-[#26231F]">
            Clear Scope Boundaries: Specialist Modular Joinery vs. Civil Turnkey Work
          </h3>
          <p className="text-xs text-[#26231F]/80 leading-relaxed">
            Wood N Work specialises in factory-crafted modular kitchens, wardrobes, and architectural furniture. We gladly collaborate with your civil contractor, electrician, or interior architect by supplying technical shop drawings—ensuring our joinery integrates seamlessly without diluting our focus on woodwork quality.
          </p>
        </div>
        <button
          type="button"
          onClick={() =>
            onNavigate('consultation', undefined, {
              category: 'Architect / Interior Partner Specification',
            })
          }
          className="px-5 py-3 border border-[#26231F]/30 text-xs font-semibold text-[#26231F] hover:bg-[#26231F] hover:text-[#F5F1E9] transition-colors shrink-0 cursor-pointer whitespace-nowrap"
        >
          Architect & Partner Enquiries
        </button>
      </div>
    </div>
  );
};

/* ============================================================================
   PAGE 4: PROJECTS (/projects) & PROJECT CASE STUDY (/projects/[slug])
   ============================================================================ */
export const ProjectsView: React.FC<
  PrimaryViewsProps & {
    selectedFilter: string;
    onFilterChange: (f: string) => void;
  }
> = ({ onNavigate, projects, selectedFilter, onFilterChange }) => {
  const [selectedType, setSelectedType] = React.useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = React.useState<string>('All');
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  // Extract all distinct project types
  const projectTypes = React.useMemo(() => {
    const types = new Set<string>();
    projects.forEach((p) => {
      if (p.projectType) types.add(p.projectType);
      else if (p.category === 'Kitchens') types.add('Modular Kitchen');
      else if (p.category === 'Wardrobes & Storage') types.add('Walk-In Wardrobe');
      else types.add('Media Wall & Library');
    });
    return ['All', ...Array.from(types)];
  }, [projects]);

  // Extract all available materials across projects
  const materialsList = React.useMemo(() => {
    const mats = new Set<string>();
    projects.forEach((p) => {
      if (p.materialsTags && p.materialsTags.length > 0) {
        p.materialsTags.forEach((m) => mats.add(m));
      } else {
        p.materialSchedule.forEach((ms) => {
          mats.add(ms.specification.split('·')[0].trim());
        });
      }
    });
    return ['All', ...Array.from(mats)];
  }, [projects]);

  const categories = ['All', 'Kitchens', 'Wardrobes & Storage', 'Living & Study'];

  // Multi-dimensional filtering logic
  const filtered = React.useMemo(() => {
    return projects.filter((p) => {
      // 1. Category filter
      if (selectedFilter !== 'All' && p.category !== selectedFilter) {
        return false;
      }

      // 2. Project Type filter
      if (selectedType !== 'All') {
        const pType =
          p.projectType ||
          (p.category === 'Kitchens'
            ? 'Modular Kitchen'
            : p.category === 'Wardrobes & Storage'
            ? 'Walk-In Wardrobe'
            : 'Media Wall & Library');
        if (pType !== selectedType) return false;
      }

      // 3. Material filter
      if (selectedMaterial !== 'All') {
        const hasTag = p.materialsTags?.some((tag) =>
          tag.toLowerCase().includes(selectedMaterial.toLowerCase())
        );
        const hasScheduleMatch = p.materialSchedule.some(
          (m) =>
            m.specification.toLowerCase().includes(selectedMaterial.toLowerCase()) ||
            m.finish.toLowerCase().includes(selectedMaterial.toLowerCase())
        );
        if (!hasTag && !hasScheduleMatch) return false;
      }

      // 4. Optional search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesLocation = p.location.toLowerCase().includes(query);
        const matchesSummary = p.summary.toLowerCase().includes(query);
        const matchesMaterial = p.materialSchedule.some(
          (m) =>
            m.specification.toLowerCase().includes(query) ||
            m.finish.toLowerCase().includes(query)
        );
        const matchesTags = p.materialsTags?.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesLocation && !matchesSummary && !matchesMaterial && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedFilter, selectedType, selectedMaterial, searchTerm]);

  const activeFiltersCount =
    (selectedFilter !== 'All' ? 1 : 0) +
    (selectedType !== 'All' ? 1 : 0) +
    (selectedMaterial !== 'All' ? 1 : 0) +
    (searchTerm.trim() ? 1 : 0);

  const resetAllFilters = () => {
    onFilterChange('All');
    setSelectedType('All');
    setSelectedMaterial('All');
    setSearchTerm('');
  };

  return (
    <div className="space-y-12 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#26231F]/12 pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
            <span>Curated Portfolio & Archive</span>
            <span aria-hidden="true">·</span>
            <span>Granular Filter System</span>
          </div>
          <h1
            style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
          >
            Inspectable craftsmanship across Nashik homes.
          </h1>
          <p className="text-sm text-[#26231F]/80 leading-relaxed">
            Filter our built work and design studies by room category, exact joinery type, or specific core substrates and finishes like BWP Marine Ply, Natural Walnut Veneer, or Indonesian Cane.
          </p>
        </div>

        {/* Global count readout */}
        <div className="flex items-center gap-3 text-xs font-mono-tabular text-[#26231F]/70 self-start lg:self-end">
          <span>Showing {filtered.length} of {projects.length} Commissions</span>
          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-xs font-medium text-[#61432F] underline underline-offset-4 hover:text-[#26231F] cursor-pointer inline-flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset filters</span>
            </button>
          )}
        </div>
      </div>

      {/* =====================================================================
          GRANULAR FILTER BAR (Constitution-compliant buttons & controls)
          ===================================================================== */}
      <section aria-label="Portfolio Filters" className="border border-[#26231F]/12 bg-[#FAF7F2] p-5 md:p-6 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#26231F]/10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#61432F] uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Granular Specification Filters</span>
          </div>
          {activeFiltersCount > 0 && (
            <span className="text-xs font-mono-tabular text-[#26231F]/60">
              {activeFiltersCount} active {activeFiltersCount === 1 ? 'filter' : 'filters'}
            </span>
          )}
        </div>

        {/* Dimension 1: Room Category Segmented Tabs */}
        <div className="space-y-2">
          <label className="block text-[11px] font-semibold text-[#26231F]/70 uppercase tracking-wider">
            Room Category
          </label>
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE3D5] border border-[#26231F]/12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onFilterChange(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selectedFilter === cat
                    ? 'bg-[#26231F] text-[#F5F1E9]'
                    : 'text-[#26231F]/75 hover:text-[#26231F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dimension 2 & 3: Project Type + Material Used + Search Input */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {/* Project Type Filter */}
          <div className="space-y-1.5">
            <label htmlFor="filter-project-type" className="block text-[11px] font-semibold text-[#26231F]/70 uppercase tracking-wider">
              Project Type
            </label>
            <div className="relative">
              <select
                id="filter-project-type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F] cursor-pointer"
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Project Types (Kitchens, Wardrobes, Media)' : t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Materials Used Filter */}
          <div className="space-y-1.5">
            <label htmlFor="filter-material" className="block text-[11px] font-semibold text-[#26231F]/70 uppercase tracking-wider">
              Material / Substrate / Finish
            </label>
            <div className="relative">
              <select
                id="filter-material"
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F] cursor-pointer"
              >
                {materialsList.map((m) => (
                  <option key={m} value={m}>
                    {m === 'All' ? 'All Materials (BWP Ply, Walnut, Teak, Cane, Quartz)' : m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search by Room or Specification */}
          <div className="space-y-1.5">
            <label htmlFor="filter-search" className="block text-[11px] font-semibold text-[#26231F]/70 uppercase tracking-wider">
              Search by Location, Timber or Note
            </label>
            <div className="relative flex items-center">
              <input
                id="filter-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Gangapur, Cane, Smoked Oak, BWP..."
                className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 text-[#26231F]/50 hover:text-[#26231F] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Material Filter Pills / Tags for one-click discovery */}
        <div className="pt-2 border-t border-[#26231F]/10 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] text-[#26231F]/60 font-medium">Quick Material Discovery:</span>
          {[
            'IS:710 BWP Marine Plywood',
            'American Walnut Veneer',
            'Fluted Smoked Oak',
            'Indonesian Rattan Cane',
            'Matte Sand Acrylic',
            'Natural Teak Veneer',
          ].map((quickMat) => {
            const isSelected = selectedMaterial.toLowerCase() === quickMat.toLowerCase();
            return (
              <button
                key={quickMat}
                type="button"
                onClick={() => setSelectedMaterial(isSelected ? 'All' : quickMat)}
                className={`px-2.5 py-1 text-[11px] border transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'border-[#61432F] bg-[#61432F] text-[#F5F1E9]'
                    : 'border-[#26231F]/20 bg-[#F5F1E9] text-[#26231F]/80 hover:border-[#61432F]'
                }`}
              >
                {quickMat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid or Zero-Results State */}
      {filtered.length === 0 ? (
        <div className="p-12 border border-[#26231F]/12 bg-[#FAF7F2] text-center space-y-4">
          <p className="font-serif-display text-2xl text-[#26231F]">
            No projects match the selected specification criteria.
          </p>
          <p className="text-xs text-[#26231F]/70 max-w-md mx-auto">
            Try adjusting your material choice, clearing search keywords, or selecting "All" to view the complete archive.
          </p>
          <button
            type="button"
            onClick={resetAllFilters}
            className="px-5 py-2.5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium cursor-pointer inline-flex items-center gap-2"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group border border-[#26231F]/12 bg-[#FAF7F2] flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.018] hover:border-[#61432F]/40 hover:shadow-lg relative overflow-hidden"
            >
              <div>
                {/* Image Container with Interactive 'View Details' Reveal Overlay */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => onNavigate('project-detail', project.slug)}
                >
                  <ArchitecturalImage
                    src={project.heroImage}
                    alt={project.title}
                    aspectRatioClass="aspect-[4/3]"
                    provenanceTag={project.provenanceLabel}
                  />

                  {/* Refined 'View Details' Architectural Scrim Overlay */}
                  <div className="absolute inset-0 bg-[#26231F]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-center justify-center p-6 text-center text-[#F5F1E9] backdrop-blur-[2px]">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col items-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-[#FAF7F2]/15 border border-[#FAF7F2]/30 flex items-center justify-center text-[#FAF7F2] mb-1">
                        <Eye className="w-5 h-5 text-[#FAF7F2]" />
                      </div>
                      <span className="font-serif-display text-xl font-semibold tracking-wide text-[#FAF7F2]">
                        View Details
                      </span>
                      <span className="text-[11px] font-mono-tabular tracking-wider uppercase text-[#D9CDBD]">
                        Explore Joinery & Materials
                      </span>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#61432F] text-[#FAF7F2] text-xs font-medium tracking-wide">
                          <span>Inspect Schedule</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#61432F]">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.projectType || project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                  </div>

                  <h2 className="font-serif-display text-2xl font-semibold text-[#26231F]">
                    <button
                      type="button"
                      onClick={() => onNavigate('project-detail', project.slug)}
                      className="text-left hover:text-[#61432F] transition-colors cursor-pointer group-hover:text-[#61432F]"
                    >
                      {project.title}
                    </button>
                  </h2>

                  <p className="text-xs text-[#26231F]/80 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Material tags indicator */}
                  <div className="pt-2 text-[11px] font-mono-tabular text-[#26231F]/65 space-y-1">
                    <div>Dimensions: {project.dimensions}</div>
                    <div className="truncate">
                      <span className="font-semibold text-[#61432F]">Materials: </span>
                      {project.materialsTags && project.materialsTags.length > 0
                        ? project.materialsTags.slice(0, 3).join(', ')
                        : project.materialSchedule.map((m) => m.component).slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-[#26231F]/10 flex items-center justify-between bg-[#FAF7F2]">
                <button
                  type="button"
                  onClick={() => onNavigate('project-detail', project.slug)}
                  className="text-xs font-semibold text-[#26231F] hover:text-[#61432F] inline-flex items-center gap-1.5 cursor-pointer group-hover:text-[#61432F]"
                >
                  <span>View Project Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('consultation', undefined, {
                      projectRef: project.title,
                      category:
                        project.category === 'Kitchens'
                          ? 'Modular Kitchen'
                          : 'Bespoke Wardrobes & Dressing',
                    })
                  }
                  className="text-xs text-[#61432F] hover:text-[#26231F] underline underline-offset-4 cursor-pointer"
                >
                  Discuss similar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export const ProjectDetailView: React.FC<{
  project: ProjectCaseStudy;
  onNavigate: PrimaryViewsProps['onNavigate'];
  onOpenLightbox: PrimaryViewsProps['onOpenLightbox'];
}> = ({ project, onNavigate, onOpenLightbox }) => {
  return (
    <div className="space-y-16 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      {/* Breadcrumb & Provenance */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#26231F]/12 pb-6">
        <div className="flex items-center gap-2 text-xs text-[#26231F]/70">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="hover:text-[#26231F] underline underline-offset-4 cursor-pointer"
          >
            Projects
          </button>
          <span aria-hidden="true">/</span>
          <span className="text-[#61432F] font-medium">{project.category}</span>
          <span aria-hidden="true">/</span>
          <span className="text-[#26231F] font-medium">{project.title}</span>
        </div>
        <div className="text-xs font-mono-tabular text-[#61432F]">
          Provenance: {project.provenanceLabel} · {project.completionYear}
        </div>
      </div>

      {/* Hero Header + Finished Room Lead (Blueprint Section 09) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <h1 className="font-serif-display text-3xl md:text-5xl font-semibold text-[#26231F] leading-tight">
            {project.title}
          </h1>
          <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
            {project.summary}
          </p>

          <div className="grid grid-cols-2 gap-4 py-5 border-y border-[#26231F]/12 text-xs">
            <div>
              <span className="text-[#26231F]/60 block">Broad Location</span>
              <span className="font-semibold text-[#26231F]">{project.location}</span>
            </div>
            <div>
              <span className="text-[#26231F]/60 block">Timeline / Duration</span>
              <span className="font-mono-tabular font-semibold text-[#26231F]">{project.duration}</span>
            </div>
            <div className="col-span-2">
              <span className="text-[#26231F]/60 block">Footprint & Configuration</span>
              <span className="font-mono-tabular font-semibold text-[#26231F]">{project.dimensions}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              onNavigate('consultation', undefined, {
                projectRef: project.title,
                category:
                  project.category === 'Kitchens'
                    ? 'Modular Kitchen'
                    : 'Bespoke Wardrobes & Dressing',
              })
            }
            className="w-full sm:w-auto px-6 py-3.5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#4d3525] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-7">
          <ArchitecturalImage
            src={project.heroImage}
            alt={project.title}
            aspectRatioClass="aspect-[16/10]"
            provenanceTag={`${project.provenanceLabel} · Click to Enlarge Gallery`}
            onClick={() => onOpenLightbox(project.galleryImages, 0, project.title)}
          />
        </div>
      </div>

      {/* Brief, Constraints & Engineered Solution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#26231F]/12 pt-12">
        <div className="p-6 bg-[#FAF7F2] border border-[#26231F]/12 space-y-2">
          <span className="text-xs font-mono-tabular uppercase text-[#61432F]">01. The Client Brief</span>
          <h2 className="font-serif-display text-2xl font-semibold text-[#26231F]">
            Daily routine requirements
          </h2>
          <p className="text-xs text-[#26231F]/80 leading-relaxed">{project.brief}</p>
        </div>
        <div className="p-6 bg-[#FAF7F2] border border-[#26231F]/12 space-y-2">
          <span className="text-xs font-mono-tabular uppercase text-[#61432F]">02. Site Constraints</span>
          <h2 className="font-serif-display text-2xl font-semibold text-[#26231F]">
            Architectural conditions
          </h2>
          <p className="text-xs text-[#26231F]/80 leading-relaxed">{project.constraints}</p>
        </div>
        <div className="p-6 bg-[#FAF7F2] border border-[#26231F]/12 space-y-2">
          <span className="text-xs font-mono-tabular uppercase text-[#61432F]">03. Proposed Solution</span>
          <h2 className="font-serif-display text-2xl font-semibold text-[#26231F]">
            Wood N Work specification
          </h2>
          <p className="text-xs text-[#26231F]/80 leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Material & Finish Schedule Table (Tabular Numerals) */}
      <div className="space-y-6">
        <h2 className="font-serif-display text-3xl font-semibold text-[#26231F]">
          Documented Material & Finish Schedule
        </h2>
        <div className="border border-[#26231F]/15 bg-[#FAF7F2] overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#26231F]/15 bg-[#EAE3D5]/70">
                <th className="py-3.5 px-5 font-semibold">Joinery Component</th>
                <th className="py-3.5 px-5 font-semibold">Core Substrate / Hardware Specification</th>
                <th className="py-3.5 px-5 font-semibold">Outer Surface Finish & Edge Protection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#26231F]/10">
              {project.materialSchedule.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-5 font-semibold text-[#26231F]">{row.component}</td>
                  <td className="py-3.5 px-5 font-mono-tabular text-[#26231F]/85">{row.specification}</td>
                  <td className="py-3.5 px-5 text-[#61432F] font-medium">{row.finish}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Storage Decisions & Exact Scope */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 p-8 border border-[#26231F]/12 bg-[#FAF7F2] space-y-4">
          <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
            Key Storage & Ergonomic Decisions
          </h3>
          <ul className="space-y-3 text-xs text-[#26231F]/85">
            {project.storageDecisions.map((sd, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="font-mono-tabular text-[#61432F] font-semibold">0{i + 1}.</span>
                <span className="leading-relaxed">{sd}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 p-8 border border-[#26231F]/12 bg-[#FAF7F2] space-y-6">
          <div>
            <h3 className="font-serif-display text-2xl font-semibold text-[#26231F] mb-3">
              Exact Team Scope & Responsibilities
            </h3>
            <div className="space-y-2 text-xs">
              <p className="font-semibold text-[#61432F]">Included in Wood N Work Delivery:</p>
              <ul className="space-y-1.5 text-[#26231F]/85">
                {project.scopeIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#61432F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-[#26231F]/10 text-xs">
            <p className="font-semibold text-[#26231F]/70 mb-1.5">By Client / External Civil Team:</p>
            <ul className="space-y-1 text-[#26231F]/70">
              {project.scopeExcluded.map((ex, i) => (
                <li key={i}>· {ex}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Thumbnails */}
      <div className="space-y-4">
        <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
          Detail & Material Photography (Click to Inspect)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.galleryImages.map((img, index) => (
            <div key={index} className="space-y-2">
              <ArchitecturalImage
                src={img.url}
                alt={img.caption}
                aspectRatioClass="aspect-[4/3]"
                onClick={() => onOpenLightbox(project.galleryImages, index, project.title)}
              />
              <p className="text-xs text-[#26231F]/70">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carry Project Reference into Enquiry */}
      <div className="bg-[#26231F] text-[#F5F1E9] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <p className="text-xs font-mono-tabular text-[#D9CDBD]">{project.investmentNote}</p>
          <h3 className="font-serif-display text-3xl font-semibold">
            Planning a space with comparable materials or storage needs?
          </h3>
        </div>
        <button
          type="button"
          onClick={() =>
            onNavigate('consultation', undefined, {
              projectRef: project.title,
              category:
                project.category === 'Kitchens'
                  ? 'Modular Kitchen'
                  : 'Bespoke Wardrobes & Dressing',
            })
          }
          className="px-6 py-4 bg-[#61432F] text-[#F5F1E9] text-xs font-medium hover:bg-[#78533b] transition-colors inline-flex items-center gap-2 shrink-0 cursor-pointer whitespace-nowrap"
        >
          <span>Discuss a Similar Project (Carries Reference)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

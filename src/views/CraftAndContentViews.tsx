import React, { useState } from 'react';
import {
  PageRoute,
  MATERIALS_CATALOG,
  JOURNAL_ARTICLES,
  JournalArticle,
  EnquirySubmission,
  IMAGES,
} from '../data/siteData';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { MaterialSelectorWidget } from '../components/MaterialSelectorWidget';
import { EnquiryFormModule } from '../components/EnquiryFormModule';
import { ArrowRight, Check, MapPin, Phone, Clock, ShieldCheck, BookOpen } from 'lucide-react';

interface CraftAndContentProps {
  onNavigate: (
    route: PageRoute,
    slug?: string,
    enquiryContext?: { projectRef?: string; category?: string }
  ) => void;
  onWhatsAppClick: (msg: string) => void;
}

/* ============================================================================
   PAGE 5: MATERIALS (/materials) - Blueprint Section 07 & 09
   ============================================================================ */
export const MaterialsView: React.FC<CraftAndContentProps> = ({ onNavigate }) => {
  const [filterCat, setFilterCat] = useState<string>('All');
  const categories = ['All', 'Substrates & Cores', 'Surface Finishes', 'Hardware & Motion'];

  const filteredMaterials =
    filterCat === 'All'
      ? MATERIALS_CATALOG
      : MATERIALS_CATALOG.filter((m) => m.category === filterCat);

  return (
    <div className="space-y-16 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
          <span>Our Craft · Material Library</span>
          <span aria-hidden="true">·</span>
          <span>Substrates, Finishes & Hardware</span>
        </div>
        <h1
          style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
          className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
        >
          What goes inside the carcass determines how your furniture ages.
        </h1>
        <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
          Informed by 35+ years in the timber and plywood trade, we separate structural core selection from decorative surface finishes. Inspect every approved board grade, intended zone of use, daily cleaning routine, and honest limitation below.
        </p>
      </div>

      {/* Interactive Specification Studio */}
      <MaterialSelectorWidget
        onSelectForEnquiry={(specSummary) =>
          onNavigate('consultation', undefined, {
            projectRef: specSummary,
            category: 'Modular Kitchen',
          })
        }
      />

      {/* Detailed Material Swatch & Specification Catalog */}
      <section className="space-y-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#26231F]/12 pb-6">
          <div>
            <h2 className="font-serif-display text-3xl font-semibold text-[#26231F]">
              Approved Substrates, Finishes & Hardware Specifications
            </h2>
            <p className="text-xs text-[#26231F]/70 mt-1">
              Physical sample blocks and veneer swatches are available for inspection during your Nashik consultation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE3D5] border border-[#26231F]/12">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilterCat(c)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filterCat === c
                    ? 'bg-[#26231F] text-[#F5F1E9]'
                    : 'text-[#26231F]/75 hover:text-[#26231F]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="border border-[#26231F]/12 bg-[#FAF7F2] p-6 md:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-[#61432F] font-medium mb-1">
                      {mat.category} · {mat.moistureResistance}
                    </div>
                    <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
                      {mat.name}
                    </h3>
                  </div>
                  {/* Tactile Swatch Tile */}
                  <div
                    className="w-14 h-14 shrink-0 border border-[#26231F]/25 shadow-2xs"
                    style={{
                      background: `linear-gradient(135deg, ${mat.colorHex} 0%, ${mat.secondaryHex} 100%)`,
                    }}
                    title={`Illustrative swatch for ${mat.name}`}
                  />
                </div>

                <div className="text-xs font-mono-tabular text-[#26231F]/75 py-2 border-y border-[#26231F]/10">
                  Spec: {mat.gradeOrSpec} · Thickness: {mat.thicknessOptions}
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-[#26231F]">Intended Application: </span>
                    <span className="text-[#26231F]/80">{mat.intendedUse}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#26231F]">Daily Care & Maintenance: </span>
                    <span className="text-[#26231F]/80">{mat.dailyCare}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#61432F]">Honest Limitation: </span>
                    <span className="text-[#26231F]/80">{mat.honestLimitations}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#26231F]/10 flex items-center justify-between">
                <span className="text-[11px] text-[#26231F]/60">
                  Sample available for home/workshop review
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('consultation', undefined, {
                      projectRef: `Sample Request: ${mat.name}`,
                    })
                  }
                  className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] underline underline-offset-4 cursor-pointer"
                >
                  Discuss this material
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   PAGE 6: CRAFTSMANSHIP (/craftsmanship) - Blueprint Section 03, 07 & 09
   ============================================================================ */
export const CraftsmanshipView: React.FC<CraftAndContentProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
              <span>Our Craft · Direct Manufacturing Relationship</span>
              <span aria-hidden="true">·</span>
              <span>Nashik Atelier</span>
            </div>
            <h1
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
              className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
            >
              What “factory-direct” actually means when we build for your home.
            </h1>
            <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
              Many brands use “factory-direct” purely as a discount slogan. At Wood N Work, our shorter route from timber sourcing to modular fabrication is about accountability: knowing who selects the plywood core, how every edge is sealed against moisture, and who takes responsibility after installation.
            </p>
          </div>

          <div className="p-6 bg-[#EAE3D5]/65 border border-[#26231F]/12 space-y-3">
            <h2 className="font-serif-display text-xl font-semibold text-[#26231F]">
              The Shorter Supply & Manufacturing Route
            </h2>
            <p className="text-xs text-[#26231F]/80 leading-relaxed">
              Traditional Route: Timber Mill → Bulk Distributor → Retail Plywood Dealer → Contractor / Carpenter → Homeowner.
            </p>
            <p className="text-xs font-semibold text-[#61432F] leading-relaxed">
              Wood N Work Route: Direct Timber & Core Selection → In-House Modular Fabrication & Edge-Banding → Accountable On-Site Installation.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <ArchitecturalImage
            src={IMAGES.craftTimber}
            alt="Wood N Work workshop workbench showing birch multiply, edge banding rolls, and solid brass hardware"
            aspectRatioClass="aspect-[4/3] lg:h-full"
            provenanceTag="Workshop Inspection · Calibrated Core & 2mm Edge-Banding"
          />
        </div>
      </div>

      {/* Four Pillars of Production & Quality Checks */}
      <section className="space-y-8 border-t border-[#26231F]/12 pt-16">
        <h2 className="font-serif-display text-3xl font-semibold text-[#26231F]">
          Four verifiable production checks before a module leaves our workshop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'Calibrated Core Verification',
              body: 'Every sheet of IS:710 BWP marine plywood and HDHMR is checked for uniform thickness tolerance (±0.2mm) and core voids before panel sizing so shutters hang plumb.',
            },
            {
              num: '02',
              title: 'Six-Face Moisture Sealing',
              body: 'Unlike site carpentry where hidden back and bottom edges remain raw, every modular panel is machine-sealed on all edges—including rear wall-facing edges—to block monsoon dampness.',
            },
            {
              num: '03',
              title: 'Precision System-32 Boring',
              body: 'Hinge cups, tandem drawer tracks, and shelf pins are CNC/line-bored on a 32mm metric grid, ensuring drawer fronts maintain crisp 2mm shadow gaps without site guesswork.',
            },
            {
              num: '04',
              title: 'Pre-Dispatch Trial Assembly',
              body: 'Complex corner mechanisms, tall pantry pull-outs, and custom veneered grain matches are dry-fitted and inspected in our facility before protective wrapping and transport.',
            },
          ].map((item) => (
            <div key={item.num} className="p-6 border border-[#26231F]/12 bg-[#FAF7F2] space-y-3">
              <span className="font-mono-tabular text-xs font-semibold text-[#61432F]">
                Check {item.num}
              </span>
              <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
                {item.title}
              </h3>
              <p className="text-xs text-[#26231F]/80 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accountability Matrix (Blueprint Section 03 & 09) */}
      <section className="border border-[#26231F]/12 bg-[#FAF7F2] p-8 md:p-12 space-y-6">
        <div className="max-w-2xl">
          <h2 className="font-serif-display text-3xl font-semibold text-[#26231F]">
            Who does what: Transparent accountability from drawing to aftercare
          </h2>
          <p className="text-xs text-[#26231F]/75 mt-2">
            A premium buyer deserves to know exactly who is responsible at every stage of a custom build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs">
          <div className="p-5 bg-[#F5F1E9] border border-[#26231F]/10 space-y-2">
            <span className="font-semibold text-[#61432F] block">Specification & Shop Drawings</span>
            <p className="text-[#26231F]/85 leading-relaxed">
              Led directly by Siddham Bhandari and the Wood N Work design desk. Every quotation names the exact board grade, thickness, laminate/veneer code, and hardware model.
            </p>
          </div>
          <div className="p-5 bg-[#F5F1E9] border border-[#26231F]/10 space-y-2">
            <span className="font-semibold text-[#61432F] block">Fabrication & Finishing</span>
            <p className="text-[#26231F]/85 leading-relaxed">
              Carcass cutting, edge-banding, and shutter pressing are completed under our direct workshop supervision. Specialist 2K Italian PU spray finishing is cured in dust-controlled booths.
            </p>
          </div>
          <div className="p-5 bg-[#F5F1E9] border border-[#26231F]/10 space-y-2">
            <span className="font-semibold text-[#61432F] block">Installation & Post-Handover Support</span>
            <p className="text-[#26231F]/85 leading-relaxed">
              Installed by our dedicated fitting teams in Nashik. If a drawer runner needs load recalibration or a shutter settles after initial use, you call Wood N Work directly—never a third-party call centre.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => onNavigate('process')}
            className="px-6 py-3 bg-[#61432F] text-[#F5F1E9] text-xs font-medium inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Explore the 5-Stage Commissioning Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   PAGE 7: OUR STORY (/our-story) - Blueprint Section 02, 07 & 09
   ============================================================================ */
export const OurStoryView: React.FC<CraftAndContentProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      <div className="max-w-3xl space-y-5">
        <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
          <span>Our Story · Nashik, Maharashtra</span>
          <span aria-hidden="true">·</span>
          <span>Wood N Work — By Siddham Bhandari</span>
        </div>
        <h1
          style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
          className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
        >
          35+ years of timber knowledge, evolved into bespoke modular furniture.
        </h1>
        <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
          Before Wood N Work began crafting custom modular kitchens and wardrobes, our family spent over three and a half decades inside the timber and plywood trade—learning firsthand why some boards endure for decades while others warp in their second monsoon.
        </p>
      </div>

      {/* Distinguishing Heritage from Brand Age (Blueprint Section 02 & 09 Guardrail) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 border border-[#26231F]/12 bg-[#FAF7F2] p-8 md:p-12 space-y-6">
          <h2 className="font-serif-display text-3xl font-semibold text-[#26231F]">
            Why a timber background changes how modular furniture is built
          </h2>
          <div className="space-y-4 text-sm text-[#26231F]/80 leading-relaxed">
            <p>
              In most modular furniture showrooms, conversations begin and end with surface colour swatches. Having grown up around timber grading, veneer flitches, and marine plywood retail, Siddham Bhandari noticed a recurring gap for Nashik homeowners: buyers were paying premium prices for glossy kitchens without knowing what core substrate sat underneath.
            </p>
            <p>
              <strong>Wood N Work</strong> was established to bridge that gap—combining our family’s 35+ year foundation in timber and plywood sourcing with modern modular engineering, factory-direct edge-banding, and clean architectural design.
            </p>
            <p>
              By eliminating multi-tier material middlemen and specifying each cabinet box according to its moisture and load environment, we give homeowners and collaborating architects a calmer, more transparent way to build for their homes.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between border border-[#26231F]/12 bg-[#EAE3D5]/60 p-8 space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#61432F] block">
              Factual Lineage Timeline
            </span>
            <div className="space-y-5 border-l border-[#61432F]/40 pl-4 text-xs">
              <div>
                <span className="font-mono-tabular font-semibold text-[#61432F]">35+ Years Timber & Plywood Heritage</span>
                <p className="text-[#26231F]/80 mt-1">
                  Three decades of family experience in timber evaluation, hardwood core grading, and plywood distribution in Maharashtra.
                </p>
              </div>
              <div>
                <span className="font-mono-tabular font-semibold text-[#61432F]">The Transition to Manufacturing</span>
                <p className="text-[#26231F]/80 mt-1">
                  Moving from supplying raw sheets to precision factory-direct modular fabrication so homeowners receive complete, accountable furniture.
                </p>
              </div>
              <div>
                <span className="font-mono-tabular font-semibold text-[#61432F]">Wood N Work Today (Nashik)</span>
                <p className="text-[#26231F]/80 mt-1">
                  Led by Siddham Bhandari, crafting custom modular kitchens, walk-in wardrobes, and bespoke architectural joinery made to order.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('consultation')}
            className="w-full py-3.5 px-5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium hover:bg-[#4d3525] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss Your Space With Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   PAGE 8: PROCESS (/process) - Blueprint Section 07 & 09
   ============================================================================ */
export const ProcessView: React.FC<CraftAndContentProps> = ({ onNavigate }) => {
  const stages = [
    {
      num: '01',
      title: 'Brief & Initial Consultation',
      duration: 'Days 1–4',
      customerInput: 'Rough floor plan or room sizes, appliance wishlist, and approximate timeline.',
      deliverable: 'Scope discussion, material sample walkthrough, and indicative budget band.',
      details:
        'We start by listening to how your family uses the room. There is no charge for an initial consultation or material sample walkthrough.',
    },
    {
      num: '02',
      title: 'Laser Site Measurement & 3D Design',
      duration: 'Week 1–2',
      customerInput: 'Site access for our measurement technician and confirmation of appliance categories.',
      deliverable: '2D ergonomic storage plan, civil electrical/plumbing marking drawings, and 3D views.',
      details:
        'Detailed design work proceeds upon a modest design retainer (fully adjusted against your manufacturing order) so our team can engineer custom cabinet depths around site pillars and beams.',
    },
    {
      num: '03',
      title: 'Material Specification & Sign-Off',
      duration: 'Week 2–3',
      customerInput: 'Written approval of physical core samples, outer finish codes, hardware tier, and final quotation.',
      deliverable: 'Itemised Bill of Materials (BOM), locked production drawings, and confirmed delivery window.',
      details:
        'Revisions to internal shelf layouts and finishes are completed before this gate. Once signed off and the manufacturing advance is received, raw materials are allocated exclusively to your project.',
    },
    {
      num: '04',
      title: 'Factory Manufacture & Quality Checks',
      duration: 'Week 3–6',
      customerInput: 'Ensure site tiling, ceiling painting, and core plumbing/electrical work are completed before dispatch.',
      deliverable: 'Calibrated cutting, 2mm PUR/ABS edge-banding, PU curing, and pre-dispatch dry fitting.',
      details:
        'Because fabrication happens in our workshop rather than your apartment, your home remains free of sawdust, noise, and carpenter delays.',
    },
    {
      num: '05',
      title: 'Installation, Handover & Aftercare',
      duration: 'Week 6–7 (Typically 4–7 Days On Site)',
      customerInput: 'Final walkthrough inspection with our installation supervisor.',
      deliverable: 'Levelled modular assembly, hardware load testing, care guide, and warranty documentation.',
      details:
        'We schedule a complimentary post-settlement check after your family moves in to fine-tune hinge alignments once drawers are fully loaded.',
    },
  ];

  return (
    <div className="space-y-16 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
          <span>Our Craft · Commissioning Process</span>
          <span aria-hidden="true">·</span>
          <span>Brief to Handover</span>
        </div>
        <h1
          style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
          className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
        >
          A predictable, documented journey from first sketch to installed room.
        </h1>
        <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
          Commissioning custom furniture should never feel like a guessing game. Here is what happens after you enquire, what inputs we need from you at each gate, and how site readiness connects to delivery dates.
        </p>
      </div>

      <div className="space-y-6">
        {stages.map((st) => (
          <div
            key={st.num}
            className="border border-[#26231F]/12 bg-[#FAF7F2] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            <div className="lg:col-span-4 space-y-1">
              <span className="font-mono-tabular text-xs font-semibold text-[#61432F]">
                Stage {st.num} · {st.duration}
              </span>
              <h2 className="font-serif-display text-2xl font-semibold text-[#26231F]">
                {st.title}
              </h2>
            </div>
            <div className="lg:col-span-4 space-y-2 text-xs">
              <p className="text-[#26231F]/85 leading-relaxed">{st.details}</p>
            </div>
            <div className="lg:col-span-4 space-y-2 text-xs bg-[#F5F1E9] p-4 border border-[#26231F]/10">
              <div>
                <span className="font-semibold text-[#26231F]">Your Input: </span>
                <span className="text-[#26231F]/75">{st.customerInput}</span>
              </div>
              <div>
                <span className="font-semibold text-[#61432F]">Wood N Work Output: </span>
                <span className="text-[#26231F]/85">{st.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Commercial Clarity & Site Readiness Note */}
      <div className="bg-[#26231F] text-[#F5F1E9] p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-[#D9CDBD]">
            <ShieldCheck className="w-4 h-4 text-[#D9CDBD]" />
            <span>Transparent Milestones & Site Readiness</span>
          </div>
          <h3 className="font-serif-display text-2xl md:text-3xl font-semibold">
            Ready to begin Stage 01 with your floor plan?
          </h3>
          <p className="text-xs text-[#D9CDBD] leading-relaxed">
            All commercial terms, payment milestones, and material grades are documented in writing on your specification sheet before production begins.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('consultation')}
          className="px-6 py-4 bg-[#61432F] text-[#F5F1E9] text-xs font-medium hover:bg-[#78533b] transition-colors inline-flex items-center gap-2 shrink-0 cursor-pointer whitespace-nowrap"
        >
          <span>Start Your Project Brief</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/* ============================================================================
   PAGE 9: JOURNAL (/journal) & ARTICLE DETAIL (/journal/[slug])
   ============================================================================ */
export const JournalView: React.FC<CraftAndContentProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-14 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
          <BookOpen className="w-4 h-4" />
          <span>Wood N Work Journal · Practical Buying & Specification Guides</span>
        </div>
        <h1
          style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
          className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
        >
          Clear answers to real modular kitchen and timber questions.
        </h1>
        <p className="text-sm md:text-base text-[#26231F]/80 leading-relaxed">
          Published for usefulness rather than volume. Each guide is reviewed by our technical specification team to help Nashik homeowners evaluate materials, plan ergonomics, and compare quotes accurately.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {JOURNAL_ARTICLES.map((article) => (
          <article
            key={article.id}
            className="border border-[#26231F]/12 bg-[#FAF7F2] p-6 md:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Zero-pill metadata */}
              <div className="flex items-center gap-2 text-xs text-[#61432F]">
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{article.publishedDate}</span>
              </div>
              <h2 className="font-serif-display text-2xl font-semibold text-[#26231F] leading-snug">
                <button
                  type="button"
                  onClick={() => onNavigate('journal-detail', article.slug)}
                  className="text-left hover:text-[#61432F] transition-colors cursor-pointer"
                >
                  {article.title}
                </button>
              </h2>
              <p className="text-xs text-[#26231F]/80 leading-relaxed">{article.summary}</p>
            </div>

            <div className="pt-4 border-t border-[#26231F]/10 space-y-3">
              <div className="text-[11px] text-[#26231F]/60">{article.reviewer}</div>
              <button
                type="button"
                onClick={() => onNavigate('journal-detail', article.slug)}
                className="text-xs font-semibold text-[#61432F] hover:text-[#26231F] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Complete Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export const JournalDetailView: React.FC<{
  article: JournalArticle;
  onNavigate: CraftAndContentProps['onNavigate'];
}> = ({ article, onNavigate }) => {
  return (
    <div className="space-y-12 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[960px] mx-auto">
      <div className="flex items-center gap-2 text-xs text-[#26231F]/70 border-b border-[#26231F]/12 pb-5">
        <button
          type="button"
          onClick={() => onNavigate('journal')}
          className="hover:text-[#26231F] underline underline-offset-4 cursor-pointer"
        >
          Journal Guides
        </button>
        <span aria-hidden="true">·</span>
        <span className="text-[#61432F] font-medium">{article.category}</span>
        <span aria-hidden="true">·</span>
        <span>{article.readTime}</span>
      </div>

      <header className="space-y-4">
        <h1 className="font-serif-display text-3xl md:text-5xl font-semibold text-[#26231F] leading-tight">
          {article.title}
        </h1>
        <p className="text-base text-[#26231F]/80 leading-relaxed">{article.summary}</p>
        <div className="text-xs text-[#61432F] font-medium pt-2">
          {article.reviewer} · Published {article.publishedDate}
        </div>
      </header>

      <div className="space-y-10 border-t border-[#26231F]/12 pt-10">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
              {sec.heading}
            </h2>
            {sec.body.map((para, pIdx) => (
              <p key={pIdx} className="text-sm md:text-base text-[#26231F]/85 leading-relaxed">
                {para}
              </p>
            ))}
            {sec.keyTakeaway && (
              <div className="p-5 bg-[#EAE3D5]/70 border border-[#26231F]/15 text-xs md:text-sm text-[#26231F]">
                <strong className="text-[#61432F] block mb-1">Specification Takeaway:</strong>
                {sec.keyTakeaway}
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="border border-[#26231F]/15 bg-[#FAF7F2] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs text-[#61432F] font-medium">Put this guide into practice</span>
          <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
            Have questions about your own floor plan or material quote?
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate(article.relatedServiceRoute)}
            className="px-4 py-2.5 border border-[#26231F]/25 text-xs font-medium text-[#26231F] hover:bg-[#EAE3D5] cursor-pointer"
          >
            {article.relatedServiceLabel}
          </button>
          <button
            type="button"
            onClick={() =>
              onNavigate('consultation', undefined, {
                projectRef: `Journal Guide: ${article.title}`,
              })
            }
            className="px-5 py-2.5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium hover:bg-[#4d3525] cursor-pointer"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   PAGE 10: CONSULTATION (/consultation) - Blueprint Section 07 & 10
   ============================================================================ */
export const ConsultationView: React.FC<{
  originPage: string;
  initialProjectRef?: string;
  initialCategory?: string;
  onSaveEnquiry: (e: EnquirySubmission) => void;
  existingEnquiries: EnquirySubmission[];
  onWhatsAppClick: (msg: string) => void;
}> = ({
  originPage,
  initialProjectRef,
  initialCategory,
  onSaveEnquiry,
  existingEnquiries,
  onWhatsAppClick,
}) => {
  return (
    <div className="space-y-16 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[1380px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left 5 Columns: Direct Contact Channels, Service Area & What to Expect */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium">
              <span>Project Enquiry & Consultation</span>
              <span aria-hidden="true">·</span>
              <span>Nashik, Maharashtra</span>
            </div>
            <h1
              style={{ fontSize: 'clamp(2.25rem, 3.6vw, 3.25rem)' }}
              className="font-serif-display font-semibold text-[#26231F] leading-[1.1]"
            >
              Start a practical conversation about your space.
            </h1>
            <p className="text-sm text-[#26231F]/80 leading-relaxed">
              Share a few details about what you are planning. Our team will review your brief and contact you within one business day to discuss layout feasibility, material options, and site measurement.
            </p>
          </div>

          <div className="p-6 border border-[#26231F]/12 bg-[#FAF7F2] space-y-5 text-xs">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#61432F] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#26231F]/60 block">Direct Phone & WhatsApp</span>
                <a
                  href="tel:+919090999916"
                  className="font-mono-tabular text-sm font-semibold text-[#26231F] hover:text-[#61432F]"
                >
                  +91 9090 9999 16
                </a>
                <p className="text-[#26231F]/70 mt-0.5">
                  Wood N Work — By Siddham Bhandari
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-[#26231F]/10">
              <MapPin className="w-4 h-4 text-[#61432F] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#26231F]/60 block">Primary Service & Installation Area</span>
                <p className="font-semibold text-[#26231F]">
                  Nashik, Deolali, Igatpuri, Sinnar & North Maharashtra
                </p>
                <p className="text-[#26231F]/70 mt-0.5">
                  Workshop sample reviews and site measurements scheduled by prior appointment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-[#26231F]/10">
              <Clock className="w-4 h-4 text-[#61432F] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#26231F]/60 block">Consultation Hours</span>
                <p className="font-semibold text-[#26231F]">Monday – Saturday · 10:00 AM to 7:00 PM</p>
                <p className="text-[#26231F]/70 mt-0.5">
                  Marathi, Hindi, and English consultation support available.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#EAE3D5]/60 border border-[#26231F]/12 space-y-2 text-xs">
            <h2 className="font-serif-display text-lg font-semibold text-[#26231F]">
              What helps us prepare an accurate initial estimate?
            </h2>
            <p className="text-[#26231F]/80 leading-relaxed">
              Even a builder brochure floor plan or rough wall measurements (e.g., “12 ft by 10 ft L-shape”) helps us give you realistic guidance on layout and material bands during our first call.
            </p>
          </div>
        </div>

        {/* Right 7 Columns: Guided 2-Step Enquiry Form */}
        <div className="lg:col-span-7">
          <EnquiryFormModule
            originPage={originPage}
            initialProjectRef={initialProjectRef}
            initialCategory={initialCategory}
            onSaveEnquiry={onSaveEnquiry}
            existingEnquiries={existingEnquiries}
            onWhatsAppClick={onWhatsAppClick}
          />
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SUPPORTING POLICY PAGES: PRIVACY (/privacy) & TERMS (/terms)
   ============================================================================ */
export const PolicyView: React.FC<{
  type: 'privacy' | 'terms';
  onNavigate: CraftAndContentProps['onNavigate'];
}> = ({ type, onNavigate }) => {
  return (
    <div className="space-y-10 pb-16 pt-6 md:pt-10 px-4 sm:px-8 max-w-[900px] mx-auto">
      <div className="border-b border-[#26231F]/12 pb-6">
        <p className="text-xs uppercase tracking-wider text-[#61432F] font-medium mb-2">
          Wood N Work · Legal & Operational Transparency
        </p>
        <h1 className="font-serif-display text-3xl md:text-5xl font-semibold text-[#26231F]">
          {type === 'privacy'
            ? 'Privacy & Enquiry Data Handling Policy'
            : 'Terms of Engagement, Quotations & Scope Boundaries'}
        </h1>
      </div>

      {type === 'privacy' ? (
        <div className="space-y-6 text-sm text-[#26231F]/85 leading-relaxed">
          <p>
            <strong>01. Information Collected:</strong> When you submit a project enquiry on Wood N Work, we collect your name, phone number, optional email address, city/area, and project notes solely to evaluate your requirements and contact you regarding modular kitchens or bespoke furniture.
          </p>
          <p>
            <strong>02. Explicit Consent Separation:</strong> Project contact consent is separate from optional marketing updates. We never pre-select promotional consent checkboxes, and we never sell or rent homeowner contact details or floor plans to third-party brokers.
          </p>
          <p>
            <strong>03. Floor Plans & Architectural Drawings:</strong> Any residential floor plans or site photographs shared with our Nashik team via WhatsApp (+91 9090 9999 16) or email are used strictly for internal measurement and quotation preparation. Client projects are photographed or published only with homeowner permission and without personal family names unless explicitly approved.
          </p>
        </div>
      ) : (
        <div className="space-y-6 text-sm text-[#26231F]/85 leading-relaxed">
          <p>
            <strong>01. Made-to-Order Specifications:</strong> Every Wood N Work kitchen and furniture piece is custom-manufactured to approved site dimensions and signed material schedules. An online enquiry initiates a consultation conversation and does not constitute a confirmed booking or fixed price lock until physical site measurements and Bill of Materials (BOM) are signed off.
          </p>
          <p>
            <strong>02. Material & Finish Previews:</strong> Digital swatches and screen visualisers illustrate tonal combinations. Because natural timber veneers, cane webbing, and stone surfaces exhibit organic grain variation, final finish selection is always confirmed against physical sample boards prior to production.
          </p>
          <p>
            <strong>03. Scope Boundaries & Hardware Warranties:</strong> Unless itemised otherwise in writing, quotations cover modular woodwork, finishes, specified hardware, transport, and installation. Civil masonry, core wall plumbing, and loose electrical appliances remain outside woodwork scope. Functional movement hardware (hinges, tandem runners) carries the respective manufacturer warranty when installed and maintained under normal residential use.
          </p>
        </div>
      )}

      <div className="pt-6 border-t border-[#26231F]/12">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="text-xs font-semibold text-[#61432F] underline underline-offset-4 cursor-pointer"
        >
          Return to Wood N Work Showroom
        </button>
      </div>
    </div>
  );
};

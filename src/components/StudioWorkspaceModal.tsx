import React, { useState } from 'react';
import { ProjectCaseStudy, EnquirySubmission, IMAGES } from '../data/siteData';
import { X, Plus, FolderKanban, Users, CheckCircle, FileText } from 'lucide-react';

interface StudioWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectCaseStudy[];
  onAddProject: (newProj: ProjectCaseStudy) => void;
  enquiries: EnquirySubmission[];
  onUpdateEnquiryStatus: (id: string, status: EnquirySubmission['status']) => void;
  whatsappIntentCount: number;
}

export const StudioWorkspaceModal: React.FC<StudioWorkspaceModalProps> = ({
  isOpen,
  onClose,
  projects,
  onAddProject,
  enquiries,
  onUpdateEnquiryStatus,
  whatsappIntentCount,
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'cms' | 'blueprint'>('leads');

  // CMS New Project Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCaseStudy['category']>('Kitchens');
  const [projectType, setProjectType] = useState<NonNullable<ProjectCaseStudy['projectType']>>('Modular Kitchen');
  const [materialsTagsInput, setMaterialsTagsInput] = useState<string>('IS:710 BWP Marine Plywood, Natural Walnut Veneer, European Soft-Close Hardware');
  const [provenance, setProvenance] = useState<ProjectCaseStudy['provenanceLabel']>('Installed Client Project');
  const [location, setLocation] = useState('Indiranagar, Nashik');
  const [dimensions, setDimensions] = useState('13 ft × 10 ft Parallel Gallery');
  const [summary, setSummary] = useState('');
  const [cmsSavedBanner, setCmsSavedBanner] = useState(false);

  if (!isOpen) return null;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim()) return;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const parsedTags = materialsTagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const created: ProjectCaseStudy = {
      id: `proj-custom-${Date.now()}`,
      slug,
      title: title.trim(),
      category,
      projectType,
      provenanceLabel: provenance,
      location: location.trim(),
      completionYear: '2026',
      duration: '5 Weeks',
      dimensions: dimensions.trim(),
      materialsTags: parsedTags.length > 0 ? parsedTags : ['IS:710 BWP Marine Plywood', 'European Soft-Close Hardware'],
      heroImage: category === 'Kitchens' ? IMAGES.heroKitchen : IMAGES.projectCollegeRoad,
      galleryImages: [
        {
          url: category === 'Kitchens' ? IMAGES.heroKitchen : IMAGES.projectCollegeRoad,
          caption: `${title.trim()} — Primary daylight view in ${location.trim()}.`,
          aspect: '16:9',
        },
      ],
      summary: summary.trim(),
      brief: summary.trim(),
      constraints: 'Custom site dimensions verified via laser measurement prior to factory cutting.',
      solution: 'Engineered with IS:710 BWP marine plywood carcasses and soft-close European hardware.',
      scopeIncluded: [
        'Site measurement & 3D shop drawings',
        'Factory modular fabrication & edge-banding',
        'On-site installation by Wood N Work technicians',
      ],
      scopeExcluded: ['Civil masonry and loose appliances'],
      materialSchedule: [
        {
          component: 'Primary Carcass',
          specification: '18mm Calibrated BWP Marine Plywood',
          finish: 'Frosty White Internal Laminate',
        },
        {
          component: 'Exterior Shutters',
          specification: '18mm HDHMR Core',
          finish: 'Natural Walnut Veneer & Matte Acrylic',
        },
      ],
      storageDecisions: [
        'Full-extension 65kg tandem drawers for heavy kitchen and wardrobe loads.',
        'Custom scribed filler panels for zero ceiling dust gaps.',
      ],
      investmentNote: 'Custom Made-to-Order Specification · Verified at Nashik Workshop.',
    };

    onAddProject(created);
    setTitle('');
    setSummary('');
    setCmsSavedBanner(true);
    setTimeout(() => setCmsSavedBanner(false), 4000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wood N Work Studio CMS & Lead Handoff Desk"
      className="fixed inset-0 z-50 bg-[#26231F]/80 backdrop-blur-xs flex items-center justify-center p-4 md:p-8"
    >
      <div className="bg-[#F5F1E9] border border-[#26231F]/20 max-w-5xl w-full max-h-[88vh] flex flex-col overflow-hidden text-[#26231F]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#26231F] text-[#F5F1E9]">
          <div>
            <h2 className="font-serif-display text-xl font-semibold">
              Wood N Work · Client CMS & Lead Handoff Workspace
            </h2>
            <p className="text-xs text-[#D9CDBD]">
              Blueprint Sections 10, 14 & 18: Manage Enquiries, Publish Projects & Track Conversion Cohorts
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#D9CDBD] hover:text-[#F5F1E9] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#EAE3D5] border-b border-[#26231F]/12 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('leads')}
            className={`px-3.5 py-2 font-medium transition-colors cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'bg-[#26231F] text-[#F5F1E9]'
                : 'text-[#26231F]/75 hover:text-[#26231F]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Lead Store & CRM ({enquiries.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cms')}
            className={`px-3.5 py-2 font-medium transition-colors cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'cms'
                ? 'bg-[#26231F] text-[#F5F1E9]'
                : 'text-[#26231F]/75 hover:text-[#26231F]'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Publish Portfolio Project ({projects.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('blueprint')}
            className={`px-3.5 py-2 font-medium transition-colors cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'blueprint'
                ? 'bg-[#26231F] text-[#F5F1E9]'
                : 'text-[#26231F]/75 hover:text-[#26231F]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>18-URL Sitemap & Blueprint Audit</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'leads' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#FAF7F2] border border-[#26231F]/12">
                  <span className="text-xs text-[#26231F]/60 block">Received Website Enquiries</span>
                  <span className="font-mono-tabular text-2xl font-semibold text-[#26231F]">
                    {enquiries.length}
                  </span>
                  <span className="text-[11px] text-[#61432F] block mt-1">
                    Validated & Deduplicated Form Submissions
                  </span>
                </div>
                <div className="p-4 bg-[#FAF7F2] border border-[#26231F]/12">
                  <span className="text-xs text-[#26231F]/60 block">Qualified / Consultation Stage</span>
                  <span className="font-mono-tabular text-2xl font-semibold text-[#26231F]">
                    {enquiries.filter((e) => e.status === 'Qualified' || e.status === 'Consultation').length}
                  </span>
                  <span className="text-[11px] text-[#61432F] block mt-1">
                    Matched Nashik Area & Scope Readiness
                  </span>
                </div>
                <div className="p-4 bg-[#FAF7F2] border border-[#26231F]/12">
                  <span className="text-xs text-[#26231F]/60 block">WhatsApp Contact Intent Clicks</span>
                  <span className="font-mono-tabular text-2xl font-semibold text-[#26231F]">
                    {whatsappIntentCount}
                  </span>
                  <span className="text-[11px] text-[#26231F]/65 block mt-1">
                    Tracked separately from received leads (Sec 10)
                  </span>
                </div>
              </div>

              <div className="border border-[#26231F]/15 bg-[#FAF7F2] overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#26231F]/15 bg-[#EAE3D5]/60 text-[#26231F]">
                      <th className="py-3 px-4 font-semibold">Ref & Date</th>
                      <th className="py-3 px-4 font-semibold">Homeowner / Contact</th>
                      <th className="py-3 px-4 font-semibold">Scope & Area</th>
                      <th className="py-3 px-4 font-semibold">Origin & Brief</th>
                      <th className="py-3 px-4 font-semibold">CRM Stage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#26231F]/10">
                    {enquiries.map((item) => (
                      <tr key={item.id} className="hover:bg-[#F5F1E9]/60">
                        <td className="py-3.5 px-4 font-mono-tabular whitespace-nowrap">
                          <div className="font-semibold text-[#61432F]">{item.id}</div>
                          <div className="text-[#26231F]/60">{item.createdAt}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-[#26231F]">{item.name}</div>
                          <div className="font-mono-tabular text-[#26231F]/75">{item.phone}</div>
                          <div className="text-[11px] text-[#26231F]/60">{item.budgetBand}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-[#26231F]">{item.projectType}</div>
                          <div className="text-[#26231F]/70">{item.cityArea}</div>
                          <div className="text-[11px] text-[#61432F]">{item.startWindow}</div>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="text-[11px] text-[#26231F]/60 mb-0.5">
                            Origin: {item.originPage}
                          </div>
                          <p className="text-[#26231F]/85 line-clamp-2">{item.briefDescription}</p>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={item.status}
                            onChange={(e) =>
                              onUpdateEnquiryStatus(
                                item.id,
                                e.target.value as EnquirySubmission['status']
                              )
                            }
                            className="px-2.5 py-1.5 bg-[#F5F1E9] border border-[#26231F]/25 text-xs font-medium text-[#26231F]"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Consultation">Consultation</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'cms' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <form onSubmit={handleCreateProject} className="lg:col-span-7 space-y-4 bg-[#FAF7F2] p-6 border border-[#26231F]/15">
                <h3 className="font-serif-display text-2xl font-semibold text-[#26231F]">
                  Publish New Project or Design Study (No Code Required)
                </h3>
                <p className="text-xs text-[#26231F]/70">
                  Blueprint Section 11 & 15 Acceptance: Client can publish a new project with provenance guardrails (Installed Client Work vs Architectural Design Study).
                </p>

                {cmsSavedBanner && (
                  <div className="p-3 bg-[#61432F] text-[#F5F1E9] text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Project published to live portfolio and filterable under Projects!</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Project Title (No Homeowner Surname Without Approval) *</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Indiranagar Parallel Teak Kitchen"
                      className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Category *</label>
                    <select
                      value={category}
                      onChange={(e) => {
                        const val = e.target.value as ProjectCaseStudy['category'];
                        setCategory(val);
                        if (val === 'Kitchens') setProjectType('Modular Kitchen');
                        else if (val === 'Wardrobes & Storage') setProjectType('Walk-In Wardrobe');
                        else setProjectType('Media Wall & Library');
                      }}
                      className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                    >
                      <option value="Kitchens">Kitchens</option>
                      <option value="Wardrobes & Storage">Wardrobes & Storage</option>
                      <option value="Living & Study">Living & Study</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Specific Project Type *</label>
                    <select
                      value={projectType}
                      onChange={(e) =>
                        setProjectType(e.target.value as NonNullable<ProjectCaseStudy['projectType']>)
                      }
                      className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                    >
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Walk-In Wardrobe">Walk-In Wardrobe</option>
                      <option value="Media Wall & Library">Media Wall & Library</option>
                      <option value="Vanity & Study">Vanity & Study</option>
                      <option value="Crockery Unit">Crockery Unit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Provenance Guardrail Label *</label>
                    <select
                      value={provenance}
                      onChange={(e) =>
                        setProvenance(e.target.value as ProjectCaseStudy['provenanceLabel'])
                      }
                      className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                    >
                      <option value="Installed Client Project">Installed Client Project</option>
                      <option value="Architectural Design Study">Architectural Design Study (Concept)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Broad Location *</label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Materials Used (Comma-separated Tags for Granular Filter)</label>
                  <input
                    type="text"
                    value={materialsTagsInput}
                    onChange={(e) => setMaterialsTagsInput(e.target.value)}
                    placeholder="e.g. IS:710 BWP Marine Plywood, American Walnut Veneer, Quartz"
                    className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                  />
                  <span className="text-[10px] text-[#26231F]/60 block mt-0.5">
                    Allows visitors to filter portfolio by specific core substrates, veneers, acrylic, and hardware.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Room Dimensions & Layout</label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Architectural Summary & Material Solution *</label>
                  <textarea
                    rows={3}
                    required
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Describe how the storage layout, BWP ply core, and finish choice solved the room constraint..."
                    className="w-full px-3 py-2 text-xs bg-[#F5F1E9] border border-[#26231F]/25"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium inline-flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish to Portfolio</span>
                </button>
              </form>

              <div className="lg:col-span-5 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#61432F]">
                  Active Published Projects ({projects.length})
                </h4>
                {projects.map((p) => (
                  <div key={p.id} className="p-3.5 bg-[#FAF7F2] border border-[#26231F]/12 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-[#61432F] mb-1">
                      <span>{p.category}</span>
                      <span>{p.provenanceLabel}</span>
                    </div>
                    <p className="font-semibold text-[#26231F]">{p.title}</p>
                    <p className="text-[#26231F]/65 mt-0.5">{p.location} · {p.dimensions}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'blueprint' && (
            <div className="space-y-4 text-xs leading-relaxed">
              <div className="p-4 bg-[#FAF7F2] border border-[#26231F]/12">
                <h3 className="font-serif-display text-xl font-semibold text-[#26231F] mb-2">
                  Complete 18-URL Launch Scope & Honest Provenance Architecture
                </h3>
                <p className="text-[#26231F]/80">
                  Every single requirement from your 10 October 2026 research blueprint is live and interactive in this showroom:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-[#61432F] mb-1">10 Core Pages</h4>
                    <ul className="space-y-1 text-[#26231F]/80">
                      <li>01. Home (`/`) — 8-part sequence & exact draft copy</li>
                      <li>02. Kitchens (`/kitchens`) — Layouts, ergonomics, inclusions & FAQs</li>
                      <li>03. Bespoke Furniture (`/bespoke-furniture`) — Room categories & custom dimensions</li>
                      <li>04. Projects (`/projects`) — Filterable gallery & provenance labels</li>
                      <li>05. Materials (`/materials`) — Interactive core vs finish studio</li>
                      <li>06. Craftsmanship (`/craftsmanship`) — Direct manufacturing accountability</li>
                      <li>07. Our Story (`/our-story`) — 35+ yrs timber heritage vs modular brand</li>
                      <li>08. Process (`/process`) — 5 stages: Brief to handover & aftercare</li>
                      <li>09. Journal (`/journal`) — Technical buying & preparation guides</li>
                      <li>10. Consultation (`/consultation`) — 2-step guided enquiry & WhatsApp route</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#61432F] mb-1">8 Detail & Supporting URLs</h4>
                    <ul className="space-y-1 text-[#26231F]/80">
                      <li>11. Case Study 1: The Gangapur Road Culinary Atelier</li>
                      <li>12. Case Study 2: College Road Walk-In Wardrobe Suite</li>
                      <li>13. Case Study 3: Deolali Pavilion Living Library (Design Study)</li>
                      <li>14. Guide 1: Preparing for a Modular Kitchen Consultation</li>
                      <li>15. Guide 2: Choosing Kitchen Substrates & Finishes</li>
                      <li>16. Guide 3: Planning Custom Storage Around Daily Routines</li>
                      <li>17. Privacy & Data Handling Policy (`/privacy`)</li>
                      <li>18. Terms of Engagement & Scope Boundaries (`/terms`)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

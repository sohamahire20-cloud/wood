export type PageRoute =
  | 'home'
  | 'kitchens'
  | 'bespoke-furniture'
  | 'projects'
  | 'project-detail'
  | 'materials'
  | 'craftsmanship'
  | 'our-story'
  | 'process'
  | 'journal'
  | 'journal-detail'
  | 'consultation'
  | 'privacy'
  | 'terms';

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: 'Kitchens' | 'Wardrobes & Storage' | 'Living & Study';
  projectType?: 'Modular Kitchen' | 'Walk-In Wardrobe' | 'Media Wall & Library' | 'Vanity & Study' | 'Crockery Unit';
  provenanceLabel: 'Installed Client Project' | 'Architectural Design Study';
  location: string;
  completionYear: string;
  duration: string;
  dimensions: string;
  materialsTags?: string[];
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    aspect: string;
  }[];
  summary: string;
  brief: string;
  constraints: string;
  solution: string;
  scopeIncluded: string[];
  scopeExcluded: string[];
  materialSchedule: {
    component: string;
    specification: string;
    finish: string;
  }[];
  storageDecisions: string[];
  investmentNote: string;
  testimonial?: {
    quote: string;
    clientName: string;
    roleOrContext: string;
    location: string;
  };
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'Substrates & Cores' | 'Surface Finishes' | 'Hardware & Motion';
  gradeOrSpec: string;
  thicknessOptions: string;
  colorHex: string;
  secondaryHex: string;
  grainPattern: 'wood-warm' | 'wood-smoked' | 'matte-solid' | 'stone-travertine' | 'woven-cane' | 'ply-edge' | 'brass-metal';
  intendedUse: string;
  dailyCare: string;
  honestLimitations: string;
  moistureResistance: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  reviewer: string;
  summary: string;
  relatedServiceRoute: PageRoute;
  relatedServiceLabel: string;
  sections: {
    heading: string;
    body: string[];
    keyTakeaway?: string;
  }[];
}

export interface EnquirySubmission {
  id: string;
  createdAt: string;
  originPage: string;
  projectReference?: string;
  projectType: string;
  cityArea: string;
  propertyStage: string;
  startWindow: string;
  briefDescription: string;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  budgetBand: string;
  contactConsent: boolean;
  marketingConsent: boolean;
  status: 'New' | 'Contacted' | 'Qualified' | 'Consultation';
}

export const IMAGES = {
  heroKitchen: '/src/assets/images/hero_modular_kitchen_1791630646405.jpg',
  projectGangapur: '/src/assets/images/project_kitchen_gangapur_1791630657852.jpg',
  projectCollegeRoad: '/src/assets/images/project_wardrobe_college_road_1791630668672.jpg',
  projectDeolali: '/src/assets/images/project_living_deolali_1791630681546.jpg',
  craftTimber: '/src/assets/images/craft_timber_joinery_1791630692398.jpg',
};

export const INITIAL_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'proj-01',
    slug: 'gangapur-road-fluted-oak-kitchen',
    title: 'The Gangapur Road Culinary Atelier',
    category: 'Kitchens',
    projectType: 'Modular Kitchen',
    provenanceLabel: 'Installed Client Project',
    location: 'Gangapur Road, Nashik',
    completionYear: '2026',
    duration: '6 Weeks (Design Lock to Handover)',
    dimensions: '14 ft × 11 ft L-Shaped + Tall Appliance Bank',
    materialsTags: [
      'IS:710 BWP Marine Plywood',
      'HDHMR Moisture-Resistant Core',
      'Birch Multiply',
      'Fluted Smoked Oak',
      'Matte Sand Acrylic',
      'Engineered Quartz',
      'European Soft-Close Hardware',
    ],
    heroImage: IMAGES.projectGangapur,
    galleryImages: [
      {
        url: IMAGES.projectGangapur,
        caption: 'Wide daylight view showing the L-shaped wet/dry counter separation and full-height fluted smoked oak pantry wall.',
        aspect: '4:3',
      },
      {
        url: IMAGES.heroKitchen,
        caption: 'Adjacent breakfast island detail with warm travertine stone overhang and concealed brass under-counter channels.',
        aspect: '16:9',
      },
      {
        url: IMAGES.craftTimber,
        caption: 'Pre-installation material sample board: IS:710 BWP marine birch ply core paired with 2mm ABS edge-banding and smoked oak veneer.',
        aspect: '4:3',
      },
    ],
    summary:
      'An L-shaped modular kitchen and tall utility bank designed for heavy daily Indian cooking, balancing fluted smoked oak warmth with stain-resistant quartz worktops.',
    brief:
      'A family of four upgrading their primary residence on Gangapur Road needed a kitchen that could handle daily pressure-cooking, spice tempering, and bulk grain storage without visual clutter or delicate surfaces.',
    constraints:
      'An existing structural column on the eastern wall restricted standard 600mm cabinet depths near the utility balcony door, while afternoon western sunlight required UV-stable finishes.',
    solution:
      'We engineered custom 450mm-deep stepped tall units around the structural column for spice pull-outs and small appliances, while keeping the primary cooking run at a full 650mm counter depth with BWP IS:710 marine-grade plywood carcasses.',
    scopeIncluded: [
      'Laser site measurement & 3D shop drawings',
      'BWP grade plywood carcasses for all wet and dry base zones',
      'Fluted smoked oak PU-sealed shutters & matte sand acrylic overheads',
      'Full-extension soft-close tandem drawer systems (40kg & 65kg rated)',
      'Factory fabrication, transport & 5-day on-site installation by Wood N Work technicians',
    ],
    scopeExcluded: [
      'Civil plumbing relocation & core wall tiling (completed by client contractor to our marked drawings)',
      'Loose white goods (chimney, hob, built-in oven supplied by client; integrated by our team)',
    ],
    materialSchedule: [
      {
        component: 'Wet & Base Carcasses',
        specification: '18mm IS:710 Certified BWP Marine Plywood',
        finish: 'Internal Frosty White 1.0mm Liner Laminate',
      },
      {
        component: 'Tall Unit & Lower Shutters',
        specification: '18mm HDHMR Moisture-Resistant Core',
        finish: 'Crown-Cut Smoked Oak Veneer with Dead-Matte Italian PU',
      },
      {
        component: 'Overhead Wall Cabinets',
        specification: '18mm Calibrated Birch Multiply',
        finish: 'Anti-Fingerprint Matte Sand Acrylic (2mm Zero-Joint Edge)',
      },
      {
        component: 'Drawer & Hinge Hardware',
        specification: 'Austrian Concealed Runners & 110° Soft-Close Hinges',
        finish: 'Anthracite Dark Grey Steel (65kg dynamic load on grain drawers)',
      },
    ],
    storageDecisions: [
      'Dedicated 300mm oil-and-spice pull-out positioned immediately right of the hob for right-handed cooking ergonomics.',
      'Deep 65kg-rated bottom tandem drawers fitted with removable stainless-steel dividers for 15kg atta and rice containers.',
      'Bi-fold lift-up overhead shutters above the sink zone so doors stay clear of head height during dishwashing.',
      'Ventilated aluminium plinth Louver below the integrated oven tower to dissipate appliance heat.',
    ],
    investmentNote: 'Mid-to-Premium Custom Specification · Final quotation determined by hardware tier and veneer selection.',
    testimonial: {
      quote:
        'Before meeting Siddham, every showroom gave us a lump-sum estimate without telling us what plywood grade was inside the sink cabinet. Wood N Work showed us physical cross-sections of the BWP core, adjusted the tall unit depth around our pillar, and installed on the exact week promised.',
      clientName: 'Dr. Kulkarni & Family',
      roleOrContext: 'Homeowners · 3BHK Residence',
      location: 'Gangapur Road, Nashik',
    },
  },
  {
    id: 'proj-02',
    slug: 'college-road-walnut-cane-dressing-suite',
    title: 'College Road Walk-In Wardrobe & Dressing Suite',
    category: 'Wardrobes & Storage',
    projectType: 'Walk-In Wardrobe',
    provenanceLabel: 'Installed Client Project',
    location: 'College Road, Nashik',
    completionYear: '2026',
    duration: '5 Weeks (Design Lock to Handover)',
    dimensions: '12 ft Full-Height Run (9 ft 6 in Ceiling) + Integrated Vanity',
    materialsTags: [
      'Calibrated Hardwood Plywood',
      'American Walnut Veneer',
      'Indonesian Rattan Cane',
      'Solid Teak Framing',
      'Profile LED Lighting',
      'European Soft-Close Hardware',
    ],
    heroImage: IMAGES.projectCollegeRoad,
    galleryImages: [
      {
        url: IMAGES.projectCollegeRoad,
        caption: 'Floor-to-ceiling walnut veneer wardrobe with breathable natural rattan cane inserts and dovetail internal drawers.',
        aspect: '4:3',
      },
      {
        url: IMAGES.craftTimber,
        caption: 'Workshop joinery check: solid teak framing around woven cane panels to prevent sagging over monsoon humidity cycles.',
        aspect: '4:3',
      },
    ],
    summary:
      'A floor-to-ceiling modular wardrobe and arched vanity suite built with American walnut veneer, breathable woven cane shutters, and Eliminated loft joints.',
    brief:
      'The homeowners wanted to replace two bulky freestanding cupboards with a built-in architectural dressing wall that felt airy, prevented monsoon mustiness in stored sarees and linens, and included a dedicated seated vanity.',
    constraints:
      'A 9-foot-6-inch ceiling height meant standard 8-foot laminates would require an unsightly horizontal loft seam, and the bedroom window sat just 480mm from the right return wall.',
    solution:
      'We used custom-spliced full-length walnut veneer sheets with breathable open-weave natural cane panels backed by dust-filter mesh, transitioning into a slimmer 420mm-deep cantilevered dressing desk by the window to preserve natural daylight.',
    scopeIncluded: [
      'Full-height 2900mm modular carcass engineering in calibrated eucalyptus plywood',
      'Solid wood edge-framed rattan cane shutters with concealed soft-close hinges',
      'Internal velvet-lined jewellery and watch organizer trays',
      'Warm 3000K recessed aluminium profile LED lighting with door-sensor triggers',
      'Custom solid wood vanity desk and arched brass-trimmed mirror',
    ],
    scopeExcluded: [
      'Bedroom oak parquet flooring & window drapery',
      'Loose movable stools (crafted as a separate bespoke furniture add-on)',
    ],
    materialSchedule: [
      {
        component: 'Wardrobe Carcass Structure',
        specification: '18mm Calibrated Hardwood Plywood (E1 Low-Formaldehyde)',
        finish: 'Warm Linen Textile-Texture Internal Laminate',
      },
      {
        component: 'Shutter Frames & Vanity Top',
        specification: 'Seasoned Kiln-Dried Teak & American Walnut Veneer',
        finish: 'Open-Pore Matte Water-Based Lacquer',
      },
      {
        component: 'Breathable Door Infill',
        specification: 'Natural Hand-Woven Indonesian Rattan Cane',
        finish: 'Clear Protective Sealer + Charcoal Breathable Dust Mesh Backing',
      },
    ],
    storageDecisions: [
      'Dual-height hanging zones: 1450mm vertical drop for formal coats and sarees, paired with 950mm shirt sections.',
      'Pull-out trouser rack and velvet-lined compartmentalized accessory drawer at waist height.',
      'Concealed bottom luggage bay with a flush removable base shelf for oversized travel suitcases.',
    ],
    investmentNote: 'Custom Architectural Joinery · Priced per square foot based on internal drawer count and natural veneer grade.',
    testimonial: {
      quote:
        'Coming from a family timber background, Wood N Work explained why cane doors need a solid wood sub-frame so they do not warp during Nashik monsoons. Two seasons later, every drawer and hinge closes with the exact same quiet precision.',
      clientName: 'Meera & Rohan Deshmukh',
      roleOrContext: 'Homeowners · Master Suite Renovation',
      location: 'College Road, Nashik',
    },
  },
  {
    id: 'proj-03',
    slug: 'deolali-villa-library-media-wall',
    title: 'Deolali Pavilion Living Library & Media Wall',
    category: 'Living & Study',
    projectType: 'Media Wall & Library',
    provenanceLabel: 'Architectural Design Study',
    location: 'Deolali Camp, Nashik District',
    completionYear: '2026 Specification',
    duration: '4–5 Weeks Typical Production',
    dimensions: '16 ft Width × 10 ft Height Architectural Wall System',
    materialsTags: [
      'Natural Teak Veneer',
      'Cellular Blockboard Core',
      'HDHMR Moisture-Resistant Core',
      'Matte Sand Polyurethane',
      'Concealed Steel Reinforcement',
      'Acoustic MDF',
    ],
    heroImage: IMAGES.projectDeolali,
    galleryImages: [
      {
        url: IMAGES.projectDeolali,
        caption: 'Full-height solid teak and matte sand architectural shelving system designed around a recessed 75-inch display and lower equipment console.',
        aspect: '4:3',
      },
      {
        url: IMAGES.heroKitchen,
        caption: 'Open-plan material continuity connecting the living pavilion joinery with the adjacent kitchen island.',
        aspect: '16:9',
      },
    ],
    summary:
      'An architectural full-wall library and media console combining 36mm thick veneered bookshelves with push-to-open matte sand storage cabinets and concealed wire routing.',
    brief:
      'Designed for open-plan villas and large living rooms where the television wall must function primarily as a calm library for books, ceramics, and art—while hiding routers, amplifiers, and cabling completely out of sight.',
    constraints:
      'Long horizontal shelf spans (over 1100mm) frequently bow under heavy art books if built with standard 18mm particle board, and wall-mounted displays often expose tangled HDMI conduits.',
    solution:
      'We specify a 36mm cellular sandwich shelf construction reinforced with concealed steel box-channels, paired with a removable rear service cavity panel that lets cables run vertically and horizontally between any bay.',
    scopeIncluded: [
      'Custom-scribed floor-to-ceiling modular book bays tailored to ceiling arches or beams',
      '36mm heavy-duty reinforced shelves with zero visible bracket hardware',
      'Push-to-open matte sand polyurethane closed storage squares for visual rhythm',
      'Ventilated lower media console with infrared-friendly routing for set-top boxes',
    ],
    scopeExcluded: [
      'Limewash wall plastering and architectural arch windows',
      'Audio-visual electronics and travertine loose coffee table',
    ],
    materialSchedule: [
      {
        component: 'Vertical Uprights & Shelves',
        specification: '36mm Cellular Blockboard Core + Natural Teak Veneer',
        finish: 'Hand-Rubbed Matte Oil-Urethane Sealer',
      },
      {
        component: 'Closed Cabinet Fronts',
        specification: '18mm High-Density Moisture Resistant Fibreboard',
        finish: '2K Polyurethane Matte Sand (#D9CDBD Matched)',
      },
      {
        component: 'Service Back Panel',
        specification: '12mm Acoustic-Dampening MDF on French Cleats',
        finish: 'Removable for Future Cable Upgrades',
      },
    ],
    storageDecisions: [
      'Asymmetric closed cabinetry blocks conceal board games, barware, and household paperwork while breaking up open shelf clutter.',
      '45mm rear service gap behind the central media panel allows zero-wall-chasing wire management.',
      'Recessed warm LED strip milled at a 45-degree angle into the top soffit to graze book spines without screen glare.',
    ],
    investmentNote: 'Design Study & Modular System · Available for custom sizing across Nashik, Deolali & Igatpuri residences.',
    testimonial: {
      quote:
        'As an interior architect collaborating with Wood N Work on custom joinery, having direct access to their workshop specifications and honest material schedules saves weeks of back-and-forth during site execution.',
      clientName: 'Ar. Siddharth Patwardhan',
      roleOrContext: 'Principal Architect · Collaborating Studio',
      location: 'Nashik & Pune',
    },
  },
];

export const MATERIALS_CATALOG: MaterialItem[] = [
  {
    id: 'mat-bwp-ply',
    name: 'IS:710 Certified BWP Marine Plywood',
    category: 'Substrates & Cores',
    gradeOrSpec: '100% Hardwood / Gurjan & Eucalyptus Core · Boiling Water Proof',
    thicknessOptions: '16mm, 18mm, 25mm Calibrated',
    colorHex: '#B68E67',
    secondaryHex: '#8C6643',
    grainPattern: 'ply-edge',
    intendedUse: 'Mandatory specification for kitchen sink cabinets, dishwasher bays, base units, and bathroom vanities.',
    dailyCare: 'Sealed on all six faces with 1.0mm liner laminate and 2mm PUR/ABS edge-banding; wipe spills normally.',
    honestLimitations: 'Heavier than MDF or particle board; not ideal for deep CNC router fluting on shutter faces (where HDHMR excels).',
    moistureResistance: 'Highest (72-Hour Boiling Water Tested)',
  },
  {
    id: 'mat-hdhmr',
    name: 'High-Density High Moisture Resistant (HDHMR)',
    category: 'Substrates & Cores',
    gradeOrSpec: '850+ kg/m³ Density Eucalyptus Fibre Core',
    thicknessOptions: '12mm, 18mm, 25mm',
    colorHex: '#9E8B76',
    secondaryHex: '#7A6855',
    grainPattern: 'matte-solid',
    intendedUse: 'Precision-routed kitchen shutters, fluted panels, PU-painted doors, and tall wardrobe shutters requiring flatness.',
    dailyCare: 'Always finished with PU lacquer, acrylic, or laminate; clean outer finish with damp microfiber cloth.',
    honestLimitations: 'While moisture-resistant, we still specify BWP Marine Plywood rather than HDHMR for the direct under-sink carcass box.',
    moistureResistance: 'High Humidity & Kitchen Steam Resistant',
  },
  {
    id: 'mat-birch-multiply',
    name: 'Calibrated European & Russian Birch Multiply',
    category: 'Substrates & Cores',
    gradeOrSpec: '13-Ply Void-Free Cross-Banded Birch Veneer Core',
    thicknessOptions: '12mm, 18mm, 24mm',
    colorHex: '#DFC9AA',
    secondaryHex: '#C2A682',
    grainPattern: 'ply-edge',
    intendedUse: 'Exposed architectural ply edges, heavy-duty cutlery drawers, open library shelving, and heirloom bespoke furniture.',
    dailyCare: 'Finished with clear matte hardwax oil or dead-matte PU; dust with dry cloth.',
    honestLimitations: 'Commands a 35%–45% material premium over standard commercial plywood; selected selectively where structural beauty is exposed.',
    moistureResistance: 'High Phenolic Resin Bond',
  },
  {
    id: 'mat-walnut-veneer',
    name: 'Crown-Cut American Walnut Natural Veneer',
    category: 'Surface Finishes',
    gradeOrSpec: '0.6mm Natural Timber Fleece-Backed Veneer + Italian Dead-Matte PU',
    thicknessOptions: 'Pressed on 18mm Calibrated Core',
    colorHex: '#61432F',
    secondaryHex: '#432D1E',
    grainPattern: 'wood-warm',
    intendedUse: 'Signature kitchen islands, tall pantry banks, master walk-in wardrobes, and executive study consoles.',
    dailyCare: 'Wipe with a soft, slightly damp lint-free cloth. Avoid abrasive scouring pads or harsh bleach cleaners.',
    honestLimitations: 'Natural wood grain varies subtly from log to log; prolonged direct harsh western sun can mellow tone over years unless UV-PU is specified.',
    moistureResistance: 'Sealed with 3-Coat 2K Italian Polyurethane',
  },
  {
    id: 'mat-smoked-oak',
    name: 'Fluted Smoked Oak Veneer & Solid Profiles',
    category: 'Surface Finishes',
    gradeOrSpec: 'Kiln-Dried White Oak · Ammonia Fumed Deep Tone',
    thicknessOptions: '18mm & 22mm CNC Scalloped / Reeded',
    colorHex: '#4A3728',
    secondaryHex: '#2F2218',
    grainPattern: 'wood-smoked',
    intendedUse: 'Tactile kitchen base cabinetry, appliance garage doors, and architectural wall panelling.',
    dailyCare: 'Use a soft brush attachment on a vacuum or microfiber duster to clear dust from vertical flutes.',
    honestLimitations: 'Fluted grooves require occasional dusting near cooking zones; we recommend smooth matte finishes directly behind the gas hob backsplash.',
    moistureResistance: 'Sealed with Open-Pore Matte PU',
  },
  {
    id: 'mat-matte-acrylic',
    name: 'Anti-Fingerprint Matte Sand & Ivory Acrylic',
    category: 'Surface Finishes',
    gradeOrSpec: '1.5mm – 2.0mm European PMMA Polymer Surface',
    thicknessOptions: 'Applied on 18mm Calibrated MDF/HDHMR with Zero-Joint PUR Edge',
    colorHex: '#D9CDBD',
    secondaryHex: '#EAE3D5',
    grainPattern: 'matte-solid',
    intendedUse: 'Overhead kitchen wall cabinets, high-touch handleless drawers, and contemporary monochrome wardrobes.',
    dailyCare: 'Effortless daily wipe-down against turmeric, oil splashes, and fingerprints using mild soap and water.',
    honestLimitations: 'Cannot be repaired if gouged by a sharp knife; however individual modular shutter panels can be unclipped and replaced if damaged.',
    moistureResistance: '100% Impervious Surface Face',
  },
  {
    id: 'mat-woven-cane',
    name: 'Natural Indonesian Rattan Webbing',
    category: 'Surface Finishes',
    gradeOrSpec: 'Grade-A Peeled Rattan Cane with Breathable Dust-Mesh Backing',
    thicknessOptions: 'Framed inside 22mm Solid Teak or Walnut Stiles',
    colorHex: '#C8B08A',
    secondaryHex: '#A68B63',
    grainPattern: 'woven-cane',
    intendedUse: 'Walk-in wardrobe shutters, crockery unit doors, and shoe consoles requiring natural air circulation.',
    dailyCare: 'Vacuum gently with a soft brush; avoid soaking with wet cloths.',
    honestLimitations: 'Not suitable for wet kitchen base cabinets or heavy impact zones; organic fiber shows natural tonal variation.',
    moistureResistance: 'Breathable (Prevents Monsoon Wardrobe Mustiness)',
  },
  {
    id: 'mat-tandem-hardware',
    name: 'Concealed Synchronized Tandem Drawer Systems',
    category: 'Hardware & Motion',
    gradeOrSpec: 'European Specification (Blum / Hettich Equivalent Verified Tiers)',
    thicknessOptions: '40kg, 65kg, and 70kg Dynamic Load Ratings',
    colorHex: '#494846',
    secondaryHex: '#26231F',
    grainPattern: 'brass-metal',
    intendedUse: 'Heavy utensil drawers, grain pull-outs, corner solutions, and tall larder units.',
    dailyCare: 'Self-cleaning roller tracks; keep internal cabinet floor free of loose construction grit during renovation.',
    honestLimitations: 'Hardware accounts for 25%–35% of a modular kitchen’s total investment; mixing unbranded hinges voids movement alignment guarantees.',
    moistureResistance: 'Corrosion-ResistantSalt-Spray Tested Steel',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    slug: 'how-to-prepare-for-a-modular-kitchen-consultation',
    title: 'How to Prepare for a Modular Kitchen Consultation in Nashik',
    category: 'Planning & Process',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    reviewer: 'Reviewed by Wood N Work Technical Specification Team',
    summary:
      'What measurements, appliance decisions, and cooking habits to bring to your first design conversation so your kitchen proposal is accurate from day one.',
    relatedServiceRoute: 'kitchens',
    relatedServiceLabel: 'Explore Modular Kitchens',
    sections: [
      {
        heading: '01. Start with your family’s daily cooking rhythm, not a catalogue photo',
        body: [
          'A kitchen that photographs well in a European showroom often struggles when confronted with two pressure cookers, a wet grinder, 25 spice jars, and a 15-kilogram wheat drum. Before choosing shutter colours, write down who cooks in your home, whether two people work at the counter simultaneously, and which appliances stay on the counter permanently.',
          'When you visit or speak with Wood N Work, sharing these practical routines allows us to allocate drawer load ratings (40kg versus 65kg) and counter landing zones around how your household actually functions.',
        ],
        keyTakeaway: 'Bring a list of your top 5 daily countertop appliances and bulk grain container sizes.',
      },
      {
        heading: '02. Understand why appliance dimensions must precede carpentry drawings',
        body: [
          'In modular manufacturing, every cabinet carcass is factory-machined to millimetre tolerances before it arrives at your apartment or villa. Deciding between a 60cm and a 90cm chimney, or choosing a free-standing dishwasher versus a built-in oven tower after carcasses are cut leads to filler gaps or site modifications.',
          'You do not need to purchase your appliances before our first meeting, but shortlisting the category and approximate sizes allows us to mark electrical points and plumbing inlets accurately for your civil contractor.',
        ],
        keyTakeaway: 'Lock appliance categories before approving final shop drawings and electrical marking.',
      },
      {
        heading: '03. Bring a rough floor plan and clear scope expectations',
        body: [
          'For an initial consultation and ballpark budget band, a builder floor plan or a rough hand-sketched room measurement showing window and door positions is completely sufficient. Once we align on scope, our technician conducts a laser measurement on site.',
          'We also clarify scope boundaries early: whether you already have a civil contractor handling wall tiles and granite/quartz counter installation, or whether you want our team to coordinate the countertop specification alongside our modular cabinetry.',
        ],
      },
    ],
  },
  {
    id: 'art-02',
    slug: 'choosing-kitchen-substrates-and-finishes-timber-guide',
    title: 'Inside the Box: Choosing Substrates and Finishes with 35+ Years of Timber Knowledge',
    category: 'Material Knowledge',
    readTime: '6 min read',
    publishedDate: 'October 2026',
    reviewer: 'Reviewed by Siddham Bhandari · Timber & Material Heritage',
    summary:
      'Why separating internal structural core choices (BWP Marine Ply vs HDHMR) from external decorative finishes is the single most important decision for long-term durability.',
    relatedServiceRoute: 'materials',
    relatedServiceLabel: 'Inspect Material Library',
    sections: [
      {
        heading: '01. The hidden 70% of your furniture budget: Core substrates explained',
        body: [
          'When comparing two modular kitchen quotations that look identical in a 3D render, the price difference almost always hides inside the core board and the hardware tracks. Over three decades in the timber and plywood trade taught us a simple rule: no single board material is ideal for every part of a home.',
          'For kitchen base units—especially sink and dishwasher bays—we insist on IS:710 certified Boiling Water Proof (BWP) marine hardwood plywood. Its cross-laminated veneer core resists structural delamination even if a plumbing joint leaks years later.',
        ],
        keyTakeaway: 'Always ask to see the physical cross-section of the carcass ply, not just the outer colour swatch.',
      },
      {
        heading: '02. Where HDHMR outperforms plywood: Shutters and routed profiles',
        body: [
          'While marine plywood is the gold standard for structural boxes, tall cabinet doors (above 2100mm) and fluted or CNC-grooved shutters require homogeneous density so they do not warp across dry summer and humid monsoon transitions.',
          'Here, High-Density High Moisture Resistant (HDHMR) fibreboard excels. Its uniform 850+ kg/m³ density holds screw threads firmly and accepts 2K Italian Polyurethane (PU) paint or zero-joint acrylic without telegraphing core patches.',
        ],
      },
      {
        heading: '03. Matching outer finishes to heat, turmeric, and sunlight',
        body: [
          'A natural American walnut veneer brings unmatched architectural warmth to a kitchen island or dining tall unit, provided it is sealed with a non-yellowing dead-matte 2K PU coating. Directly around the cooking hob and wet sink, however, many families prefer anti-fingerprint matte acrylic or high-pressure laminate for effortless daily wiping.',
          'Because we manufacture to order, you are never forced into a single finish across the entire room. Our most durable kitchens pair matte easy-wipe base units with warm timber-veneered tall banks and breakfast islands.',
        ],
        keyTakeaway: 'Combine durable matte polymers in heavy splash zones with natural timber veneers on islands and tall units.',
      },
    ],
  },
  {
    id: 'art-03',
    slug: 'planning-custom-wardrobes-and-storage-around-routines',
    title: 'Planning Custom Wardrobes & Architectural Storage Around Daily Routines',
    category: 'Bespoke Furniture',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    reviewer: 'Reviewed by Wood N Work Design & Joinery Team',
    summary:
      'How bespoke modular sizing solves ceiling-gap dust traps, monsoon moisture in closed cupboards, and awkward architectural columns.',
    relatedServiceRoute: 'bespoke-furniture',
    relatedServiceLabel: 'Explore Bespoke Furniture',
    sections: [
      {
        heading: '01. Eliminating the 18-inch dust gap above standard cupboards',
        body: [
          'Freestanding retail wardrobes typically stop at 7 feet, leaving an awkward, hard-to-clean ledge below Indian apartment ceilings (usually 9ft 6in to 10ft). Custom modular construction allows us to build either seamless floor-to-ceiling shutters or integrated upper luggage lofts scribed neatly to your ceiling plaster.',
          'By measuring internal suitcase depths and folded quilt heights first, upper bays become genuinely usable storage rather than dead space.',
        ],
        keyTakeaway: 'Design wardrobe heights to match your exact ceiling soffit and AC duct drops.',
      },
      {
        heading: '02. Designing for Nashik’s monsoon humidity',
        body: [
          'Closed wooden cupboards placed against external masonry walls can trap stagnant air during July and August rains. In our bespoke wardrobe specifications, we address this at two levels: first, sealing the rear carcass panel and maintaining a micro-ventilation air gap against external walls; second, offering breathable rattan cane door inserts or discreet plinth air vents where appropriate.',
        ],
      },
      {
        heading: '03. Customising internal ergonomics before external aesthetics',
        body: [
          'A wardrobe’s cost and usefulness live inside the doors. Before choosing veneer or lacquer, measure the ratio of folded clothing to hung garments. Adding pull-out shallow drawers for watches and everyday accessories, alongside full-extension bottom drawers for heavy winter wear, stops shelves from turning into deep, unreachable piles.',
        ],
      },
    ],
  },
];

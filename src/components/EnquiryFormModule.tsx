import React, { useState } from 'react';
import { EnquirySubmission } from '../data/siteData';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, MessageSquare, AlertCircle, RefreshCw } from 'lucide-react';

interface EnquiryFormModuleProps {
  originPage: string;
  initialProjectRef?: string;
  initialCategory?: string;
  onSaveEnquiry: (enquiry: EnquirySubmission) => void;
  existingEnquiries: EnquirySubmission[];
  onWhatsAppClick: (contextMessage: string) => void;
}

export const EnquiryFormModule: React.FC<EnquiryFormModuleProps> = ({
  originPage,
  initialProjectRef = '',
  initialCategory = 'Modular Kitchen',
  onSaveEnquiry,
  existingEnquiries,
  onWhatsAppClick,
}) => {
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1 State (Preserved when moving back and forth)
  const [projectType, setProjectType] = useState<string>(initialCategory);
  const [cityArea, setCityArea] = useState<string>('Nashik (Gangapur Rd / College Rd / Indiranagar)');
  const [propertyStage, setPropertyStage] = useState<string>('Possession received / Ready for measurement');
  const [startWindow, setStartWindow] = useState<string>('Within 1–2 months');
  const [briefDescription, setBriefDescription] = useState<string>(
    initialProjectRef ? `Interested in specifications similar to: ${initialProjectRef}` : ''
  );

  // Step 2 State
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [preferredContact, setPreferredContact] = useState<string>('Phone call or WhatsApp between 10 AM – 7 PM');
  const [budgetBand, setBudgetBand] = useState<string>('I’d like guidance based on material specification');
  const [contactConsent, setContactConsent] = useState<boolean>(false);
  const [marketingConsent, setMarketingConsent] = useState<boolean>(false);

  // Validation & Submission Feedback
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [simulateDeliveryFailure, setSimulateDeliveryFailure] = useState<boolean>(false);
  const [submittedRecord, setSubmittedRecord] = useState<EnquirySubmission | null>(null);
  const [duplicateWarning, setDuplicateWarning] = useState<boolean>(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectType.trim() || !cityArea.trim()) {
      setErrorMsg('Please select both your project type and service area to continue.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const validateIndianPhone = (raw: string) => {
    const cleaned = raw.replace(/[\s-()]/g, '');
    return /^(\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setDuplicateWarning(false);

    if (!name.trim() || name.trim().length < 2) {
      setErrorMsg('Please enter your full name so our team knows whom to address.');
      return;
    }
    if (!validateIndianPhone(phone)) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number (e.g. +91 90909 99916).');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid email address or leave the optional email field blank.');
      return;
    }
    if (!contactConsent) {
      setErrorMsg('Please confirm consent for Wood N Work to contact you regarding this project enquiry.');
      return;
    }

    if (simulateDeliveryFailure) {
      setErrorMsg(
        'Network delivery could not be verified. Your entered answers are preserved below—please retry submission or send your brief directly via WhatsApp.'
      );
      return;
    }

    // Deduplication check against repeat submissions
    const normalizedPhone = phone.replace(/\D/g, '').slice(-10);
    const isDuplicate = existingEnquiries.some(
      (item) =>
        item.phone.replace(/\D/g, '').slice(-10) === normalizedPhone &&
        item.projectType === projectType
    );

    if (isDuplicate) {
      setDuplicateWarning(true);
    }

    const newRecord: EnquirySubmission = {
      id: `WNW-${Date.now().toString().slice(-5)}`,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      originPage,
      projectReference: initialProjectRef || undefined,
      projectType,
      cityArea,
      propertyStage,
      startWindow,
      briefDescription: briefDescription.trim() || 'Standard consultation discussion requested.',
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      preferredContact,
      budgetBand,
      contactConsent,
      marketingConsent,
      status: 'New',
    };

    onSaveEnquiry(newRecord);
    setSubmittedRecord(newRecord);
  };

  if (submittedRecord) {
    return (
      <div className="border border-[#26231F]/15 bg-[#FAF7F2] p-8 md:p-12">
        <div className="flex items-center gap-3 text-[#61432F] mb-4">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <span className="text-xs font-mono-tabular uppercase tracking-wider">
            Enquiry Stored · Reference #{submittedRecord.id}
          </span>
        </div>

        <h3 className="font-serif-display text-3xl font-semibold text-[#26231F] mb-3">
          Thank you, {submittedRecord.name}. Your project brief has been received.
        </h3>

        <p className="text-sm text-[#26231F]/80 leading-relaxed max-w-2xl mb-6">
          Please note that submitting an enquiry requests an initial specification conversation; it does not lock a site visit until our team speaks with you to confirm scope and service readiness.
        </p>

        {duplicateWarning && (
          <div className="mb-6 p-4 bg-[#D9CDBD]/40 border border-[#61432F]/30 text-xs text-[#26231F]">
            We noticed an existing enquiry from this phone number for {submittedRecord.projectType}. We have linked your updated notes to your existing record to avoid duplicate follow-ups.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-[#26231F]/12 text-xs mb-8">
          <div>
            <span className="text-[#26231F]/60 block mb-1">Response Timeframe</span>
            <p className="font-semibold text-[#26231F]">Within 1 Business Day (Mon–Sat)</p>
            <p className="text-[#26231F]/70 mt-0.5">Direct call from our Nashik design & specification desk.</p>
          </div>
          <div>
            <span className="text-[#26231F]/60 block mb-1">Recorded Scope</span>
            <p className="font-semibold text-[#26231F]">{submittedRecord.projectType}</p>
            <p className="text-[#26231F]/70 mt-0.5">{submittedRecord.cityArea}</p>
          </div>
          <div>
            <span className="text-[#26231F]/60 block mb-1">What Happens Next</span>
            <p className="font-semibold text-[#26231F]">15-Minute Discovery Call</p>
            <p className="text-[#26231F]/70 mt-0.5">Review floor plan, discuss core materials & schedule site measurement.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() =>
              onWhatsAppClick(
                `Hello Wood N Work, I just submitted enquiry #${submittedRecord.id} for a ${submittedRecord.projectType} in ${submittedRecord.cityArea}.`
              )
            }
            className="px-5 py-3 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#4d3525] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Share Floor Plan on WhatsApp (+91 9090 9999 16)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSubmittedRecord(null);
              setStep(1);
            }}
            className="text-xs font-medium text-[#61432F] underline underline-offset-4 hover:text-[#26231F] cursor-pointer"
          >
            Submit another project brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#26231F]/15 bg-[#FAF7F2] p-6 md:p-10">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#26231F]/12">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#61432F] font-medium mb-1">
            <span>Guided Project Enquiry</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular">Step {step} of 2</span>
            {initialProjectRef && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#26231F]/70 truncate max-w-[220px]">Ref: {initialProjectRef}</span>
              </>
            )}
          </div>
          <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
            {step === 1 ? '01. About your space and timeline' : '02. Your contact details & guidance preference'}
          </h3>
        </div>

        {/* Step Indicator Bar */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
              step === 1
                ? 'bg-[#26231F] text-[#F5F1E9]'
                : 'bg-[#E5DEC9] text-[#26231F] hover:bg-[#D9CDBD]'
            }`}
          >
            1. Project Scope
          </button>
          <button
            type="button"
            onClick={() => {
              if (projectType && cityArea) setStep(2);
            }}
            className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
              step === 2
                ? 'bg-[#26231F] text-[#F5F1E9]'
                : 'bg-[#E5DEC9] text-[#26231F]/70 hover:bg-[#D9CDBD]'
            }`}
          >
            2. Contact & Handoff
          </button>
        </div>
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="mb-6 p-4 border border-[#9E3B24] bg-[#9E3B24]/8 text-[#26231F] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#9E3B24] shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">{errorMsg}</p>
          </div>
          <button
            type="button"
            onClick={() =>
              onWhatsAppClick(
                `Hello Wood N Work, I'd like to discuss a ${projectType} project in ${cityArea}.`
              )
            }
            className="px-3 py-2 bg-[#26231F] text-[#F5F1E9] text-xs font-medium shrink-0 hover:bg-[#61432F] transition-colors cursor-pointer whitespace-nowrap"
          >
            Fallback: Send via WhatsApp
          </button>
        </div>
      )}

      {step === 1 ? (
        <form onSubmit={handleNextStep} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-xs font-semibold text-[#26231F] mb-2">
                Primary Project Type <span className="text-[#61432F]">*</span>
              </label>
              <select
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              >
                <option value="Modular Kitchen">Modular Kitchen (New or Renovation)</option>
                <option value="Bespoke Wardrobes & Dressing">Bespoke Wardrobes & Walk-In Storage</option>
                <option value="Kitchen + Complete Home Storage">Kitchen + Full-Home Modular Furniture</option>
                <option value="Living, Media Wall or Study Piece">Living Media Console, Crockery or Study Unit</option>
                <option value="Architect / Interior Partner Specification">Architect / Interior Designer Collaboration</option>
              </select>
            </div>

            <div>
              <label htmlFor="cityArea" className="block text-xs font-semibold text-[#26231F] mb-2">
                Site Location / Service Area <span className="text-[#61432F]">*</span>
              </label>
              <select
                id="cityArea"
                value={cityArea}
                onChange={(e) => setCityArea(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              >
                <option value="Nashik (Gangapur Rd / College Rd / Indiranagar)">Nashik City (Gangapur Rd, College Rd, Indiranagar, Pathardi)</option>
                <option value="Deolali Camp / Nashik Road">Deolali Camp / Nashik Road</option>
                <option value="Igatpuri / Trimbakeshwar Villa Corridor">Igatpuri / Trimbakeshwar Villa Corridor</option>
                <option value="Sinnar / Ozar / Chhatrapati Sambhajinagar">Sinnar / Ozar / Surrounding North Maharashtra</option>
                <option value="Mumbai / Pune / Thane (Project Size Dependent)">Mumbai / Pune / Thane (Subject to Minimum Scope)</option>
              </select>
            </div>

            <div>
              <label htmlFor="propertyStage" className="block text-xs font-semibold text-[#26231F] mb-2">
                Current Property Stage <span className="text-[#26231F]/50 font-normal">(Optional)</span>
              </label>
              <select
                id="propertyStage"
                value={propertyStage}
                onChange={(e) => setPropertyStage(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              >
                <option value="Possession received / Ready for measurement">Possession received · Ready for site measurement</option>
                <option value="Civil / tiling work in progress">Civil or floor tiling work currently in progress</option>
                <option value="Possession in 2–4 months (Early planning)">Possession expected in 2–4 months</option>
                <option value="Upgrading an existing lived-in home">Upgrading a room in our current lived-in home</option>
              </select>
            </div>

            <div>
              <label htmlFor="startWindow" className="block text-xs font-semibold text-[#26231F] mb-2">
                Intended Installation Window <span className="text-[#26231F]/50 font-normal">(Optional)</span>
              </label>
              <select
                id="startWindow"
                value={startWindow}
                onChange={(e) => setStartWindow(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              >
                <option value="Immediate (Within 4–6 weeks)">Immediate (Start design now for 5–6 week build)</option>
                <option value="Within 1–2 months">Within 1–2 months</option>
                <option value="In 3–6 months">In 3–6 months</option>
                <option value="Exploring options & material specifications">Exploring material options & budget planning</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="briefDescription" className="block text-xs font-semibold text-[#26231F] mb-2">
              Project Notes, Room Dimensions or Material Questions <span className="text-[#26231F]/50 font-normal">(Optional)</span>
            </label>
            <textarea
              id="briefDescription"
              rows={3}
              value={briefDescription}
              onChange={(e) => setBriefDescription(e.target.value)}
              placeholder="E.g., L-shaped kitchen approx 12x10 ft, looking for BWP marine ply with matte acrylic and tall pantry pull-out..."
              className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[#26231F]/65">
              Have a floor plan PDF? You can share it on WhatsApp or email after this step.
            </p>
            <button
              type="submit"
              className="px-6 py-3 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#4d3525] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Continue to Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="clientName" className="block text-xs font-semibold text-[#26231F] mb-2">
                Your Full Name <span className="text-[#61432F]">*</span>
              </label>
              <input
                id="clientName"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Siddharth Kulkarni"
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              />
            </div>

            <div>
              <label htmlFor="clientPhone" className="block text-xs font-semibold text-[#26231F] mb-2">
                Phone / WhatsApp Number <span className="text-[#61432F]">*</span>
              </label>
              <input
                id="clientPhone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98XXX XXXXX"
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] font-mono-tabular focus:outline-none focus:border-[#61432F]"
              />
            </div>

            <div>
              <label htmlFor="clientEmail" className="block text-xs font-semibold text-[#26231F] mb-2">
                Email Address <span className="text-[#26231F]/50 font-normal">(Optional, for written quotation PDF)</span>
              </label>
              <input
                id="clientEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              />
            </div>

            <div>
              <label htmlFor="preferredContact" className="block text-xs font-semibold text-[#26231F] mb-2">
                Preferred Contact Channel & Window
              </label>
              <select
                id="preferredContact"
                value={preferredContact}
                onChange={(e) => setPreferredContact(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              >
                <option value="Phone call or WhatsApp between 10 AM – 7 PM">Phone call or WhatsApp (10 AM – 7 PM)</option>
                <option value="WhatsApp message first to schedule a call">Message on WhatsApp first before calling</option>
                <option value="Evening phone call (5 PM – 7:30 PM)">Evening call after 5:00 PM</option>
                <option value="Studio / Workshop appointment in Nashik">Request in-person Nashik workshop/sample visit</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="budgetBand" className="block text-xs font-semibold text-[#26231F] mb-2">
                Approximate Investment Band <span className="text-[#26231F]/50 font-normal">(Optional)</span>
              </label>
              <select
                id="budgetBand"
                value={budgetBand}
                onChange={(e) => setBudgetBand(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-[#F5F1E9] border border-[#26231F]/25 text-[#26231F] focus:outline-none focus:border-[#61432F]"
              >
                <option value="I’d like guidance based on material specification">I’d like guidance based on material & hardware specification</option>
                <option value="₹2.5L – ₹4.5L (Focused Modular Kitchen or Wardrobe Suite)">₹2.5L – ₹4.5L (Single Modular Kitchen or Master Wardrobe Suite)</option>
                <option value="₹4.5L – ₹8.5L (Premium Veneer/PU Kitchen or Multi-Room Joinery)">₹4.5L – ₹8.5L (Premium Veneer/PU Kitchen or Multi-Room Joinery)</option>
                <option value="₹8.5L+ (Complete Residence Modular Kitchen & Bespoke Furniture)">₹8.5L+ (Complete Residence Kitchen, Wardrobes & Bespoke Furniture)</option>
              </select>
            </div>
          </div>

          {/* Consent Checkboxes (No preselected promotional consent per Blueprint Section 10) */}
          <div className="space-y-3 pt-2 border-t border-[#26231F]/12 text-xs">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={contactConsent}
                onChange={(e) => setContactConsent(e.target.checked)}
                className="mt-0.5 accent-[#61432F] w-4 h-4 shrink-0"
              />
              <span className="text-[#26231F]/90 leading-relaxed">
                <strong>Contact Consent (Required):</strong> I agree that Wood N Work may contact me via phone, WhatsApp, or email to discuss this project enquiry and prepare a specification brief.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="mt-0.5 accent-[#61432F] w-4 h-4 shrink-0"
              />
              <span className="text-[#26231F]/70 leading-relaxed">
                <strong>Optional Updates:</strong> Send me occasional material guides and new Nashik project case studies (unchecked by default; unsubscribe anytime).
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-4 py-2.5 border border-[#26231F]/25 text-xs font-medium text-[#26231F] hover:bg-[#E5DEC9] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Project Scope (Answers Preserved)</span>
            </button>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 text-[11px] text-[#26231F]/55 cursor-pointer">
                <input
                  type="checkbox"
                  checked={simulateDeliveryFailure}
                  onChange={(e) => setSimulateDeliveryFailure(e.target.checked)}
                  className="accent-[#61432F]"
                />
                <span>Test offline fallback</span>
              </label>

              <button
                type="submit"
                className="px-6 py-3 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#4d3525] transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Send Project Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Direct Contact Alternative Footer */}
      <div className="mt-8 pt-6 border-t border-[#26231F]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#26231F]/75">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#61432F]" />
          <span>Prefer to speak directly? Call or WhatsApp:</span>
          <a
            href="tel:+919090999916"
            className="font-mono-tabular font-semibold text-[#26231F] hover:text-[#61432F] underline underline-offset-4"
          >
            +91 9090 9999 16
          </a>
        </div>
        <button
          type="button"
          onClick={() =>
            onWhatsAppClick(
              `I'd like to discuss a ${projectType.toLowerCase()} project in ${cityArea}.`
            )
          }
          className="text-xs font-medium text-[#61432F] hover:text-[#26231F] underline underline-offset-4 inline-flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
        >
          <span>Open WhatsApp with prefilled brief</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { MATERIALS_CATALOG, MaterialItem } from '../data/siteData';
import { ArrowRight, Check, Info } from 'lucide-react';

interface MaterialSelectorWidgetProps {
  onSelectForEnquiry?: (summary: string) => void;
  compact?: boolean;
}

export const MaterialSelectorWidget: React.FC<MaterialSelectorWidgetProps> = ({
  onSelectForEnquiry,
  compact = false,
}) => {
  const substrates = MATERIALS_CATALOG.filter((m) => m.category === 'Substrates & Cores');
  const finishes = MATERIALS_CATALOG.filter((m) => m.category === 'Surface Finishes');
  const hardware = MATERIALS_CATALOG.filter((m) => m.category === 'Hardware & Motion');

  const [selectedSubstrate, setSelectedSubstrate] = useState<MaterialItem>(substrates[0]);
  const [selectedUpperFinish, setSelectedUpperFinish] = useState<MaterialItem>(finishes[2]); // Matte Acrylic Sand
  const [selectedBaseFinish, setSelectedBaseFinish] = useState<MaterialItem>(finishes[0]); // Walnut Veneer
  const [selectedCounter, setSelectedCounter] = useState<'travertine' | 'quartz-ivory' | 'granite-nero'>('travertine');

  const counterSpecs = {
    travertine: {
      name: 'Honed Travertine / Creamy Limestone Look Quartz',
      hex: '#E6DEC8',
      edgeHex: '#D5C9AE',
      note: 'Warm architectural stone tone; non-porous quartz composite recommended for heavy turmeric and lemon use.',
    },
    'quartz-ivory': {
      name: 'Matte Warm Ivory Engineered Quartz (20mm)',
      hex: '#F2EEE4',
      edgeHex: '#DFD8C8',
      note: 'High stain and scratch resistance; pairs quietly with fluted oak or walnut base cabinetry.',
    },
    'granite-nero': {
      name: 'Leathered River Black Granite (18mm + Chamfer)',
      hex: '#2C2A29',
      edgeHex: '#1F1D1C',
      note: 'Traditional Indian kitchen workhorse with a low-sheen tactile brushed surface that hides water marks.',
    },
  };

  const activeCounter = counterSpecs[selectedCounter];

  const handleCarryToEnquiry = () => {
    if (onSelectForEnquiry) {
      const specString = `Material Spec: Core [${selectedSubstrate.name}] + Base Finish [${selectedBaseFinish.name}] + Upper Finish [${selectedUpperFinish.name}] + Worktop [${activeCounter.name}]`;
      onSelectForEnquiry(specString);
    }
  };

  return (
    <div className="border border-[#26231F]/12 bg-[#FAF7F2] p-6 md:p-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-[#26231F]/10">
        <div>
          <p className="text-xs tracking-wider uppercase text-[#61432F] font-medium mb-2">
            Interactive Specification Studio
          </p>
          <h3 className="font-serif-display text-2xl md:text-3xl font-semibold text-[#26231F]">
            Separate the structural core from the outer finish
          </h3>
        </div>
        <p className="text-xs text-[#26231F]/70 max-w-md flex items-start gap-2">
          <Info className="w-4 h-4 text-[#61432F] shrink-0 mt-0.5" />
          <span>
            Screen previews illustrate tonal pairing and construction layers. Because natural timber grain and workshop lighting vary, we review physical sample boards during your consultation.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch">
        {/* Left 7 Columns: Architectural Elevation & Cross-Section Visualizer */}
        <div className="lg:col-span-7 flex flex-col justify-between border border-[#26231F]/12 bg-[#F5F1E9] p-6 md:p-8">
          <div className="flex items-center justify-between text-xs text-[#26231F]/70 mb-6">
            <span className="font-medium text-[#26231F]">Illustrative Kitchen Joinery Cutaway</span>
            <span className="font-mono-tabular">Scale 1:20 · Millimetre Precision</span>
          </div>

          {/* Interactive SVG / CSS Architectural Elevation */}
          <div className="relative w-full aspect-[16/10] bg-[#EAE3D5] border border-[#26231F]/15 p-6 flex flex-col justify-between overflow-hidden">
            {/* Upper Wall Cabinets */}
            <div className="grid grid-cols-4 gap-1.5 h-[36%] w-4/5 mx-auto">
              {[0, 1, 2, 3].map((bay) => (
                <div
                  key={bay}
                  style={{ backgroundColor: selectedUpperFinish.colorHex }}
                  className="relative border border-[#26231F]/25 transition-colors duration-200 flex flex-col justify-end p-2"
                >
                  {selectedUpperFinish.grainPattern === 'woven-cane' && (
                    <div
                      className="absolute inset-2 border border-[#26231F]/20 opacity-40"
                      style={{
                        backgroundImage:
                          'radial-gradient(#26231F 1px, transparent 1px)',
                        backgroundSize: '6px 6px',
                      }}
                    />
                  )}
                  <span className="w-4 h-0.5 bg-[#26231F]/30 mx-auto" />
                </div>
              ))}
            </div>

            {/* Backsplash Zone */}
            <div className="h-[16%] w-4/5 mx-auto flex items-center justify-between px-4 text-[11px] text-[#26231F]/65 font-mono-tabular">
              <span>600mm Dado Clearance</span>
              <span>Concealed 3000K Task Profile</span>
            </div>

            {/* Countertop Slab */}
            <div
              style={{
                backgroundColor: activeCounter.hex,
                borderBottomColor: activeCounter.edgeHex,
              }}
              className="h-[7%] w-[84%] mx-auto border border-[#26231F]/25 border-b-4 transition-colors duration-200"
            />

            {/* Base Cabinets + Exposed Carcass Layer Indicator */}
            <div className="grid grid-cols-4 gap-1.5 h-[41%] w-4/5 mx-auto">
              {[0, 1, 2, 3].map((bay) => {
                const isCutawayBay = bay === 0;
                return (
                  <div
                    key={bay}
                    style={{
                      backgroundColor: isCutawayBay
                        ? selectedSubstrate.colorHex
                        : selectedBaseFinish.colorHex,
                    }}
                    className="relative border border-[#26231F]/30 transition-colors duration-200 flex flex-col justify-between p-2"
                  >
                    {isCutawayBay ? (
                      <div className="h-full border border-dashed border-[#26231F]/50 bg-[#F5F1E9]/85 p-1.5 flex flex-col justify-between text-[10px] text-[#26231F]">
                        <span className="font-mono-tabular font-medium uppercase tracking-tighter text-[#61432F]">
                          Core Cutaway
                        </span>
                        <span className="leading-tight font-medium">
                          {selectedSubstrate.thicknessOptions.split(',')[0]}
                        </span>
                      </div>
                    ) : (
                      <>
                        {selectedBaseFinish.grainPattern === 'wood-smoked' && (
                          <div
                            className="absolute inset-0 opacity-25 pointer-events-none"
                            style={{
                              backgroundImage:
                                'repeating-linear-gradient(90deg, transparent, transparent 4px, #1a120b 4px, #1a120b 5px)',
                            }}
                          />
                        )}
                        <div className="h-1/3 border-b border-[#26231F]/25 w-full flex items-center justify-center">
                          <span className="w-5 h-0.5 bg-[#D9CDBD]/60" />
                        </div>
                        <div className="h-2/3 w-full flex items-center justify-center">
                          <span className="w-5 h-0.5 bg-[#D9CDBD]/60" />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Specification Readout */}
          <div className="mt-6 pt-5 border-t border-[#26231F]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[#26231F]/60 block mb-0.5">Internal Carcass Core (Bay 1 Cutaway)</span>
              <p className="font-medium text-[#26231F]">{selectedSubstrate.name}</p>
              <p className="text-[#61432F] mt-0.5">{selectedSubstrate.moistureResistance}</p>
            </div>
            <div>
              <span className="text-[#26231F]/60 block mb-0.5">Daily Maintenance & Care Note</span>
              <p className="font-medium text-[#26231F]">{selectedBaseFinish.dailyCare}</p>
            </div>
            <div className="sm:col-span-2 pt-2 border-t border-[#26231F]/10">
              <span className="text-[#26231F]/60 block mb-0.5">Honest Material Limitation</span>
              <p className="text-[#26231F]/85">{selectedBaseFinish.honestLimitations}</p>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Controls for Core, Base Finish, Upper Finish, and Worktop */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* 1. Core Substrate */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#26231F] mb-2.5">
              01. Internal Structural Core (Carcass)
            </label>
            <div className="space-y-2">
              {substrates.map((sub) => {
                const active = selectedSubstrate.id === sub.id;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSelectedSubstrate(sub)}
                    className={`w-full text-left p-3 border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                      active
                        ? 'border-[#61432F] bg-[#61432F]/8 text-[#26231F]'
                        : 'border-[#26231F]/15 bg-[#F5F1E9] text-[#26231F]/80 hover:border-[#26231F]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-5 h-5 shrink-0 border border-[#26231F]/30"
                        style={{ backgroundColor: sub.colorHex }}
                      />
                      <div className="truncate">
                        <p className="text-xs font-semibold truncate">{sub.name}</p>
                        <p className="text-[11px] text-[#26231F]/65 truncate">{sub.gradeOrSpec}</p>
                      </div>
                    </div>
                    {active && <Check className="w-4 h-4 text-[#61432F] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Base Shutter Finish */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#26231F] mb-2.5">
              02. Lower Base & Tall Unit Finish
            </label>
            <div className="grid grid-cols-2 gap-2">
              {finishes.map((fin) => {
                const active = selectedBaseFinish.id === fin.id;
                return (
                  <button
                    key={fin.id}
                    type="button"
                    onClick={() => setSelectedBaseFinish(fin)}
                    className={`p-2.5 border text-left transition-colors cursor-pointer flex items-center gap-2.5 ${
                      active
                        ? 'border-[#61432F] bg-[#61432F]/8'
                        : 'border-[#26231F]/15 bg-[#F5F1E9] hover:border-[#26231F]/40'
                    }`}
                  >
                    <span
                      className="w-5 h-5 shrink-0 border border-[#26231F]/25"
                      style={{ backgroundColor: fin.colorHex }}
                    />
                    <span className="text-xs font-medium text-[#26231F] truncate">
                      {fin.name.split(' ')[0]} {fin.name.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Upper Overhead Finish */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#26231F] mb-2.5">
              03. Overhead Wall Cabinet Finish
            </label>
            <div className="grid grid-cols-2 gap-2">
              {finishes.map((fin) => {
                const active = selectedUpperFinish.id === fin.id;
                return (
                  <button
                    key={fin.id}
                    type="button"
                    onClick={() => setSelectedUpperFinish(fin)}
                    className={`p-2.5 border text-left transition-colors cursor-pointer flex items-center gap-2.5 ${
                      active
                        ? 'border-[#61432F] bg-[#61432F]/8'
                        : 'border-[#26231F]/15 bg-[#F5F1E9] hover:border-[#26231F]/40'
                    }`}
                  >
                    <span
                      className="w-5 h-5 shrink-0 border border-[#26231F]/25"
                      style={{ backgroundColor: fin.colorHex }}
                    />
                    <span className="text-xs font-medium text-[#26231F] truncate">
                      {fin.name.split(' ')[0]} {fin.name.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Worktop Surface */}
          {!compact && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#26231F] mb-2.5">
                04. Countertop Pairing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['travertine', 'quartz-ivory', 'granite-nero'] as const).map((key) => {
                  const active = selectedCounter === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedCounter(key)}
                      className={`p-2 border text-left transition-colors cursor-pointer flex items-center gap-2 ${
                        active
                          ? 'border-[#61432F] bg-[#61432F]/8'
                          : 'border-[#26231F]/15 bg-[#F5F1E9] hover:border-[#26231F]/40'
                      }`}
                    >
                      <span
                        className="w-4 h-4 shrink-0 border border-[#26231F]/25"
                        style={{ backgroundColor: counterSpecs[key].hex }}
                      />
                      <span className="text-xs font-medium text-[#26231F] truncate capitalize">
                        {key.replace('-', ' ')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="pt-2">
            <div className="text-xs text-[#26231F]/70 mb-3">
              <span>Paired Hardware Standard: </span>
              <span className="font-medium text-[#26231F]">{hardware[0]?.name}</span>
            </div>
            {onSelectForEnquiry && (
              <button
                type="button"
                onClick={handleCarryToEnquiry}
                className="w-full py-3 px-5 bg-[#61432F] text-[#F5F1E9] text-xs font-medium tracking-wide hover:bg-[#4d3525] transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Request Physical Samples & Discuss This Spec</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

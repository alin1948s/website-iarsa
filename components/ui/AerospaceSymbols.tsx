import React from "react";
import Image from "next/image";

interface SymbolProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * Mechanically Calibrated 4-Blade Articulated Rotor Head (IAR 330 Puma)
 * Symmetrical 4-axis rotor hub: central mast, articulated blade roots,
 * flapping hinge bearings, and pitch control linkages.
 */
export function RotorHeadSymbol({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer Tip Path Disc (Ambient Guide) */}
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
      <circle cx="32" cy="32" r="11" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1" />

      {/* 4 Symmetrical Rotor Blades with Aerodynamic Pitch Cuffs */}
      {/* North (0°) */}
      <path d="M30 4h4l1 17h-6L30 4z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="32" y1="4" x2="32" y2="21" stroke="currentColor" strokeWidth="1.5" />
      {/* East (90°) */}
      <path d="M60 30v4l-17 1v-6l17 1z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="60" y1="32" x2="43" y2="32" stroke="currentColor" strokeWidth="1.5" />
      {/* South (180°) */}
      <path d="M34 60h-4l-1-17h6l-1 17z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="32" y1="60" x2="32" y2="43" stroke="currentColor" strokeWidth="1.5" />
      {/* West (270°) */}
      <path d="M4 34v-4l17-1v6L4 34z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="4" y1="32" x2="21" y2="32" stroke="currentColor" strokeWidth="1.5" />

      {/* 4 Articulation Flapping Hinge Bearings */}
      <circle cx="32" cy="18" r="2" fill="currentColor" />
      <circle cx="46" cy="32" r="2" fill="currentColor" />
      <circle cx="32" cy="46" r="2" fill="currentColor" />
      <circle cx="18" cy="32" r="2" fill="currentColor" />

      {/* 4 Diagonal Pitch Control Horns / Linkages */}
      <line x1="25" y1="25" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="39" y1="25" x2="44" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="39" y1="39" x2="44" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="39" x2="20" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Central Rotor Mast Spindle & Retaining Nut */}
      <circle cx="32" cy="32" r="5" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

/**
 * Military HUD Symbology (MIL-STD-1787 Glass Cockpit / Targeting HUD)
 * Balanced optical collimator frame, boresight reticle, horizon director wings,
 * cardinal ticks, and centered tactical target acquisition diamond.
 */
export function AvionicsHudSymbol({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Precision Corner Brackets (Optical Collimator Boundary) */}
      <path d="M8 18V10h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 10h10v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 46v8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 54h10v-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* Flight Director Horizon Wings (Attitude Bars) */}
      <path d="M12 32h11v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 32H41v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* Outer Azimuth Reticle Ring */}
      <circle cx="32" cy="32" r="17" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />

      {/* 4 Cardinal Index Marks */}
      <line x1="32" y1="11" x2="32" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="32" y1="49" x2="32" y2="53" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="11" y1="32" x2="15" y2="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="49" y1="32" x2="53" y2="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

      {/* Central Tactical Target Acquisition Diamond & Pipper */}
      <polygon points="32,25 39,32 32,39 25,32" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.18" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />

      {/* Symmetrical Pitch Ladder Reference Bars */}
      <line x1="27" y1="21" x2="37" y2="21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="32" y1="21" x2="32" y2="19" stroke="currentColor" strokeWidth="1.2" />
      <line x1="27" y1="43" x2="37" y2="43" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="32" y1="43" x2="32" y2="45" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Level D MRO Industrial Hangar with 3.2t Overhead Crane & Aircraft Dock
 */
export function DepotHangarSymbol({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Industrial Hangar Bay Architecture */}
      <path d="M6 54V25L32 9l26 16v29H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.06" />

      {/* Structural Roof Tie & King Post Trusses */}
      <line x1="6" y1="25" x2="58" y2="25" stroke="currentColor" strokeWidth="1.5" />
      <line x1="32" y1="9" x2="32" y2="25" stroke="currentColor" strokeWidth="1.3" />
      <line x1="19" y1="17" x2="32" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="17" x2="32" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.6" />

      {/* Overhead Gantry Crane (Pod Rulant 3,2 Tone) */}
      <rect x="11" y="28" width="42" height="3" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <rect x="28" y="27" width="8" height="5" rx="1" fill="currentColor" />
      <line x1="32" y1="32" x2="32" y2="38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 38c0 2 4 2 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

      {/* Rotary-Wing Aircraft In Dock Silhouette */}
      <line x1="18" y1="43" x2="46" y2="43" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M26 43l3 4h6l3-4z" fill="currentColor" opacity="0.8" />
      <line x1="24" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="47" x2="27" y2="50" stroke="currentColor" strokeWidth="1.2" />
      <line x1="36" y1="47" x2="37" y2="50" stroke="currentColor" strokeWidth="1.2" />

      {/* Polished Runway / Apron Floor Baseline */}
      <line x1="4" y1="54" x2="60" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Precision Aerospace Structural Wing Rib / CNC Spar (MFG-AERO-03)
 */
export function AirframeRibSymbol({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Supersonic Aerodynamic Structural Spar / Rib Profile */}
      <path d="M6 34L26 14h32l-9 36H18L6 34z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />

      {/* Precision CNC Milled Lightening Pockets */}
      <polygon points="25,20 37,20 33,31 21,31" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
      <polygon points="40,20 50,20 44,31 36,31" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
      <polygon points="23,35 33,35 30,44 19,44" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
      <polygon points="36,35 44,35 41,44 32,44" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />

      {/* Precision CAD Datum Reference Crosshairs */}
      <line x1="13" y1="12" x2="13" y2="18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="10" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="51" y1="44" x2="51" y2="50" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="48" y1="47" x2="54" y2="47" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Non-Destructive Testing (NDT) Ultrasonic & Radiographic Inspection Probe
 * High-precision sensor emitting calibrated penetration wave pulses through an aerospace specimen block.
 */
export function NdtInspectionSymbol({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Ultrasonic Transducer Sensor Probe */}
      <path d="M26 6h12v11l-3 4h-6l-3-4V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
      <line x1="32" y1="2" x2="32" y2="6" stroke="currentColor" strokeWidth="1.6" />

      {/* Radiating NDT Ultrasonic Waves */}
      <path d="M23 26c5 3 13 3 18 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 31c9 5 21 5 30 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 36c13 7 29 7 42 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

      {/* Inspected Aeronautical Specimen Block */}
      <rect x="7" y="44" width="50" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1" />

      {/* Internal Flaw Defect & Acoustic Echo Focal Point */}
      <circle cx="32" cy="51" r="3.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1.5" />
      <circle cx="32" cy="51" r="1.5" fill="currentColor" />
      <line x1="26" y1="51" x2="23" y2="51" stroke="currentColor" strokeWidth="1.2" />
      <line x1="41" y1="51" x2="38" y2="51" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Honeycomb Composite Core (Nomex / Carbon Sandwich Structure)
 * Mathematically balanced 7-cell regular hexagonal rosette with carbon weave center.
 */
export function HoneycombCompositeSymbol({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Center Hexagon Cell */}
      <polygon points="32,23 39.8,27.5 39.8,36.5 32,41 24.2,36.5 24.2,27.5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.25" strokeLinejoin="round" />
      {/* Top Hexagon */}
      <polygon points="32,7 39.8,11.5 39.8,20.5 32,25 24.2,20.5 24.2,11.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Bottom Hexagon */}
      <polygon points="32,39 39.8,43.5 39.8,52.5 32,57 24.2,52.5 24.2,43.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Top Right Hexagon */}
      <polygon points="45.5,15 53.3,19.5 53.3,28.5 45.5,33 37.7,28.5 37.7,19.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Bottom Right Hexagon */}
      <polygon points="45.5,31 53.3,35.5 53.3,44.5 45.5,49 37.7,44.5 37.7,35.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Top Left Hexagon */}
      <polygon points="18.5,15 26.3,19.5 26.3,28.5 18.5,33 10.7,28.5 10.7,19.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Bottom Left Hexagon */}
      <polygon points="18.5,31 26.3,35.5 26.3,44.5 18.5,49 10.7,44.5 10.7,35.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />

      {/* Carbon Core Structural Center Node */}
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

/**
 * Turboshaft Engine Schematic (Turbomeca Turmo IVC)
 */
export function TurboshaftEngineSymbol({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M5 24h9l4-5h16l6 3h18c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H40l-6 3H18l-4-5H5c-1.1 0-2-.9-2-2V26c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.06"
        strokeLinejoin="round"
      />
      <line x1="3" y1="32" x2="61" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
      <path d="M5 26c2.5 3 2.5 9 0 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="5,32 10,29 10,35" fill="currentColor" opacity="0.8" />
      <line x1="13" y1="25" x2="13" y2="39" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="26" x2="16" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="27" x2="19" y2="37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M23 23c2 4 2 14 0 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="29" y="21" width="10" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.25" />
      <rect x="29" y="38" width="10" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.25" />
      <line x1="42" y1="24" x2="42" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="46" y1="23" x2="46" y2="41" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M49 24l11-4v24l-11-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Historical IAR Heritage Seal (1925–Present)
 */
export function IarHeritageSeal({ className = "text-sky-400", size = 56, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="36" cy="36" r="34" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="36" r="30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="36" cy="36" r="22" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M36 17l3 11 13 4-13 2-2 8 4 3-5-1-5 1 4-3-2-8-13-2 13-4 3-11z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <text x="36" y="58" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
        1925
      </text>
      <text x="36" y="14" fill="currentColor" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.5">
        IAR BRAȘOV
      </text>
    </svg>
  );
}

/**
 * NATO AQAP 2110 & Military Defense Standard Seal
 */
export function NatoAqapSeal({ className = "text-sky-400", size = 48, ...props }: SymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <polygon
        points="32,6 35,26 48,18 38,29 58,32 38,35 48,46 35,38 32,58 29,38 16,46 26,35 6,32 26,29 16,18 29,26"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="currentColor"
        fillOpacity="0.12"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
      <circle cx="32" cy="32" r="4.5" fill="currentColor" />
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    </svg>
  );
}

/**
 * AUTHENTIC MILITARY & STATE BENEFICIARY INSIGNIA
 * Official transparent coats of arms for Romanian Armed Forces & State Institutions.
 */
const beneficiaryEmblemMap: Record<string, { src: string; alt: string }> = {
  roaf: { src: "/images/beneficiari/roaf.png", alt: "Forțele Aeriene Române" },
  ronavy: { src: "/images/beneficiari/ronavy.png", alt: "Forțele Navale Române" },
  mai: { src: "/images/beneficiari/mai.png", alt: "Ministerul Afacerilor Interne" },
  sri: { src: "/images/beneficiari/sri.png", alt: "Serviciul Român de Informații" },
  airbus: { src: "/images/beneficiari/airbus.png", alt: "Airbus Helicopters" },
};

export function BeneficiaryInsignia({
  type,
  className = "",
  size = 64,
}: {
  type: "roaf" | "ronavy" | "mai" | "sri" | "airbus";
  className?: string;
  size?: number;
}) {
  const emblem = beneficiaryEmblemMap[type] || beneficiaryEmblemMap.roaf;
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={emblem.src}
        alt={emblem.alt}
        width={size}
        height={size}
        className="max-h-full max-w-full object-contain filter drop-shadow-md"
      />
    </div>
  );
}

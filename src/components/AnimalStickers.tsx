export function Bunny({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
        <ellipse cx="35" cy="25" rx="12" ry="30" fill="#F5F5DC" />
        <ellipse cx="65" cy="25" rx="12" ry="30" fill="#F5F5DC" />
        <ellipse cx="35" cy="25" rx="7" ry="20" fill="#FFE4E1" />
        <ellipse cx="65" cy="25" rx="7" ry="20" fill="#FFE4E1" />
        <circle cx="50" cy="65" r="35" fill="#F5F5DC" />
        <circle cx="38" cy="60" r="6" fill="#333" />
        <circle cx="62" cy="60" r="6" fill="#333" />
        <circle cx="40" cy="58" r="2" fill="white" />
        <circle cx="64" cy="58" r="2" fill="white" />
        <ellipse cx="50" cy="70" rx="5" ry="4" fill="#FFB6C1" />
        <path d="M 44 76 Q 50 82 56 76" stroke="#333" strokeWidth="2" fill="none" />
        <ellipse cx="30" cy="72" rx="6" ry="4" fill="#FFB6C1" opacity="0.6" />
        <ellipse cx="70" cy="72" rx="6" ry="4" fill="#FFB6C1" opacity="0.6" />
      </svg>
    </div>
  );
}

export function Bird({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
        <ellipse cx="50" cy="50" rx="30" ry="25" fill="#87CEEB" />
        <circle cx="65" cy="40" r="18" fill="#87CEEB" />
        <path d="M 78 42 L 95 38 L 78 46 Z" fill="#FFA500" />
        <circle cx="70" cy="38" r="5" fill="white" />
        <circle cx="72" cy="38" r="3" fill="#333" />
        <ellipse cx="35" cy="50" rx="18" ry="12" fill="#ADD8E6" />
        <ellipse cx="45" cy="68" rx="8" ry="5" fill="#FFA500" />
        <ellipse cx="55" cy="68" rx="8" ry="5" fill="#FFA500" />
      </svg>
    </div>
  );
}

export function Butterfly({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
        <ellipse cx="30" cy="30" rx="25" ry="20" fill="#FFB6C1" />
        <ellipse cx="70" cy="30" rx="25" ry="20" fill="#FFB6C1" />
        <ellipse cx="30" cy="55" rx="18" ry="15" fill="#FFC0CB" />
        <ellipse cx="70" cy="55" rx="18" ry="15" fill="#FFC0CB" />
        <ellipse cx="50" cy="40" rx="6" ry="30" fill="#333" />
        <ellipse cx="30" cy="30" rx="10" ry="8" fill="#FF69B4" opacity="0.5" />
        <ellipse cx="70" cy="30" rx="10" ry="8" fill="#FF69B4" opacity="0.5" />
        <path d="M 47 15 Q 45 5 40 8" stroke="#333" strokeWidth="2" fill="none" />
        <path d="M 53 15 Q 55 5 60 8" stroke="#333" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

export function Flower({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <rect x="46" y="50" width="8" height="40" rx="4" fill="#7CB342" />
        <ellipse cx="35" cy="70" rx="15" ry="8" fill="#A5D6A7" transform="rotate(-30 35 70)" />
        <ellipse cx="30" cy="30" rx="18" ry="14" fill="#FFD54F" />
        <ellipse cx="70" cy="30" rx="18" ry="14" fill="#FFD54F" />
        <ellipse cx="30" cy="60" rx="18" ry="14" fill="#FFD54F" />
        <ellipse cx="70" cy="60" rx="18" ry="14" fill="#FFD54F" />
        <ellipse cx="50" cy="45" rx="20" ry="15" fill="#FFD54F" />
        <circle cx="50" cy="45" r="15" fill="#FFA000" />
        <circle cx="48" cy="43" r="3" fill="#FFF59D" />
      </svg>
    </div>
  );
}

export function Mushroom({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <rect x="38" y="55" width="24" height="40" rx="4" fill="#F5F5DC" />
        <ellipse cx="50" cy="45" rx="40" ry="25" fill="#E57373" />
        <circle cx="35" cy="40" r="6" fill="white" />
        <circle cx="55" cy="35" r="8" fill="white" />
        <circle cx="70" cy="45" r="5" fill="white" />
        <circle cx="42" cy="52" r="4" fill="white" />
      </svg>
    </div>
  );
}

export function Ladybug({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="55" r="35" fill="#E53935" />
        <line x1="50" y1="25" x2="50" y2="90" stroke="#333" strokeWidth="3" />
        <circle cx="50" cy="30" r="18" fill="#333" />
        <circle cx="43" cy="25" r="4" fill="white" />
        <circle cx="57" cy="25" r="4" fill="white" />
        <path d="M 42 12 Q 35 5 30 10" stroke="#333" strokeWidth="2" fill="none" />
        <path d="M 58 12 Q 65 5 70 10" stroke="#333" strokeWidth="2" fill="none" />
        <circle cx="35" cy="50" r="6" fill="#333" />
        <circle cx="65" cy="50" r="6" fill="#333" />
        <circle cx="40" cy="70" r="5" fill="#333" />
        <circle cx="60" cy="70" r="5" fill="#333" />
      </svg>
    </div>
  );
}

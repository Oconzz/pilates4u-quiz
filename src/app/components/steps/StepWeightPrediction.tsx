interface StepWeightPredictionProps {
  onNext: () => void;
}

export function StepWeightPrediction({ onNext }: StepWeightPredictionProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1 className="text-center mb-2 px-2" style={{ fontWeight: 800, fontSize: "1.35rem", lineHeight: "1.35", color: "#111" }}>
        El último plan que necesitas para ponerte en forma
      </h1>
      <p className="text-center text-gray-400 mb-1" style={{ fontSize: "0.82rem" }}>
        Predecimos que estarás con
      </p>
      <p className="text-center mb-6" style={{ fontWeight: 700, fontSize: "1.05rem", color: "#22c55e" }}>
        70kg en hasta 21 días
      </p>

      {/* Gradient triangle chart */}
      <div className="w-full mb-8 relative" style={{ height: "180px" }}>
        <svg
          viewBox="0 0 300 160"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            {/* Main gradient: red-top-left → yellow → green-bottom-right */}
            <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="70%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <clipPath id="triClip">
              {/* Curved triangle: top-left → bottom-right, curve outward */}
              <path d="M 0 0 Q 100 20 260 140 L 280 155 L 0 155 Z" />
            </clipPath>
            {/* Grid lines overlay */}
            <linearGradient id="fadeOut" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f7f7fb" stopOpacity="0" />
              <stop offset="100%" stopColor="#f7f7fb" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Filled triangle area */}
          <path
            d="M 0 0 Q 100 20 260 140 L 280 155 L 0 155 Z"
            fill="url(#triGrad)"
            opacity="0.85"
          />

          {/* Grid lines */}
          {[1, 2, 3].map((i) => (
            <line
              key={`v${i}`}
              x1={i * 70}
              y1="0"
              x2={i * 70}
              y2="155"
              stroke="white"
              strokeWidth="0.7"
              strokeOpacity="0.4"
            />
          ))}
          {[1, 2, 3].map((i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 40}
              x2="280"
              y2={i * 40}
              stroke="white"
              strokeWidth="0.7"
              strokeOpacity="0.4"
            />
          ))}

          {/* Curve line */}
          <path
            d="M 0 0 Q 100 20 260 140"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Start dot */}
          <circle cx="0" cy="0" r="5" fill="#ef4444" />

          {/* End dot + label */}
          <circle cx="265" cy="143" r="5" fill="#22c55e" />
          <rect x="248" y="127" width="34" height="14" rx="3" fill="#22c55e" />
          <text x="265" y="138" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
            70kg
          </text>
        </svg>

        {/* "Hoje" label */}
        <div className="absolute top-0 left-0 -translate-y-5" style={{ fontSize: "0.75rem", color: "#666" }}>
          Hoy
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ background: "#c026d3", fontWeight: 600, fontSize: "0.95rem" }}
      >
        Continuar
      </button>
    </div>
  );
}

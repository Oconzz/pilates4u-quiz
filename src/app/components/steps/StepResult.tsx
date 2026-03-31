interface StepResultProps {
  onContinue: () => void;
  userName: string;
}

export function StepResult({ onContinue, userName }: StepResultProps) {
  const width = 220;
  const height = 130;

  // Triangle points: top-left (high weight), middle (you), bottom-right (goal week 3)
  const p1 = { x: 20, y: 20 };    // "Tu peso"
  const p2 = { x: 120, y: 60 };   // "Tú"
  const p3 = { x: 200, y: 110 };  // "Semana 3"
  const p4 = { x: 200, y: 20 };   // top-right corner (close triangle)

  const gradId = "weightGrad";

  return (
    <div className="flex flex-col items-center w-full">
      {/* Chart */}
      <div className="w-full max-w-sm flex justify-center mb-6">
        <div className="relative">
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.65" />
              </linearGradient>
            </defs>

            {/* Filled triangle */}
            <polygon
              points={`${p1.x},${p1.y} ${p4.x},${p4.y} ${p3.x},${p3.y} ${p2.x},${p2.y}`}
              fill={`url(#${gradId})`}
            />

            {/* Grid lines (subtle) */}
            {[40, 60, 80].map((y) => (
              <line key={y} x1={p1.x} y1={y} x2={p4.x} y2={y} stroke="white" strokeOpacity="0.3" strokeWidth="0.5" />
            ))}
            {[60, 100, 140, 180].map((x) => (
              <line key={x} x1={x} y1={p1.y} x2={x} y2={p3.y} stroke="white" strokeOpacity="0.3" strokeWidth="0.5" />
            ))}

            {/* Line from p1 to p3 (the slope) */}
            <line
              x1={p1.x} y1={p1.y}
              x2={p3.x} y2={p3.y}
              stroke="white" strokeWidth="1.5" strokeOpacity="0.6"
            />

            {/* Dots */}
            <circle cx={p1.x} cy={p1.y} r="4" fill="#ef4444" />
            <circle cx={p2.x} cy={p2.y} r="4" fill="#f59e0b" />
            <circle cx={p3.x} cy={p3.y} r="4" fill="#22c55e" />

            {/* Labels */}
            {/* Tu peso label */}
            <g>
              <rect x={p1.x - 28} y={p1.y - 20} width={52} height={16} rx="4" fill="#ef4444" />
              <text x={p1.x - 2} y={p1.y - 8} textAnchor="middle" fill="white" fontSize="8" fontWeight="600">
                Tu peso
              </text>
            </g>

            {/* Tú label */}
            <g>
              <rect x={p2.x - 16} y={p2.y - 20} width={32} height={16} rx="4" fill="#f59e0b" />
              <text x={p2.x} y={p2.y - 8} textAnchor="middle" fill="white" fontSize="8" fontWeight="600">
                Tú
              </text>
            </g>

            {/* Semana 3 label */}
            <g>
              <rect x={p3.x - 30} y={p3.y + 6} width={54} height={16} rx="4" fill="#22c55e" />
              <text x={p3.x - 3} y={p3.y + 18} textAnchor="middle" fill="white" fontSize="8" fontWeight="600">
                Semana 3
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Text */}
      <h1 className="text-center px-4 mb-3" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-green-600">{userName || "Amiga"} </span>
        <span className="text-gray-900">¡tu plan de entrenamiento de</span>
        <br />
        <span className="text-gray-900">Pilates de 3 semanas está</span>
        <br />
        <span className="text-gray-900">listo!</span>
      </h1>

      <p className="text-purple-500 mb-3" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
        Cambio para siempre
      </p>

      <p className="text-gray-500 text-center px-6 mb-8" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
        Una vez que alcances tu peso ideal, utilizaremos las últimas semanas
        de tu programa para ayudarte a crear hábitos saludables que te
        permitan mantener tu peso.
      </p>

      <a
        href="https://pay.hotmart.com/T105168698W?checkoutMode=10"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-sm py-4 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 active:scale-95 text-center block no-underline"
        style={{ fontWeight: 600, fontSize: "0.95rem" }}
      >
        Continuar
      </a>
    </div>
  );
}

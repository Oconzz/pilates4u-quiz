interface StepObstaclesProps {
  selected: string[];
  onToggle: (value: string) => void;
}

const options = [
  { label: "Falta de constancia", value: "consistencia" },
  { label: "No tenía un plan claro", value: "plano" },
  { label: "Falta de tiempo", value: "tempo" },
  { label: "Dolores o lesiones", value: "dores" },
  { label: "Ninguna de las alternativas", value: "nenhuma" },
];

export function StepObstacles({ selected, onToggle }: StepObstaclesProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-2 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}
      >
        <span className="text-gray-900">¿Qué te </span>
        <span className="text-purple-500">impide</span>
        <span className="text-gray-900"> alcanzar tus objetivos?</span>
      </h1>
      <p
        className="text-gray-400 mb-6 text-center"
        style={{ fontSize: "0.82rem" }}
      >
        Selecciona todo lo que aplique
      </p>

      <div className="w-full max-w-sm flex flex-col gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              onClick={() => onToggle(opt.value)}
              className={`flex items-center justify-between w-full px-4 py-4 rounded-xl border text-left transition-all duration-200 ${
                isSelected
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
            >
              <span
                className={`${isSelected ? "text-purple-600" : "text-gray-700"}`}
                style={{ fontWeight: 500, fontSize: "0.9rem" }}
              >
                {opt.label}
              </span>
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  isSelected ? "border-purple-500 bg-purple-500" : "border-gray-300"
                }`}
              >
                {isSelected && (
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <path
                      d="M1 4L4 7L10 1"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

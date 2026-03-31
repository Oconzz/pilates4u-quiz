interface StepEnergyLevelsProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Bajo, me siento cansada durante el día", value: "low" },
  { label: "Siento una bajada de energía después del almuerzo", value: "afternoon-drop" },
  { label: "Solo tengo energía por la noche", value: "night-only" },
  { label: "Altos y estables", value: "high-stable" },
];

export function StepEnergyLevels({ selected, onSelect }: StepEnergyLevelsProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-gray-900">¿Cómo son tus </span>
        <span className="text-purple-500">niveles de energía</span>
        <br />
        <span className="text-gray-900">durante el día?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-0">
        {options.map((opt, index) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center justify-between w-full px-4 py-4 text-left transition-all duration-200 ${
              index !== 0 ? "border-t border-gray-100" : ""
            } ${selected === opt.value ? "bg-purple-50" : "bg-white hover:bg-gray-50"}`}
          >
            <span
              className={`flex-1 ${selected === opt.value ? "text-purple-600" : "text-gray-700"}`}
              style={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              {opt.label}
            </span>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-200 ${
                selected === opt.value ? "border-purple-500" : "border-gray-300"
              }`}
            >
              {selected === opt.value && (
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

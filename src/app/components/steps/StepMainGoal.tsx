interface StepMainGoalProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Perder peso", value: "perder-peso" },
  { label: "Aumentar la masa muscular", value: "massa-muscular" },
  { label: "Desarrollar flexibilidad", value: "flexibilidade" },
  { label: "Reducir el estrés y la ansiedad", value: "stress" },
  { label: "Mejorar la postura", value: "postura" },
];

export function StepMainGoal({ selected, onSelect }: StepMainGoalProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-8 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}
      >
        <span className="text-gray-900">¿Cuál es tu </span>
        <span className="text-purple-500">objetivo principal</span>
        <span className="text-gray-900"> en el Desafío?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center justify-between w-full px-4 py-4 rounded-xl border text-left transition-all duration-200 ${
              selected === opt.value
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            <span
              className={`${selected === opt.value ? "text-purple-600" : "text-gray-700"}`}
              style={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              {opt.label}
            </span>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
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

interface StepWorkRoutineProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { emoji: "☀️", label: "De 9h a 17h", value: "9to17" },
  { emoji: "😎", label: "Mis horarios son flexibles", value: "flexible" },
  { emoji: "🌙", label: "Turnos nocturnos", value: "night" },
  { emoji: "👩", label: "Estoy jubilada / No estoy trabajando actualmente", value: "retired" },
];

export function StepWorkRoutine({ selected, onSelect }: StepWorkRoutineProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem" }}>
        <span className="text-gray-900">¿Cómo es tu </span>
        <span className="text-purple-500">rutina de trabajo</span>
        <span className="text-gray-900">?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center gap-3 w-full px-4 py-4 rounded-xl border text-left transition-all duration-200 ${
              selected === opt.value
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            <span className="text-xl">{opt.emoji}</span>
            <span className="text-gray-800" style={{ fontWeight: 500, fontSize: "0.9rem" }}>
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

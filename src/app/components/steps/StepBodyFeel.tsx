interface StepBodyFeelProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { emoji: "😏", label: "Solo quisiera volver a tener mi cuerpo de antes", value: "voltar" },
  { emoji: "😤", label: "Nunca tuve el cuerpo que deseaba", value: "nunca" },
  { emoji: "😍", label: "Me siento bien", value: "bem" },
];

export function StepBodyFeel({ selected, onSelect }: StepBodyFeelProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-purple-500">¿Cómo te sientes</span>{" "}
        <span className="text-gray-900">con respecto a</span>
        <br />
        <span className="text-gray-900">tu cuerpo?</span>
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
            <span className="text-gray-800" style={{ fontWeight: 500, fontSize: "0.95rem" }}>
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

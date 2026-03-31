interface StepBestShapeProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Hace menos de 1 año", value: "less1" },
  { label: "Hace 1 a 2 años", value: "1to2" },
  { label: "Hace más de 3 años", value: "more3" },
  { label: "Nunca estuve", value: "never" },
];

export function StepBestShape({ selected, onSelect }: StepBestShapeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-gray-900">¿Hace cuánto tiempo estuviste en la </span>
        <span className="text-purple-500">mejor</span>
        <br />
        <span className="text-purple-500">forma</span>
        <span className="text-gray-900"> de tu vida?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-0">
        {options.map((opt, index) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center gap-3 w-full px-4 py-4 text-left transition-all duration-200 ${
              index !== 0 ? "border-t border-gray-200" : ""
            } ${selected === opt.value ? "bg-purple-50" : "bg-white hover:bg-gray-50"}`}
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                selected === opt.value ? "border-purple-500" : "border-gray-300"
              }`}
            >
              {selected === opt.value && (
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              )}
            </div>
            <span
              className={`${selected === opt.value ? "text-purple-600" : "text-gray-700"}`}
              style={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

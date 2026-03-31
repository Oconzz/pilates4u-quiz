interface StepTriedPilatesProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Sí, ya lo he probado", value: "yes" },
  { label: "No, nunca lo he probado", value: "no" },
];

export function StepTriedPilates({ selected, onSelect }: StepTriedPilatesProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-2" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-gray-900">¿Ya has probado entrenamientos de </span>
        <span className="text-purple-500">Pilates</span>
        <span className="text-gray-900"> antes?</span>
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

      {/* Woman image */}
      <div className="mt-6 flex justify-center">
        <div
          className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: "#f3e8ff" }}
        >
          <img
            src="https://images.unsplash.com/photo-1759476597683-f51b04cf58d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300"
            alt="woman exercising"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

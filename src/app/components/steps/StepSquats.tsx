interface StepSquatsProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Menos de 10", value: "less10" },
  { label: "10 a 20", value: "10to20" },
  { label: "21 a 31", value: "21to31" },
  { label: "Más de 30", value: "more30" },
  { label: "No sé", value: "dontknow" },
];

export function StepSquats({ selected, onSelect }: StepSquatsProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-gray-900">¿Cuántas </span>
        <span className="text-purple-500">sentadillas</span>
        <span className="text-gray-900"> puedes</span>
        <br />
        <span className="text-gray-900">hacer sin parar?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-0">
        {options.map((opt, index) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center justify-between w-full px-4 py-4 text-left transition-all duration-200 ${
              index !== 0 ? "border-t border-gray-200" : ""
            } ${selected === opt.value ? "bg-purple-50" : "bg-white hover:bg-gray-50"}`}
          >
            <span
              className={`${selected === opt.value ? "text-purple-600" : "text-gray-800"}`}
              style={{ fontWeight: 500, fontSize: "0.95rem" }}
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

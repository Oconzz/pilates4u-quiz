interface StepDedicationTimeProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "5 minutos", value: "5min" },
  { label: "10 minutos", value: "10min" },
  { label: "15 minutos", value: "15min" },
  { label: "+30 minutos", value: "30min+" },
];

export function StepDedicationTime({ selected, onSelect }: StepDedicationTimeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-2" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-purple-500">¿Cuánto tiempo</span>
        <span className="text-gray-900"> deseas dedicarle a tu cuerpo al día?</span>
      </h1>

      <div className="w-full max-w-sm grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center gap-2 px-4 py-4 rounded-xl border text-left transition-all duration-200 ${
              selected === opt.value
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                selected === opt.value ? "border-purple-500" : "border-gray-300"
              }`}
            >
              {selected === opt.value && (
                <div className="w-2 h-2 rounded-full bg-purple-500" />
              )}
            </div>
            <span
              className={`${selected === opt.value ? "text-purple-700" : "text-gray-700"}`}
              style={{ fontWeight: 500, fontSize: "0.88rem" }}
            >
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

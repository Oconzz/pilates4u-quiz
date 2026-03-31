interface StepLunchProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Entre las 10h00 y mediodía", icon: "🥗", value: "10-12" },
  { label: "Entre mediodía y 14h00", icon: "🥑", value: "12-14" },
  { label: "Entre las 14h00 y 16h00", icon: "🍱", value: "14-16" },
  { label: "Normalmente me salto el almuerzo", icon: "🥛", value: "skip" },
];

export function StepLunch({ selected, onSelect }: StepLunchProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-8 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem" }}
      >
        <span className="text-gray-900">¿Y el </span>
        <span className="text-purple-500">almuerzo</span>
        <span className="text-gray-900">?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-2">
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl border text-left transition-all duration-200 ${
                isSelected
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0">
                {opt.icon}
              </div>
              <span
                className={`flex-1 ${isSelected ? "text-purple-700" : "text-gray-700"}`}
                style={{ fontWeight: 500, fontSize: "0.9rem" }}
              >
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

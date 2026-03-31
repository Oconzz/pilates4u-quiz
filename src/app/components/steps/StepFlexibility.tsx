interface StepFlexibilityProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Bastante Flexible", value: "bastante" },
  { label: "Estoy empezando", value: "comecando" },
  { label: "No mucho", value: "nao-muito" },
  { label: "Puedo tocar mis dedos de los pies", value: "toes" },
];

export function StepFlexibility({ selected, onSelect }: StepFlexibilityProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-8 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}
      >
        <span className="text-gray-900">¿Cuál es tu nivel de </span>
        <span className="text-purple-500">flexibilidad</span>
        <span className="text-gray-900">?</span>
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

      <div className="mt-6 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1691421368594-c548c3163cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
          alt="Mujer estirando"
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

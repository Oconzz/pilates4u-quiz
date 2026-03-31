interface StepAgeGroupProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  {
    label: "18-29 años",
    value: "18-29",
    image: "https://images.unsplash.com/photo-1759476597683-f51b04cf58d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    label: "30-39 años",
    value: "30-39",
    image: "https://images.unsplash.com/photo-1654512590463-50287ca821a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    label: "40-49 años",
    value: "40-49",
    image: "https://images.unsplash.com/photo-1746559845100-0f5a36bfdbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    label: "50+ años",
    value: "50+",
    image: "https://images.unsplash.com/photo-1658314755911-c9b6ae54459c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

export function StepAgeGroup({ selected, onSelect }: StepAgeGroupProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-1 px-4" style={{ fontWeight: 800, fontSize: "1.4rem", lineHeight: "1.3" }}>
        <span className="text-gray-900">PLAN DE ENTRENAMIENTO DE </span>
        <span className="text-purple-500">PILATES</span>
        <br />
        <span className="text-purple-500">EL CÓDIGO DE LAS CURVAS</span>
      </h1>
      <p className="text-gray-400 mb-6 text-center" style={{ fontSize: "0.78rem", letterSpacing: "0.05em", fontWeight: 500 }}>
        PERSONALIZADO CON TU EDAD
      </p>

      <div className="w-full max-w-sm grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
              selected === opt.value
                ? "border-purple-500 shadow-md scale-[1.02]"
                : "border-transparent hover:border-purple-300"
            }`}
            style={{ backgroundColor: "#f3e8ff", minHeight: "180px" }}
          >
            <img
              src={opt.image}
              alt={opt.label}
              className="w-full object-cover object-top"
              style={{ height: "140px" }}
            />
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-gray-800" style={{ fontWeight: 600, fontSize: "0.85rem" }}>
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
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

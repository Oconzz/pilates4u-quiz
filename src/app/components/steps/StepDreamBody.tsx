interface StepDreamBodyProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  {
    label: "Delgado",
    value: "magro",
    image:
      "https://images.unsplash.com/photo-1576134902862-6eca58baee0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Atlético",
    value: "atletico",
    image:
      "https://images.unsplash.com/photo-1706550631754-d121fd4840be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Con curvas",
    value: "curvado",
    image:
      "https://images.unsplash.com/photo-1632843293871-46988ba4425a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Normal",
    value: "normal",
    image:
      "https://images.unsplash.com/photo-1669502299593-5dbb23edfdb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
];

export function StepDreamBody({ selected, onSelect }: StepDreamBodyProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem" }}>
        <span className="text-gray-900">¿Cuál es tu </span>
        <span className="text-purple-500">cuerpo soñado</span>
        <span className="text-gray-900">?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-0 border border-gray-200 rounded-xl overflow-hidden">
        {options.map((opt, index) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center justify-between w-full pl-4 text-left transition-all duration-200 ${
              selected === opt.value
                ? "bg-purple-500"
                : "bg-white hover:bg-purple-50"
            } ${index !== 0 ? "border-t border-gray-200" : ""}`}
            style={{ minHeight: "56px" }}
          >
            <span
              className={`${selected === opt.value ? "text-white" : "text-gray-800"}`}
              style={{ fontWeight: 500, fontSize: "0.95rem" }}
            >
              {opt.label}
            </span>
            <div className="w-14 h-14 overflow-hidden flex-shrink-0">
              <img
                src={opt.image}
                alt={opt.label}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

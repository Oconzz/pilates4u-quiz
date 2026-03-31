interface StepFocusRegionsProps {
  selected: string[];
  onToggle: (value: string) => void;
}

const options = [
  {
    label: "Abdomen",
    value: "barriga",
    image: "https://images.unsplash.com/photo-1586859033400-456458acb73e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Glúteos",
    value: "gluteos",
    image: "https://images.unsplash.com/photo-1532383282788-19b341e3c422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Piernas",
    value: "pernas",
    image: "https://images.unsplash.com/photo-1641808895412-8d0464f08e02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Pecho",
    value: "peito",
    image: "https://images.unsplash.com/photo-1576134902862-6eca58baee0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
];

export function StepFocusRegions({ selected, onToggle }: StepFocusRegionsProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-1 px-4" style={{ fontWeight: 700, fontSize: "1.35rem" }}>
        <span className="text-gray-900">¿Cuáles son tus zonas de enfoque?</span>
      </h1>
      <p className="text-gray-400 mb-6 text-center" style={{ fontSize: "0.82rem" }}>
        Elige una o más opciones para avanzar
      </p>

      <div className="w-full max-w-sm flex flex-col gap-0 border border-gray-200 rounded-xl overflow-hidden">
        {options.map((opt, index) => {
          const isSelected = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              onClick={() => onToggle(opt.value)}
              className={`flex items-center justify-between w-full pl-4 text-left transition-all duration-200 ${
                index !== 0 ? "border-t border-gray-200" : ""
              } ${isSelected ? "bg-purple-50" : "bg-white hover:bg-gray-50"}`}
              style={{ minHeight: "56px" }}
            >
              <span
                className={`flex-1 ${isSelected ? "text-purple-600" : "text-gray-700"}`}
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
          );
        })}
      </div>
    </div>
  );
}

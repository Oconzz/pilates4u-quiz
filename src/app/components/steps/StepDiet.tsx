interface StepDietProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Tradicional", icon: "🍽️", subtitle: "Me gusta de todo", value: "tradicional" },
  { label: "Keto", icon: "🥩", subtitle: "Prefiero comidas ricas en grasa y bajas en carbohidratos", value: "ceto" },
  { label: "Vegetariano", icon: "🥦", subtitle: "Evito carne y pescado", value: "vegetariano" },
  { label: "Vegano (Dieta Vegetal)", icon: "🌱", subtitle: "No como productos de origen animal", value: "vegano" },
  { label: "Mediterráneo", icon: "🐟", subtitle: "Como muchas verduras, granos y mariscos", value: "mediterraneo" },
  { label: "Pescatariano", icon: "🎣", subtitle: "Evito la carne, pero me gusta el pescado", value: "pescatariano" },
  { label: "Sin lactosa", icon: "🥛", subtitle: "No consumo alimentos con lactosa", value: "sem-lactose" },
  { label: "Sin gluten", icon: "🌾", subtitle: "Evito granos que contienen gluten", value: "sem-gluten" },
];

export function StepDiet({ selected, onSelect }: StepDietProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-6 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem" }}
      >
        <span className="text-gray-900">¿Qué tipo de </span>
        <span className="text-purple-500">dieta</span>
        <span className="text-gray-900"> prefieres?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-2">
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
                isSelected
                  ? "border-purple-500 bg-purple-500"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl w-8 h-8 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                  {opt.icon}
                </span>
                <div>
                  <span
                    className={`block ${isSelected ? "text-white" : "text-gray-800"}`}
                    style={{ fontWeight: 500, fontSize: "0.9rem" }}
                  >
                    {opt.label}
                  </span>
                  <span
                    className={`block ${isSelected ? "text-white/80" : "text-gray-400"}`}
                    style={{ fontSize: "0.75rem", marginTop: "2px" }}
                  >
                    {opt.subtitle}
                  </span>
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  isSelected ? "border-white" : "border-gray-300"
                }`}
              >
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

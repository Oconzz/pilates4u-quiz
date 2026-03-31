interface StepWaterIntakeProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Solo tomo café o té", value: "coffee-tea" },
  { label: "Cerca de 2 vasos", value: "2cups" },
  { label: "2 a 6 vasos", value: "2-6cups" },
  { label: "Más de 6 vasos", value: "6cups+" },
];

export function StepWaterIntake({ selected, onSelect }: StepWaterIntakeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-2" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-gray-900">¿Cuántos vasos de agua tomas al día?</span>
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

      {/* Woman illustration */}
      <div className="mt-6 flex justify-center">
        <div
          className="w-52 h-52 rounded-full overflow-hidden flex items-center justify-center relative"
          style={{ backgroundColor: "#fdf4ff" }}
        >
          <img
            src="https://images.unsplash.com/flagged/photo-1580236922810-921cb4267a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
            alt="woman with water bottle"
            className="w-full h-full object-cover object-center"
          />
          {/* Water drop badge */}
          <div
            className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: "#f9a8d4", fontSize: "1.1rem" }}
          >
            💧
          </div>
        </div>
      </div>
    </div>
  );
}

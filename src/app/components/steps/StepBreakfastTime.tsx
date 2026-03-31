interface StepBreakfastTimeProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  {
    label: "Entre las 6h00 y 8h00",
    value: "6-8",
    image: "https://images.unsplash.com/photo-1640523979476-fc10d61daae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
    emoji: "🫐",
  },
  {
    label: "Entre las 8h00 y 10h00",
    value: "8-10",
    image: "https://images.unsplash.com/photo-1644504439611-ddc302de87ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
    emoji: "🥗",
  },
  {
    label: "Entre las 10h00 y mediodía",
    value: "10-12",
    emoji: "🍳",
  },
  {
    label: "Normalmente me salto el desayuno",
    value: "skip",
    emoji: "☕",
  },
];

export function StepBreakfastTime({ selected, onSelect }: StepBreakfastTimeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-2" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-gray-900">¿Cuándo normalmente </span>
        <span className="text-purple-500">desayunas</span>
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
              {/* Food image or emoji circle */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-100">
                {opt.image ? (
                  <img
                    src={opt.image}
                    alt={opt.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.removeAttribute("style");
                    }}
                  />
                ) : null}
                <span
                  className="text-xl"
                  style={{ display: opt.image ? "none" : "block" }}
                >
                  {opt.emoji}
                </span>
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

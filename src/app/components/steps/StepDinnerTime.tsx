interface StepDinnerTimeProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  {
    label: "Entre las 16h00 y 18h00",
    value: "16-18",
    image: "https://images.unsplash.com/photo-1758721218560-aec50748d450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  },
  {
    label: "Entre las 18h00 y 20h00",
    value: "18-20",
    image: "https://images.unsplash.com/photo-1638469546636-bc626ae59438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  },
  {
    label: "Entre las 20h00 y 22h00",
    value: "20-22",
    image: "https://images.unsplash.com/photo-1758721218560-aec50748d450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
  },
  {
    label: "Normalmente me salto la cena",
    value: "skip",
    emoji: "🥤",
  },
];

export function StepDinnerTime({ selected, onSelect }: StepDinnerTimeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem" }}>
        <span className="text-gray-900">¿A qué hora </span>
        <span className="text-purple-500">cenas</span>
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
              {/* Food image or emoji */}
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-100">
                {opt.image ? (
                  <img
                    src={opt.image}
                    alt={opt.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl">{opt.emoji}</span>
                )}
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

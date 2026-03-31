interface StepTrainingDaysProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "1 a 2 días.", icon: "1️⃣2️⃣", value: "1-2" },
  { label: "3 a 5 días.", icon: "3️⃣5️⃣", value: "3-5" },
  { label: "Todos los días.", icon: "♾️", value: "todos" },
];

export function StepTrainingDays({ selected, onSelect }: StepTrainingDaysProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-8 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}
      >
        <span className="text-gray-900">¿Cuántos </span>
        <span className="text-purple-500">días por semana</span>
        <span className="text-gray-900"> puedes entrenar?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl border-2 transition-all duration-200 text-left ${
              selected === opt.value
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            <span className="text-2xl w-12 text-center flex-shrink-0">{opt.icon}</span>
            <span
              className={`${selected === opt.value ? "text-purple-600" : "text-gray-800"}`}
              style={{ fontWeight: 500, fontSize: "0.95rem" }}
            >
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

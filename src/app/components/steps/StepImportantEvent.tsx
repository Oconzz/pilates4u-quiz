interface StepImportantEventProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Vacaciones", value: "ferias" },
  { label: "Boda", value: "casamento" },
  { label: "Fecha importante", value: "data" },
  { label: "Aventura al aire libre", value: "aventura" },
  { label: "Cumplea\u00f1os", value: "aniversario" },
  { label: "Feriado", value: "feriado" },
  { label: "Reuni\u00f3n", value: "reuniao" },
  { label: "Ocasi\u00f3n familiar", value: "familiar" },
  { label: "Otro", value: "outro" },
  { label: "Ning\u00fan evento pr\u00f3ximo", value: "nenhum" },
];

export function StepImportantEvent({ selected, onSelect }: StepImportantEventProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-2 px-2"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}
      >
        <span className="text-gray-900">¿Tienes un </span>
        <span className="text-purple-500">evento importante</span>
        <span className="text-gray-900"> próximo?</span>
      </h1>
      <p className="text-gray-400 mb-6 text-center" style={{ fontSize: "0.82rem" }}>
        Tener un motivo puede ser tu gran aliado para alcanzar tu objetivo
      </p>

      <div className="w-full max-w-sm flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
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
    </div>
  );
}

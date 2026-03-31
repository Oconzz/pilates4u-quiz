interface StepLifeEventsProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { icon: "🏠", label: "Me mudé a una nueva casa", value: "mudanca" },
  { label: "Cambios en mi relación", icon: "💑", value: "relacionamento" },
  { icon: "💼", label: "Cambié de trabajo", value: "emprego" },
  { icon: "👶", label: "Tuve un bebé", value: "bebe" },
  { label: "Desafios financieros", icon: "💰", value: "financeiro" },
  { label: "Lesión o invalidez", icon: "🏥", value: "lesao" },
  { label: "Estrés o problemas de salud mental", icon: "😟", value: "estresse" },
  { label: "Metabolismo más lento", icon: "😓", value: "metabolismo" },
  { label: "Complicaciones después del tratamiento", icon: "💊", value: "tratamento" },
  { icon: "🙅‍♀️", label: "Ninguno de los anteriores", value: "nenhum" },
];

export function StepLifeEvents({ selected, onSelect }: StepLifeEventsProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-2 px-2"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}
      >
        <span className="text-gray-900">¿Alguno de estos </span>
        <span className="text-purple-500">eventos</span>
        <span className="text-gray-900"> impactó tu vida recientemente?</span>
      </h1>
      <p className="text-gray-400 mb-6 text-center" style={{ fontSize: "0.82rem" }}>
        Selecciona todos los que apliquen
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
            <div className="flex items-center gap-3">
              <span className="text-xl">{opt.icon}</span>
              <span
                className={`${selected === opt.value ? "text-purple-600" : "text-gray-700"}`}
                style={{ fontWeight: 500, fontSize: "0.9rem" }}
              >
                {opt.label}
              </span>
            </div>
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

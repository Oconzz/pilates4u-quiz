interface StepAgeProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function StepAge({ value, onChange, onNext }: StepAgeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-8 px-4" style={{ fontWeight: 700, fontSize: "1.35rem" }}>
        <span className="text-gray-900">¿Cuál es tu edad?</span>
      </h1>

      <input
        type="number"
        placeholder="Ingresa tu edad"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-sm px-4 py-4 rounded-full border border-gray-200 bg-white text-center text-gray-500 outline-none focus:border-purple-400 transition-colors mb-4"
        style={{ fontSize: "0.95rem" }}
        min={1}
        max={120}
      />

      {/* Info box */}
      <div className="w-full max-w-sm bg-blue-50 rounded-xl p-4 mb-6">
        <p className="text-blue-800 mb-1" style={{ fontWeight: 700, fontSize: "0.85rem" }}>
          ✅ Preguntamos tu edad para personalizar tu plan
        </p>
        <p className="text-blue-600 text-center" style={{ fontSize: "0.8rem" }}>
          Las personas mayores tienden a tener más grasa corporal que
          las más jóvenes con el mismo IMC.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        disabled={!value}
        className="w-full max-w-sm py-4 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontWeight: 600, fontSize: "0.95rem" }}
      >
        Continuar
      </button>
    </div>
  );
}

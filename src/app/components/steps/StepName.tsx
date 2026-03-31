interface StepNameProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function StepName({ value, onChange, onNext }: StepNameProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-8 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem" }}
      >
        <span className="text-gray-900">¿Cuál es tu nombre?</span>
      </h1>

      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-sm px-4 py-4 rounded-full border border-gray-200 bg-white text-center text-gray-700 outline-none focus:border-purple-400 transition-colors mb-6"
        style={{ fontSize: "0.95rem" }}
      />

      <button
        onClick={onNext}
        disabled={value.trim().length === 0}
        className="w-full max-w-sm py-4 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontWeight: 600, fontSize: "0.95rem" }}
      >
        Continuar
      </button>
    </div>
  );
}

interface StepNotAloneProps {
  onNext: () => void;
}

export function StepNotAlone({ onNext }: StepNotAloneProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1 className="mb-5" style={{ fontWeight: 800, fontSize: "1.5rem", color: "#111" }}>
        ¡No estás sola!
      </h1>
      <p className="text-gray-500 mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
        El 51% de nuestras usuarias están pasando por la misma experiencia.
      </p>
      <p className="text-gray-500 mb-4" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
        ¿La solución? Un plan de Pilates personalizado.
      </p>
      <p className="text-gray-500 mb-10" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
        Pierde peso, gana músculos y triplica tu confianza en solo{" "}
        <span style={{ fontWeight: 700, color: "#111" }}>21 días</span>.
      </p>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ background: "#c026d3", fontWeight: 600, fontSize: "0.95rem" }}
      >
        Continuar
      </button>
    </div>
  );
}

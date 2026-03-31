interface StepTrickProps {
  onNext: () => void;
}

export function StepTrick({ onNext }: StepTrickProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1
        className="text-center mb-4 px-2"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4", color: "#111" }}
      >
        El truco es entrenar solo{" "}
        <span className="text-purple-500">15 minutos al día</span>{" "}
        y ver los resultados 😍
      </h1>

      <p
        className="text-center text-gray-500 mb-5 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Más de 35 mil mujeres ya publicaron en redes sociales el{" "}
        <span style={{ fontWeight: 700, color: "#111" }}>&quot;EL CÓDIGO DE LAS CURVAS&quot;</span>.{" "}
        Entrenamientos cortos e intensos que activan el metabolismo y queman grasa de forma más eficiente que horas de ejercicio ligero.
      </p>

      <div className="w-full rounded-2xl overflow-hidden mb-6">
        <img
          src="https://images.unsplash.com/photo-1758875568800-29fb434c7b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
          alt="Ejercicio de pilates"
          className="w-full h-48 object-cover"
        />
      </div>

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

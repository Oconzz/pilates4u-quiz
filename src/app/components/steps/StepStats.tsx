interface StepStatsProps {
  onNext: () => void;
}

export function StepStats({ onNext }: StepStatsProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1
        className="text-center mb-2"
        style={{ fontWeight: 800, fontSize: "1.35rem", lineHeight: "1.3", color: "#111" }}
      >
        92% de las usuarias en América Latina
      </h1>
      <p
        className="text-center mb-5"
        style={{ fontWeight: 700, fontSize: "1.35rem", color: "#e05a8a" }}
      >
        sufren con su propio cuerpo
      </p>

      <p
        className="text-center text-gray-500 mb-3 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Todo mundo sabe que después de los 30, nuestro cuerpo engorda de la noche a la mañana
        y se llena de síntomas insoportables...
      </p>
      <p
        className="text-center text-gray-500 mb-2 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Esto sucede por causa de la{" "}
        <span style={{ fontWeight: 700, color: "#111" }}>falta de ejercicio.</span>
      </p>
      <p
        className="text-center text-gray-500 mb-6 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Cuanto más tiempo pasamos sin hacer ejercicio, más nuestro cuerpo
        produce{" "}
        <span style={{ fontWeight: 700, color: "#111" }}>grasa acumulada</span>,
        que nos hace subir de peso y puede tener{" "}
        <span style={{ color: "#e05a8a" }}>efectos peores...</span>
      </p>

      <div className="w-full rounded-2xl overflow-hidden mb-6">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1531520563951-4c0e3d3fcacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Antes"
            className="w-1/2 h-48 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1669502299593-5dbb23edfdb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Después"
            className="w-1/2 h-48 object-cover"
          />
        </div>
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

interface StepEliminateProps {
  onNext: () => void;
}

export function StepEliminate({ onNext }: StepEliminateProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1
        className="text-center mb-3 px-2"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4", color: "#111" }}
      >
        ¡Elimina la <span className="text-purple-500">grasa acumulada</span> en 21 días!
      </h1>

      <p
        className="text-center text-gray-500 mb-2 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Para mujeres, el pilates es una manera simple y eficiente de perder
        peso sin pasar horas en el gimnasio.
      </p>
      <p
        className="text-center text-gray-500 mb-6 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Haz entrenamientos prácticos con resultados desde la primera semana.
      </p>

      <div className="w-full rounded-2xl overflow-hidden mb-6">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1531520563951-4c0e3d3fcacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Antes"
            className="w-1/2 h-52 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1669502299593-5dbb23edfdb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Después"
            className="w-1/2 h-52 object-cover"
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

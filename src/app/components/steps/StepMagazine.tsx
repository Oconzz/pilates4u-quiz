interface StepMagazineProps {
  onNext: () => void;
}

export function StepMagazine({ onNext }: StepMagazineProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-6 bg-white">
        <div className="bg-red-600 px-3 py-2 flex items-center justify-between">
          <span className="text-white text-xs">☰</span>
          <span className="text-white font-bold text-sm">
            vea<span className="font-black">SALUD</span>
          </span>
          <div className="flex gap-2">
            <span className="text-white text-xs">👤</span>
            <span className="text-white text-xs">🔍</span>
          </div>
        </div>
        <div className="bg-red-500 px-3 py-1 text-center">
          <span className="text-white" style={{ fontSize: "0.65rem" }}>
            Oferta relámpago: Revista en casa desde 10,99
          </span>
        </div>
        <div className="px-5 py-4">
          <div className="text-center mb-2">
            <span className="text-purple-500" style={{ fontSize: "0.7rem" }}>
              Bienestar Fitness
            </span>
          </div>
          <h3
            className="text-center text-gray-900 mb-2"
            style={{ fontSize: "0.85rem", lineHeight: "1.4", fontWeight: 600 }}
          >
            &quot;Mejor que el gimnasio&quot;: el nuevo &quot;EL CÓDIGO DE LAS CURVAS&quot; es
            la mejor opción para definir el cuerpo y perder peso según especialistas
          </h3>
          <p
            className="text-gray-500 text-center mb-2"
            style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
          >
            Actividad ideal para mujeres mayores de 30 años que buscan cambiar
            su cuerpo <span style={{ fontWeight: 700 }}>sin riesgos ni exposición</span>
          </p>
        </div>
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1758599879067-f99a68ea57ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            alt="Mujer pilates"
            className="w-full h-36 object-cover"
          />
        </div>
      </div>

      <h2
        className="text-center text-gray-900 mb-3"
        style={{ fontWeight: 700, fontSize: "1.2rem" }}
      >
¿Por qué el Pilates es tan bueno?
      </h2>
      <p
        className="text-center text-gray-500 mb-2 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Al mismo tiempo que elimina la{" "}
        <span className="text-purple-500">grasa acumulada</span> de tu cuerpo,
        tiene el efecto del gimnasio en tus músculos.
      </p>
      <p
        className="text-center text-gray-500 mb-6 px-2"
        style={{ fontSize: "0.85rem", lineHeight: "1.6" }}
      >
        Definiendo zonas como el{" "}
        <span style={{ fontWeight: 700, color: "#111" }}>
          abdomen, glúteos y muslos en hasta 21 días.
        </span>
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

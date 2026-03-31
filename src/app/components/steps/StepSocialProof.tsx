interface StepSocialProofProps {
  onNext: () => void;
}

export function StepSocialProof({ onNext }: StepSocialProofProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1 className="text-center mb-3" style={{ fontWeight: 800, fontSize: "1.5rem", color: "#c026d3", lineHeight: "1.2" }}>
        Más de 500,000 mujeres
      </h1>
      <p className="text-center text-gray-600 mb-2 px-2" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
        en <span style={{ fontWeight: 700, color: "#111" }}>sus 20s</span> ya probaron nuestro plan de entrenamiento de pilates.
      </p>
      <p className="text-center text-gray-600 mb-5 px-2" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
        <span style={{ fontWeight: 700, color: "#111" }}>Celebridades como Shakira</span> ya revelaron tener resultados con el Pilates.
      </p>

      {/* Mock article card */}
      <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm mb-8">
        {/* Article header */}
        <div className="px-4 pt-3 pb-2 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-400" style={{ fontSize: "0.7rem" }}>
            <span>≡</span>
            <span className="ml-1">MENÚ</span>
          </div>
          <div style={{ fontFamily: "serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", color: "#111" }}>
            L'OFFICIEL
          </div>
          <span className="text-gray-400" style={{ fontSize: "0.7rem" }}>LATAM</span>
        </div>

        {/* Article content */}
        <div className="px-4 pt-3">
          <h2 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111", lineHeight: "1.4" }}>
            Shakira y más: los entrenamientos favoritos de las celebridades
          </h2>
          <p className="text-gray-500 mt-1 mb-2" style={{ fontSize: "0.78rem", fontStyle: "italic", lineHeight: "1.5" }}>
            De Shakira a Jennifer Lopez: descubre cuáles son los entrenamientos favoritos de las celebridades y repróducelos en casa
          </p>
          <p className="text-gray-400 mb-3" style={{ fontSize: "0.75rem" }}>
            20.01.2025 por María López
          </p>
          {/* Share icons */}
          <div className="flex gap-2 mb-3">
            {["✉", "f", "🔗", "in", "𝕏", "✉", "✈"].slice(0, 5).map((icon, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400" style={{ fontSize: "0.6rem" }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Article image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1758875568800-29fb434c7b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
            alt="pilates celebrity"
            className="w-full object-cover"
            style={{ height: "180px", objectPosition: "center" }}
          />
          <div className="absolute bottom-2 right-2 w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
            <span className="text-white" style={{ fontSize: "0.6rem" }}>i</span>
          </div>
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

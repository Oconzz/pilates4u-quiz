interface StepPilatesEnergyProps {
  onNext: () => void;
}

export function StepPilatesEnergy({ onNext }: StepPilatesEnergyProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1 className="text-center mb-3 px-2" style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}>
        <span className="text-gray-900">El Pilates funciona como un </span>
        <span className="text-purple-500">energizante natural</span>
      </h1>

      <p className="text-center text-gray-500 mb-2 px-2" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
        Estos ejercicios{" "}
        <span style={{ fontWeight: 700, color: "#111" }}>
          fortalecen tus músculos, core y activan la dopamina
        </span>{" "}
        - la hormona de la atención.
      </p>

      <p className="text-center text-gray-500 mb-6 px-2" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
        Ya no te despertarás cansada ni te sentirás agotada durante el día sin haber hecho nada.
      </p>

      {/* Woman illustration */}
      <div
        className="w-52 h-52 rounded-full overflow-hidden flex items-center justify-center mb-8"
        style={{ backgroundColor: "#f3e8ff" }}
      >
        <img
          src="https://images.unsplash.com/photo-1758875568800-29fb434c7b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
          alt="woman pilates squat"
          className="w-full h-full object-cover object-top"
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

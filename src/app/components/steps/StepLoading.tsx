import { useEffect, useState } from "react";

interface StepLoadingProps {
  onDone: () => void;
}

const testimonials = [
  {
    name: "Camila Gómez",
    handle: "@camilinha_gomez",
    avatar: "https://images.unsplash.com/photo-1568623421216-cf2db9a325c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=80",
    text: "Ya no soportaba mirarme al espejo, pero después del Desafío, cambié por completo 😄",
  },
  {
    name: "Fernanda López",
    handle: "@fer_lopez",
    avatar: "https://images.unsplash.com/photo-1531520563951-4c0e3d3fcacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=80",
    text: "¡En 3 semanas perdí 5kg y mi cintura se redujo bastante! ¡Lo recomiendo mucho! 💜",
  },
  {
    name: "Patricia Méndez",
    handle: "@paty_mendez",
    avatar: "https://images.unsplash.com/photo-1669502299593-5dbb23edfdb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=80",
    text: "Los glúteos crecieron y la panza desapareció. ¡La mejor decisión que he tomado! 🔥",
  },
];

export function StepLoading({ onDone }: StepLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalDuration = 4000;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      const pct = Math.min(Math.round((elapsed / totalDuration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setDone(true);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[testimonialIndex];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-sm mb-3">
        <div className="flex justify-end mb-1">
          <span className="text-gray-400" style={{ fontSize: "0.75rem" }}>
            {progress}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-2" style={{ fontWeight: 600, fontSize: "0.85rem", color: "#333" }}>
          Cargando...
        </p>
        <p className="text-center text-gray-400" style={{ fontSize: "0.8rem" }}>
          Construyendo tu Plan de Pilates...
        </p>
      </div>

      <div className="w-full max-w-sm mt-6 mb-6 text-center px-4">
        <h2 className="text-gray-800" style={{ fontWeight: 700, fontSize: "1.2rem", lineHeight: "1.4" }}>
          <span className="text-purple-500">2 Millones</span> de Mujeres
        </h2>
        <p className="text-gray-400 mt-1" style={{ fontSize: "0.85rem" }}>
          Eligieron EL CÓDIGO DE LAS CURVAS
        </p>
      </div>

      <div className="w-full max-w-sm">
        <div
          key={testimonialIndex}
          className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
          style={{ animation: "fadeIn 0.4s ease" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: "#f59e0b", fontSize: "0.75rem" }}>★</span>
                ))}
              </div>
              <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#111" }}>{t.name}</p>
              <p className="text-gray-400" style={{ fontSize: "0.75rem" }}>{t.handle}</p>
            </div>
          </div>
          <p className="text-gray-600" style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>
            {t.text}
          </p>
        </div>
      </div>

      {done && (
        <button
          onClick={onDone}
          className="w-full max-w-sm mt-8 py-4 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 active:scale-95"
          style={{ fontWeight: 600, fontSize: "0.95rem" }}
        >
          Ver mi plan →
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

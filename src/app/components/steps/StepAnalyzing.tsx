import { useEffect, useState } from "react";

interface StepAnalyzingProps {
  onDone: () => void;
}

const testimonials = [
  {
    name: "Roberta Rivera",
    handle: "@rivera_roberta",
    avatar: "https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
    text: "Solo tenía 20 minutos para hacer después del trabajo. Decidí probar y ahora mi esposo volvió a mirarme con admiración",
  },
  {
    name: "Carla Méndez",
    handle: "@carla_fit",
    avatar: "https://images.unsplash.com/photo-1759476597683-f51b04cf58d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
    text: "¡Perdí 5kg en solo 3 semanas sin gimnasio. El plan es increíble y puedo hacerlo en casa incluso con un hijo pequeño!",
  },
  {
    name: "Ana Paula",
    handle: "@anapaula_vida",
    avatar: "https://images.unsplash.com/photo-1654512590463-50287ca821a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80",
    text: "¡No lo podía creer, pero decidí intentar. Resultado: abdomen más plano y más energía para el día a día!",
  },
];

export function StepAnalyzing({ onDone }: StepAnalyzingProps) {
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

  return (
    <div className="flex flex-col items-center w-full">
      {/* Loading bar */}
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
          Analizando tu perfil
        </p>
        <p className="text-center text-gray-400" style={{ fontSize: "0.8rem" }}>
          Espera un momento...
        </p>
      </div>

      {/* Stats */}
      <div className="w-full max-w-sm mt-6 mb-6 text-center px-4">
        <p className="text-gray-800" style={{ fontWeight: 700, fontSize: "1.2rem", lineHeight: "1.4" }}>
          En total, durante los últimos 3 meses, nuestras usuarias perdieron en promedio
        </p>
        <p className="text-green-500 mt-1" style={{ fontWeight: 700, fontSize: "1.5rem" }}>
          7+ kg 🤩
        </p>
      </div>

      {/* Testimonial card */}
      <div className="w-full max-w-sm">
        <div
          key={testimonialIndex}
          className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
          style={{ animation: "fadeIn 0.4s ease" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src={testimonials[testimonialIndex].avatar}
              alt={testimonials[testimonialIndex].name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: "#f59e0b", fontSize: "0.75rem" }}>★</span>
                ))}
              </div>
              <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#111" }}>
                {testimonials[testimonialIndex].name}
              </p>
              <p className="text-gray-400" style={{ fontSize: "0.75rem" }}>
                {testimonials[testimonialIndex].handle}
              </p>
            </div>
          </div>
          <p className="text-gray-600" style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>
            {testimonials[testimonialIndex].text}
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

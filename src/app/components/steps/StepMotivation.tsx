import { Shirt, Dumbbell, Heart, Star, Trophy } from "lucide-react";

interface StepMotivationProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: "Usar la ropa que yo quiera", Icon: Shirt, value: "roupa" },
  { label: "Ser más fuerte", Icon: Dumbbell, value: "forte" },
  { label: "Recuperar mi autoestima", Icon: Heart, value: "autoestima" },
  { label: "Impresionar a mi pareja", Icon: Star, value: "parceiro" },
  { label: "Ganar energía y salud", Icon: Trophy, value: "saude" },
];

export function StepMotivation({ selected, onSelect }: StepMotivationProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-8 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: "1.4" }}
      >
        <span className="text-gray-900">¿Cuál es tu principal </span>
        <span className="text-purple-500">motivación</span>
        <span className="text-gray-900"> para ponerte en forma este año?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-2.5">
        {options.map(({ label, Icon, value }) => (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-600 active:scale-[0.98] transition-all duration-200 text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <Icon size={20} className="text-white" />
            </div>
            <span style={{ fontSize: "0.9rem", fontWeight: 500 }} className="text-white">
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

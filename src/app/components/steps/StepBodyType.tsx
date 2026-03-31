interface StepBodyTypeProps {
  selected: string;
  onSelect: (value: string) => void;
}

const options = [
  {
    label: "Delgado",
    value: "magro",
    image: "https://images.unsplash.com/photo-1591098145432-20b300f03c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    label: "Medio",
    value: "medio",
    image: "https://images.unsplash.com/photo-1531520563951-4c0e3d3fcacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    label: "Hinchado",
    value: "inchado",
    image: "https://images.unsplash.com/photo-1669502299593-5dbb23edfdb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    label: "Con sobrepeso",
    value: "acima",
    image: "https://images.unsplash.com/photo-1660578008729-d305c523021d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
];

export function StepBodyType({ selected, onSelect }: StepBodyTypeProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1
        className="text-center mb-6 px-4"
        style={{ fontWeight: 700, fontSize: "1.35rem" }}
      >
        <span className="text-gray-900">¿Cómo describirías </span>
        <span className="text-purple-500">tu cuerpo</span>
        <span className="text-gray-900"> hoy?</span>
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-0 border border-gray-200 rounded-xl overflow-hidden">
        {options.map((opt, index) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center justify-between w-full pl-4 text-left transition-all duration-200 ${
              selected === opt.value
                ? "bg-purple-50"
                : "bg-white hover:bg-gray-50"
            } ${index !== 0 ? "border-t border-gray-200" : ""}`}
            style={{ minHeight: "56px" }}
          >
            <span
              className={`${selected === opt.value ? "text-purple-600" : "text-gray-800"}`}
              style={{ fontWeight: 500, fontSize: "0.95rem" }}
            >
              {opt.label}
            </span>
            <div className="w-16 h-14 overflow-hidden flex-shrink-0">
              <img
                src={opt.image}
                alt={opt.label}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

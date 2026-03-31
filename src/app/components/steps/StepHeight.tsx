import { useState, useRef, useCallback } from "react";

interface StepHeightProps {
  unit: "cm" | "pol";
  onUnitChange: (unit: "cm" | "pol") => void;
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

export function StepHeight({ unit, onUnitChange, value, onChange, onNext }: StepHeightProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const minCm = 140;
  const maxCm = 220;

  const displayValue = unit === "cm" ? value : Math.round(value / 2.54);
  const displayUnit = unit === "cm" ? "cm" : '"';

  const getValueFromX = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return value;
      const rect = trackRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, x / rect.width));
      return Math.round(minCm + ratio * (maxCm - minCm));
    },
    [value]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    onChange(getValueFromX(e.clientX));

    const handleMove = (ev: MouseEvent) => {
      if (isDragging.current) onChange(getValueFromX(ev.clientX));
    };
    const handleUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    onChange(getValueFromX(e.touches[0].clientX));

    const handleMove = (ev: TouchEvent) => {
      if (isDragging.current) onChange(getValueFromX(ev.touches[0].clientX));
    };
    const handleUp = () => {
      isDragging.current = false;
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleUp);
  };

  const thumbPercent = ((value - minCm) / (maxCm - minCm)) * 100;

  // Tick marks
  const ticks = [];
  const tickStep = 1;
  for (let v = minCm; v <= maxCm; v += tickStep) {
    const pct = ((v - minCm) / (maxCm - minCm)) * 100;
    const isMajor = v % 5 === 0;
    ticks.push({ v, pct, isMajor });
  }

  // Label markers (show every 10cm)
  const labelMarkers = [];
  for (let v = Math.ceil(minCm / 10) * 10; v <= maxCm; v += 10) {
    const pct = ((v - minCm) / (maxCm - minCm)) * 100;
    labelMarkers.push({ v, pct });
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center mb-6 px-4" style={{ fontWeight: 700, fontSize: "1.35rem" }}>
        <span className="text-gray-900">¿Cuál es tu estatura?</span>
      </h1>

      {/* Unit toggle */}
      <div className="flex gap-1 bg-gray-100 rounded-full p-1 mb-6">
        <button
          onClick={() => onUnitChange("cm")}
          className={`px-5 py-1.5 rounded-full text-sm transition-all duration-200 ${
            unit === "cm" ? "bg-purple-500 text-white" : "text-gray-500 hover:text-gray-700"
          }`}
          style={{ fontWeight: 600 }}
        >
          cm
        </button>
        <button
          onClick={() => onUnitChange("pol")}
          className={`px-5 py-1.5 rounded-full text-sm transition-all duration-200 ${
            unit === "pol" ? "bg-purple-500 text-white" : "text-gray-500 hover:text-gray-700"
          }`}
          style={{ fontWeight: 600 }}
        >
          pulg
        </button>
      </div>

      {/* Value display */}
      <div className="mb-6">
        <span style={{ fontWeight: 700, fontSize: "2.5rem", color: "#111" }}>{displayValue}</span>
        <span style={{ fontWeight: 400, fontSize: "1rem", color: "#666" }}>{displayUnit}</span>
      </div>

      {/* Ruler slider */}
      <div className="w-full max-w-sm px-2 mb-2 select-none">
        <div
          ref={trackRef}
          className="relative w-full cursor-pointer"
          style={{ height: "60px" }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Tick marks */}
          <div className="absolute bottom-8 left-0 right-0 flex items-end" style={{ height: "20px" }}>
            {ticks.map(({ v, pct, isMajor }) => (
              <div
                key={v}
                className="absolute"
                style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
              >
                <div
                  className={`${v === value ? "bg-purple-500" : "bg-gray-400"}`}
                  style={{
                    width: isMajor ? "1.5px" : "1px",
                    height: isMajor ? "16px" : "10px",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Labels */}
          <div className="absolute bottom-0 left-0 right-0" style={{ height: "20px" }}>
            {labelMarkers.map(({ v, pct }) => (
              <span
                key={v}
                className="absolute text-gray-500"
                style={{
                  left: `${pct}%`,
                  transform: "translateX(-50%)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  bottom: 0,
                }}
              >
                {unit === "cm" ? v : Math.round(v / 2.54)}
              </span>
            ))}
          </div>

          {/* Thumb needle */}
          <div
            className="absolute"
            style={{
              left: `${thumbPercent}%`,
              transform: "translateX(-50%)",
              bottom: "20px",
              pointerEvents: "none",
            }}
          >
            <div className="bg-purple-500" style={{ width: "2px", height: "32px", margin: "0 auto" }} />
            <div
              className="bg-purple-500"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                marginLeft: "-4px",
              }}
            />
          </div>
        </div>

        <p className="text-center text-gray-400 mt-2" style={{ fontSize: "0.75rem" }}>
          Arrastra para ajustar
        </p>
      </div>

      {/* Info box */}
      <div className="w-full max-w-sm bg-blue-50 rounded-xl p-4 mb-6 mt-2">
        <p className="text-blue-700 mb-1" style={{ fontWeight: 700, fontSize: "0.85rem" }}>
          👆 Calculando tu índice de masa corporal
        </p>
        <p className="text-blue-600 text-center" style={{ fontSize: "0.8rem" }}>
          El IMC es ampliamente utilizado como factor de riesgo para el
          desarrollo o prevalencia de diversos problemas de salud.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="w-full max-w-sm py-4 rounded-full bg-purple-500 text-white transition-all duration-200 hover:bg-purple-600 active:scale-95"
        style={{ fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em" }}
      >
        SIGUIENTE PASO
      </button>
    </div>
  );
}

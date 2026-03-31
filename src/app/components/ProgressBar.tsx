interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  const half = 50;

  const seg1 = Math.min(percentage, half);
  const seg2 = Math.max(0, percentage - half);

  const seg1Pct = (seg1 / half) * 100;
  const seg2Pct = (seg2 / half) * 100;

  return (
    <div className="flex gap-2 w-full max-w-xs mx-auto">
      <div className="flex-1 h-2 rounded-full bg-pink-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-purple-500 transition-all duration-500"
          style={{ width: `${seg1Pct}%` }}
        />
      </div>
      <div className="flex-1 h-2 rounded-full bg-pink-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-purple-500 transition-all duration-500"
          style={{ width: `${seg2Pct}%` }}
        />
      </div>
    </div>
  );
}

export default function MetricsCards() {
  const metrics = [
    {
      title: "Usage Score",
      value: "63%",
      subtitle: "Lower is better",
      color: "emerald",
    },
    {
      title: "Wellbeing Score",
      value: "60%",
      subtitle: "Higher is better",
      color: "cyan",
    },
    {
      title: "Awareness Level",
      value: "40%",
      subtitle: "Self-awareness rating",
      color: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur"
        >
          <h3 className="text-sm font-medium text-slate-400 mb-4">
            {metric.title}
          </h3>
          <div className="mb-2">
            <span
              className={`text-4xl font-bold ${
                metric.color === "emerald"
                  ? "text-emerald-400"
                  : metric.color === "cyan"
                  ? "text-cyan-400"
                  : "text-purple-400"
              }`}
            >
              {metric.value}
            </span>
          </div>
          <p className="text-xs text-slate-500">{metric.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

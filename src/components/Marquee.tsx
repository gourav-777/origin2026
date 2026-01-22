const Marquee = () => {
  const items = [
    "HACK",
    "BUILD",
    "INNOVATE",
    "DEPLOY",
    "CREATE",
    "DISRUPT",
    "COLLABORATE",
    "ORIGIN",
  ];

  return (
    <div className="relative overflow-hidden py-6 bg-primary">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-2xl md:text-4xl font-display font-bold text-background tracking-wider"
          >
            {item} <span className="text-background/50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

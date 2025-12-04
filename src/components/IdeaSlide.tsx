import { Brain, Palette, Settings, Cpu } from './Icons';

interface IdeaSlideProps {
  isDark: boolean;
}

export function IdeaSlide({ isDark }: IdeaSlideProps) {
  const nodes = [
    { icon: Brain, label: 'Аналитика', color: '#00F5FF', position: { top: '20%', left: '30%' } },
    { icon: Palette, label: 'Дизайн', color: '#C724B1', position: { top: '20%', right: '30%' } },
    { icon: Settings, label: 'Процессы', color: '#00FF9D', position: { bottom: '25%', left: '25%' } },
    { icon: Cpu, label: 'Технологии', color: '#00F5FF', position: { bottom: '25%', right: '25%' } },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-16">
      {/* Title */}
      <h2 
        className={`text-7xl mb-4 tracking-tight text-center ${
          isDark ? 'text-white' : 'text-[#0F1A2F]'
        }`}
      >
        IT — ЭТО НЕ ТОЛЬКО ПРО КОД
      </h2>

      <p className={`text-2xl mb-16 ${isDark ? 'text-white/60' : 'text-[#0F1A2F]/60'}`}>
        Это экосистема навыков и компетенций
      </p>

      {/* Central Network Diagram */}
      <div className="relative w-full max-w-4xl h-[500px]">
        {/* Center Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div 
            className={`w-32 h-32 rounded-full flex items-center justify-center ${
              isDark ? 'bg-white/10 border-2 border-white/20' : 'bg-white border-2 border-black/20 shadow-xl'
            }`}
          >
            <span className={`text-4xl ${isDark ? 'text-white' : 'text-[#0F1A2F]'}`}>IT</span>
          </div>
        </div>

        {/* Connection Lines */}
        {nodes.map((node, index) => (
          <svg
            key={`line-${index}`}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <line
              x1="50%"
              y1="50%"
              x2={node.position.left ? node.position.left : node.position.right ? `calc(100% - ${node.position.right})` : '50%'}
              y2={node.position.top || node.position.bottom}
              stroke={node.color}
              strokeWidth="2"
              strokeDasharray="8 4"
              className="animate-pulse"
              style={{ opacity: 0.5 }}
            />
          </svg>
        ))}

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                top: node.position.top,
                bottom: node.position.bottom,
                left: node.position.left,
                right: node.position.right,
              }}
            >
              {/* Node Circle */}
              <div 
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  isDark ? 'bg-white/10 border-2' : 'bg-white border-2 shadow-lg'
                }`}
                style={{ 
                  borderColor: node.color,
                  boxShadow: `0 0 30px ${node.color}40`
                }}
              >
                <Icon 
                  className="w-10 h-10" 
                  style={{ color: node.color }}
                />
              </div>

              {/* Label */}
              <div 
                className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-lg ${
                  isDark ? 'bg-white/5 text-white' : 'bg-black/5 text-[#0F1A2F]'
                }`}
              >
                {node.label}
              </div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ backgroundColor: node.color }}
              />
            </div>
          );
        })}

        {/* Animated Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: i % 3 === 0 ? '#00F5FF' : i % 3 === 1 ? '#C724B1' : '#00FF9D',
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
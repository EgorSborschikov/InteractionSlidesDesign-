import { Play, Clock, Trophy } from './Icons';

interface MissionSlideProps {
  isDark: boolean;
}

export function MissionSlide({ isDark }: MissionSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-16">
      {/* Title with Gaming Style */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-1 bg-[#00F5FF]" />
          <Trophy className="w-12 h-12 text-[#00F5FF]" />
          <div className="w-12 h-1 bg-[#00F5FF]" />
        </div>
        <h2 
          className={`text-7xl tracking-tight ${
            isDark ? 'text-white' : 'text-[#0F1A2F]'
          }`}
        >
          ВАША МИССИЯ
        </h2>
      </div>

      {/* Mission Card */}
      <div 
        className={`relative max-w-4xl w-full rounded-3xl overflow-hidden border-2 ${
          isDark ? 'bg-white/5 border-[#00F5FF]/30' : 'bg-white border-[#00F5FF]/50 shadow-2xl'
        }`}
        style={{
          boxShadow: isDark ? '0 0 60px rgba(0, 245, 255, 0.2)' : '0 0 60px rgba(0, 245, 255, 0.3)',
        }}
      >
        {/* Animated Border Glow */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'linear-gradient(90deg, #00F5FF, #C724B1, #00FF9D, #00F5FF)',
            backgroundSize: '200% 100%',
            animation: 'gradient 3s linear infinite',
            maskImage: 'linear-gradient(transparent 2px, black 2px, black calc(100% - 2px), transparent calc(100% - 2px)), linear-gradient(90deg, transparent 2px, black 2px, black calc(100% - 2px), transparent calc(100% - 2px))',
            maskComposite: 'intersect',
          }}
        />

        <div className="relative p-12">
          {/* Mission Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="px-4 py-1 rounded-full bg-[#00F5FF]/20 border border-[#00F5FF]">
              <span className="text-[#00F5FF] text-sm tracking-wider">НОВАЯ МИССИЯ</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#C724B1]/20 border border-[#C724B1]">
              <Clock className="w-4 h-4 text-[#C724B1]" />
              <span className="text-[#C724B1] text-sm">10:00</span>
            </div>
          </div>

          {/* Mission Text */}
          <h3 className={`text-5xl mb-6 ${isDark ? 'text-white' : 'text-[#0F1A2F]'}`}>
            Создать IT-стартап за 10 минут
          </h3>

          <p className={`text-2xl mb-10 ${isDark ? 'text-white/70' : 'text-[#0F1A2F]/70'}`}>
            Придумайте инновационное решение для школьной жизни. Соберите команду мечты. Презентуйте идею.
          </p>

          {/* Accept Button */}
          <button 
            className="group relative px-12 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00F5FF 0%, #C724B1 100%)',
            }}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-3 text-white text-2xl">
              <Play className="w-6 h-6" fill="white" />
              <span>ПРИНЯТЬ ВЫЗОВ</span>
            </div>
          </button>

          {/* Difficulty Indicators */}
          <div className="flex items-center gap-2 mt-8">
            <span className={`text-sm ${isDark ? 'text-white/50' : 'text-[#0F1A2F]/50'}`}>
              УРОВЕНЬ:
            </span>
            {[1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                className={`w-3 h-8 rounded ${
                  level <= 3 ? 'bg-[#00FF9D]' : isDark ? 'bg-white/10' : 'bg-black/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Pixels */}
        <div className="absolute top-4 right-4 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-sm animate-pulse"
              style={{
                backgroundColor: i === 1 ? '#00F5FF' : i === 2 ? '#C724B1' : '#00FF9D',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className={`mt-12 text-xl ${isDark ? 'text-white/40' : 'text-[#0F1A2F]/40'}`}>
        💡 Совет: Нет плохих идей, есть только неисследованные возможности
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
}
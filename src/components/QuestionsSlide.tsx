import { HelpCircle } from './Icons';

interface QuestionsSlideProps {
  isDark: boolean;
}

export function QuestionsSlide({ isDark }: QuestionsSlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-16 relative overflow-hidden">
      {/* Binary Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex flex-wrap gap-4 p-8">
          {Array.from({ length: 200 }).map((_, i) => (
            <span
              key={i}
              className={`text-sm font-mono ${isDark ? 'text-white' : 'text-[#0F1A2F]'}`}
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Giant Question Mark */}
        <div className="relative mb-12">
          {/* Outer Glow Rings */}
          {[1, 2, 3].map((ring) => (
            <div
              key={ring}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
              style={{
                width: `${200 + ring * 80}px`,
                height: `${200 + ring * 80}px`,
                border: `2px solid ${
                  ring === 1 ? '#00F5FF' : ring === 2 ? '#C724B1' : '#00FF9D'
                }`,
                opacity: 0.2 - ring * 0.05,
                animationDelay: `${ring * 0.3}s`,
              }}
            />
          ))}

          {/* Question Mark */}
          <div className="relative">
            <HelpCircle 
              className="w-48 h-48"
              style={{
                color: isDark ? '#00F5FF' : '#0088CC',
                filter: 'drop-shadow(0 0 40px rgba(0, 245, 255, 0.5))',
              }}
              strokeWidth={1.5}
            />
            
            {/* Binary Particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute font-mono text-xl animate-pulse"
                style={{
                  top: `${50 + Math.cos(i * 30 * Math.PI / 180) * 120}px`,
                  left: `${50 + Math.sin(i * 30 * Math.PI / 180) * 120}px`,
                  color: i % 3 === 0 ? '#00F5FF' : i % 3 === 1 ? '#C724B1' : '#00FF9D',
                  opacity: 0.3,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {i % 2 === 0 ? '0' : '1'}
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 
          className={`text-8xl mb-6 tracking-tight ${
            isDark ? 'text-white' : 'text-[#0F1A2F]'
          }`}
          style={{
            textShadow: isDark ? '0 0 60px rgba(0, 245, 255, 0.3)' : 'none',
          }}
        >
          ВАШ ХОД
        </h2>

        {/* Subtitle */}
        <p 
          className={`text-4xl mb-12 ${isDark ? 'text-white/70' : 'text-[#0F1A2F]/70'}`}
        >
          Задавайте вопросы!
        </p>

        {/* Interactive Hints */}
        <div className="flex flex-col gap-4 mt-8">
          {[
            'Как начать карьеру в IT?',
            'Нужно ли уметь программировать?',
            'Какие специальности самые востребованные?',
          ].map((question, i) => (
            <div
              key={i}
              className={`group px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-white hover:bg-white/80 border border-black/10 shadow-lg'
              }`}
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-12"
                  style={{ 
                    backgroundColor: i === 0 ? '#00F5FF20' : i === 1 ? '#C724B120' : '#00FF9D20',
                    border: `2px solid ${i === 0 ? '#00F5FF' : i === 1 ? '#C724B1' : '#00FF9D'}`,
                  }}
                >
                  <span 
                    className="text-sm"
                    style={{ color: i === 0 ? '#00F5FF' : i === 1 ? '#C724B1' : '#00FF9D' }}
                  >
                    ?
                  </span>
                </div>
                <span className={`text-lg ${isDark ? 'text-white/80' : 'text-[#0F1A2F]/80'}`}>
                  {question}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        {['Q', '&', 'A'].map((letter, i) => (
          <div
            key={i}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-black/10'
            }`}
            style={{
              color: i === 0 ? '#00F5FF' : i === 1 ? '#C724B1' : '#00FF9D',
            }}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
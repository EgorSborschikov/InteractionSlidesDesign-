import { BookOpen, Link, Brain } from './Icons';

interface ExamplesSlideProps {
  isDark: boolean;
}

export function ExamplesSlide({ isDark }: ExamplesSlideProps) {
  const apps = [
    {
      icon: BookOpen,
      name: 'ClassQuest',
      description: 'Геймификация школьных заданий',
      color: '#00F5FF',
      tags: ['Gamification', 'Education'],
    },
    {
      icon: Link,
      name: 'SchoolLink',
      description: 'Социальная сеть для учеников',
      color: '#C724B1',
      tags: ['Social', 'Networking'],
    },
    {
      icon: Brain,
      name: 'Examiner AI',
      description: 'ИИ-помощник для подготовки к экзаменам',
      color: '#00FF9D',
      tags: ['AI', 'Learning'],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-16">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 
          className={`text-7xl mb-4 tracking-tight ${
            isDark ? 'text-white' : 'text-[#0F1A2F]'
          }`}
        >
          ДЛЯ ЗАЖИГАНИЯ
        </h2>
        <p className={`text-2xl ${isDark ? 'text-white/60' : 'text-[#0F1A2F]/60'}`}>
          Примеры идей для вдохновения
        </p>
      </div>

      {/* App Cards */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
        {apps.map((app, index) => {
          const Icon = app.icon;
          return (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:scale-105 ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white border border-black/10 shadow-xl'
              }`}
            >
              {/* Top Color Bar */}
              <div 
                className="h-2"
                style={{ backgroundColor: app.color }}
              />

              <div className="p-8">
                {/* App Icon */}
                <div 
                  className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${app.color}40 0%, ${app.color}20 100%)`,
                    border: `2px solid ${app.color}`,
                    boxShadow: `0 8px 32px ${app.color}30`,
                  }}
                >
                  <Icon 
                    className="w-12 h-12" 
                    style={{ color: app.color }}
                  />
                </div>

                {/* App Name */}
                <h3 
                  className={`text-3xl mb-3 ${
                    isDark ? 'text-white' : 'text-[#0F1A2F]'
                  }`}
                >
                  {app.name}
                </h3>

                {/* Description */}
                <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-white/70' : 'text-[#0F1A2F]/70'}`}>
                  {app.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        isDark ? 'bg-white/10' : 'bg-black/10'
                      }`}
                      style={{ 
                        color: app.color,
                        border: `1px solid ${app.color}40`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Download Button Mockup */}
                <button 
                  className={`mt-6 w-full py-3 rounded-xl transition-all ${
                    isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
                  }`}
                  style={{ 
                    border: `1px solid ${app.color}40`,
                  }}
                >
                  <span 
                    className="text-sm"
                    style={{ color: app.color }}
                  >
                    Узнать больше →
                  </span>
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-3xl pointer-events-none"
                style={{ backgroundColor: app.color }}
              />

              {/* App Store Style Badge */}
              <div 
                className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                style={{ 
                  backgroundColor: `${app.color}20`,
                  border: `1px solid ${app.color}`,
                  color: app.color,
                }}
              >
                DEMO
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <div className={`mt-16 max-w-3xl text-center text-xl ${isDark ? 'text-white/50' : 'text-[#0F1A2F]/50'}`}>
        Ваша идея может быть совершенно другой. Главное — решить реальную проблему!
      </div>

      {/* Decorative Elements */}
      <div className="flex gap-3 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              backgroundColor: i === 0 ? '#00F5FF' : i === 1 ? '#C724B1' : '#00FF9D',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
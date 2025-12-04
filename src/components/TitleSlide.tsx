interface TitleSlideProps {
  isDark: boolean;
}

export function TitleSlide({ isDark }: TitleSlideProps) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {/* Converging Lines */}
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-[400px] origin-top"
              style={{
                background: `linear-gradient(to bottom, ${
                  i % 3 === 0 ? '#00F5FF' : i % 3 === 1 ? '#C724B1' : '#00FF9D'
                }, transparent)`,
                transform: `rotate(${i * 15}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: isDark 
            ? 'radial-gradient(ellipse at center, rgba(15, 26, 47, 0.8) 0%, rgba(15, 26, 47, 0.95) 50%, #0F1A2F 100%)'
            : 'radial-gradient(ellipse at center, rgba(248, 249, 250, 0.8) 0%, rgba(248, 249, 250, 0.95) 50%, #F8F9FA 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-20">
        {/* Logo Placeholder */}
        <div className="absolute top-12 left-12 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F5FF] to-[#C724B1] flex items-center justify-center">
          <div className={`text-2xl ${isDark ? 'text-white' : 'text-white'}`}>🎓</div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 
            className={`text-[120px] tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#0F1A2F]'
            }`}
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, #00F5FF 0%, #C724B1 50%, #00FF9D 100%)'
                : 'linear-gradient(135deg, #0088CC 0%, #A020A0 50%, #00CC77 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            IT-НАВИГАТОР
          </h1>
          <p className={`text-4xl tracking-wide ${isDark ? 'text-white/80' : 'text-[#0F1A2F]/80'}`}>
            Твои суперсилы в мире технологий
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex gap-8 mt-12">
          {['<div>', '</code>', '</>'].map((code, i) => (
            <div
              key={i}
              className={`px-6 py-3 rounded-lg backdrop-blur-sm ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'
              }`}
            >
              <code className={`font-mono ${isDark ? 'text-[#00F5FF]' : 'text-[#0088CC]'}`}>
                {code}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00F5FF] via-[#C724B1] to-[#00FF9D]" />
    </div>
  );
}

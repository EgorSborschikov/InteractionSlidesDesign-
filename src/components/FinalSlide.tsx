interface FinalSlideProps {
  isDark: boolean;
}

export function FinalSlide({ isDark }: FinalSlideProps) {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 30% 50%, rgba(0, 245, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(199, 36, 177, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0, 255, 157, 0.15) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 30% 50%, rgba(0, 136, 204, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(160, 32, 160, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0, 204, 119, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            backgroundColor: i % 3 === 0 ? '#00F5FF' : i % 3 === 1 ? '#C724B1' : '#00FF9D',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.3,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Gradient Waves */}
      <div className="absolute inset-0">
        {[1, 2, 3].map((wave) => (
          <div
            key={wave}
            className="absolute bottom-0 left-0 right-0 opacity-10"
            style={{
              height: `${30 + wave * 15}%`,
              background: `linear-gradient(180deg, transparent 0%, ${
                wave === 1 ? '#00F5FF' : wave === 2 ? '#C724B1' : '#00FF9D'
              } 100%)`,
              animation: `wave ${3 + wave}s ease-in-out infinite`,
              animationDelay: `${wave * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-20 max-w-6xl">
        {/* Main Title */}
        <h2 
          className={`text-[100px] leading-tight mb-8 ${
            isDark ? 'text-white' : 'text-[#0F1A2F]'
          }`}
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #00F5FF 0%, #C724B1 50%, #00FF9D 100%)'
              : 'linear-gradient(135deg, #0088CC 0%, #A020A0 50%, #00CC77 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: isDark ? '0 0 80px rgba(0, 245, 255, 0.3)' : 'none',
          }}
        >
          ВАША IT-СУПЕРСИЛА ЖДЁТ
        </h2>

        {/* Subtitle */}
        <p 
          className={`text-4xl mb-16 tracking-wide ${
            isDark ? 'text-white/80' : 'text-[#0F1A2F]/80'
          }`}
        >
          Исследуйте. Пробуйте. Создавайте.
        </p>

        {/* Action Words */}
        <div className="flex justify-center gap-8 mb-16">
          {[
            { text: 'LEARN', color: '#00F5FF' },
            { text: 'BUILD', color: '#C724B1' },
            { text: 'SHARE', color: '#00FF9D' },
          ].map((item, i) => (
            <div
              key={i}
              className={`group px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-black/10 shadow-xl'
              }`}
            >
              <span
                className="text-2xl tracking-wider"
                style={{ color: item.color }}
              >
                {item.text}
              </span>
              
              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>

        {/* Inspirational Quote */}
        <div 
          className={`relative inline-block px-12 py-8 rounded-3xl backdrop-blur-md ${
            isDark ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-black/10'
          }`}
        >
          <div className="absolute -top-4 -left-4 text-6xl opacity-30" style={{ color: '#00F5FF' }}>"</div>
          <p className={`text-2xl italic ${isDark ? 'text-white/90' : 'text-[#0F1A2F]/90'}`}>
            Лучший способ предсказать будущее — создать его
          </p>
          <div className="absolute -bottom-4 -right-4 text-6xl opacity-30" style={{ color: '#C724B1' }}>"</div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="flex items-center justify-between px-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F5FF] to-[#C724B1] flex items-center justify-center">
              <span className="text-white text-xl">🎓</span>
            </div>
            <div>
              <p className={`text-sm ${isDark ? 'text-white/60' : 'text-[#0F1A2F]/60'}`}>
                IT-Навигатор 2025
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`text-right text-sm ${isDark ? 'text-white/60' : 'text-[#0F1A2F]/60'}`}>
            <p>info@it-navigator.edu</p>
            <p>+7 (XXX) XXX-XX-XX</p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background: 'linear-gradient(90deg, #00F5FF 0%, #C724B1 50%, #00FF9D 100%)',
        }}
      />

      {/* Animation Keyframes */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

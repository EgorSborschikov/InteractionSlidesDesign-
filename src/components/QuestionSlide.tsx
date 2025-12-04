import { Youtube, MessageSquare, Car, Gamepad2, Wifi, Home } from './Icons';

interface QuestionSlideProps {
  isDark: boolean;
}

export function QuestionSlide({ isDark }: QuestionSlideProps) {
  const apps = [
    { icon: Youtube, name: 'YouTube', color: '#FF0000' },
    { icon: MessageSquare, name: 'TikTok', color: '#00F2EA' },
    { icon: Car, name: 'Такси', color: '#FFC107' },
    { icon: Gamepad2, name: 'Игры', color: '#9C27B0' },
    { icon: MessageSquare, name: 'Мессенджер', color: '#00B2FF' },
    { icon: Home, name: 'Умный дом', color: '#4CAF50' },
    { icon: Wifi, name: 'Стриминг', color: '#FF5722' },
    { icon: Gamepad2, name: 'VR/AR', color: '#E91E63' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-16">
      {/* Title */}
      <h2 
        className={`text-7xl mb-20 tracking-tight ${
          isDark ? 'text-white' : 'text-[#0F1A2F]'
        }`}
      >
        ЧТО ОБЪЕДИНЯЕТ ВСЁ ЭТО?
      </h2>

      {/* App Grid */}
      <div className="grid grid-cols-4 gap-8 w-full max-w-6xl">
        {apps.map((app, index) => {
          const Icon = app.icon;
          return (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                  : 'bg-white hover:bg-white/80 border border-black/10 shadow-lg'
              }`}
            >
              {/* Icon */}
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6"
                style={{ backgroundColor: app.color + '20' }}
              >
                <Icon 
                  className="w-10 h-10" 
                  style={{ color: app.color }}
                />
              </div>

              {/* Name */}
              <p className={`text-xl ${isDark ? 'text-white/90' : 'text-[#0F1A2F]/90'}`}>
                {app.name}
              </p>

              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                style={{ backgroundColor: app.color }}
              />
            </div>
          );
        })}
      </div>

      {/* Decorative Code Snippets */}
      <div className="flex gap-4 mt-16 opacity-40">
        {['API', 'UI/UX', 'DATA', 'CLOUD'].map((tag, i) => (
          <span
            key={i}
            className={`px-4 py-2 rounded-lg font-mono text-sm ${
              isDark ? 'bg-white/5 text-[#00F5FF]' : 'bg-black/5 text-[#0088CC]'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
import { Lightbulb, Zap, Users } from './Icons';

interface ChecklistSlideProps {
  isDark: boolean;
}

export function ChecklistSlide({ isDark }: ChecklistSlideProps) {
  const items = [
    {
      icon: Lightbulb,
      title: 'НАЗВАНИЕ',
      description: 'Креативное имя, которое запоминается с первого раза',
      color: '#00F5FF',
      items: ['Уникальное', 'Понятное', 'Цепляющее'],
    },
    {
      icon: Zap,
      title: 'СУПЕР-ФИЧА',
      description: 'Главная "фишка", которой нет у других',
      color: '#C724B1',
      items: ['Инновационное', 'Полезное', 'Реализуемое'],
    },
    {
      icon: Users,
      title: 'КОМАНДА',
      description: 'Распределите роли: разработчик, дизайнер, маркетолог',
      color: '#00FF9D',
      items: ['Программист', 'Дизайнер', 'Маркетолог'],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-16">
      {/* Title */}
      <h2 
        className={`text-7xl mb-4 tracking-tight ${
          isDark ? 'text-white' : 'text-[#0F1A2F]'
        }`}
      >
        ЧЕК-ЛИСТ СТАРТАПА
      </h2>

      <p className={`text-2xl mb-16 ${isDark ? 'text-white/60' : 'text-[#0F1A2F]/60'}`}>
        Три ключевых элемента успешного проекта
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`relative group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-4 ${
                isDark 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                  : 'bg-white border border-black/10 shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* Icon */}
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6"
                style={{ 
                  backgroundColor: `${item.color}20`,
                  border: `2px solid ${item.color}`,
                }}
              >
                <Icon 
                  className="w-10 h-10" 
                  style={{ color: item.color }}
                />
              </div>

              {/* Title */}
              <h3 
                className={`text-3xl mb-3 ${
                  isDark ? 'text-white' : 'text-[#0F1A2F]'
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className={`text-lg mb-6 ${isDark ? 'text-white/70' : 'text-[#0F1A2F]/70'}`}>
                {item.description}
              </p>

              {/* Checklist Items */}
              <div className="space-y-3">
                {item.items.map((checkItem, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <div 
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <span className={`${isDark ? 'text-white/80' : 'text-[#0F1A2F]/80'}`}>
                      {checkItem}
                    </span>
                  </div>
                ))}
              </div>

              {/* Number Badge */}
              <div 
                className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ 
                  backgroundColor: `${item.color}20`,
                  color: item.color,
                }}
              >
                {index + 1}
              </div>

              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"
                style={{ backgroundColor: item.color }}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Decoration */}
      <div className="flex items-center gap-4 mt-16">
        {['→', '→', '→'].map((arrow, i) => (
          <div key={i} className="flex items-center gap-4">
            {i > 0 && (
              <span 
                className="text-4xl opacity-30"
                style={{ color: i === 1 ? '#C724B1' : '#00FF9D' }}
              >
                {arrow}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BarChart3, Smartphone, Bot, FileCode } from './Icons';

interface CompetencySlideProps {
  isDark: boolean;
  number: string;
  title: string;
  subtitle: string;
  color: 'cyan' | 'purple' | 'green';
  type: 'software' | 'digital' | 'mobile' | 'robotics';
}

export function CompetencySlide({ isDark, number, title, subtitle, color, type }: CompetencySlideProps) {
  const colorMap = {
    cyan: '#00F5FF',
    purple: '#C724B1',
    green: '#00FF9D',
  };

  const imageMap = {
    software: 'https://images.unsplash.com/photo-1680479611243-a072462e4d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc29tZXRyaWMlMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDg0NTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    digital: 'https://images.unsplash.com/photo-1707300272150-c0f50ba6a0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBwYXBlcnxlbnwxfHx8fDE3NjQ4NDUxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mobile: 'https://images.unsplash.com/photo-1746005718007-f7049ff86c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcGFydHMlMjBleHBsb2RlZHxlbnwxfHx8fDE3NjQ4NDUxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    robotics: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0ODQ1MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  };

  const iconMap = {
    software: BarChart3,
    digital: FileCode,
    mobile: Smartphone,
    robotics: Bot,
  };

  const accentColor = colorMap[color];
  const Icon = iconMap[type];

  return (
    <div className="w-full h-full flex items-center px-20 py-16">
      <div className="grid grid-cols-3 gap-12 w-full h-full">
        {/* Left: Image */}
        <div className="col-span-2 relative">
          {/* Image Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden group">
            <ImageWithFallback
              src={imageMap[type]}
              alt={title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${accentColor}15 0%, transparent 60%)`,
              }}
            />

            {/* Icon Overlay */}
            <div 
              className="absolute top-8 left-8 w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110"
              style={{ 
                backgroundColor: `${accentColor}20`,
                border: `2px solid ${accentColor}`,
              }}
            >
              <Icon className="w-10 h-10" style={{ color: accentColor }} />
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(${accentColor} 1px, transparent 1px),
                    linear-gradient(90deg, ${accentColor} 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center gap-8">
          {/* Number */}
          <div 
            className="text-[180px] leading-none opacity-20"
            style={{ color: accentColor }}
          >
            {number}
          </div>

          {/* Title */}
          <div>
            <h3 
              className={`text-5xl mb-4 tracking-tight ${
                isDark ? 'text-white' : 'text-[#0F1A2F]'
              }`}
            >
              {title}
            </h3>
            <p 
              className="text-3xl"
              style={{ color: accentColor }}
            >
              {subtitle}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex flex-col gap-3">
            {[100, 70, 90].map((width, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  isDark ? 'bg-white/10' : 'bg-black/10'
                }`}
                style={{ 
                  width: `${width}%`,
                  backgroundColor: i === 1 ? accentColor : undefined,
                }}
              />
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {type === 'software' && ['Python', 'React', 'SQL'].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-lg text-sm font-mono ${
                  isDark ? 'bg-white/5' : 'bg-black/5'
                }`}
                style={{ color: accentColor }}
              >
                {tag}
              </span>
            ))}
            {type === 'digital' && ['Cloud', 'API', 'DevOps'].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-lg text-sm font-mono ${
                  isDark ? 'bg-white/5' : 'bg-black/5'
                }`}
                style={{ color: accentColor }}
              >
                {tag}
              </span>
            ))}
            {type === 'mobile' && ['iOS', 'Android', 'Flutter'].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-lg text-sm font-mono ${
                  isDark ? 'bg-white/5' : 'bg-black/5'
                }`}
                style={{ color: accentColor }}
              >
                {tag}
              </span>
            ))}
            {type === 'robotics' && ['Arduino', 'ROS', '3D Print'].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-lg text-sm font-mono ${
                  isDark ? 'bg-white/5' : 'bg-black/5'
                }`}
                style={{ color: accentColor }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
} from "./components/Icons";
import { TitleSlide } from "./components/TitleSlide";
import { QuestionSlide } from "./components/QuestionSlide";
import { IdeaSlide } from "./components/IdeaSlide";
import { CompetencySlide } from "./components/CompetencySlide";
import { MissionSlide } from "./components/MissionSlide";
import { ChecklistSlide } from "./components/ChecklistSlide";
import { ExamplesSlide } from "./components/ExamplesSlide";
import { QuestionsSlide } from "./components/QuestionsSlide";
import { FinalSlide } from "./components/FinalSlide";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const slides = [
    { component: TitleSlide, id: "title" },
    { component: QuestionSlide, id: "question" },
    { component: IdeaSlide, id: "idea" },
    {
      component: CompetencySlide,
      id: "comp1",
      props: {
        number: "01",
        title: "Программные решения",
        subtitle: "Суперсила бизнеса",
        color: "cyan",
        type: "software",
      },
    },
    {
      component: CompetencySlide,
      id: "comp2",
      props: {
        number: "02",
        title: "Цифровая трансформация",
        subtitle: "Меняем правила игры",
        color: "purple",
        type: "digital",
      },
    },
    {
      component: CompetencySlide,
      id: "comp3",
      props: {
        number: "03",
        title: "Мобильная разработка",
        subtitle: "В кармане миллионов",
        color: "green",
        type: "mobile",
      },
    },
    {
      component: CompetencySlide,
      id: "comp4",
      props: {
        number: "04",
        title: "Робототехника",
        subtitle: "Создаём будущее",
        color: "cyan",
        type: "robotics",
      },
    },
    { component: MissionSlide, id: "mission" },
    { component: ChecklistSlide, id: "checklist" },
    { component: ExamplesSlide, id: "examples" },
    { component: QuestionsSlide, id: "questions" },
    { component: FinalSlide, id: "final" },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown as any);
    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown as any,
      );
  }, [currentSlide]); // Add currentSlide as dependency

  const CurrentSlideComponent = slides[currentSlide].component;
  const slideProps = slides[currentSlide].props || {};

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0F1A2F]" : "bg-[#F8F9FA]"}`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Moon className="w-5 h-5 text-[#0F1A2F]" />
        )}
      </button>

      {/* Slide Container */}
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <CurrentSlideComponent
          isDark={isDark}
          {...slideProps}
        />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full backdrop-blur-sm transition-all ${
            isDark
              ? "bg-white/10 hover:bg-white/20"
              : "bg-black/10 hover:bg-black/20"
          } disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <ChevronLeft
            className={`w-5 h-5 ${isDark ? "text-white" : "text-[#0F1A2F]"}`}
          />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-[#00F5FF]"
                  : `w-2 ${isDark ? "bg-white/30" : "bg-black/30"}`
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-3 rounded-full backdrop-blur-sm transition-all ${
            isDark
              ? "bg-white/10 hover:bg-white/20"
              : "bg-black/10 hover:bg-black/20"
          } disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          <ChevronRight
            className={`w-5 h-5 ${isDark ? "text-white" : "text-[#0F1A2F]"}`}
          />
        </button>
      </div>

      {/* Slide Counter */}
      <div
        className={`fixed bottom-8 right-8 ${isDark ? "text-white/60" : "text-black/60"}`}
      >
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
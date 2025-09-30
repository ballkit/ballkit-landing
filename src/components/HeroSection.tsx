import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container-centered flex flex-col items-center text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-6 leading-tight animate-fade-in tracking-tight">
            Запустите цифровую программу лояльности за 15 минут без технических
            знаний и сложных настроек
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-slower">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary text-foreground rounded-lg px-8 py-6 transition-all transform hover:scale-105 duration-300"
              asChild
            >
              <a href="#how-it-works">Как это работает</a>
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white rounded-lg px-8 py-6 transition-all transform hover:scale-105 duration-300 shadow-md"
              asChild
            >
              <a href="#cta" className="flex items-center gap-2">
                Забронировать демо
                <ArrowRight className="h-5 w-5 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

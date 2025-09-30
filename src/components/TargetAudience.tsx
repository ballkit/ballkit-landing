import { Coffee, Scissors, ShoppingBag } from "lucide-react";

const TargetAudience = () => {
  return (
    <section id="audience" className="section-padding bg-slate-50">
      <div className="container-centered">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="chip bg-primary/10 text-primary mb-4">
            Целевая аудитория
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Кому подойдет наша платформа
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Для малого и среднего бизнеса с высокой частотой повторных покупок
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg animate-fade-in">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Кофейни</h3>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg animate-fade-in">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Scissors className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Барбершопы и салоны красоты
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg animate-fade-in">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Торговые сети одежды, обуви и спорттоваров
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

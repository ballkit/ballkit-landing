
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Мы перешли с бумажных карт на эту платформу и сразу увидели рост повторных визитов. Клиенты довольны, и мы экономим время персонала.",
    author: "Анна",
    role: "Владелица кофейни",
    rating: 5
  },
  {
    text: "Внедрили за полчаса, обучили персонал за 15 минут. Очень просто и эффективно. Отличное решение для нашей сети из 5 барбершопов.",
    author: "Михаил",
    role: "Основатель сети барбершопов",
    rating: 5
  },
  {
    text: "Наконец-то нашли альтернативу дорогим CRM. С этой платформой мы начали собирать базу клиентов и теперь видим, кто к нам возвращается.",
    author: "Елена",
    role: "Маркетолог в сети магазинов одежды",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-centered">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="chip bg-primary/10 text-primary mb-4">Отзывы</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Предприниматели уже оценили простоту и эффективность нашей программы лояльности
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-slate-200" />
                ))}
              </div>
              <blockquote className="text-foreground/80 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

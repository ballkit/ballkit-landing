import { BRAND_NAME } from "@/lib/consts";
import { Briefcase, Award, Code } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="section-padding bg-slate-50">
      <div className="container-centered">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Кто мы
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex flex-col items-center">
              <div className="w-48 h-56 overflow-hidden rounded-lg mb-4 shadow-md">
                <img
                  src="/Mark.jpg"
                  alt="Марк"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg">Марк</h3>
              <p className="text-sm text-foreground/60">Сооснователь</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-48 h-56 overflow-hidden rounded-lg mb-4 shadow-md">
                <img
                  src="/Anton.jpg"
                  alt="Антон"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg">Антон</h3>
              <p className="text-sm text-foreground/60">Сооснователь</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              Привет! Мы – Марк и Антон. Мы хотим помочь предпринимателям
              увеличивать повторные покупки уже сегодня, без сложных интеграций
              и недель ожидания.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Уже третий год мы разрабатываем IT-решения на заказ. Заказчик не
              ждёт месяцами, ему нужно «на вчера» – поэтому мы привыкли работать
              быстро и без лишней бюрократии. Теперь мы применили этот подход в
              собственном продукте – цифровой программе лояльности, которую
              можно установить всего за 15 минут.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Мы делаем всё, чтобы вашим клиентам было просто копить баллы, а
              вам – легко видеть результат. «{BRAND_NAME}» – это про скорость,
              удобство и рост вашего бизнеса.
            </p>

            {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Code className="text-primary h-5 w-5" />
                <span className="font-medium">Разработка</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-primary h-5 w-5" />
                <span className="font-medium">Микросервисы</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-primary h-5 w-5" />
                <span className="font-medium">Финалисты</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

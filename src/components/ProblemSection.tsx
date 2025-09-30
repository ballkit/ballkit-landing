import { CheckCircle, Clock, DollarSign, XCircle } from "lucide-react";
import { useState } from "react";

const ProblemSection = () => {
  const [cheaperPopupVisibile, setCheaperPopupVisible] = useState(false);

  return (
    <section id="problem" className="section-padding bg-slate-50">
      <div className="container-centered">
        <div className="max-w-3xl mx-auto text-center">
          <div className="chip bg-red-50 text-red-600 mb-4">Проблема</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Вы теряете клиентов
          </h2>
          <p className="mx-auto w-3/4 text-lg text-foreground/70 mb-16 leading-relaxed">
            Бумажные карты забываются, скидки съедают прибыль, сложные CRM
            требуют больших затрат и времени
          </p>
        </div>

        <div className="flex flex-row justify-center">
          <div className="text-center sm:w-full md:w-3/5 bg-white rounded-2xl shadow-lg p-8 border border-slate-100 overflow-hidden animate-fade-in">
            <div className="chip bg-green-50 text-green-600 mb-6">Решение</div>
            <h3 className="text-2xl font-bold mb-4">
              Запустите программу лояльности за 15 минут
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <p>Простая интеграция</p>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <p> Не требует технических знаний </p>
              </div>
              <div className="relative flex gap-3 items-center">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <p>Работает через Telegram, который знаком всем</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CircleArrowRight,
  CornerDownRight,
  Shield,
} from "lucide-react";
import { QrCode } from "./ui/QrCode";
import BookingDialog from "./BookingDialog";
import { BOOK_LINK, BRAND_NAME, MONTHLY_COST } from "@/lib/consts";

const CtaSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = () => {
    /* window.location.href = BOOK_LINK; */
    setIsDialogOpen(true);
  };

  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          id="cta"
          className="absolute top-[15%] right-[5%] w-60 h-60 rounded-full bg-primary/10 blur-3xl"
        ></div>
        <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container-centered">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 tracking-tight">
                Забронируйте демо
              </h2>

              <p className="text-foreground/70 mb-6">
                и мы бесплатно внедрим программу лояльности в одну точку всего
                за 15 минут.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-center">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground/70">
                    <span className="font-medium">
                      Месяц бесплатного использования
                    </span>
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground/70">
                    <span className="font-medium">Отключение в один клик</span>
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground/70">
                    <span className="font-medium">
                      {MONTHLY_COST} в месяц за точку со второго месяца
                    </span>
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white rounded-lg px-8 py-6 transition-all transform hover:scale-105 duration-300 shadow-md w-full sm:w-auto"
                onClick={() => handleSubmit()}
              >
                <span className="flex items-center justify-center gap-2">
                  Забронировать демо
                  <ArrowRight className="h-5 w-5 ml-1" />
                </span>
              </Button>

              {/* <p className="mt-6 text-sm text-foreground/60 italic">
                * После нажатия кнопки вы будете перенаправлены на сервис
                  бронирования видео-звонка встречи с нашей командой
                  </p> */}
            </div>

            <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center items-center relative">
              <div className="absolute inset-0 bg-primary opacity-5 pattern-grid-lg mix-blend-overlay"></div>

              <div className="relative z-10 text-center">
                <QrCode className="mx-auto mb-8 animate-float" />

                <h3 className="text-2xl font-bold mb-4">{BRAND_NAME}</h3>

                <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                  Начинайте получать пользу от программы лояльности уже через 15
                  минут после демонстрации
                </p>

                <div className="inline-flex items-center justify-center gap-2 text-primary font-medium">
                  <span>Запуск за 15 минут</span>
                  <div className="h-1 w-1 rounded-full bg-primary/40"></div>
                  <span>Простая интеграция</span>
                  <div className="h-1 w-1 rounded-full bg-primary/40"></div>
                  <span>1-й месяц бесплатно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <BookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default CtaSection;

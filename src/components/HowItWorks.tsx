import { QrCode } from "./ui/QrCode";
import {
  ArrowRight,
  MessageSquare,
  QrCode as QrCodeIcon,
  UserCheck,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-centered">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="chip bg-primary/10 text-primary mb-4">Процесс</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Как работает платформа
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed"></p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in group">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <QrCodeIcon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">1. Установка QR-кода</h3>
            <p className="text-foreground/70 mb-6">
              Устанавливаем QR-код в точке продажи, который переводит клиентов в
              Telegram-бота платформы.
            </p>
            <div className="flex justify-center">
              <QrCode className="animate-float" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in group">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MessageSquare className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              2. Регистрация клиентов
            </h3>
            <p className="text-foreground/70 mb-6">
              Клиенты сканируют QR-код и получают свой персональный
              идентификатор для начисления бонусов в Telegram-боте.
            </p>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-slate-500" />
                </div>
                <div className="text-sm font-medium">Telegram Bot</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm mb-3 text-sm">
                Добро пожаловать в программу лояльности!
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm mb-3 text-sm">
                Ваш персональный QR-код готов
              </div>
              <div className="w-full h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                <QrCodeIcon className="h-8 w-8 text-primary/60" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in group">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <ArrowRight className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              3. Начисление бонусов
            </h3>
            <p className="text-foreground/70 mb-6">
              Продавец сканирует QR-идентификатор клиента и начисляет или
              списывает бонусы.
            </p>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-3">
                <QrCodeIcon className="h-5 w-5 text-primary" />
                <span className="text-sm">Сканировать QR клиента</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-3">
                <span className="text-sm font-medium">Начислить: </span>
                <div className="flex gap-1">
                  <div className="w-8 h-8 bg-white rounded border border-slate-200 flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    50
                  </div>
                  <div className="w-8 h-8 bg-white rounded border border-slate-200 flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    100
                  </div>
                  <div className="w-8 h-8 bg-white rounded border border-slate-200 flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    200
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

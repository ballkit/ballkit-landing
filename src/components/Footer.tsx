import { BRAND_NAME } from "@/lib/consts";
import { QrCode } from "./ui/QrCode";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-16">
      <div className="container-centered">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl text-primary mb-2">
              {BRAND_NAME}
            </h3>
            <p className="text-foreground/60 max-w-xs">
              Простая и доступная программа лояльности для малого и среднего
              бизнеса
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#problem"
              className="text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              Проблема
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              Как это работает
            </a>
            {/* <a
                href="#who-we-are"
                className="text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                Кто мы
                </a> */}
            <a
              href="#cta"
              className="text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              Забронировать
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

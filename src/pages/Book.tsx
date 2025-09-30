import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Calendar, CircleX } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BOOK_LINK, CONTACT_EMAIL } from "@/lib/consts";

const TransactionFailure = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6 bg-primary/10 p-4 rounded-full inline-flex">
          <CircleX className="h-12 w-12 text-primary" color="#ef4444" />
        </div>

        <h1 className="text-2xl font-bold mb-4">Оплата не удалась</h1>

        <p className="text-foreground/70 mb-6">
          По возможным вопросам пишите на почту: {CONTACT_EMAIL}
        </p>

        <Button variant="outline" asChild className="w-full">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

const DoBook = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6 bg-primary/10 p-4 rounded-full inline-flex">
          <Calendar className="h-12 w-12 text-primary" />
        </div>

        <h1 className="text-2xl font-bold mb-4">
          Назначьте встречу в удобное вам время по ссылке
        </h1>

        <p className="text-foreground/70 mb-6">
          Теперь выберите удобное время для встречи.
        </p>

        <Button className="mb-6 w-full" asChild>
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer">
            Выбрать время встречи
          </a>
        </Button>

        <Button variant="outline" asChild className="w-full">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

const FullPageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
    <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
  </div>
);

const Book = () => {
  const [responseSent, setResponseSent] = useState(false);
  const [paid, setPaid] = useState(false);
  const [searchParams, _] = useSearchParams();
  const payment_id = searchParams.get("payment");

  useEffect(() => {
    axios
      .get("https://api.patchloyalty.com/check-payment", {
        params: { id: payment_id },
      })
      .then((response) => {
        const payment = response.data;
        setPaid(payment.paid === undefined ? false : payment.paid);
      })
      .finally(() => setResponseSent(true));
  }, [setPaid]);

  if (responseSent) {
    return paid ? <DoBook /> : <TransactionFailure />;
  } else {
    return <FullPageLoader />;
  }
};

export default Book;

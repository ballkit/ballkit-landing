import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const BookingSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6 bg-primary/10 p-4 rounded-full inline-flex">
          <Calendar className="h-12 w-12 text-primary" />
        </div>

        <h1 className="text-2xl font-bold mb-4">Спасибо!</h1>

        {/* <p className="text-foreground/70 mb-6">
            На предстоящем созвоне представим работу платформы и обсудим детали
            сотрудничества. До скорой встречи!
            </p> */}

        <Button variant="outline" asChild className="w-full">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BookingSuccess;


import { useState } from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { BOOK_LINK, BOOK_NOTIFY_LINK } from "@/lib/consts";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.get(`${BOOK_NOTIFY_LINK}?firstName=${name}&lastName=${lastName}&email=${email}&company=${company}&description=${description}`)
      .then((response) => {
        console.log('Заявка успешно отправлена:', response.data);
      })
      .catch((error) => {
        console.error('Ошибка при отправке заявки:', error.response?.data || error.message);
      })
      .finally(() => {
        window.location.href = "/booking-success";
      });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Забронируйте демо</DialogTitle>
          <DialogDescription>
            Бесплатно внедрим в одну точку и покажем, как увеличить число повторных покупок без лишних затрат.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Фамилия</Label>
              <Input 
                id="lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Название компании</Label>
            <Input 
              id="company" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Описание деятельности вашей организации</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="text-sm text-foreground/70 italic mt-4">
            {/* После нажатии кнопки вы будете перенаправлены на сервис приёма оплаты, после произведения которой вам будет предоставлена ссылка на календли для назначения встречи для обсуждения деталей. */}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark"
          >
            <span className="flex items-center justify-center gap-2">
              {/* Забронировать */}
              Отправить
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;

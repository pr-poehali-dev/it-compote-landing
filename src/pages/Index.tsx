import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Вы записаны в лист ожидания! 🚀');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/20 via-fun-green/10 to-magic-purple/20 font-open">
      {/* Заголовок */}
      <div className="relative overflow-hidden bg-gradient-to-r from-playful-red to-warm-orange text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-bounce-gentle inline-block mb-4">
            <Icon name="Rocket" size={48} className="text-white" />
          </div>
          
          <h1 className="font-comic text-6xl md:text-8xl font-bold mb-6 animate-pulse-glow">
            Перезагрузка Школы IT-Компот
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-8 animate-wiggle">
            Самая масштабная распродажа за все 8 лет
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-playful-red hover:bg-gray-100 text-xl px-8 py-4 font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Users" size={20} className="mr-2" />
            Записаться в лист ожидания
          </Button>
        </div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 animate-bounce-gentle">
          <div className="w-16 h-16 bg-white/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 animate-wiggle">
          <div className="w-12 h-12 bg-white/20 rounded-lg rotate-45"></div>
        </div>
      </div>

      {/* Основной блок */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-8">
              <Icon name="Sparkles" size={32} className="mx-auto mb-4 text-warm-orange animate-wiggle" />
              <h2 className="font-comic text-3xl md:text-4xl font-bold text-cool-gray mb-6">
                Мы готовы презентовать обновленные программы и усиленный состав педагогов
              </h2>
            </div>

            {/* Уведомление о распродаже */}
            <div className="bg-gradient-to-r from-playful-red to-warm-orange text-white rounded-2xl p-6 mb-8 shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="mr-2 animate-bounce-gentle" />
                <span className="font-bold text-xl">Распродажа продлится всего 5 дней</span>
              </div>
              
              {/* Таймер */}
              <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto mb-6">
                {[
                  { value: timeLeft.days, label: 'Дней' },
                  { value: timeLeft.hours, label: 'Часов' },
                  { value: timeLeft.minutes, label: 'Минут' },
                  { value: timeLeft.seconds, label: 'Секунд' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                    <div className="font-comic text-2xl md:text-3xl font-bold">{item.value.toString().padStart(2, '0')}</div>
                    <div className="text-sm font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-lg font-semibold">
                После чего закроется и мы традиционно повысим стоимость всех программ
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Блок с историей */}
      <div className="bg-gradient-to-r from-magic-purple/10 to-sky-blue/10 py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Icon name="Heart" size={32} className="mx-auto mb-4 text-playful-red animate-pulse-glow" />
                <h3 className="font-comic text-3xl md:text-4xl font-bold text-cool-gray mb-6">
                  Наша история
                </h3>
              </div>
              
              <blockquote className="text-xl md:text-2xl font-semibold text-center italic text-cool-gray mb-8 leading-relaxed">
                "20 лет я посвятила педагогике: исследованием, обучениям, поискам наиболее эффективных методов развития детей и подростков."
              </blockquote>
              
              <div className="space-y-6 text-lg text-cool-gray/80 leading-relaxed">
                <p>
                  Основание Школы – было возможностью повлиять на систему образования, привлечь сотни педагогов и десятки энтузиастов в области психологии, методологии, технических и творческих профессий.
                </p>
                
                <div className="bg-gradient-to-r from-fun-green/20 to-sky-blue/20 rounded-2xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Trophy" size={24} className="mr-2 text-warm-orange" />
                    <span className="font-bold text-xl text-cool-gray">95 000 детей</span>
                  </div>
                  <p className="text-center">
                    За 8 лет развития нам удалось повлиять на 95 000 детей. По пути мы переросли просто курсы по программированию и пошли дальше.
                  </p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-comic text-2xl md:text-3xl font-bold text-playful-red mb-4">
                    Пришло время показать наши наработки и пригласить вас в новую версию Школы!
                  </h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Форма записи */}
      <div id="waitlist-form" className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-white to-fun-green/5">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <Icon name="UserPlus" size={32} className="mx-auto mb-4 text-magic-purple animate-bounce-gentle" />
              <h3 className="font-comic text-3xl md:text-4xl font-bold text-cool-gray">
                Записаться в лист ожидания
              </h3>
              <p className="text-lg text-cool-gray/70 mt-4">
                Оставьте свои данные и первыми узнайте о начале распродажи!
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-semibold text-cool-gray">
                  Имя
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Введите ваше имя"
                  className="mt-2 text-lg p-4 border-2 border-gray-200 focus:border-playful-red rounded-xl"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-lg font-semibold text-cool-gray">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Введите ваш email"
                  className="mt-2 text-lg p-4 border-2 border-gray-200 focus:border-playful-red rounded-xl"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-lg font-semibold text-cool-gray">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Введите ваш телефон"
                  className="mt-2 text-lg p-4 border-2 border-gray-200 focus:border-playful-red rounded-xl"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-playful-red to-warm-orange hover:from-warm-orange hover:to-playful-red text-white text-xl py-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 font-bold"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Записаться в космический список! 🚀
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Подвал */}
      <div className="bg-cool-gray text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            © 2024 Школа IT-Компот. Готовим будущих космонавтов цифрового пространства! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
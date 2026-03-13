# Rent-tech

Frontend частина веб-додатку для компанії **RentalCar**, яка займається орендою автомобілів.  
Проєкт реалізований на **Next.js + TypeScript** з використанням **Zustand** для управління станом та **Axios** для роботи з API.

## 🚀 Основні можливості
- Головна сторінка з банером та кнопкою переходу до каталогу
- Каталог автомобілів з фільтрацією за:
  - брендом
  - ціною
  - пробігом
- Додавання автомобілів до списку обраних (зберігається у LocalStorage)
- Перегляд детальної інформації про автомобіль
- Форма бронювання автомобіля з нотифікацією про успішну оренду
- Пагінація та кнопка **Load More** для довантаження карток
- Відповідність макету та семантична верстка

## 🛠️ Технології
- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- CSS Modules

## 📦 Встановлення та запуск
```bash
git clone https://github.com/oleg655775/Rent-tech.git
cd Rent-tech
npm install
npm run dev

# TechStore Template

Шаблон интернет-магазина электроники, созданный для FLUW.

## Стек технологий

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **shadcn/ui** - UI компоненты
- **Zustand** - управление состоянием
- **Framer Motion** - анимации

## Архитектура (FSD)

src/
├── app/ # Next.js страницы
├── entities/ # Сущности (product, cart, category)
├── features/ # Фичи (add-to-cart, filter)
├── widgets/ # Виджеты (header, footer, product-list)
├── shared/ # Общий код (ui, lib, hooks)
└── pages/ # Дополнительные страницы


## Быстрый старт

# Установка зависимостей
npm install

# Запуск разработки
npm run dev

# Сборка продакшена
npm run build

# Запуск продакшена
npm start


## Структура проекта

# Entities
- **product** - товары (типы, данные, карточка)
- **category** - категории
- **cart** - корзина (Zustand store, хуки)

# Features
- **add-to-cart** - добавление в корзину
- **add-to-favorite** - избранное
- **filter-products** - фильтрация товаров

## Widgets
- **header** - хедер с корзиной
- **footer** - футер
- **product-list** - список товаров
- **product-filters** - фильтры каталога

## Shared
- **ui** - shadcn компоненты
- **lib** - утилиты (cn, анимации)
- **hooks** - общие хуки
- **config** - конфигурация


## СТРАНИЦЫ ДЛЯ ТЕСТИРОВАНИЯ

Главная - http://localhost:3000/
Каталог - http://localhost:3000/catalog
Товар - http://localhost:3000/product/1
Корзина - http://localhost:3000/cart
О нас - http://localhost:3000/about
Контакты - http://localhost:3000/contact
404 - http://localhost:3000/anything
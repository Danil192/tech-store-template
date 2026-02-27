# TechStore Template

Шаблон интернет-магазина электроники, созданный для FLUW.

## Стек технологий

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **shadcn/ui** - UI компоненты
- **Zustand** - управление состоянием
- **Framer Motion** - анимации

## Старт проекта

- npm install
- npm run dev

## Структура проекта

# Entities
- **product** - товары (типы, данные, карточка)
- **category** - категории
- **cart** - корзина (Zustand store, хуки)

# Features
- **add-to-cart** - добавление в корзину
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

- Главная - http://localhost:3000/
- Каталог - http://localhost:3000/catalog
- Товар - http://localhost:3000/product/1
- Корзина - http://localhost:3000/cart
- О нас - http://localhost:3000/about
- Контакты - http://localhost:3000/contact
- 404 - http://localhost:3000/anything
"use client"

import { products, categories } from "@entities/product"
import { ProductCard } from "@entities/product"
import { Button } from "@shared/ui/button"
import { ArrowRight, Laptop, Smartphone, Headphones, Watch } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const categoryIcons = {
  smartphones: Smartphone,
  laptops: Laptop,
  headphones: Headphones,
  smartwatches: Watch,
}

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Техника будущего уже здесь
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Смартфоны, ноутбуки, наушники и многое другое по лучшим ценам
            </p>
            <Link href="/catalog">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Перейти в каталог
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category, index) => {
              const Icon = categoryIcons[category.slug as keyof typeof categoryIcons] || Smartphone
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={`/catalog?category=${category.slug}`}
                    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="h-12 w-12 text-blue-600 mb-4" />
                    <span className="font-medium">{category.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Популярные товары</h2>
            <Link href="/catalog">
              <Button variant="outline">
                Все товары
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему мы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Быстрая доставка", desc: "Доставим в день заказа" },
              { title: "Гарантия качества", desc: "Только оригинальная техника" },
              { title: "Поддержка 24/7", desc: "Поможем с выбором и настройкой" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">О нас</h1>
        <p className="text-lg text-muted-foreground mb-8">
          TechStore — ваш надёжный партнер в мире электроники с 2024 года.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
            <p className="text-muted-foreground">
              Мы стремимся сделать современные технологии доступными для каждого.
              В нашем ассортименте только оригинальная техника от проверенных
              производителей.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Почему выбирают нас</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Официальная гарантия на все товары</li>
              <li>✓ Быстрая доставка по всей стране</li>
              <li>✓ Квалифицированная поддержка 24/7</li>
              <li>✓ Удобный возврат и обмен</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Контакты</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>Москва, ул. Примерная, 123</p>
              <p>+7 (999) 000-00-00</p>
              <p>info@techstore.ru</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
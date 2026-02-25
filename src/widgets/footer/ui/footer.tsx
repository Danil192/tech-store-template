import Link from "next/link"
import { Github, Twitter, Instagram, Mail, Phone } from "lucide-react"
import { Github, Twitter, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t bg-gray-50"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TechStore</h3>
            <p className="text-sm text-muted-foreground">
              Ваш надёжный магазин электроники с 2024 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/catalog?category=smartphones" className="hover:text-foreground">
                  Смартфоны
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=laptops" className="hover:text-foreground">
                  Ноутбуки
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=headphones" className="hover:text-foreground">
                  Наушники
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=smartwatches" className="hover:text-foreground">
                  Умные часы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-foreground">
                  Доставка
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-foreground">
                  Гарантия
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@techstore.ru
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +7 (999) 000-00-00
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 TechStore. Все права защищены.</p>
        </div>
      </div>
    </motion.footer>
  )
}
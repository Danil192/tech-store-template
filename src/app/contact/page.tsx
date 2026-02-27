"use client"

import { Button } from "@shared/ui/button"
import { Input } from "@shared/ui/input"
import { Label } from "@shared/ui/label"
import { Textarea } from "@shared/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-3 p-4 border rounded-lg">
            <Phone className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-muted-foreground">Телефон</p>
              <p className="font-medium">+7 (999) 000-00-00</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 border rounded-lg">
            <Mail className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">info@techstore.ru</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 border rounded-lg">
            <MapPin className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-muted-foreground">Адрес</p>
              <p className="font-medium">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Напишите нам</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Имя</Label>
              <Input id="name" placeholder="Ваше имя" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                placeholder="Ваш вопрос"
                className="mt-1 min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Отправить
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
"use client"

import Link from "next/link"
import { Button } from "@shared/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          К сожалению, страница, которую вы ищете, не существует или была перемещена
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button>
              <Home className="h-4 w-4 mr-2" />
              На главную
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
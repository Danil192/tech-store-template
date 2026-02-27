"use client"

import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@shared/ui/button"
import { Badge } from "@shared/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@shared/ui/sheet"
import { useCart } from "@entities/cart/hooks/use-cart"
import { CartSheet } from "./cart-sheet"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Header() {
  const { getCount } = useCart()
  const [cartCount, setCartCount] = useState(0)
  
  useEffect(() => {
    setCartCount(getCount())
  }, [getCount])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">TechStore</Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground">Каталог</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">О нас</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Контакты</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <CartSheet />
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/catalog" className="text-lg">Каталог</Link>
                <Link href="/about" className="text-lg">О нас</Link>
                <Link href="/contact" className="text-lg">Контакты</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
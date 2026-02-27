"use client"

import { useCart } from "@entities/cart/hooks/use-cart"
import { Button } from "@shared/ui/button"
import { ScrollArea } from "@shared/ui/scroll-area"
import { Separator } from "@shared/ui/separator"
import { DialogTitle } from "@shared/ui/dialog" 
import { Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartSheet() {
  const { items, removeFromCart, updateQuantity, getTotal, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12">
        <DialogTitle className="sr-only">Корзина</DialogTitle>
        
        <p className="text-muted-foreground mb-4">Корзина пуста</p>
        <Link href="/catalog">
          <Button>Перейти в каталог</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <DialogTitle className="sr-only">Корзина</DialogTitle>
      
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Корзина</h2>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div>
                    <Link
                      href={`/product/${item.id}`}
                      className="font-medium hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold">Итого:</span>
          <span className="text-xl font-bold">{getTotal().toLocaleString()} ₽</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={clearCart}>
            Очистить
          </Button>
          <Button className="flex-1">Оформить</Button>
        </div>
      </div>
    </div>
  )
}
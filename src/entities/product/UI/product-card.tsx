"use client"

import { Product } from "../types"
import { Card, CardContent, CardFooter } from "@shared/ui/card"
import { Button } from "@shared/ui/button"
import { Badge } from "@shared/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {product.oldPrice && (
            <Badge className="absolute top-2 left-2 bg-red-500">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="absolute top-2 right-2 bg-gray-500">
              Нет в наличии
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-gray-500">{product.brand}</p>
          <h3 className="font-semibold line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{product.price.toLocaleString()} ₽</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.oldPrice.toLocaleString()} ₽
              </span>
            )}
          </div>
          <Button size="sm" disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            В корзину
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
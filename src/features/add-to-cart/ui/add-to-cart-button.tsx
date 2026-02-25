"use client"

import { Button } from "@shared/ui/button"
import { useCart } from "@entities/cart/hooks/use-cart"
import { Product } from "@entities/product"
import { ShoppingCart, Check } from "lucide-react"
import { motion } from "framer-motion"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, isInCart, getItemQuantity } = useCart()

  const inCart = isInCart(product.id)
  const quantity = getItemQuantity(product.id)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className="w-full"
        variant={inCart ? "secondary" : "default"}
      >
        {inCart ? (
          <>
            <Check className="h-4 w-4 mr-2" />
            В корзине ({quantity})
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </>
        )}
      </Button>
    </motion.div>
  )
}
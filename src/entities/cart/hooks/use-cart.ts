import { useCartStore } from "../store/cart-store"
import { CartItem } from "../types"
import { Product } from "@entities/product"

export function useCart() {
  const items = useCartStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const clearCart = useCartStore((state) => state.clearCart)
  
  const getTotalFn = useCartStore((state) => state.getTotal)
  const getCountFn = useCartStore((state) => state.getCount)

  const addToCart = (product: Product) => {
    addItem({ ...product, quantity: 1 })
  }

  const isInCart = (id: number) => {
    return items.some((item) => item.id === id)
  }

  const getItemQuantity = (id: number) => {
    const item = items.find((item) => item.id === id)
    return item?.quantity || 0
  }

  return {
    items,
    addToCart,
    removeFromCart: removeItem,
    updateQuantity,
    clearCart,
    getTotal: () => getTotalFn(),
    getCount: () => getCountFn(),
    isInCart,
    getItemQuantity,
  }
}
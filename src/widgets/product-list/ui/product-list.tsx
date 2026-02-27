"use client"

import { Product } from "@entities/product"
import { ProductCard } from "@entities/product"
import { useMemo } from "react"

interface ProductListProps {
  products: Product[]
  searchParams: {
    category?: string
    brand?: string
    minPrice?: string
    maxPrice?: string
    sortBy?: string
  }
}

export function ProductList({ products, searchParams }: ProductListProps) {
  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (searchParams?.category) {
      result = result.filter((p) => p.category === searchParams.category)
    }

    if (searchParams?.brand) {
      result = result.filter((p) => p.brand === searchParams.brand)
    }

    if (searchParams?.minPrice) {
      result = result.filter((p) => p.price >= Number(searchParams.minPrice))
    }

    if (searchParams?.maxPrice) {
      result = result.filter((p) => p.price <= Number(searchParams.maxPrice))
    }

    if (searchParams?.sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (searchParams?.sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    } else if (searchParams?.sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [products, searchParams])

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Товары не найдены</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
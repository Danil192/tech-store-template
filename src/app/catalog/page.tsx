import { products, categories } from "@entities/product"
import { ProductCard } from "@entities/product"
import { ProductFilters } from "@widgets/product-filters"
import { ProductList } from "@widgets/product-list"
import { use } from "react"

interface CatalogPageProps {
  searchParams: Promise<{
    category?: string
    brand?: string
    minPrice?: string
    maxPrice?: string
    sortBy?: string
  }>
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {

  const params = await searchParams
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Каталог</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <ProductFilters categories={categories} />
        </aside>
        <main className="flex-1">
          <ProductList products={products} searchParams={params} />
        </main>
      </div>
    </div>
  )
}
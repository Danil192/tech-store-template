export interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  images?: string[]
  category: string
  brand: string
  rating: number
  reviews: number
  inStock: boolean
  description: string
  specifications: Record<string, string>
}

export interface Category {
  id: number
  name: string
  slug: string
  icon?: string
}

export interface FilterState {
  category: string
  brand: string
  minPrice: number
  maxPrice: number
  inStock: boolean
  sortBy: string
}
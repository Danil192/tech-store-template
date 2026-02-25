"use client"

import { Category } from "@entities/product"
import { Checkbox } from "@shared/ui/checkbox"
import { Label } from "@shared/ui/label"
import { Slider } from "@shared/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

interface ProductFiltersProps {
  categories: Category[]
}

export function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 200000])

  const brands = ["Apple", "Samsung", "Sony", "Xiaomi", "Huawei"]

  const handleFilterChange = (key: string, value: string | boolean) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value === false || value === "") {
      params.delete(key)
    } else {
      params.set(key, String(value))
    }

    router.push(`/catalog?${params.toString()}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Категории</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.slug}
                checked={searchParams.get("category") === category.slug}
                onCheckedChange={(checked) =>
                  handleFilterChange("category", checked ? category.slug : "")
                }
              />
              <Label htmlFor={category.slug} className="text-sm cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Бренд</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={searchParams.get("brand") === brand}
                onCheckedChange={(checked) =>
                  handleFilterChange("brand", checked ? brand : "")
                }
              />
              <Label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Цена</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={200000}
          step={1000}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{priceRange[0].toLocaleString()} ₽</span>
          <span>{priceRange[1].toLocaleString()} ₽</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Сортировка</h3>
        <Select
          value={searchParams.get("sortBy") || "popular"}
          onValueChange={(value) => handleFilterChange("sortBy", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="По популярности" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">По популярности</SelectItem>
            <SelectItem value="price-asc">По цене (возрастание)</SelectItem>
            <SelectItem value="price-desc">По цене (убывание)</SelectItem>
            <SelectItem value="rating">По рейтингу</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import { useDebounce } from '@/hooks/useDebounce'
import type { CarsFilters } from '@/types/car'
import styles from './CarFilters.module.css'

interface CarFiltersProps {
  brands: string[]
  onFilter: (filters: CarsFilters) => void
}

export const CarFilters: React.FC<CarFiltersProps> = ({ brands, onFilter }) => {
  const [filters, setFilters] = useState<CarsFilters>({})
  const debouncedFilters = useDebounce(filters)

  useEffect(() => {
    onFilter(debouncedFilters)
  }, [debouncedFilters, onFilter])

  return (
    <div className={styles.filters}>
      <div className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="brand-select" className={styles.label}>Car brand</label>
          <select
            id="brand-select"
            value={filters.brand || ''}
            onChange={e => setFilters(prev => ({ ...prev, brand: e.target.value || undefined }))}
            className={styles.select}
          >
            <option value="">Choose a brand</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className={styles.group}>
          <label htmlFor="price-select" className={styles.label}>Price / 1 hour</label>
          <select
            id="price-select"
            value={filters.rentalPrice || ''}
            onChange={e => setFilters(prev => ({ ...prev, rentalPrice: e.target.value || undefined }))}
            className={styles.select}
          >
            <option value="">Choose a price</option>
            {[30, 40, 50, 60, 70, 80].map(price => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>
        </div>

        <div className={styles.group}>
          <label className={styles.label}>Car mileage / km</label>
          <div className={styles.mileage}>
            <input
              type="number"
              placeholder="From"
              value={filters.minMileage || ''}
              onChange={e => setFilters(prev => ({ ...prev, minMileage: e.target.value || undefined }))}
              className={styles.mileageInput}
            />
            <input
              type="number"
              placeholder="To"
              value={filters.maxMileage || ''}
              onChange={e => setFilters(prev => ({ ...prev, maxMileage: e.target.value || undefined }))}
              className={styles.mileageInput}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="primary">Search</Button>
        </div>
      </div>
    </div>
  )
}

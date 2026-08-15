import { useState } from 'react'
import { useGetProductsQuery } from '../features/products/productsApi'
import { useAppDispatch } from '../app/hooks'
import { incrementCart } from '../features/ui/uiSlice'
import { CartIcon } from './Icons'
import './BestsellerProducts.css'

const PAGE_SIZE = 10

// DummyJSON doesn't have a real "discount category" label like the Figma
// design ("Graphic Design / English Department"), so we derive a readable
// category + brand line from the actual API fields instead of hardcoding
// fake text over real data.
function formatMeta(category: string, brand?: string) {
  const readableCategory = category
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
  return brand ? `${readableCategory} · ${brand}` : readableCategory
}

export default function BestsellerProducts() {
  const [limit, setLimit] = useState(PAGE_SIZE)
  const { data, isLoading, isFetching, isError, refetch } = useGetProductsQuery({ limit })
  const dispatch = useAppDispatch()

  const products = data?.products ?? []
  const hasMore = data ? products.length < data.total : false

  return (
    <section className="bestsellers section" id="shop" aria-label="Bestseller products">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Featured Products</p>
          <h2 className="section-title">BESTSELLER PRODUCTS</h2>
          <p className="section-subtitle">Problems trying to resolve the conflict between</p>
        </div>

        {isLoading && (
          <div className="bestsellers__grid" aria-busy="true">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div className="product-card product-card--skeleton" key={i}>
                <div className="product-card__image-skeleton" />
                <div className="product-card__line-skeleton" />
                <div className="product-card__line-skeleton product-card__line-skeleton--short" />
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="bestsellers__error" role="alert">
            <p>Couldn't load products right now. Please check your connection.</p>
            <button className="btn btn-outline" onClick={() => refetch()}>
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !isError && products.length === 0 && (
          <p className="bestsellers__empty">No products found.</p>
        )}

        {!isLoading && !isError && products.length > 0 && (
          <div className="bestsellers__grid">
            {products.map((product) => {
              const discounted =
                product.price -
                (product.price * product.discountPercentage) / 100
              return (
                <article className="product-card" key={product.id}>
                  <div className="product-card__image-wrap">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      loading="lazy"
                      className="product-card__image"
                    />
                    <button
                      className="product-card__cart-btn"
                      aria-label={`Add ${product.title} to cart`}
                      onClick={() => dispatch(incrementCart())}
                    >
                      <CartIcon size={16} />
                    </button>
                  </div>
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__meta">
                    {formatMeta(product.category, product.brand)}
                  </p>
                  <p className="product-card__price">
                    <span className="product-card__price-old">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="product-card__price-new">
                      ${discounted.toFixed(2)}
                    </span>
                  </p>
                </article>
              )
            })}
          </div>
        )}

        {hasMore && !isError && (
          <div className="bestsellers__load-more">
            <button
              className="btn btn-outline"
              onClick={() => setLimit((l) => l + PAGE_SIZE)}
              disabled={isFetching}
            >
              {isFetching ? 'Loading…' : 'Load More Products'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

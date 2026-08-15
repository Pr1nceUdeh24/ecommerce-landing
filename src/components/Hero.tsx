import { ArrowRightIcon } from './Icons'
import './Hero.css'

interface HeroCard {
  id: number
  itemCount: number
  title: string
  image: string
  className: string
}

const CARDS: HeroCard[] = [
  {
    id: 1,
    itemCount: 5,
    title: 'FURNITURE',
    image: 'https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=600&q=80',
    className: 'hero__card--large',
  },
  {
    id: 2,
    itemCount: 5,
    title: 'FURNITURE',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
    className: 'hero__card--top-right',
  },
  {
    id: 3,
    itemCount: 5,
    title: 'FURNITURE',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80',
    className: 'hero__card--bottom-left',
  },
  {
    id: 4,
    itemCount: 5,
    title: 'FURNITURE',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=500&q=80',
    className: 'hero__card--bottom-right',
  },
]

export default function Hero() {
  return (
    <section className="hero" aria-label="Featured categories">
      <div className="container hero__grid">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className={`hero__card ${card.className}`}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="hero__card-content">
              <span className="hero__card-count">{card.itemCount} Items</span>
              <h3 className="hero__card-title">{card.title}</h3>
              <a href="#shop" className="hero__card-link">
                Read More <ArrowRightIcon size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

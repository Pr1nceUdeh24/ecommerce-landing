import { BookIcon, LayersIcon, TrendingIcon } from './Icons'
import './Services.css'

const SERVICES = [
  {
    icon: BookIcon,
    title: 'Easy Wins',
    description: 'Get your best looking smile now!',
  },
  {
    icon: LayersIcon,
    title: 'Concrete',
    description: 'Defalcate is most focused in helping you discover your most beautiful smile',
  },
  {
    icon: TrendingIcon,
    title: 'Hack Growth',
    description: 'Overcame any hurdle or any other problem.',
  },
]

export default function Services() {
  return (
    <section className="services section" aria-label="Our services">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Featured Products</p>
          <h2 className="section-title">THE BEST SERVICES</h2>
          <p className="section-subtitle">Problems trying to resolve the conflict between</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <service.icon size={30} className="service-card__icon" />
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
